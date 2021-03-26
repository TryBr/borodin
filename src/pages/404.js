import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import illustration from "../images/404.svg";

import HeaderInner from "../components/header-inner";
import Projects from "../components/projects";
import Reviews from "../components/reviews";
import Clients from "../components/clients";
import Footer from "../components/footer";
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

const NotFoundPage = ({ location }) => (
  <Layout>
    <SEO title="404: Not found" />
    <HeaderInner />
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Breadcrumb location={location} crumbLabel="404" />
        </div>
      </div>
    </div>
    <div className="page-404">
      <h1 className="page-404__title">
        404. Упс, здесь ничего нет...
      </h1>
      <img src={illustration} alt="404" className="page-404__illustration"/>
      <p className="page-404__text">
        Вы зашли на страницу, которой нет. <br/>
        Вернитесь на главную или напишите мне :)
      </p>
      <Link to="/" className="page-404__btn btn-orange">
        Вернуться на главную
      </Link>
    </div>
    <Projects />
    <Reviews />
    <Clients />
    <Footer />
  </Layout>
)

export default NotFoundPage
