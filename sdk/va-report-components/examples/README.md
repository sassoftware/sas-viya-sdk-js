# SAS Visual Analytics SDK Examples

**Note: Replace placeholders with valid values in these examples before running them**

- Report URI should take this form: `'/reports/reports/789d13d3-789d-4fa3-9fea-123e321f1ea1'`

- Object name should take this form: `'ve123'`

## Examples

- [SASReportElement](./SASReportElement.html) (<a target="_blank" href="https://developer.sas.com/sdk/js/va-report-components/api/SASReportElement">docs</a>)

Uses the `<sas-report>` custom element to display full reports. Styles report viewer in CSS with the `sas-report`
selector.

- [SASReportElementJS](./SASReportElementJS.html)
  (<a target="_blank" href="https://developer.sas.com/sdk/js/va-report-components/api/SASReportElement">docs</a>)

Uses JavaScript `SASReportElement` to display a report on SDK load. Styles report with inline styles.

- [SASReportObjectElement](./SASReportObjectElement.html)
  (<a target="_blank" href="https://developer.sas.com/sdk/js/va-report-components/api/SASReportObjectElement">docs</a>)

Uses the `<sas-report-object>` custom element to display a report object. Styles report object with CSS classes.

- [registerDataDrivenContent](./registerDataDrivenContent.html) (<a target="_blank" href="https://developer.sas.com/sdk/js/va-report-components/guides/data-driven-content">docs</a>)

Uses `registerDataDrivenContent` and `DataDrivenContentHandle` to connect to a data-driven content report object and harness the data from SAS Visual Analytics to augment the html page.

- [connectToServer](./connectToServer.html) (<a target="_blank" href="https://developer.sas.com/sdk/js/va-report-components/api/connectToServer">docs</a>)

Uses `connectToServer` to establish a connection to a SAS Viya server before adding reports to the page.

- [getSelectedData](./getSelectedData.html) (<a target="_blank" href="https://developer.sas.com/sdk/js/va-report-components/api/ObjectHandle">docs</a>)

Uses `getSelectedData` and `addEventListener` from `ObjectHandle` to retrieve user selection data from a report object, then displays the data in a table. 
