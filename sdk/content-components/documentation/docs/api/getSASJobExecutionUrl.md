---
id: getSASJobExecutionUrl
title: getSASJobExecutionUrl
---

```
getSASJobExecutionUrl(itemUri, url): Promise<string | undefined>
```

This function generates a SAS Job Execution URL. You can use the URL to open a job and execute it if it is a job with an HTML prompt. This URL can be opened in a new tab or window, or embedded in an iframe if allowed by the security settings on the deployment.

## Arguments

### `itemUri: string`

The URI of the target job definition.

### `url: string`

Specify the URL of the SAS Viya server. This is the full context root, including the protocol, optional port, and host.

## Return value

`getSASJobExecutionUrl` will return a Promise that resolves to the URL representing the job in SAS Job Execution.
If a problem is encountered, the Promise resolves to `undefined`. Problems could include passing in an item that does not represent a job definition, not passing in a URL string, or unexpected errors with the internal service calls that are needed to generate the URL. Consumers should handle the `undefined` case, because service call failures are always a possibility.

## Embedding in an iframe

By default, your SAS Viya deployment does not allow access when embedded as a cross-origin iframe. To embed the SAS Job Execution URL within an iframe with a cross-origin ancestor, the `x-frame-options-enabled` option in `sas.commons.web.security` needs to be disabled for the SAS Job Execution definition. See <a target="_blank" href="https://documentation.sas.com/doc/en/sasadmincdc/v_023/calconfigref/p1fejrlg8b007jn1krvvwzy5q7tn.htm#n08078sasconfiguration0admin">SAS Help Center</a> for more information.