/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import Header from "../components/header";
import HeaderInner from "../components/header-inner";
import Footer from "../components/footer";


const Layout = ({ children, location }) => {
  return (
    <>     
      { location === '/' ? <Header /> : <HeaderInner />} 
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
