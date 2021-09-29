---
id: ExportDataOptions
title: ExportDataOptions
---

ExportDataOptions provides options for customizing the properties of exported report data. If no option is specified, then the default value is used.

## Options

### `columns: string[]`
Determines which data columns should be exported by specifying their labels.

### `startRow: number` 
Determines which row the data should begin with.

default value: `0`

### `endRow: number` 
Determines which row the data should end with.

default value: `<index of last row of data>`

### `formattedData: boolean` 
Specifies whether the data is formatted.

default value: `true`

### `detailedData: boolean` 
Specifies whether the data is detailed.

default value: `false`
