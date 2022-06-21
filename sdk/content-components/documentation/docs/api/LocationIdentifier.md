---
id: LocationIdentifier
title: LocationIdentifier
---

`LocationIdentifier` is a more limited subset of [ItemIdentifier](ItemIdentifier.md) that represents items that can be used as root locations in components such as [ContentTreeElement](ContentTreeElement.md).

## Attributes

### `type: 'persistentLocation'`

Specify what type of content item this is. `persistentLocation` refers to a set of pre-defined SAS Viya locations.

### `value: string`


- `myFolder`: the My Folder folder in SAS Viya
- `favorites`: the My Favorites folder in SAS Viya
- `root`: the SAS Content folder in SAS Viya
- `history`: the Recents folder in SAS Viya
- `trash`: the Recycle Bin folder in SAS Viya

### `preventExpansion: boolean`

Specify whether to disable expansion for this location in the [ContentTreeElement](ContentTreeElement.md).