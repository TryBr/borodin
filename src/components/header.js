import React, { useEffect } from 'react';
import { elastic, slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import { useStaticQuery, graphql } from "gatsby";
import HtmlParser from 'html-react-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderContacts from "../components/header-contacts";
import HeaderSocial from "../components/header-social";
import MenuContacts from "../components/menu-contacts";
import MenuSocial from "../components/menu-social";
import HeaderFigure from "../images/header-figure.svg";
import HeaderIllustration from "../images/header-illustration.svg";

const Header = ({ menuState, toggleMenu, scrollTo }) => {
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

  const { allContentfulHeader } = useStaticQuery(
      graphql`
          query {
            allContentfulHeader(
              filter: {node_locale: {eq: "ru-RU"}}
            ) {
              nodes {
                btnOne
                btnTwo
                description {
                  description
                }
                title {
                  title
                }
              }
            }
          }
      `
  )

  const title = allContentfulHeader.nodes[0].title.title,
        description = allContentfulHeader.nodes[0].description.description,
        btnOne = allContentfulHeader.nodes[0].btnOne,
        btnTwo = allContentfulHeader.nodes[0].btnTwo;

  return (
    <>
    <header className="header">
      <Menu className="menu-mobile" isOpen={menuState} onClose={toggleMenu} Animation={elastic} right={true} elastic={true} customBurgerIcon={false} customCrossIcon={false} aria-hidden="true">
        <div className="menu-close-btn" onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex={0}> </div>
        <ul className="menu">
          <li className="menu__item active">
            <Link to="services" className="menu__item-link" onClick={scrollTo} onKeyDown={scrollTo} duration={800}>Возможности и цены</Link>
          </li>
          <li className="menu__item">
            <Link to="portfolio" className="menu__item-link" onClick={scrollTo} onKeyDown={scrollTo} duration={800}>Портфолио</Link>
          </li>
          <li className="menu__item">
            <Link to="about" className="menu__item-link" onClick={scrollTo} onKeyDown={scrollTo} duration={1500}>Обо мне</Link>
          </li>
          <li className="menu__item">
            <Link to="reviews" className="menu__item-link" onClick={scrollTo} onKeyDown={scrollTo} duration={2000}>Отзывы</Link>
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
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div className="header-top-panel">
              <div className="header-top-panel__logo" data-aos="fade-right">
                <Link to="/" className="logo__link"></Link>
              </div>
              <div className="header-menu-btn" onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex={0}> </div>
              <div className="header-contacts" data-aos="fade-left">
                  <HeaderContacts />
                  <Link to="footer" className="header-contacts__item header-contacts__request">
                      Оставить заявку
                  </Link>
                  <button className="header-contacts__menu" onClick={toggleMenu} onKeyDown={toggleMenu}> </button>
              </div>
            </div>
            <div className="header-info" data-aos="fade-right" data-aos-offset="-100">
              <h1 className="header-info__title">
                {HtmlParser(title)}
              </h1>
              <div className="header-info__separator"></div>
              <p className="header-info__description">
                {HtmlParser(description)}
              </p>
            </div>
            <div className="header-buttons" data-aos="fade-right" data-aos-offset="-100">
              <div className="header-buttons__about btn-orange">
                <Link to="about" duration={2500} className="header-buttons__content">
                  <div className="header-buttons__title">
                    {btnOne}
                  </div>
                  <div className="header-buttons__icon header-buttons__icon_about"></div>
                </Link>
              </div>
              <Link to="portfolio" duration={1500} className="header-buttons__portfolio">
                <div className="header-buttons__content">
                  <div className="header-buttons__title">
                    {btnTwo}
                  </div>
                  <div className="header-buttons__icon header-buttons__icon_portfolio"></div>
                </div>
              </Link>
            </div>
            <div className="header-figure">
              <img src={HeaderFigure} alt=""/>
            </div>
            <div className="header-human" data-aos="fade-up" data-aos-delay="300">
              <img fadeIn="false" loading="eager" src={HeaderIllustration} alt=""/>
            </div>
            <div className="header-social" data-aos="fade-left">
              <HeaderSocial />
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header