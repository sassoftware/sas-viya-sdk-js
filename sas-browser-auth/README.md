# Overview

The `sas-auth-browser` package provides an api that allows for single page applications to ensure that a user is authenticated before making api calls. Currently only cookie based authentication is supported.

# Prerequisites

In order to successfully make browser based REST calls to viya endpoints using cookies, you will need to enable CORS, Cross-site cookies and CSRF web security settings on the server for your single page application. For more information please see the SAS® Visual Analytics SDK [Viya setup guide](https://developer.sas.com/sdk/va/docs/guides/viya-setup/).

# Installation

```
npm install @sassoftware/sas-auth-browser
```

# CDN

```html
<script async src="https://cdn.developer.sas.com/packages/sas-auth-browser/latest/dist/index.min.js"></script>
```

## Usage

A simple example that uses sas-auth-browser in the [examples](./examples) directory.

Additionally, before a rest api is made to the viya server, you should first check to see if the cookie session is still valid.

```ts
const sasAuthInstance = sasAuthBrowser.createCookieAuthenticationCredentialInstance({
  endpoint,
});
async function callViyaApi() {
  try {
    await sasAuthInstance.checkAuthenticated();
  } catch {
    // Note: if the user closes the popup an uncaught exception will occur.
    await sasAuthInstance.loginPopup();
  }
  // Start making rest calls!
}
```

# API

## `createCookieAuthenticationCredentialInstance(configuration): CookieAuthenticationCredential`

Creates a new CookieAuthenticationCredential instance. 

## CookieAuthenticationCredential

The CookieAuthenticationCredential class provides functions to check the authentication status of a given endpoint
### `new CookieAuthenticationCredential(configuration)`
* `configuration: object`
  * `endpoint: string` The Viya server you are authenticating against.
  * `guest: boolean` Automatically log in a guest if no user session is found.
    * default: false 
#### Methods

##### `checkAuthenticated(): Promise<void>`

If the server endpoint has been checked, use the cached value. Otherwise check the server endpoint to see if a user is logged in.
Throws: if no user is authenticated.

##### `ensureAuthenticated(): Promise<void>`

Bypasses the cache and checked the endpoint to see if a user is authenticated.
Throws: if no user is authenticated.

##### `loginPopup(): Promise<void>`

Launches a popup window that navigates to the authentication endpoint and allows the user to login.
Throws: when login fails (for example: user closes the popup).

## Examples

Examples for sas-auth-browser are located in the [examples folder](./examples/) of this directory.

# Contributing

sas-auth-browser is not open for external contributions at this time.

# License

This project is licensed under this commercial [license](../license).
