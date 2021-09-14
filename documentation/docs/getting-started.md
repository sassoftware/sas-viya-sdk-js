---
id: getting-started
title: Getting started
---

The SAS Content SDK enables you to use the power of SAS Viya in your own websites and HTML applications.
You can embed tiles representing content items with the `<sas-content-area>` custom HTML element.

## Installation

### NPM

The <a target="_blank" href="https://www.npmjs.com/package/@sassoftware/content-sdk">`@sassoftware/content-sdk`</a> library is published to NPM and can be installed by running the `npm install` command as shown below. `content-sdk` does not support ES6 imports. Therefore, the contents of the `content-sdk/dist` folder must be deployed with your page, and then loaded using a `script` tag.

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

Accessing the `content-sdk` library from a CDN is easy. It does not require installation or
hosting of the library code and assets. There are several public options for accessing NPM content through a CDN, such
as <a target="_blank" href="https://unpkg.com/">UNPKG</a> and <a target="_blank" href="https://www.jsdelivr.com/">jsDelivr</a>. Here is an example of loading the 0.1.0 version of `content-sdk` from UNPKG
using an HTML `script` tag. When used in production, the version should be pinned to the full `major.minor.patch` semantic version.

```html
<script async src="https://unpkg.com/@sassoftware/content-sdk@0.1.0/dist/umd/content-sdk-components.js"></script>
```

## SAS Viya setup

### Enable Cross-Origin Resource Sharing

By default, your SAS Viya deployment is not set up to allow access to REST API endpoints from different domains. This is
needed in order to connect to SAS Viya from the domain that is hosting your HTML page. This domain needs to be added to the
`allowOrigins` property in SAS Viya deployment's CORS configuration. See
<a target="_blank" href="https://developer.sas.com/reference/cors/">developer.sas.com</a> and
<a target="_blank" href="https://documentation.sas.com/?cdcId=calcdc&cdcVersion=3.5&docsetId=calauthmdl&docsetTarget=n1pkgyrtk8bp4zn1d0v1ln4869og.htm#p04ifnaixhf85in1xo7zrr2fgimf">SAS Help Center</a> for more information.

### Cross-Site Request Forgery

SAS Viya servers protect against Cross-Site Request Forgery (CSRF) by blocking requests where the HTTP Referer Header does not match the URI of the requested resource or a URI whitelist. The domain of the site using the SAS Content SDK must be whitelisted in the CSRF configuration.  See <a target="_blank" href="https://documentation.sas.com/?cdcId=calcdc&cdcVersion=3.5&docsetId=calconfig&docsetTarget=n08030sasconfiguration0admin.htm#n0nf0wwa3p7mjhn11926x4k9gl72">SAS Help Center</a> for more information.

### Cross-Site Cookies

The SAS Content SDK requires the use of cookies to handle authentication with the SAS Viya Logon service. Browsers require that the response setting the cookie explicitly enable cross-site cookies by setting `samesite=none` on the response header. This is not the default for SAS Viya and must be configured in order to support the SDK. The `sameSite` configuration option in the `sas.commons.web.security.cookies` definition should be set to `None`, and should be applied globally to all services. See <a target="_blank" href="https://documentation.sas.com/?cdcId=calcdc&cdcVersion=3.5&docsetId=calconfig&docsetTarget=n08030sasconfiguration0admin.htm#p18obwsyh87dc7n18hvyxa1t8zjs">SAS Help Center</a> for more information.

#### HTTPS
It is also a requirement that SAS Viya be accessed using the HTTPS protocol in order for web browsers to allow cross-site cookies to be set by SAS Viya.  This requires that TLS (Transport Layer Security) be enabled on your SAS Viya deployment. See <a target="_blank" href="https://documentation.sas.com/?cdcId=calcdc&cdcVersion=3.5&docsetId=viyaov&docsetTarget=p0i3vcgjpciz45n1of1v4vkffwbn.htm&locale=en#p1xrvoju01719fn1trks0xkasjk5">SAS Help Center</a> for more information.

### Allow guest access

The SAS Content SDK has the option to connect to the SAS Viya server using guest authentication. This requires that the SAS Viya system be
set up to enable guest access, and that the guest user has access to the appropriate report content and data. For more information, see 
<a target="_blank" href="https://documentation.sas.com/?cdcId=calcdc&cdcVersion=3.5&docsetId=calauthmdl&docsetTarget=n067qoyrgu1yohn19nq4ehy8o0b3.htm#p04ifnaixhf85in1xo7zrr2fgimf">SAS Help Center</a>.

## See our examples

<a target="_blank" href="https://github.com/sassoftware/content-sdk/tree/master/examples">Our examples</a> demonstrate a few different
ways to start using the SAS Content SDK in your HTML application.
