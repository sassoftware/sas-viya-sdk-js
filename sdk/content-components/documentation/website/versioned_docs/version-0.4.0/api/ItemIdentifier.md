---
id: version-0.4.0-ItemIdentifier
title: ItemIdentifier
original_id: ItemIdentifier
---

`ItemIdentifier` is a data type for specifying content items for use with the Content SDK components.

## Attributes

### `type: 'persistentLocation' | 'folderUri'`

Specify what type of content item this is. `persistentLocation` refers to a set of pre-defined SAS Viya locations. `folderUri` can be any SAS Viya folder uri.

### `value: string`


- `myFolder`: the My Folder folder in SAS Viya
- `favorites`: the My Favorites folder in SAS Viya
- `root`: the SAS Content folder in SAS Viya
- `history`: the Recents folder in SAS Viya
- `trash`: the Recycle Bin folder in SAS Viya

For `type: 'folderUri'`, a SAS Viya folder uri of the form: `'/folder/folders/789d13d3-789d-4fa3-9fea-123e321f1ea1'`. You can find the URI for a Folder in SAS Drive in the Information Pane. Select the Folder, scroll down in the Information Pane to the More -> URI section and copy the URI.

![Finding folder and item URIs](assets/findUri.png)