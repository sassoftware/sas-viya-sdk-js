---
id: ExportReportOptions
title: ExportReportOptions
---

ExportReportOptions provides options for customizing the properties of an exported report. If no option is specified, then the default value is used.

## Options

### `selectedColumns: { name: string; label: string }[]`
Specifies which columns should be included in the file. `[]` returns all columns.

default value: `[]`

### `startRow: number` 
Determines which row the data should begin with.

default value: `1`

### `endRow: number` 
Determines which row the data should end with.

default value: `<index of last row of data>`

### `formattedData: boolean` 
Specifies whether the data is formatted.

default value: `true`

### `detailedData: boolean` 
Specifies whether the data is detailed.

default value: `false`

### `exportType: "CSV" | "TSV" | "XLSX"` 
Specifies the file type for the export.

default value: `XLSX`