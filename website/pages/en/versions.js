/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary');

const Container = CompLibrary.Container;

const CWD = process.cwd();

const versions = require(`${CWD}/versions.json`);

function Versions(props) {
  const {config: siteConfig} = props;
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} Versions</h1>
          </header>
          <p>New versions for clients are being released every few weeks. Public version are updated quarterly.</p>
          <h3 id="latest">Current version (Stable)</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:id" */}
                  <a
                    href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                      props.language ? props.language + '/' : ''
                    }artist_getting_started`}>
                    Documentation
                  </a>
                </td>
                <td>
                  <a href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                    props.language ? props.language + '/' : ''
                  }changelog`}>Release Notes</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            This is the latest version currently available and which is properly tagged in the master branches.
          </p>
          <h3 id="rc">Pre-release versions</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>Master</th>
                <td>
                  <a
                    href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                      props.language ? props.language + '/' : ''
                    }next/artist_getting_started`}>
                    Documentation
                  </a>
                </td>
                <td>
                  <a href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                    props.language ? props.language + '/' : ''
                  }next/changelog`}>Pre-Release Notes</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Other text describing this section.</p>
          <h3 id="archive">Past Versions</h3>
          <p>Here you can find previous versions of the documentation.</p>
          <table className="versions">
            <tbody>
              {versions.map(
                version =>
                  version !== latestVersion && (
                    <tr>
                      <th>{version}</th>
                      <td>
                        {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:version/:id" */}
                        <a
                          href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                            props.language ? props.language + '/' : ''
                          }${version}/artist_getting_started`}>
                          Documentation
                        </a>
                      </td>
                      <td>
                        <a href={`${repoUrl}/releases/tag/v${version}`}>
                          Release Notes
                        </a>
                      </td>
                      <td>
                        <a href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                          props.language ? props.language + '/' : ''
                        }${version}/changelog#${version}`}>
                          Release Notes
                        </a>
                      </td>
                    </tr>
                  ),
              )}
            </tbody>
          </table>
          <p>
            You can find past versions of this project on{' '}
            <a href={repoUrl}>GitHub</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}

module.exports = Versions;
