# SAS Content SDK

The SAS Content SDK enables you to use the power of SAS Viya in your own websites and HTML applications.
You can embed tiles representing content items with the `<sas-content-area>` custom HTML element.

## Prerequisites

Access to a deployment of SAS Viya 4.0.1 (or later) is necessary in order to use the SDK. For more information about server set up, see <a target="_blank" href="https://developer.sas.com/sdk/content/docs/getting-started#sas-viya-setup">SAS Viya setup</a>.

## Installation

The <a target="_blank" href="https://www.npmjs.com/package/@sassoftware/content-components">`@sassoftware/content-components`</a> library is published to NPM and can be installed by running the `npm install` command as shown below. `content-components` does not support ES6 imports. Therefore, the contents of the `content-components/dist` folder must be deployed with your page, and then loaded using a `script` tag.

```bash
# From the root directory of your project
npm install @sassoftware/content-components

# Copy the contents of the package to an asset folder for deployment
cp -r ./node_modules/@sassoftware/content-components ./sdk-assets/content
```

The library can then be loaded out of the deployed assets folder using a `script` tag.

```html
<script async src="./sdk-assets/content/dist/umd/content-sdk-components.js"></script>
```

### CDN (Content Delivery Network)

Accessing the `content-components` library from the SAS Developer CDN is easy. It does not require installation or
hosting of the library code and assets. Here is an example of loading the latest version of `content-components` from the CDN
using an HTML `script` tag.

```html
<script async src="https://cdn.developer.sas.com/packages/content-components/latest/dist/umd/content-sdk-components.js"></script>
```
When the library is used in production, consider pinning it to an explicit version. This is done with a URL like `https://cdn.developer.sas.com/packages/content-components/${VERSION}/dist/umd/content-sdk-components.js`, where `${VERSION}` is the full `major.minor.patch` semantic version.

## Getting Started

For guides and an API reference, see <a target="_blank" href="https://developer.sas.com/sdk/content/">developer.sas.com</a>.

## Examples

Full examples are located in the [examples folder](./examples/) of this repository.

## Contributing

The SAS Content SDK is not open for external contributions.

## License

This package is licensed under this commercial [license](LICENSE).

## Additional Resources

- <a target="_blank" href="https://developer.sas.com/sdk/content/">SAS Content SDK</a> on developer.sas.com
- <a target="_blank" href="https://support.sas.com/en/software/visual-analytics-support.html#documentation">SAS Visual Analytics documentation</a>
- <a target="_blank" href="https://communities.sas.com/t5/SAS-Visual-Analytics/bd-p/sas_va">SAS Visual Analytics Community</a>
