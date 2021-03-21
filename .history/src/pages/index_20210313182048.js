import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Services from "../components/services"
import Quality from "../components/quality"
import Portfolio from "../components/portfolio"
import About from "../components/about"
import Rework from "../components/rework"
import Reviews from "../components/reviews"
import Clients from "../components/clients"

// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Services />
    <Quality />
    <Portfolio />
    <About />
    <Rework />
    <Reviews />
    <Clients />
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
