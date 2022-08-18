---
id: version-1.11.0-SASReportPageElement
title: SASReportPageElement
original_id: SASReportPageElement
---

`SASReportPageElement` is a custom HTML element that renders a report page. This element extends <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">`HTMLElement`</a>.

To find the correct values for `url`, `reportUri`, and `pageName`, see [the Getting Started page](getting-started.md#create-a-custom-html-tag).

## Custom Element Tag

```html
<sas-report-page
  authenticationType="guest"
  url="http://my-viya-server.com"
  reportUri="/reports/reports/c3c6befb-3981-4c9e-b011-7dc11dec5e37"
  pageName="vi20"
></sas-report-page>
```

## Attributes

### `authenticationType: string`

Choose the method to authenticate requests to the SAS Viya server.

- `'guest'` automatically signs in to the SAS Viya server as the guest user.
- `'credentials'` uses SAS Logon to establish an authenticated session.

default value: `'credentials'`

### `url: string`

Specify the URL of the SAS Viya server that hosts the report. This is the full context root, including the protocol,
optional port, and host.

### `reportUri: string`

Specify the report URI.

### `packageUri: string`

Specify the base location of the SAS report package that was exported from SAS Visual Analytics. This can be absolute or relative to the page. `authenticationType`, `url`, and `reportUri` are ignored when you set this property.

See [Export Report Package](guides/export-report-package.md)

### `pageName: string`

Specify the name of the report page that you want to display. Either `pageName` or `pageIndex` can be used, but not both.

### `pageIndex: number`

Specify the index of the report page that you want to display. `0` is the first page. Either `pageName` or `pageIndex` can be used, but not both.

### `restrictViewportGestures: boolean`

When `true`, report objects that support zooming require a modifier key be used in addition to the scroll wheel. Enable restrictViewportGestures when embedding elements in a layout that causes overflow. This reserves the scroll-wheel action for page scrolling.

default value: `true`

### `reportContextKey: string`

`reportContextKey` controls the sharing of report contexts between different `SASReportObjectElement` and `SASReportPageElement` elements that originate from the same report. A shared report context allows for report actions, like filtering and linked selections, to occur between objects. Objects that are a report context also have the same shared instance of a `ReportHandle` and all report parameters are shared. In contrast, unique report contexts do not allow for actions across elements and result in a unique `Report Handle`. Unique report contexts also allow for multiple instances of the same report object to be shown at one time, which is not possible when using a shared report context. By default, `SASReportPageElement`s use their own unique report context. Setting identical `reportContextKey` values on elements from the same report will result in use of a shared report context. Doing this can give performance benefits when multiple `SASReportPageElement`s from the same report are used.

default value: `undefined`<br>
default behavior: use a unique report context per `SASReportPageElement`

<span style='color:red'>DEPRECATED</span>: This default behavior is deprecated and will change in a future release of va-report-components. The new default behavior will share report contexts with other `SASReportPageElement` and `SASReportObjectElement` elements from the same report.

## Properties

### `menuItemProvider: MenuItemProvider`

A [`MenuItemProvider`](MenuItemProvider.md) function that generates custom menu content for this element.

## Methods

### `getReportHandle(): Promise<ReportHandle>`

Get a [ReportHandle](ReportHandle.md) for controlling the state of the
current report.

If called before the element is added to the DOM, the promise will resolve
after the page begins to load.

A [ReportHandle](ReportHandle.md) are invalidated when attributes on the
`SASReportPageElement` are changed and when the element is removed from the
DOM. To obtain another [ReportHandle](ReportHandle.md), discard the previous
result and call `getReportHandle` again.

[ReportHandles](ReportHandle.md) from `SASReportPageElements` are not shared
with other elements.
