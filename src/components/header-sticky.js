import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import 'aos/dist/aos.css';
import HeaderContactsSticky from "../components/header-contacts-sticky";


const HeaderSticky = () => {
  const [menuState, setMenuState] = useState(false);
  useEffect(() => {
    const header = document.getElementById("stickyHeader");
    const headerHeight = document.querySelector("header").offsetHeight;
    let lastScrollTop = 0;
    
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > lastScrollTop) {
        header.classList.remove("header-sticky-show");
      } else {
        if (window.pageYOffset < headerHeight) {
          header.classList.remove("header-sticky-show");
        } else {
          header.classList.add("header-sticky-show");
        }
      }
      lastScrollTop = window.pageYOffset <= 0 ? 0 : window.pageYOffset;
    }, false);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  function toggleMenu() {
    setMenuState(menuState === false ? true : false);
  }

  function closeMenu() {
    setMenuState(false);
  }

  function scrollTo() {
    setTimeout(() => {
      setMenuState(false);
    }, 100);
  }


  return (
    <>
    <header id="stickyHeader" className={"header-sticky"}>
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div className="header-sticky-top-panel">
              <div className="header-sticky-top-panel__logo">
                <Link to="/" className="logo__link"></Link>
              </div>
              <div className="header-sticky-menu-btn" onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex={0}> </div>
              <div className="header-sticky-contacts">
                  <HeaderContactsSticky />
                  <Link to="footer" className="header-sticky-contacts__item header-sticky-contacts__request">
                      Оставить заявку
                  </Link>
                  <button className="header-sticky-contacts__menu" onClick={toggleMenu} onKeyDown={toggleMenu}> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default HeaderSticky