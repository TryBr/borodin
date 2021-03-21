/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setBodyAttributes,
  setPostBodyComponents
}) => {
  setHeadComponents([
    <link as="script" rel="preload" href="src/scripts/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="src/styles/noscript.css" />
    </noscript>
  ])
  setPreBodyComponents([
    <div id="preloader">
      {/* Optional: */}
      <img src="src/images/logo.png" alt="logo" style={{"height": "calc(3.23625vw + 77.86408px)"}} />
      <div className="preloader_animation"></div>
    </div>
  ])
  setBodyAttributes({
    className: "preloader_active"
  })
  setPostBodyComponents([
    <script src="/scripts/preloader.js" />
  ])
}