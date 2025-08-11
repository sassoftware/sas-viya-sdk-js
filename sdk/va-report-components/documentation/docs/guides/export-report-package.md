---
id: export-report-package
title: Export SAS Report Packages
---

The SAS Visual Analytics SDK can be used in two fundamentally different ways. In the most basic setup you are connecting directly to a SAS Viya deployment, delivering reports and data to your web page.  But it can also be used to display report content that has been exported from SAS Visual Analytics and hosted on your own web server. Exporting a report package enables you to use the SAS Visual Analytics SDK while completely disconnected from SAS Viya. The benefit is that your webpage traffic can scale independently from your SAS Viya deployment. This also enables you to skip any [SAS Viya configuration setup](guides/viya-setup.md) necessary for enabling cross-site access from the SAS Visual Analytics SDK.

## How do I export a SAS Report Package?

There are two methods for exporting entire reports or subsets of reports (which enable you to embed individual objects or pages) as a SAS report package. The first method is to use the export feature in SAS Visual Analytics. which enables you to export a report package as a ZIP file. For more information, see <a target="_blank" href="https://documentation.sas.com/?cdcId=vacdc&cdcVersion=default&docsetId=vareports&docsetTarget=p0log1ce8qcj4cn15k0oby258pdb.htm">Exporting SAS Report Packages</a>. This method works well for one-time use and for learning about the supported export features. However, if your data changes regularly, then you might want to use the second method of automating the creation of the report package. You can do this using the reports plug-in to the SAS Viya CLI. For more information, see <a target="_blank" href="https://documentation.sas.com/?cdcId=sasadmincdc&cdcVersion=default&docsetId=calcli&docsetTarget=n09r8rzfe0xt6gn1krnt75beevgk.htm">CLI Examples: Reports</a>.

## What do I do with the SAS Report Package?

The exported report package includes a sample HTML page (`index.html`) that demonstrates the mechanics of how to use the SAS Visual Analytics SDK to render the report content. A second HTML page (`packageIndex.html`) is included to give you detailed information about all of the exported report objects and code snippets and to help you incorporate them into your own page. In order to see these HTML pages, deploy all of the report package contents to a web server. Then, navigate a web browser to the URL of the `index.html` or `packageIndex.html` file.

When you create a new web page or embed report content into an existing web page, it is common to co-locate the report package content with other assets for the web page. You might want to have a `reportAssets` folder that is deployed along with your HTML file. However, it is possible to put the report package content anywhere that is accessible through a URL.

Once you extract the report package contents and you know where they are deployed, you can reference the content using the `packageUri` property on [`SASReportElement`](api/SASReportElement.md#packageuri-string), [`SASReportPageElement`](api/SASReportPageElement.md#packageuri-string), or [`SASReportObjectElement`](api/SASReportObjectElement.md#packageuri-string). `packageUri` should point to the base location of the package contents, either with an absolute or relative URL. 

```html
<sas-report-object
  packageUri="./reportAssets"
  objectName="ve27"
></sas-report-object>
```
As noted in the `packageUri` API documentation, this property takes the place of `url`, `reportUri`, and `authenticationType` that are used when connecting directly to SAS Viya.

## Why do my report fonts look different from SAS Visual Analytics?

When you use the SAS Visual Analytics SDK to connect directly to SAS Viya, the fonts are loaded from that SAS Viya deployment. The report content is rendered using the same font that was specified when the report was designed in SAS Visual Analytics. The SAS Visual Analytics SDK redistributes fonts that are owned by SAS. For example, if you use a report theme that uses the default Anova font family, then the Anova fonts automatically appear in your exported report. However, if you use a custom font, or if you have an older report that still uses the Avenir Next font family, licensing limitations prevent those fonts from being redistributed when you export a report package. When you have a report package with custom fonts or the Avenir Next font, extra steps are required to ensure that the report content uses the fonts that you intended. These steps are outlined below.

### Define the font face in CSS

#### Using SAS Viya fonts

Within the exported report package, a file named `viyafonts.css` references fonts from your SAS Viya deployment for use in your page. Including a link to this stylesheet in your HTML page enables it to access the fonts that were used to design the report.

To use these fonts, the SAS Viya deployment must be accessible and have CORS enabled. For more information on enabling CORS, see [`Enable Cross-Origin Resource Sharing`](viya-setup#enable-cross-origin-resource-sharing).

```html
<link rel='stylesheet' type='text/css' href='css/viyafonts.css' />
```

#### Using your custom fonts

Use the [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) in your CSS to define the font (or fonts) that are used by the report content. This means that you must know the `font-family` name and have access to the font files.

```html
<style>
  @font-face {
    font-family: 'MyFont';
    src: url('/fonts/MyFont.woff2') format('woff2'),
         url('/fonts/MyFont.woff') format('woff');
  }
</style>
```

It might be necessary for you to use a font that is not a standard font available in SAS Visual Analytics. To do this, you must first load the font onto SAS Viya by utilizing the SAS Viya CLI fonts plug-in, as shown in <a target="_blank" href="https://documentation.sas.com/?cdcId=sasadmincdc&cdcVersion=default&docsetId=calfonts&docsetTarget=p0z64ee1ufe5vpn1pibg7pzhsgrb.htm">Fonts: CLI Examples</a>. You can then create the report content using that font.

## Are all features and APIs supported?

As mentioned above, `url`, `reportUri`, and `authenticationType` are ignored when you set `packageUri`. The following APIs and features are not supported for report packages:
* [`exportPDF`](api/ReportHandle.md#exportpdfoptions-exportpdfoptions-promise-string)
* [`exportData`](api/ObjectHandle.md#exportdataformat-string-options-exportdataoptions-promise-string)

Some objects and advanced object functionality are not supported for report packages. Those details are outlined in <a target="_blank" href="https://documentation.sas.com/?cdcId=vacdc&cdcVersion=default&docsetId=varef&docsetTarget=n1tbiwkzea35nin1wbvjdcregjcs.htm#p0bfdy2hrkw4lzn1glyhtfu02t2h">SAS Report Package Reference</a> and further clarifications can be found at <a target="_blank" href="https://documentation.sas.com/?cdcId=vacdc&cdcVersion=default&docsetId=varef&docsetTarget=n1tbiwkzea35nin1wbvjdcregjcs.htm#p080fwv713hlzfn1cjvls3mfg6u0">SAS Report Packages: Frequently Asked Questions</a>.
