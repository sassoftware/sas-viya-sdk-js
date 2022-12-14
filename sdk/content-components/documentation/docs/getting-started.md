---
id: getting-started
title: Getting started
---

The SAS Content SDK enables you to use the power of SAS Viya in your own websites and HTML applications.
You can embed tiles representing content items with the `<sas-content-area>` custom HTML element.

## Installation

### NPM

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

## SAS Viya setup

## Enable Cross-Origin Resource Sharing

By default, your SAS Viya deployment is not set up to allow access to REST API endpoints from different domains. This is
needed in order to connect to SAS Viya from the domain that is hosting your HTML page. This domain needs to be added to the
`allowOrigins` property in SAS Viya deployment's CORS configuration. This can be done by following the <a target="_blank" href="https://documentation.sas.com/?cdcId=sasadmincdc&cdcVersion=default&docsetId=calauthmdl&docsetTarget=n1iyx40th7exrqn1ej8t12gfhm88.htm#p04ifnaixhf85in1xo7zrr2fgimf">Configure Cross-Origin Resource Sharing</a> documentation. Note that the `allowedOrigins` property does not support using the value `*` to support all origins. You must explicitly add your domain or a list of domains.

## Cross-Site Request Forgery

SAS Viya protects against Cross-Site Request Forgery (CSRF) by blocking requests where the HTTP Referer Header does not match the URI of the requested resource or the `allowedUris` CSRF configuration property. The domain of the site using the SAS Content SDK must be allowed in the CSRF configuration by setting `allowedUris` to a regular expression that matches the domain. For example, the regular expression `.*` will match all domains.  See <a target="_blank" href="https://documentation.sas.com/?cdcId=sasadmincdc&cdcVersion=default&docsetId=calconfigref&docsetTarget=p1fejrlg8b007jn1krvvwzy5q7tn.htm#n0nf0wwa3p7mjhn11926x4k9gl72">SAS Help Center</a> for more information.

## Cross-Site Cookies

The SAS Content SDK requires the use of cookies to handle authentication with the SAS Viya Logon service. Browsers require that the response setting the cookie explicitly enable cross-site cookies by setting `samesite=none` on the response header. This is not the default for SAS Viya, so you must configure it to support the SAS Content SDK. The `sameSite` configuration option in the `sas.commons.web.security.cookies` definition should be set to `None`, and should be applied globally to all services. See <a target="_blank" href="https://documentation.sas.com/?cdcId=sasadmincdc&cdcVersion=default&docsetId=calauthmdl&docsetTarget=n1iyx40th7exrqn1ej8t12gfhm88.htm#p18ctm7c29p2z3n1cahhb0qvwaa6">SAS Help Center</a> for more information.

Note: If you have enabled settings that block cookies in your web browser, then the SAS Content SDK cannot authenticate with SAS Viya. Check your settings to make sure your web browser allows third-party cookies.

### HTTPS
It is also a requirement that SAS Viya be accessed using the HTTPS protocol in order for web browsers to allow cross-site cookies to be set by SAS Viya. This requires that TLS (Transport Layer Security) be enabled on your SAS Viya deployment. See <a target="_blank" href="https://documentation.sas.com/?cdcId=sasadmincdc&cdcVersion=default&docsetId=calencryptmotion&docsetTarget=n1bktkey9qb5z0n14fji0ss0b453.htm#p11136ylabo3k1n1rwctv2xrn8js">SAS Help Center</a> for more information.

## Allow guest access

The SAS Content SDK has the option to connect to SAS Viya using guest authentication. This requires that SAS Viya be set up to enable guest access, and that the guest user has access to the appropriate report content and data. For more information, see 
<a target="_blank" href="https://documentation.sas.com/doc/en/sasadmincdc/default/calauthmdl/n1iyx40th7exrqn1ej8t12gfhm88.htm#n067qoyrgu1yohn19nq4ehy8o0b3">SAS Help Center</a>.

## Finding Folder and Item URIs

You can find the URI for a Folder or content item in SAS Drive in the Information Pane. Select the Folder or item, scroll down in the Information Pane to the More -> URI section and copy the URI.

![Finding folder and item URIs](assets/findUri.png)

## See our examples

<a target="_blank" href="https://github.com/sassoftware/sas-viya-sdk-js/tree/master/sdk/content-components/examples">Our examples</a> demonstrate a few different
ways to start using the SAS Content SDK in your HTML application.
