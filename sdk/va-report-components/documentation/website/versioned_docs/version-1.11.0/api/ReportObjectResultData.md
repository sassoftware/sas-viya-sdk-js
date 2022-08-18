---
id: version-1.11.0-ReportObjectResultData
title: ReportObjectResultData
original_id: ReportObjectResultData
---

ReportObjectResultData objects contain the report object's data and additional metadata.

## Properties

### `resultName: string`

The name of the associated query result. This name is needed for communicating any messages from a data-driven content
object back to SAS Visual Analytics.

### `rowCount: number`

The number of rows of data returned. If all the data has been filtered out or no data items are assigned to the object,
then the row count is 0.

### `columns: Object[]`

An array of column objects that let the author determine the type of data and other attributes such as format and label.
Each column object supports the following properties:

- `name: string` A unique name for the column.
- `label: string` A human-readable label for the column.
- `type: string` The data type of the entries in that column. Can be `'number'` or `'string'`.
- `usage?: string` An optional string to describe how the column is used. The special value `'brush'` indicates that this column holds row
  selection data. If a row is selected, then the value in the `'brush'` column has a value greater than `0`.
- `aggregation?: string` An optional string that describes how the values in this column are aggregated together.
- `format?: Object` An optional object describing how the data should be formatted for a column of type `'number'`. It has the
  following properties:
  - `name: string` A name for the format.
  - `width: number` The maximum number of characters for the formatted value.
  - `precision: number` The number of digits after the decimal place.
  - `formatString: string` A string that completely specifies the formatting by combining the `name`, `width`, and
    `precision`.

### `data: (string|number)[]`

The query results are stored in a two-dimensional array. The data is in row-major order. So, `data[0]` is
the first row of data and `data[0][0]` is the first column in the first row. The data in this array is
unformatted for measures. Specifying a format for a measure has no impact on the data returned. Dates and datetimes are
formatted by default, so the data reflects the format that is specified on any date or datetime variable.

### Example

```javascript
{
  resultName: 'dd40',
  rowCount: 3,
  data: [
    ['Finch', 95000.0, 0.42857142857142855],
    ['Jones', 26000.0, 0.0],
    ['Smith', 108000.0, 0.5]
  ],
  columns: [
    {
      name: 'bi184',
      label: 'dealer',
      type: 'string'
    },
    {
      name: 'bi258',
      label: 'sales',
      type: 'number',
      usage: 'quantitative',
      aggregation: 'sum',
      format: {
        name: 'BEST',
        width: 12,
        precision: 0,
        formatString: 'BEST12.'
      }
    },
    {
      name: 'ri1',
      type: 'number',
      usage: 'brush',
      format: {
        name: 'COMMA',
        width: 12,
        precision: 2,
        formatString: 'COMMA12.2'
      }
    }
  ]
};
```
