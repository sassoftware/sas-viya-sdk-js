---
id: version-1.10.0-faq
title: Frequently Asked Questions
sidebar_label: FAQ
original_id: faq
---

## What are the prerequisites for using the SAS Visual Analytics SDK?

Use of the SAS Visual Analytics SDK requires access to SAS Visual Analytics version 8.4 or later. Additional server configuration is also required. These requirements are covered in [Getting Started](getting-started.md#sas-viya-setup).

## What browsers are supported?

The SAS Visual Analytics SDK supports:

- Chrome 85+
- Firefox 78+
- Safari 13+
- Edge 80+

## Is there a license to use the SAS Visual Analytics SDK?

The SAS Visual Analytics SDK is released under a <a target="_blank" href="https://github.com/sassoftware/sas-viya-sdk-js/blob/master/sdk/va-report-components/LICENSE">commercial license</a>.

## How is authentication handled by the SAS Visual Analytics SDK?

The SAS Visual Analytics SDK can either connect as guest or as a credentialed user, controlled by the `authenticationType` attribute on [SASReportElement](api/SASReportElement.md#authenticationtype-string) and [SASReportObjectElement](api/SASReportObjectElement.md#authenticationtype-string).

### Guest
Connecting as guest requires that the SAS Viya server be setup to [allow for guest access](getting-started.md#allow-guest-access). The authentication happens automatically, without any intervention by the user.

### Credentials
Connecting using credentials allows the user to logon to the SAS Viya server with their own credentials. This is done by using the SAS Logon service to establish an authenticated session, and is identical to what is done for authentication when visiting SAS Visual Analytics directly on the SAS Viya server. This allows the SAS Visual Analytics SDK to take advantage of all supported SAS Logon configurations, including single sign-On.

If the user is already authenticated, then the server connection will be automatically established. If not, then the [SASReportElement](api/SASReportElement.md) or [SASReportObjectElement](api/SASReportObjectElement.md) will present a button for the user to initiate logon. This launches the SAS Logon page in a new browser window which is then closed after logon has succeeded.

## How do I resolve this error message?

### "The server cannot be reached."

If the SAS Visual Analytics SDK is unable to reach the SAS Viya server, try these steps to resolve the problem:

1. Verify the SAS Viya server URL. This should be the full context root for the SAS Viya deployment, including the protocol, optional
   port, and host.
1. Disable your ad-blocker
1. [Enable cross-origin resource sharing on your SAS Viya deployment.](getting-started.md#enable-cross-origin-resource-sharing)

### "Unable to log on to the server."

If the SAS Visual Analytics SDK can reach the SAS Viya server but is unable to log on, try these steps to resolve the
problem:

1. [Enable cross-origin resource sharing on your SAS Viya deployment.](getting-started.md#enable-cross-origin-resource-sharing)
1. If using `authenticationType="guest"`, ensure that the SAS Viya server you are connecting to is [configured for guest access](getting-started.md#allow-guest-access).
1. If using `authenticationType="credentials"`, ensure that your host URI is whitelisted in the SAS Viya server's [CSRF configuration](getting-started.md#cross-site-request-forgery).

### "Unable to load the selected report."

If the SAS Visual Analytics SDK has successfully connected to a SAS Viya server but is unable to load a particular report,
try these steps to resolve the problem:

1. Verify that the report URI is formatted correctly. It should look something like
   `"/reports/reports/f57c57ba-1cf1-4b14-aeeb-1a61664debb4"`. If the `"/reports/reports/"` prefix is missing, or if you
   see `%2F` in place of `/`, then the report will not load. We have a tool for generating a correctly-formatted
   `sas-report` or `sas-report-object` tag in our [Getting started guide](getting-started.md#create-a-custom-html-tag).
1. Ensure that you have permission to access the report given the current authentication type. If `authenticationType="guest"` is used then the report must be accessible to the guest user. If it is not then the report will not load.

### "Report objects cannot be used in multiple contexts."

This message means that you have multiple uses of the same report object - either in `sas-report` or `sas-report-object` tags or through
`registerDataDrivenContent`. Remove all but one usage per report object and the error should be resolved.

## Why does nothing happen when I click a report link?

Report linking is not currently supported in the SAS Visual Analytics SDK.  All other action types are supported.
