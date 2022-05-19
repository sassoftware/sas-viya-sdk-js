# SAS Content SDK

## Overview

The SAS Content SDK enables you to use the power of SAS Viya in your own websites and HTML applications.
You can embed tiles representing content items with the `<sas-content-area>` custom HTML element.

## Prerequisites

Access to a deployment of SAS Viya 4.0.1 (or later) is necessary in order to use the SDK. For more information about server set up, see <a target="_blank" href="https://developer.sas.com/sdk/content/docs/getting-started#sas-viya-setup">SAS Viya setup</a>.

## Installation

The <a target="_blank" href="https://www.npmjs.com/package/@sassoftware/content-sdk">`@sassoftware/content-sdk`</a> library is published to NPM and can be installed by running the `npm install` command as shown below. `content-sdk` does not support ES6 imports. Therefore, the contents of the `content-sdk/dist` folder must be deployed with your page, and then loaded using a `script` tag.

```bash
# From the root directory of your project
npm install @sassoftware/content-sdk

# Copy the contents of the package to an asset folder for deployment
cp -r ./node_modules/@sassoftware/content-sdk ./sdk-assets/content
```

The library can then be loaded out of the deployed assets folder using a `script` tag.

```html
<script async src="./sdk-assets/content/dist/umd/content-sdk-components.js"></script>
```

### CDN (Content Delivery Network)

Accessing the `content-sdk` library from a CDN is easy. It does not require installation or
hosting of the library code and assets. Here is an example of loading the latest version of `content-sdk` from the CDN
using an HTML `script` tag.

```html
<script async src="https://cdn.developer.sas.com/packages/content-sdk/latest/dist/umd/content-sdk-components.js"></script>
```
When the library is used in production, consider pinning it to an explicit version. This is done with a URL like `https://cdn.developer.sas.com/packages/content-sdk/${VERSION}/dist/umd/content-sdk-components.js`, where `${VERSION}` is the full `major.minor.patch` semantic version.

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
