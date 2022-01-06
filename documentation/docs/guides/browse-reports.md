---
id: browse-reports
title: Browse Reports With ContentAreaElement and SASReport
---

The ContentAreaElement component can be used to browse reports, which can then be selected to drive a SASReport component from the VA SDK.

## ContentAreaElement markup

```html
<sas-content-area
  id="ca"
  url="{SAS-VIYA-URL}"
  selection-mode="single"
  initial-selection-index="0"
></sas-content-area>
```

This will create a sas-content-area element in the page which can connect to the Viya installation referenced by the `url`, and will start with the first report selected. The `id` is used to reference the element later from JavaScript.

## ContentAreaElement code

JavaScript code can be used to further fine tune the ContentAreaElement and define which content it should display.

```javascript
const ca = document.getElementById('ca');
```

Get a reference to the sas-content-area element defined in markup.

```javascript
ca.folderIdentifier = {
    type: 'persistentLocation',
    value: 'myFolder'
};
```

This will tell the ContentAreaElement to display the contents of the user's My Folder from the Viya folders service. Other content locations and even specific items can be specified as described in the [ContentAreaElement](../api/ContentAreaElement.md) documentation.

```javascript
ca.contentFilterConfig = {
    queryModeFilter: "eq(contentType,'report')"
};
```

This tells the ContentAreaElement to only show reports.

## SASReport markup

```html
<sas-report
  id="report"
  hideNavigation="auto"
  authenticationType="credentials"
  url="{SAS-VIYA-URL}"
  style="height: 500px;"
></sas-report>
```

This will create a sas-report element in the page which connects to the same Viya installation. When the user first loads the page, they will be prompted to logon to the Viya server. This authentication will be synced between the two SDK components.

## Connecting the ContentAreaElement and SASReport

The ContentAreaElement `onSelect` handler can be used to update the SASReport based on the selected report.

```javascript
ca.onSelect = (value) => {
  let reportUri = '';
  if (value && value.length > 0) {
    // If items are selected, get new reportUri from the selected item
    reportUri = value[0].resource.id;
  }

  report.reportUri = reportUri;
};
```

The `reportUri` can be extracted from the selected [Item](../api/Item.md) as shown. Then, by updating the SASReport's `reportUri`, the sas-report element updates to display the report.