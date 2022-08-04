---
id: getSASJobExecutionUrl
title: getSASJobExecutionUrl
---

```
getSASJobExecutionUrl(item, url): Promise<string | undefined>
```

Given a target job definition item, such as from an `onSelect` event, and a target deployment URL, generate a SAS Job Execution URL that will open the job and allow it to be executed if it is a job with an HTML prompt. This URL can be opened in a new tab or window, or embedded in an iframe if allowed by the security settings on the deployment.

## Arguments

### `item: Item`

The target job definition [Item](Item.md).

### `url: string`

Specify the URL of the SAS Viya server. This is the full context root, including the protocol, optional port, and host.

## Return value

`getSASJobExecutionUrl` will return a Promise that resolves to the URL representing the job in SAS Job Execution unless a problem is encountered, in which case it will resolve to `undefined`. Problems could include passing in an item that does not represent a job definition, not passing in a URL string, or unexcpected errors with the internal service calls needed to generate the URL. Consumers should handle the `undefined` case since service call failures are always a possibility.

## Embedding in an iframe

By default, your SAS Viya deployment does not allow access when embedded as a cross-origin iframe. To embed the SAS Job Execution URL within an iframe with a cross-origin ancestor, the `x-frame-options-enabled` option in `sas.commons.web.security` needs to be disabled for the SAS Job Execution definition. See <a target="_blank" href="https://go.documentation.sas.com/doc/en/sasadmincdc/v_023/calconfigref/p1fejrlg8b007jn1krvvwzy5q7tn.htm#n08078sasconfiguration0admin">SAS Help Center</a> for more information.