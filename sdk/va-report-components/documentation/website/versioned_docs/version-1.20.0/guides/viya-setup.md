---
id: version-1.20.0-viya-setup
title: SAS Viya Setup
original_id: viya-setup
---

This guide explains how to modify the SAS Viya security settings to connect to the SAS Visual Analytics SDK. You need administrator credentials to make these changes using SAS Environment Manager.

Note: The configuration changes listed below should all be made to the global context, applying to all services. Restart all services after making the changes.

## Enable Cross-Origin Resource Sharing

By default, your SAS Viya deployment is not set up to allow access to REST API endpoints from different domains. This is
needed in order to connect to SAS Viya from the domain that is hosting your HTML page. This domain needs to be added to the
`allowOrigins` property in SAS Viya deployment's CORS configuration. This can be done by following the <a target="_blank" href="https://documentation.sas.com/?cdcId=sasadmincdc&cdcVersion=default&docsetId=calauthmdl&docsetTarget=n1iyx40th7exrqn1ej8t12gfhm88.htm#p04ifnaixhf85in1xo7zrr2fgimf">Configure Cross-Origin Resource Sharing</a> documentation. Note that the `allowedOrigins` property does not support using the value `*` to support all origins. You must explicitly add your domain or a list of domains.

## Cross-Site Request Forgery

SAS Viya protects against Cross-Site Request Forgery (CSRF) by blocking requests where the HTTP Referer Header does not match the URI of the requested resource or the `allowedUris` CSRF configuration property. The domain of the site using the SAS Visual Analytics SDK must be allowed in the CSRF configuration by setting `allowedUris` to a regular expression that matches the domain. For example, the regular expression `.*` will match all domains.  See <a target="_blank" href="https://documentation.sas.com/?cdcId=sasadmincdc&cdcVersion=default&docsetId=calconfig&docsetTarget=n05000sasconfiguration0admin.htm#n0uaa7r6b3x7iin1vmxcgl5b51h0">SAS Help Center</a> for more information.

## Cross-Site Cookies

The SAS Visual Analytics SDK requires the use of cookies to handle authentication with the SAS Viya Logon service. Browsers require that the response setting the cookie explicitly enable cross-site cookies by setting `samesite=none` on the response header. This is not the default for SAS Viya, so you must configure it to support the SAS Visual Analytics SDK. The `sameSite` configuration option in the `sas.commons.web.security.cookies` definition should be set to `None`, and should be applied globally to all services. See <a target="_blank" href="https://documentation.sas.com/?cdcId=sasadmincdc&cdcVersion=default&docsetId=calauthmdl&docsetTarget=n1iyx40th7exrqn1ej8t12gfhm88.htm#p18ctm7c29p2z3n1cahhb0qvwaa6">SAS Help Center</a> for more information.

Note: If you have enabled settings that block cookies in your web browser, then the SAS Visual Analytics SDK cannot authenticate with SAS Viya. Check your settings to make sure your web browser allows third-party cookies.

### HTTPS
It is also a requirement that SAS Viya be accessed using the HTTPS protocol in order for web browsers to allow cross-site cookies to be set by SAS Viya. This requires that TLS (Transport Layer Security) be enabled on your SAS Viya deployment. See <a target="_blank" href="https://documentation.sas.com/?cdcId=sasadmincdc&cdcVersion=default&docsetId=calencryptmotion&docsetTarget=n1bktkey9qb5z0n14fji0ss0b453.htm#p11136ylabo3k1n1rwctv2xrn8js">SAS Help Center</a> for more information.

## Allow guest access

The SAS Visual Analytics SDK has the option to connect to SAS Viya using guest authentication. This requires that SAS Viya be set up to enable guest access, and that the guest user has access to the appropriate report content and data. For more information, see 
<a target="_blank" href="https://documentation.sas.com/doc/en/sasadmincdc/default/calauthmdl/n1iyx40th7exrqn1ej8t12gfhm88.htm#n067qoyrgu1yohn19nq4ehy8o0b3">SAS Help Center</a>.