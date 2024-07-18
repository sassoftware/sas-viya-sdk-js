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

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container padding={['bottom', 'top']} id={props.id} background={props.background}>
        <GridBlock align={props.align ? props.align : 'center'} contents={props.children} layout={props.layout} />
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
                  'The insights you discover with SAS Visual Analytics can now be embedded in your websites and web apps using the new SAS Visual Analytics SDK. You can embed your whole report or individual objects, and give your consumers a completely unique, innovative and customized experience.',
                image: `${baseUrl}img/sdk-monitor-2.png`,
                imageAlign: 'left',
                title: 'SAS® insights embedded in your web pages and apps'
              }
            ]}
          </Block>
          <Block background="white" align="left">
            {[
              {
                content:
                  'The SAS Visual Analytics SDK lets you combine insights from across different reports in one place. Users can even drive interactions and filters on SAS visualizations using interface elements in your web page or web app.',
                image: `${baseUrl}img/sdk-monitor.png`,
                imageAlign: 'right',
                title: 'Ability to combine insights across reports'
              }
            ]}
          </Block>
        </div>
      </div>
    );
  }
}

module.exports = Index;
