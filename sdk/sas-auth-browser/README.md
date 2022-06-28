# SAS Authentication Library for the Browser

The `sas-auth-browser` package provides an API that allows for an application or web page to ensure that a user is authenticated before making SAS API calls or using SAS web components. Currently only cookie-based authentication is supported.

## Prerequisites

In order to successfully make browser based REST calls to SAS Viya endpoints using cookies, you will need to enable CORS, Cross-site cookies and CSRF web security settings. For more information, see the SAS® Visual Analytics SDK [SAS Viya setup guide](https://developer.sas.com/sdk/va/docs/guides/viya-setup/).

## Installation

```
npm install @sassoftware/sas-auth-browser
```

## CDN

```html
<script
  async
  src="https://cdn.developer.sas.com/packages/sas-auth-browser/latest/dist/index.min.js"
></script>
```

### Usage

A simple example that uses sas-auth-browser is provided in the [examples](./examples) directory.

Additionally, before a rest API call is made to the SAS Viya server, you should first check to see if the cookie session is still valid.

```ts
const sasAuthInstance = sasAuthBrowser.createCookieAuthenticationCredential({
  url,
});
async function callViyaApi() {
  try {
    await sasAuthInstance.checkAuthenticated();
  } catch {
    // Note: If the user closes the popup an uncaught exception will occur.
    await sasAuthInstance.loginPopup();
  }
  // Start making rest calls!
}
```

## API

#### `sasAuthBrowser.createCookieAuthenticationCredential(configuration): CookieAuthenticationCredential`

Creates a new CookieAuthenticationCredential instance. This function is used when importing sas-basic-auth globally.

See: [CDN](#CDN)

- `configuration: object`
  - `url: string` The URL of the SAS Viya server that you are authenticating with.
  - `guest: boolean` Automatically log in as a guest, if no user session is found.
    - default value: `false`

### CookieAuthenticationCredential

The CookieAuthenticationCredential class provides functions to check the authentication status of a given endpoint

#### `new CookieAuthenticationCredential(configuration)`

- `configuration: object`
  - `url: string` The URL of the SAS Viya server that you are authenticating with.
  - `guest: boolean` Automatically log in as a guest, if no user session is found.
    - default value: `false`

#### Methods

##### `checkAuthenticated(): Promise<void>`

Checks to see if any user is authenticated.

rejects: If no user is authenticated.

##### `loginPopup(): Promise<void>`

Launches a popup window that navigates to the authentication endpoint and allows the user to login.

rejects: When login fails (for example: user closes the popup).

##### `invalidateCache()`

If `checkAuthenticated` has already been called, a cached value may be returned the next time. This is done to reduce the number of potential service calls needed when making multiple API calls. Calling `invalidateCache` will force `checkAuthenticated` to re-validate the next time it is called. **This is not needed for most use cases.**

## Contributing

sas-auth-browser is not open for external contributions at this time.

## License

This package is licensed under this commercial [license](LICENSE).
