import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header";
import Projects from "../components/projects";
import Reviews from "../components/reviews";
import Clients from "../components/clients";
import Footer from "../components/footer";

const Policy = () => (
  <Layout>
    <SEO title="Политика конфиденциальности" />
    {/* <Link to="/">Go back to the homepage</Link> */}
    <Header />
    <Projects />
    <Reviews />
    <Clients />
    <Footer />
  </Layout>
)

export default Policy
