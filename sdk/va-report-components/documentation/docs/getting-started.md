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

## Embed SAS Visual Analytics report content

Use the steps outlined in the [SAS Visual Analytics documentation](https://documentation.sas.com/doc/en/vacdc/v_036/vareports/n12fx3dg213larn13myrl9352g4x.htm) to create [`sas-report`](api/SASReportElement), [`sas-report-page`](api/SASReportPageElement), or [`sas-report-object`](api/SASReportObjectElement) HTML elements that embed your report content using the SDK.

## See our examples

<a target="_blank" href="https://github.com/sassoftware/sas-viya-sdk-js/blob/main/sdk/va-report-components/examples">Our examples</a> demonstrate a few different
ways to start using the SAS Visual Analytics SDK in your HTML application.
