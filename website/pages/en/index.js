/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const CompLibrary = require('../../core/CompLibrary.js');
const React = require('react');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

class HomeSplash extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="logo">
            <img src={siteConfig.baseUrl + 'img/relay-white.svg'} />
          </div>
          <div className="wrapper homeWrapper">
            <h2 className="projectTitle">
              {siteConfig.title}
              <small>{siteConfig.tagline}</small>
              <small>{siteConfig.subtagline}</small>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || 'en';
    const showcase = siteConfig.users
      .filter(user => {
        return user.pinned;
      })
      .map((user, i) => {
        return (
          <a href={user.infoLink} key={i}>
            <img src={user.image} title={user.caption} />
            <div>
              <h6>{user.caption}</h6>
              <p>{user.description}</p>
            </div>
          </a>
        );
      });

    return (
      <div>
        <HomeSplash language={language} />
        <div className="homePage mainContainer">
          <Container className="textSection" background="light">
            <h2>Built for scale</h2>
            <h3>
              Relay was designed to be performant from the ground up, and to
              support scaling your application to{' '}
              <b>
                <em>thousands</em>
              </b>{' '}
              of components, while keeping management of data fetching sane, and
              fast iteration speeds as your application grows and changes.
            </h3>
            <GridBlock
              layout="threeColumn"
              contents={[
                {
                  title: 'Quick iteration',
                  content:
                    '<p>Relay is built upon <em>locally</em> declaring data dependencies for components. This means each component declares <em>what</em> data that it needs, without worrying about <em>how</em> to fetch it; Relay guarantees that the data each component needs is fetched and available.</p><p>This allows components and their data dependencies to be modified <b><em>quickly</em></b> and in <b><em>isolation</em></b>, without needing to update other parts of the system or, worrying about breaking other components</p>',
                },
                {
                  title: 'Minimal round trips',
                  content:
                    '<p>Relay automatically aggregates the data requirements for your entire application, so that they can be fetched in a single GraphQL request.</p><p>Relay will handle all of the heavy lifting to ensure the data declared by your components is fetched in the most efficient way, for example by deduplicating identical fields, fetching as early as possible, among other optimizations.</p>',
                },
                {
                  title: 'Automatic data consistency',
                  content:
                    '<p>Relay automatically keeps all of your components up to date whenever data that affects them changes, and efficiently update them only when strictly necessary.</p><p>Relay also support executing GraphQL Mutations, optionally with optimistic updates, and updates to local data, while ensuring that visible data on the screen is always kept up to date.</p>',
                },
              ]}
            />
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;
