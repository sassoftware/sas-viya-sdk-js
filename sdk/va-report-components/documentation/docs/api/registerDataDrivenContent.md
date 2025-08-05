---
id: registerDataDrivenContent
title: registerDataDrivenContent
---

```
registerDataDrivenContent(options, onMessage): DataDrivenContentHandle
```

This function is used to receive and dispatch messages to a data-driven content object. If the report is not yet
opened then this call will open it and initiate data processing for this data-driven content object.

To find the correct values for `url`, `reportUri`, and `objectName`, see [the Getting Started page](getting-started.md#create-a-custom-html-tag). See [Export SAS Report Packages](guides/export-report-package.md) for more information about the `packageUri` option.

## Arguments

### `options: Object`

Choose options for how to connect to the server. The following properties are supported:

- `objectName: string`: Specify the name of the data-driven content object.
- `url: string`: Specify the URL of the SAS Viya server that hosts the report. This is the full context root, including
  the protocol, optional port, and host.
- `reportUri: string`: Specify the report URI.
- `authenticationType: string`: Choose the method to authenticate requests to the SAS Viya server.
  - `'guest'` automatically signs in to the SAS Viya server as the guest user.
  - `'credentials'` <b>`default`</b> uses SAS Logon to establish an authenticated session.
- `packageUri: string`: Specify the base location of the SAS report package that was exported from SAS Visual Analytics. This can be absolute or relative to the page. `authenticationType`, `url`, and `reportUri` are ignored when you set this property.

### `onMessage: (receivedMessage: ReportObjectResultData) => void`

Define a callback function to handle data changes for this data-driven content object. The `receivedMessage` is a [`ReportObjectResultData`](ReportObjectResultData.md) object and is passed to the `onMessage` callback every time the data-driven content object is updated.

For more information about the properties of the `receivedMessage` object as well as receiving data for data driven content, see the <a target="_blank" href="https://documentation.sas.com/?cdcId=vacdc&cdcVersion=default&docsetId=varef&docsetTarget=n109mqtyl6quiun1mwfgtcn2s68b.htm#n1dce3mqdct26pn12s4yl6s3h39q">SAS Help Center</a>.

## Return value

`registerDataDrivenContent` returns a [`DataDrivenContentHandle`](api/DataDrivenContentHandle.md) which can be used to dispatch
messages to the data-driven content object.
