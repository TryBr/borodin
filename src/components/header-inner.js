import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import HeaderContacts from "./header-contacts";

const Header = () => {

  return (
    <>
    <header className="header header-inner">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div className="header-top-panel">
              <div className="header-top-panel__logo">
                <Link to="/" className="logo__link"></Link>
              </div>
              <div className="header-contacts">
                  <HeaderContacts />
                  <Link to="footer" className="header-contacts__item header-contacts__request">
                      Оставить заявку
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header