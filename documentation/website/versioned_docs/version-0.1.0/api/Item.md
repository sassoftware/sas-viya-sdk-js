---
id: version-0.1.0-Item
title: Item
original_id: Item
---

`Item` is a data type representing a content item returned by many Content SDK event handlers.

## Attributes

`Item` comes from the sas-drive service, and has a goal of containing all attributes that could be useful to a consumer or web client. The following are most likely to be of use in the Content SDK.

### `resource.id: string`

The uri of the content item, such as the report uri or folder uri.

### `resource.type.sasType: string`

The SAS type of the content item, such as 'report', 'folder', or 'file'.