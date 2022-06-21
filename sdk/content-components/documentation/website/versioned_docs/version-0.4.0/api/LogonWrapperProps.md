---
id: version-0.4.0-LogonWrapperProps
title: LogonWrapperProps
original_id: LogonWrapperProps
---

`LogonWrapperProps` are connection-based attributes that are common to most Content SDK components.

## Attributes

### `url: string`

Specify the URL of the SAS Viya server that hosts the content to display. This is the full context root, including the protocol,
optional port, and host.

### `authenticationType?: 'credentials' | 'guest'`

Specify how to authenticate to the SAS Viya server.

#### Values

`credentials`

Logon using SAS Viya credentials. This will open a popup dialog where the credentials can be entered. This is the default value if no `authenticationType` is supplied.

`guest`

Logon automatically as a guest to the SAS Viya deployment. The deployment needs to be configured to support guest mode.

For more details, see [How is authentication handled by the SAS Content SDK?](faq.md).