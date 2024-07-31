---
id: getting-started
title: Getting started
---

The SAS Visual Analytics SDK enables you to use the power of SAS Visual Analytics in your own websites and HTML applications.
You can embed entire reports with the `<sas-report>` custom HTML element, embed a single object with the
`<sas-report-object>` element, or connect to your reports with our JavaScript API.

## Installation

### NPM

The <a target="_blank" href="https://www.npmjs.com/package/@sassoftware/va-report-components">`@sassoftware/va-report-components`</a> library is published to NPM and can be installed by running the `npm install` command as shown below. `va-report-components` can then be loaded with either a `script` tag or with an ES module import.

```bash
# From the root directory of your project
npm install @sassoftware/va-report-components
```

When using a `script` tag, the contents of the `va-report-components/dist` folder must be deployed with your page.

```bash
# Copy the contents of the package to an asset folder for deployment
cp -r ./node_modules/@sassoftware/va-report-components ./sdk-assets
```

The library can then be loaded out of the deployed assets folder.

```html
<script async src="./sdk-assets/dist/umd/va-report-components.js"></script>
```

If your site is built using a code bundler, it might be more convenient to load the library through ES module imports. See the [ES module guide](guides/esm.md) for more details.

```js
import "@sassoftware/va-report-components"
```

### CDN (Content Delivery Network)

Accessing the `va-report-components` library from the SAS Developer CDN is easy. It does not require installation or
hosting of the library code and assets. Here is an example of loading the latest version of `va-report-components` from the CDN using an HTML `script` tag.

```html
<script async src="https://cdn.developer.sas.com/packages/va-report-components/latest/dist/umd/va-report-components.js"></script>
```

When the library is used in production, consider pinning it to an explicit version. This is done with a URL like `https://cdn.developer.sas.com/packages/va-report-components/${VERSION}/dist/umd/va-report-components.js`, where `${VERSION}` is the full `major.minor.patch` semantic version.

## SAS Viya setup

The SAS Visual Analytics SDK requires either connecting directly to SAS Viya or exporting a SAS Report Package.  Server setup requirements for connecting to SAS Viya are covered in the [SAS Viya Setup Guide](guides/viya-setup.md).

## Create a custom HTML tag

To build the custom HTML tag that you will embed in your web page:

1. Open a report in SAS Visual Analytics.
1. Open the menu in the report toolbar (which is displayed in the image below) or right-click an individual object, and then select Copy Link. The Copy Link window is displayed.
1. If you are using guest access, expand the Options heading and select the Guest access check box.
1. Click Copy Link.

![Report Overflow Menu](assets/report-overflow-menu.png)

Once the report link or object link has been copied to your clipboard, paste it below, and the output will show a custom HTML
tag that is ready to use.

<link rel="stylesheet" href="/sdk/va/css/copy-link-translator.css">
<form>
  <textarea id="vdk-slt-input"
    rows="5"
    style="resize: none; width: 100%;"
    placeholder="Paste the link from SAS Visual Analytics here."
    aria-label="Paste the link from SAS Visual Analytics here."
  ></textarea>
  <pre><code id="vdk-slt-output" class="hljs" data-hide="true"></code></pre>
</form>
<script type="module" src="/sdk/va/js/copy-link-translator.js"></script>

For a complete list of options, see the documentation for [`SASReportElement`](api/SASReportElement.md) and
[`SASReportObjectElement`](api/SASReportObjectElement.md)

## See our examples

<a target="_blank" href="https://github.com/sassoftware/sas-viya-sdk-js/blob/main/sdk/va-report-components/examples">Our examples</a> demonstrate a few different
ways to start using the SAS Visual Analytics SDK in your HTML application.
