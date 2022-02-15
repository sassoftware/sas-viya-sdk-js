---
id: browse-reports
title: Browse Reports With the Content SDK and SASReport
---

Content SDK components such as the [ContentAreaElement](api/ContentAreaElement.md), [ContentTreeElement](api/ContentTreeElement.md), and [ContentBreadcrumbElement](api/ContentBreadcrumbElement.md) can be used to browse reports, which can then be selected to drive a SASReport component from the VA SDK.

## ContentGroupElement markup

Connected behavior such as navigation and selection is handled automatically by wrapping components in a [ContentGroupElement](api/ContentGroupElement.md). This enables components to be placed flexibly wherever needed on the page, and to get grouped behavior without manualy wiring them up.

```html
<sas-content-group
  id="cg"
>
  <!-- Content SDK components and other page content can be mixed and laid out as needed -->
</sas-content-group>
```

This will create a sas-content-group element which enables any nested Content SDK components to work together. The `id` is used to reference the element later from JavaScript.

## ContentGroupElement code

JavaScript code can be used to set the initial values for the ContentGroupElement and any components within it.

```javascript
const cg = document.getElementById('cg');
```

Get a reference to the sas-content-area element defined in markup.

```javascript
const myFolderIdentifier = {
  type: "persistentLocation",
  value: "myFolder"
};
const favoritesIdentifier = {
  type: "persistentLocation",
  value: "favorites",
  preventExpansion: true
};
const sasContentIdentifier = {
  type: "persistentLocation",
  value: "root"
};
const recycleBinIdentifier = {
  type: "persistentLocation",
  value: "trash",
  preventExpansion: true
};
```

Define the [locations](api/LocationIdentifier.md) that should be shown as roots in the sas-content-tree. One of them will also be the starting location. The `preventExpansion` property can be used for any folders that should not be expandable.

```javascript
cg.initialNavigationValue = {
  // The initial location to be displayed by components such as sas-content-area
  location: myFolderIdentifier,
  // The initial path to the component, used by components such as sas-content-tree and sas-content-breadcrumb
  locationContextPath: [myFolderIdentifier],
  // The locations to be used as roots for components such as sas-content-tree.
  locations: [myFolderIdentifier, favoritesIdentifier, sasContentIdentifier, recycleBinIdentifier]
};

cg.initialFilterValue = {
  queryModeFilter: "or(eq(contentType,'report'),eq(contentType,'folder'))"
};
```

Setting the `initialNavigationValue` determines what content is initially displayed, and the `initialFilterValue` is set to only display reports and folders.

## ContentTreeElement markup

```html
<sas-content-tree
  url="{SAS-VIYA-URL}"
></sas-content-tree>
```

This will create a sas-content-tree element in the page which can connect to the Viya installation referenced by the `url`. The root locations, and initially selected folder are determined by the `initialNavigationValue` of the sas-content-group.

## ContentBreadcrumbElement markup

```html
<sas-content-breadcrumb
  url="{SAS-VIYA-URL}"
></sas-content-breadcrumb>
```

This will create a sas-content-breadcrumb element in the page which can connect to the Viya installation referenced by the `url`. The intially displayed location is determined by the `initialNavigationValue` of the sas-content-group.

## ContentAreaElement markup

```html
<sas-content-area
  id="ca"
  url="{SAS-VIYA-URL}"
  selection-mode="single"
  initial-selection-index="0"
></sas-content-area>
```

This will create a sas-content-area element in the page which can connect to the Viya installation referenced by the `url`, and will start with the first item selected. This can be useful in this case to ensure that a report is selected and displayed without the user having to select it. The selection mode of `single` means only one item can be selected at a time. The `id` is used to reference the element later from JavaScript. The initially displayed location is determined by the `initialNavigationValue` of the sas-content-group.

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

## Connecting the Content SDK and SASReport

The ContentAreaElement `onSelect` handler can be used to update the SASReport based on the selected report.

```javascript
ca.onSelect = (value) => {
  let reportUri = '';
  if (value && value.length > 0 && value[0]?.resource?.type?.sasType === 'report') {
    // If a report is selected, get new reportUri from the selected item
    reportUri = value[0].resource.id;
  }

  report.reportUri = reportUri;
};
```

The `reportUri` can be extracted from the selected [Item](../api/Item.md) as shown. Then, by updating the SASReport's `reportUri`, the sas-report element updates to display the report.