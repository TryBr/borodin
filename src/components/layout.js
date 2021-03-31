/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React, { useState } from 'react';
import Header from "../components/header";
import HeaderInner from "../components/header-inner";
import Footer from "../components/footer";
import HeaderSticky from "../components/header-sticky";


const Layout = ({ children, location }) => {

  const [menuState, setMenuState] = useState(false);

  function toggleMenu() {
    setMenuState(menuState === false ? true : false);
  }

  function scrollTo() {
    setTimeout(() => {
      setMenuState(false);
    }, 100);
  }

  return (
    <>     
      { location === '/' ? 
        <>
        <Header menuState={menuState} toggleMenu={toggleMenu} scrollTo={scrollTo} /> 
        <HeaderSticky menuState={menuState} toggleMenu={toggleMenu} scrollTo={scrollTo} />
        </>
        : 
        <>
        <HeaderInner menuState={menuState} toggleMenu={toggleMenu} scrollTo={scrollTo} />
        <HeaderSticky menuState={menuState} toggleMenu={toggleMenu} scrollTo={scrollTo} />
        </>
      } 
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
