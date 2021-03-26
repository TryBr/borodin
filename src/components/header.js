import React, { useState, useEffect } from 'react';
import { elastic, slide as Menu } from 'react-burger-menu';
import { Link } from "react-scroll";
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
    <header className="header">
      <Menu className="menu-mobile" isOpen={menuState} onClose={closeMenu} Animation={elastic} right={true} elastic={true} customBurgerIcon={false} customCrossIcon={false} aria-hidden="true">
        <div className="menu-close-btn" onClick={closeMenu} onKeyDown={closeMenu} role="button" tabIndex={0}> </div>
        <ul className="menu">
          <li className="menu__item active">
            <Link to="services" className="menu__item-link" onClick={scrollTo} onKeyDown={scrollTo}>Возможности и цены</Link>
          </li>
          <li className="menu__item">
            <Link to="portfolio" className="menu__item-link" onClick={scrollTo} onKeyDown={scrollTo}>Портфолио</Link>
          </li>
          <li className="menu__item">
            <Link to="about" className="menu__item-link" onClick={scrollTo} onKeyDown={scrollTo}>Обо мне</Link>
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
                  {/* <div className="header-contacts__item header-contacts__lang">
                    <div className="header-contacts__value">
                          En
                    </div>
                    <div className="header-contacts__icon">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.53246 0.2661L5.00466 3.80169L8.47687 0.2661C8.55972 0.181736 8.65808 0.114815 8.76633 0.0691577C8.87458 0.0235002 8.9906 8.88921e-10 9.10777 0C9.22494 -8.88916e-10 9.34096 0.0235002 9.44921 0.0691577C9.55746 0.114815 9.65582 0.181736 9.73867 0.2661C9.82152 0.350464 9.88724 0.450618 9.93208 0.560845C9.97692 0.671072 10 0.789212 10 0.908521C10 1.02783 9.97692 1.14597 9.93208 1.2562C9.88724 1.36642 9.82152 1.46658 9.73867 1.55094L5.63109 5.73351C5.5483 5.81799 5.44996 5.88501 5.3417 5.93074C5.23345 5.97646 5.11739 6 5.00019 6C4.88299 6 4.76693 5.97646 4.65868 5.93074C4.55042 5.88501 4.45208 5.81799 4.36929 5.73351L0.261708 1.55094C0.178747 1.46664 0.11293 1.36651 0.0680226 1.25627C0.0231154 1.14604 0 1.02786 0 0.908521C0 0.789178 0.0231154 0.671007 0.0680226 0.560771C0.11293 0.450536 0.178747 0.350402 0.261708 0.2661C0.610718 -0.0801698 1.18345 -0.0892821 1.53246 0.2661Z" fill="white"/>
                      </svg>
                    </div>
                  </div> */}
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
                <Link to="about" className="header-buttons__content">
                  <div className="header-buttons__title">
                    {btnOne}
                  </div>
                  <div className="header-buttons__icon">
                    <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 11.2858V1.00009M9 7.28581L5 11.2858L9 7.28581ZM5 11.2858L1 7.28581L5 11.2858Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              </div>
              <Link to="portfolio" className="header-buttons__portfolio">
                <div className="header-buttons__content">
                  <div className="header-buttons__title">
                    {btnTwo}
                  </div>
                  <div className="header-buttons__icon">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.4784 5.25866C14.817 5.70152 14.817 6.29938 14.4784 6.74152C13.412 8.13366 10.8534 11.0001 7.86629 11.0001C4.87915 11.0001 2.32057 8.13366 1.25415 6.74152C1.08942 6.52947 1 6.2686 1 6.00009C1 5.73158 1.08942 5.47071 1.25415 5.25866C2.32057 3.86652 4.87915 1.00009 7.86629 1.00009C10.8534 1.00009 13.412 3.86652 14.4784 5.25866V5.25866Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.86628 8.14295C9.04974 8.14295 10.0091 7.18356 10.0091 6.00009C10.0091 4.81662 9.04974 3.85723 7.86628 3.85723C6.68281 3.85723 5.72342 4.81662 5.72342 6.00009C5.72342 7.18356 6.68281 8.14295 7.86628 8.14295Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
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
              {/* <a href="#" className="header-social__item">
                <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4365 18.1384C16.8378 17.8571 17.0315 17.3929 17.0315 16.7545C17.0454 16.4509 16.9808 16.1518 16.8424 15.8795C16.7179 15.6607 16.5333 15.4777 16.3073 15.3482C16.0729 15.2107 15.8126 15.1196 15.5415 15.0804C15.2463 15.0268 14.9464 15 14.6512 15.0045H11.4082V18.5625H14.9187C15.5231 18.567 16.0351 18.4241 16.4365 18.1384V18.1384ZM16.9808 21.3527C16.5287 21.0179 15.9244 20.8527 15.1725 20.8527H11.399V25.0491H15.0987C15.4446 25.0491 15.7629 25.0179 16.072 24.9554C16.3645 24.9 16.6432 24.7909 16.8932 24.6339C17.1284 24.4866 17.3176 24.2857 17.4606 24.0268C17.599 23.7679 17.6682 23.4375 17.6682 23.0402C17.6682 22.25 17.4375 21.692 16.9808 21.3527V21.3527ZM20.6667 0C9.25387 0 0 8.95536 0 20C0 31.0446 9.25387 40 20.6667 40C32.0795 40 41.3333 31.0446 41.3333 20C41.3333 8.95536 32.0795 0 20.6667 0ZM24.657 12.808H31.0415V14.3125H24.657V12.808ZM20.6667 25.2143C20.368 25.7629 19.9416 26.2367 19.4211 26.5982C18.8768 26.9643 18.2725 27.2321 17.6312 27.3884C16.9604 27.5624 16.2683 27.648 15.5738 27.6429H7.93452V12.4152H15.3616C16.1135 12.4152 16.7963 12.4821 17.419 12.6071C18.0372 12.7321 18.5631 12.9464 19.006 13.2366C19.4442 13.5268 19.7902 13.9152 20.0347 14.3973C20.2746 14.875 20.3991 15.4732 20.3991 16.183C20.3991 16.9509 20.2192 17.5848 19.8594 18.0982C19.4949 18.6116 18.969 19.0268 18.254 19.3527C19.2274 19.6205 19.9424 20.0982 20.4129 20.7679C20.8927 21.4464 21.128 22.2589 21.128 23.2143C21.128 23.9911 20.9757 24.6563 20.6667 25.2143ZM33.528 22.8571H25.2982C25.2982 23.7232 25.6073 24.5536 26.0732 25C26.5437 25.442 27.2173 25.6652 28.0984 25.6652C28.735 25.6652 29.2747 25.5089 29.736 25.2009C30.1927 24.8929 30.4695 24.567 30.571 24.2277H33.3296C32.8868 25.5536 32.2132 26.5 31.2998 27.0714C30.3957 27.6429 29.2885 27.9286 28.0015 27.9286C27.1019 27.9286 26.2946 27.7857 25.5704 27.5134C24.8738 27.25 24.2464 26.8482 23.7298 26.3304C23.2203 25.7985 22.8266 25.1731 22.5719 24.4911C22.2905 23.7366 22.1521 22.942 22.1613 22.1429C22.1613 21.317 22.3043 20.5491 22.5811 19.8348C23.1116 18.4464 24.2141 17.3348 25.6211 16.7589C26.3731 16.4554 27.1804 16.3036 27.9969 16.3125C28.9656 16.3125 29.8052 16.4911 30.5341 16.8571C31.2358 17.2067 31.845 17.7077 32.3147 18.3214C32.7807 18.933 33.1082 19.6295 33.3158 20.4152C33.5141 21.1875 33.5833 22 33.528 22.8571V22.8571ZM27.9 18.5893C27.4018 18.5893 26.982 18.6741 26.6591 18.8393C26.3362 19.0045 26.0686 19.2098 25.8656 19.4464C25.6723 19.6749 25.5294 19.9392 25.4458 20.2232C25.372 20.4598 25.3213 20.7009 25.3028 20.9464H30.4003C30.3265 20.1741 30.0497 19.6027 29.6807 19.2009C29.2932 18.8036 28.6704 18.5893 27.9 18.5893V18.5893Z" fill="white"/>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header