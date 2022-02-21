## 0.1.0 (September 20, 2021)

- First release

## 0.2.0 (November 18, 2021)

- New ContentAreaElement features:
 - `selection-mode` attribute to choose between single and multiple selection.
 - `initial-selection-index` attribute to set a default initial selection when content details are not known.
 - `setSelectedIdentifiers` method to allow for updating the selection programmatically.

 ## 0.3.0 (December 15, 2021)

 - Internal dependency update

 ## 0.4.0 (February 21, 2022)

 - Added ContentTreeElement
 - Added ContentBreadcrumbElement
 - Added ContentGroupElement
 - BREAKING CHANGE: Removed `folderIdentifier` and `itemIdentifiers` properties from ContentAreaElement. The `initialNavigationValue` property of ContentGroupElement is recommended instead.
 - Added the `authentication-type` attribute to components to specify whether to use credentials or guest authentication.