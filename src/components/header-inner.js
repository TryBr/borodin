import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as GatsyLink } from "gatsby";
import HeaderContacts from "./header-contacts";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderInner = ({ menuState, toggleMenu, scrollTo }) => {

  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        disable: true, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        offset: 0,
        delay: 0,
        duration: 800,
        easing: 'ease', 
        once: true
      });
    }, 50);
  });

  return (
    <>
    <header className="header header-inner">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div className="header-top-panel">
              <div className="header-top-panel__logo">
                <GatsyLink to="/" className="logo__link"></GatsyLink>
              </div>
              <div className="header-contacts">
                  <HeaderContacts />
                  <Link to="footer" className="header-contacts__item header-contacts__request">
                      Оставить заявку
                  </Link>
                  <GatsyLink to="/" className="header-contacts__back"></GatsyLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default HeaderInner