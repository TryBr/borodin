import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Services from "../components/services"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Services />
    {/* <StaticQuery
      query={graphql`
        {
          allContentfulService {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      `}
      render={({
        allContentfulService: {
          edges
        }
      }) => (
        edges.map(({ node }) => (
          <Service key={node.id} content={node} />
        ))
      )}
    /> */}
  </Layout>
)

export default IndexPage
