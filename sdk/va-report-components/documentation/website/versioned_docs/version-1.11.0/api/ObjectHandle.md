---
id: version-1.11.0-ObjectHandle
title: ObjectHandle
original_id: ObjectHandle
---

An `ObjectHandle` is used to perform actions on a single object in an open
report. An object's handle can be obtained using the `getObjectHandle` method
on a [`ReportHandle`](ReportHandle.md).

When a report element is assigned new attribute values or removed from the DOM,
any `ObjectHandles` obtained from that element are invalidated and should be
discarded.

## Methods

### exportData(format: string, options?: ExportDataOptions): Promise\<string>
Exports a file that contains the object's data, and returns a URL to the file. 

`format` defines the format of the data output file.
Supported formats: 
  - `"XLSX"`
  - `"CSV"`
  - `"TSV"`

`options` is an [`ExportDataOptions`](ExportDataOptions.md) bundle that modifies properties of the exported data file. 

If no `options` parameter is supplied, the data will be exported using the default option values. 

### exportPDF(options?: ExportPDFOptions): Promise\<string>

Exports a PDF of the report object and returns a URL to the PDF document. 

`options` is an [`ExportPDFOptions`](ExportPDFOptions.md) that controls the format of the exported PDF document. The option `includedReportObjects` does not apply when exporting a report object.

If no `options` parameter is supplied, the report is exported using the default options values.

### refreshData(): void

Refreshes the data for the report object that is controlled by the
`ObjectHandle`.

### getSelectedData(options?: Object): ReportObjectResultData[]

Returns a user's selection data from the report object. Returns an empty array if the object has no selections.

#### Arguments

`options` is an optional options bundle for customizing the returned data. The following options are supported:

- `formatData` specifies the format of the returned data.
  - `true` returns all formatted data
  - `false` returns all unformatted data
  - `"datesOnly"` `default` returns only SAS date values as formatted and all other data is unformatted

#### Return value

Returns an array of [`ReportObjectResultData`](ReportObjectResultData.md) objects, where each object is associated with one data set.

For user selection data, the ReportObjectResultData property `columns` will never include values for `usage`, `aggregation`, or `format`.

### addEventListener(eventType: string, listener: () => void)

Adds an event listener to the `ObjectHandle` to call the supplied listener when the specified event occurs.

Event types supported:

- `"selectionChanged"` for listening for selection changes in the object.

### removeEventListener(eventType: string, listener: () => void)

Removes the previously registered event listener from the `ObjectHandle`.
