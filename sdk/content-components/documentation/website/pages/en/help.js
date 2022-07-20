/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const { config: siteConfig, language = '' } = props;
  const { baseUrl, docsUrl, communitiesUrl, repoUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      title: 'Browse docs',
      content: `Learn more using the [documentation on this site,](${docUrl('getting-started')}) or consult our [frequently asked questions](${docUrl('faq')}).`
    },
    {
      title: 'Join the community',
      content:
        `Ask questions about the documentation and project in the <a target="_blank" href="${communitiesUrl}">SAS Visual Analytics Community</a>. If you think you've found a bug, <a target="_blank" href="${repoUrl}/issues">open an issue on GitHub</a>.`
    },
    {
      title: 'News',
      content: `See what's new in <a target="_blank" href="${repoUrl}/releases">our latest releases</a>.`
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>
            Contact SAS Technical Support by entering a <a href="https://support.sas.com/en/technical-support/submit-a-support-request.html">support request</a>.
          </p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
