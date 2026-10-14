## 1.1.0 (October 14, 2026)

- Added theme support. Call `setTheme('light' | 'dark' | 'high-contrast')` or
  `setTheme({ themeId })` for a custom SAS Viya theme to restyle all mounted components without a
  page reload. If `setTheme` is not called, components use the theme from the host page
  (`#sas-nc-startup-data`).
- Added `setLocale(locale)` to change the language of all mounted components without a page reload
  (for example, `setLocale('fr-FR')`). Right-to-left languages are supported.
- `setTheme` and `setLocale` are available on `window.contentSdkComponents` and on the
  `SASContentSDK` UMD export.
- Menus, dialogs, and other popovers now use the active theme and text direction.
- Added the `hide-all-types` attribute and `contentFilterConfig` property to
  `ContentSelectorElement` to control which content types can be filtered.
- Fixed focus outlines disappearing when tabbing between SDK components on the same page. Focus
  outlines now appear for keyboard users only.
- Fixed `QuickDriveElement` so opening a recommended report launches it in SAS Visual Analytics.
- Fixed `DataSelectorElement` so it always closes after a commit, even if the `onCommit` handler
  throws or `linked-viewer` is an invalid selector. Invalid selectors now log a warning.
- Upgraded internal dependencies and fixed reported security vulnerabilities.

## 1.0.0 (August 20, 2026)

- Added `ContentSearchFieldElement` for catalog content searches.
- Added `QuickDriveElement` and enhanced `DataSelectorElement` for selecting content data.
- Added clipboard support, DragAndDrop, and configurable excluded action types for content components.

## 0.9.0 (Octover 20, 2022)

- Added getSASJobExecutionUrl helper

## 0.8.0 (September 22, 2022)

- Added ContentLocationsElement

## 0.7.0 (July 21, 2022)

- Added support for styling components via "class" and "style" attributes.

## 0.6.0 (June 16, 2022)

- Added ability to export PDFs for reports via the context menu

## 0.5.0 (March 17, 2022)

- Added table view and controls to ContentAreaElement

## 0.4.0 (February 21, 2022)

- Added ContentTreeElement
- Added ContentBreadcrumbElement
- Added ContentGroupElement
- BREAKING CHANGE: Removed `folderIdentifier` and `itemIdentifiers` properties from ContentAreaElement. The `initialNavigationValue` property of ContentGroupElement is recommended instead.
- Added the `authentication-type` attribute to components to specify whether to use credentials or guest authentication.

## 0.3.0 (December 15, 2021)

- Internal dependency update

## 0.2.0 (November 18, 2021)

- New ContentAreaElement features:
- `selection-mode` attribute to choose between single and multiple selection.
- `initial-selection-index` attribute to set a default initial selection when content details are not known.
- `setSelectedIdentifiers` method to allow for updating the selection programmatically.

## 0.1.0 (September 20, 2021)

- First release
