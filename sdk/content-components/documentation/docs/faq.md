---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
---

## What are the prerequisites for using the SAS Content SDK?

Use of the SAS Content SDK requires access to SAS Visual Analytics version 8.4 or later. Additional server configuration is also required. These requirements are covered in [Getting Started](getting-started.md#sas-viya-setup).

## What browsers are supported?

The SAS Content SDK supports:

- Chrome 80+
- Firefox 68+
- Safari 13+
- Edge on Chromium 80+

## Is there a license to use the SAS Content SDK?

The SAS Content SDK is released under a <a target="_blank" href="https://github.com/sassoftware/sas-viya-sdk-js/blob/master/sdk/content-components/LICENSE">commercial license</a>.

## How is authentication handled by the SAS Content SDK?

The SAS Content SDK can either connect as guest or as a credentialed user, controlled by the `authenticationType` attribute on most components. See [authenticationType](api/LogonWrapperProps.md#authenticationType).

### Guest
Connecting as guest requires that the SAS Viya server be setup to [allow for guest access](getting-started.md#allow-guest-access). The authentication happens automatically, without any intervention by the user.

### Credentials
Connecting using credentials allows the user to logon to the SAS Viya server with their own credentials. This is done by using the SAS Logon service to establish an authenticated session, and is identical to the authentication when you access SAS Drive directly on the SAS Viya server. This allows the SAS Content SDK to take advantage of all supported SAS Logon configurations, including single sign-On.

If the user is already authenticated, then the server connection will be automatically established. If not, then the [SASContentArea](api/ContentAreaElement.md) will present a button for the user to initiate logon. This launches the SAS Logon page in a new browser window which is then closed after logon has succeeded.

## How do I resolve this error message?

### "The server cannot be reached."

If the SAS Content SDK is unable to reach the SAS Viya server, try these steps to resolve the problem:

1. Verify the SAS Viya server URL. This should be the full context root for the SAS Viya deployment, including the protocol, optional port, and host.
1. Disable your ad-blocker
1. [Enable cross-origin resource sharing on your SAS Viya deployment.](getting-started.md#enable-cross-origin-resource-sharing)

### "Unable to log on to the server."

If the SAS Content SDK can reach the SAS Viya server but is unable to log on, try these steps to resolve the
problem:

1. [Enable cross-origin resource sharing on your SAS Viya deployment.](getting-started.md#enable-cross-origin-resource-sharing)
1. If using `authenticationType="guest"`, ensure that the SAS Viya server you are connecting to is [configured for guest access](getting-started.md#allow-guest-access).
1. If using `authenticationType="credentials"`, ensure that your host URI is included in the allowlist for your SAS Viya server's [CSRF configuration](getting-started.md#cross-site-request-forgery).

### "Unable to load the selected folder."

If the SAS Content SDK has successfully connected to a SAS Viya server but is unable to load a particular content item or display the results of a search,
try these steps to resolve the problem:

1. Verify that you have entered correctly formatted search or folder criteria for displaying content tiles.
1. Verify that the content folder URI is formatted correctly. It should look something like
   `"/folders/folders/ff31b68a-8830-4c6f-bc2b-c91cc94adf85"`. If the `"/folders/folders/"` prefix is missing, or if you
   see `%2F` in place of `/`, then the report will not load. You can find the URI for a Folder in SAS Drive in the Information Pane. Select the Folder, scroll down in the Information Pane to the More -> URI section and copy the URI.
1. Ensure that you have permission to access the content given the current authentication type. If `authenticationType="guest"` is used then the report must be accessible to the guest user. If it is not then the content will not load.
