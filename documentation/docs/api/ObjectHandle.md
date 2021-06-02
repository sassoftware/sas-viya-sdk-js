---
id: ObjectHandle
title: ObjectHandle
---

An `ObjectHandle` is used to control the state of an open report's object. 

An object handle can be obtained by calling the `getObjectHandle` method on a [`ReportHandle`](ReportHandle.md).

## Methods

### canExportData(): Promise<boolean>
Evaluates whether the object has data that is able to be exported.

### exportData(options?: ExportDataOptions): Promise<string>
Exports a file containing the object's data, returning a URL to the file. 

`options` is an [`ExportDataOptions`](ExportDataOptions.md) that modifies properties of the exported data file. 

If no `options` parameter is supplied, the data will be exported using the default options values. 

### getExportDataInfo(): Promise<{rowCount: number; columnInfo: { name: string; label: string }[];}>
Returns information regarding the number of rows and the names and labels of columns that will be in the exported data file. Useful for specifying which rows or columns are preferred when calling `exportData`. 

### refreshData(): void
Refreshes the object's data to receive the most current data.
