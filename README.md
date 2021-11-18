# SAS Content SDK

## Overview

The SAS Content SDK is a set of JavaScript APIs and web components that enables accessing content from a SAS Viya deployment in a third-party application or web page. Content Areas displaying tiles representing SAS content can be embedded for selection or launching into SAS solutions. This functionality is delivered as the `content-sdk-components` JavaScript
library.

## Prerequisites

Access to a deployment of SAS Viya 4.0.1 (or later) is necessary in order to use the SDK. For more information about server set up, see <a target="_blank" href="https://developer.sas.com/sdk/va/docs/getting-started#sas-viya-setup">SAS Viya setup</a>.

## Installation

### NPM

The <a target="_blank" href="https://www.npmjs.com/package/@sassoftware/content-sdk">`@sassoftware/content-sdk`</a> library is published to NPM and can be installed by running the `npm install` command as shown below. `content-sdk-components` does not support ES6 imports. Therefore, the contents of the `content-sdk-components/dist` folder must be deployed with your page, and then loaded using a `script` tag.

```bash
# From the root directory of your project
npm install @sassoftware/content-sdk

# Copy the contents of the package to an asset folder for deployment
cp -r ./node_modules/@sassoftware/content-sdk ./sdk-assets
```

The library can then be loaded out of the deployed assets folder using a `script` tag.

```html
<script async src="./sdk-assets/dist/umd/content-sdk-components.js"></script>
```

### CDN (Content Delivery Network)

Accessing the `content-sdk-components` library from a CDN is easy. It does not require installation or
hosting of the library code and assets. There are several public options for accessing NPM content through a CDN, such
as <a target="_blank" href="https://unpkg.com/">UNPKG</a> and <a target="_blank" href="https://www.jsdelivr.com/">jsDelivr</a>. Here is an example of loading the 0.1.0 version of `content-sdk-components` from UNPKG
using an HTML `script` tag. When used in production, the version should be pinned to the full `major.minor.patch` semantic version.

```html
<script async src="https://unpkg.com/@sassoftware/content-sdk@0.1.0/dist/umd/content-sdk-components.js"></script>
```

## Getting Started

For guides and an API reference, see <a target="_blank" href="https://developer.sas.com/sdk/content/">developer.sas.com</a>.

## Examples

Full examples are located in the [examples folder](./examples/) of this repository.

## Contributing

The SAS Content SDK is not open for external contributions.

## License

This project is licensed under this commercial [license](LICENSE.txt).

## Additional Resources

- SAS Content SDK on <a target="_blank" href="https://developer.sas.com/sdk/content/">developer.sas.com</a>
- SAS Viya <a target="_blank" href="https://support.sas.com/en/software/visual-analytics-support.html#documentation">documentation</a>
- SAS Visual Analytics <a target="_blank" href="https://communities.sas.com/t5/SAS-Visual-Analytics/bd-p/sas_va">Community</a>
