/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const clsx = require('clsx');

const Container = CompLibrary.Container;
const MarkdownBlock = CompLibrary.MarkdownBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button button-primary" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl("getting-started")}>Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

function GridBlockWithCaption(props) {
  function renderBlock(origBlock, i) {
    const blockDefaults = {
      imageAlign: 'left',
    };

    const block = Object.assign({}, blockDefaults, origBlock);

    const blockClasses = clsx('blockElement', props.className, {
      alignCenter: props.align === 'center',
      alignRight: props.align === 'right',
      fourByGridBlock: props.layout === 'fourColumn',
      imageAlignSide:
        block.image &&
        (block.imageAlign === 'left' || block.imageAlign === 'right'),
      imageAlignTop: block.image && block.imageAlign === 'top',
      imageAlignRight: block.image && block.imageAlign === 'right',
      imageAlignBottom: block.image && block.imageAlign === 'bottom',
      imageAlignLeft: block.image && block.imageAlign === 'left',
      threeByGridBlock: props.layout === 'threeColumn',
      twoByGridBlock: props.layout === 'twoColumn',
    });

    const topLeftImage =
      (block.imageAlign === 'top' || block.imageAlign === 'left') &&
      renderBlockImage(block.image, block.imageLink, block.imageAlt, block.caption);

    const bottomRightImage =
      (block.imageAlign === 'bottom' || block.imageAlign === 'right') &&
      renderBlockImage(block.image, block.imageLink, block.imageAlt, block.caption);

    return (
      <div className={blockClasses} key={i}>
        {topLeftImage}
        <div className="blockContent">
          {renderBlockTitle(block.title)}
          <MarkdownBlock>{block.content}</MarkdownBlock>
        </div>
        {bottomRightImage}
      </div>
    );
  }

  function renderBlockImage(image, imageLink, imageAlt, caption) {
    if (!image) {
      return null;
    }

    return (
      <div className="blockImage" style={{textAlign: 'center'}}>
        {imageLink ? (
          <a href={imageLink}>
            <img src={image} alt={imageAlt} />
          </a>
        ) : (
          <img src={image} alt={imageAlt} />
        )}
        {caption? (
          <span style={{
            fontSize: 'small',
          }}>{caption}</span>
        ) : null}
      </div>
    );
  }

  function renderBlockTitle(title) {
    if (!title) {
      return null;
    }

    return (
      <h2>
        <MarkdownBlock>{title}</MarkdownBlock>
      </h2>
    );
  }

  return <div className="gridBlockV1">{props.contents.map(renderBlock)}</div>;
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container padding={['bottom', 'top']} id={props.id} background={props.background}>
        <GridBlockWithCaption align={props.align ? props.align : 'center'} contents={props.children} layout={props.layout} />
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Block background="white" align="left">
            {[
              {
                content:
                  'The content you create in SAS Viya can now be accessed in your websites and web apps using the new SAS Content SDK. Choose specific content items, or show the contents of an entire folder. Filter content by type and control what happens when content is selected or opened.',
                image: `${baseUrl}img/sdk-monitor.png`,
                imageAlign: 'left',
                title: 'Your SAS® content under your control',
                caption: 'This example uses SAS Content SDK to display content tiles and SAS Visual Analytics SDK to display a report.'
              }
            ]}
          </Block>
        </div>
      </div>
    );
  }
}

module.exports = Index;
