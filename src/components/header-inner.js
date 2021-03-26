import React, { useState, useEffect } from 'react';
import { elastic, slide as Menu } from 'react-burger-menu';
import { Link } from "gatsby";
import HeaderContacts from "./header-contacts";
import MenuContacts from "../components/menu-contacts";
import MenuSocial from "../components/menu-social";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  const [menuState, setMenuState] = useState(false);

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
    <Menu className="menu-mobile" isOpen={menuState} onClose={closeMenu} Animation={elastic} right={true} elastic={true} customBurgerIcon={false} customCrossIcon={false} aria-hidden="true">
      <div className="menu-close-btn" onClick={closeMenu} onKeyDown={closeMenu} role="button" tabIndex={0}> </div>
      <ul className="menu">
        <li className="menu__item active">
          <Link to="/" className="menu__item-link" onClick={scrollTo} onKeyDown={scrollTo}>Возможности и цены</Link>
        </li>
        <li className="menu__item">
          <Link to="portfolio" className="menu__item-link" onClick={scrollTo} onKeyDown={scrollTo}>Портфолио</Link>
        </li>
        <li className="menu__item">
          <Link to="/" className="menu__item-link" onClick={scrollTo} onKeyDown={scrollTo}>Обо мне</Link>
        </li>
        <li className="menu__item">
          <Link to="reviews" className="menu__item-link" onClick={scrollTo} onKeyDown={scrollTo}>Отзывы</Link>
        </li>
      </ul>
      <div className="menu-social">
          <MenuSocial />
      </div>
      <div className="menu-contacts">
        <MenuContacts />
      </div>
      <div className="menu-request-btn btn-orange">
          <Link to="footer" className="menu-request-btn__title">
              Оставить заявку
          </Link>
      </div>
    </Menu>
    <header className="header header-inner">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div className="header-top-panel">
              <div className="header-top-panel__logo">
                <Link to="/" className="logo__link"></Link>
              </div>
              <div className="header-menu-btn" onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex={0}> </div>
              <div className="header-contacts">
                  <HeaderContacts />
                  <Link to="footer" className="header-contacts__item header-contacts__request">
                      Оставить заявку
                  </Link>
                  <button className="header-contacts__menu" onClick={toggleMenu} onKeyDown={toggleMenu}> </button>
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