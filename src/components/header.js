import React, { useState, useEffect } from 'react';
import { slide as Menu, stack } from 'react-burger-menu';
import { Link } from "react-scroll";
import { useStaticQuery, graphql } from "gatsby";
import HtmlParser from 'html-react-parser';
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeaderContacts from "../components/header-contacts";
import HeaderSocial from "../components/header-social";
import MenuContacts from "../components/menu-contacts";
import MenuSocial from "../components/menu-social";
import HeaderFigure from "../images/header-figure.svg";

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
                illustration {
                  file {
                    url
                  }
                }
              }
            }
          }
      `
  )

  const title = allContentfulHeader.nodes[0].title.title,
        description = allContentfulHeader.nodes[0].description.description,
        illustration = allContentfulHeader.nodes[0].illustration.file.url,
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
    <Menu className="menu-mobile" isOpen={menuState} onClose={closeMenu} Animation={stack} right={true} aria-hidden="true">
      <div className="menu-close-btn" onClick={closeMenu} onKeyDown={closeMenu} role="button" tabIndex={0}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.40864 5.9983L11.7045 1.71244C11.8926 1.52432 11.9983 1.26917 11.9983 1.00312C11.9983 0.737078 11.8926 0.48193 11.7045 0.293808C11.5164 0.105686 11.2612 0 10.9952 0C10.7291 0 10.474 0.105686 10.2859 0.293808L6 4.58966L1.71414 0.293808C1.52602 0.105686 1.27087 -1.98219e-09 1.00483 0C0.738783 1.98219e-09 0.483635 0.105686 0.295513 0.293808C0.107391 0.48193 0.00170495 0.737078 0.00170495 1.00312C0.00170495 1.26917 0.107391 1.52432 0.295513 1.71244L4.59136 5.9983L0.295513 10.2842C0.201875 10.377 0.127553 10.4875 0.0768329 10.6093C0.0261132 10.731 0 10.8616 0 10.9935C0 11.1254 0.0261132 11.2559 0.0768329 11.3777C0.127553 11.4994 0.201875 11.6099 0.295513 11.7028C0.388386 11.7964 0.49888 11.8707 0.620622 11.9215C0.742363 11.9722 0.872943 11.9983 1.00483 11.9983C1.13671 11.9983 1.26729 11.9722 1.38903 11.9215C1.51077 11.8707 1.62127 11.7964 1.71414 11.7028L6 7.40693L10.2859 11.7028C10.3787 11.7964 10.4892 11.8707 10.611 11.9215C10.7327 11.9722 10.8633 11.9983 10.9952 11.9983C11.1271 11.9983 11.2576 11.9722 11.3794 11.9215C11.5011 11.8707 11.6116 11.7964 11.7045 11.7028C11.7981 11.6099 11.8724 11.4994 11.9232 11.3777C11.9739 11.2559 12 11.1254 12 10.9935C12 10.8616 11.9739 10.731 11.9232 10.6093C11.8724 10.4875 11.7981 10.377 11.7045 10.2842L7.40864 5.9983Z" fill="#FE9417"/>
        </svg>
      </div>
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
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div className="header-top-panel">
              <div className="header-top-panel__logo" data-aos="fade-right">
                <Link to="/" className="logo__link">
                  <svg viewBox="0 0 215 60" fill="none" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.492 37.8959C22.932 38.3519 24.06 39.1199 24.876 40.1999C25.692 41.2559 26.1 42.5639 26.1 44.1239C26.1 46.3319 25.236 48.0359 23.508 49.2359C21.804 50.4119 19.308 50.9999 16.02 50.9999H2.988V25.7999H15.3C18.372 25.7999 20.724 26.3879 22.356 27.5639C24.012 28.7399 24.84 30.3359 24.84 32.3519C24.84 33.5759 24.54 34.6679 23.94 35.6279C23.364 36.5879 22.548 37.3439 21.492 37.8959ZM8.784 30.1919V36.1319H14.58C16.02 36.1319 17.112 35.8799 17.856 35.3759C18.6 34.8719 18.972 34.1279 18.972 33.1439C18.972 32.1599 18.6 31.4279 17.856 30.9479C17.112 30.4439 16.02 30.1919 14.58 30.1919H8.784ZM15.588 46.6079C17.124 46.6079 18.276 46.3559 19.044 45.8519C19.836 45.3479 20.232 44.5679 20.232 43.5119C20.232 41.4239 18.684 40.3799 15.588 40.3799H8.784V46.6079H15.588ZM46.3193 51.4319C43.7033 51.4319 41.3393 50.8679 39.2273 49.7399C37.1393 48.6119 35.4953 47.0639 34.2953 45.0959C33.1193 43.1039 32.5313 40.8719 32.5313 38.3999C32.5313 35.9279 33.1193 33.7079 34.2953 31.7399C35.4953 29.7479 37.1393 28.1879 39.2273 27.0599C41.3393 25.9319 43.7033 25.3679 46.3193 25.3679C48.9353 25.3679 51.2873 25.9319 53.3753 27.0599C55.4633 28.1879 57.1073 29.7479 58.3073 31.7399C59.5073 33.7079 60.1073 35.9279 60.1073 38.3999C60.1073 40.8719 59.5073 43.1039 58.3073 45.0959C57.1073 47.0639 55.4633 48.6119 53.3753 49.7399C51.2873 50.8679 48.9353 51.4319 46.3193 51.4319ZM46.3193 46.4639C47.8073 46.4639 49.1513 46.1279 50.3513 45.4559C51.5513 44.7599 52.4873 43.7999 53.1593 42.5759C53.8553 41.3519 54.2033 39.9599 54.2033 38.3999C54.2033 36.8399 53.8553 35.4479 53.1593 34.2239C52.4873 32.9999 51.5513 32.0519 50.3513 31.3799C49.1513 30.6839 47.8073 30.3359 46.3193 30.3359C44.8313 30.3359 43.4873 30.6839 42.2873 31.3799C41.0873 32.0519 40.1393 32.9999 39.4433 34.2239C38.7713 35.4479 38.4353 36.8399 38.4353 38.3999C38.4353 39.9599 38.7713 41.3519 39.4433 42.5759C40.1393 43.7999 41.0873 44.7599 42.2873 45.4559C43.4873 46.1279 44.8313 46.4639 46.3193 46.4639ZM84.1463 50.9999L79.2863 43.9799H78.9983H73.9223V50.9999H68.0903V25.7999H78.9983C81.2303 25.7999 83.1623 26.1719 84.7943 26.9159C86.4503 27.6599 87.7223 28.7159 88.6103 30.0839C89.4983 31.4519 89.9423 33.0719 89.9423 34.9439C89.9423 36.8159 89.4863 38.4359 88.5743 39.8039C87.6863 41.1479 86.4143 42.1799 84.7583 42.8999L90.4103 50.9999H84.1463ZM84.0383 34.9439C84.0383 33.5279 83.5823 32.4479 82.6703 31.7039C81.7583 30.9359 80.4263 30.5519 78.6743 30.5519H73.9223V39.3359H78.6743C80.4263 39.3359 81.7583 38.9519 82.6703 38.1839C83.5823 37.4159 84.0383 36.3359 84.0383 34.9439ZM139.549 25.7999H150.997C153.733 25.7999 156.145 26.3279 158.233 27.3839C160.345 28.4159 161.977 29.8799 163.129 31.7759C164.305 33.6719 164.893 35.8799 164.893 38.3999C164.893 40.9199 164.305 43.1279 163.129 45.0239C161.977 46.9199 160.345 48.3959 158.233 49.4519C156.145 50.4839 153.733 50.9999 150.997 50.9999H139.549V25.7999ZM150.709 46.2119C153.229 46.2119 155.233 45.5159 156.721 44.1239C158.233 42.7079 158.989 40.7999 158.989 38.3999C158.989 35.9999 158.233 34.1039 156.721 32.7119C155.233 31.2959 153.229 30.5879 150.709 30.5879H145.381V46.2119H150.709ZM172.891 25.7999H178.723V50.9999H172.891V25.7999ZM211.416 25.7999V50.9999H206.628L194.064 35.6999V50.9999H188.304V25.7999H193.128L205.656 41.0999V25.7999H211.416Z" fill="white"/>
                    <path d="M3.316 4.19994H7.6C8.64533 4.19994 9.574 4.40527 10.386 4.81594C11.198 5.21727 11.828 5.79127 12.276 6.53794C12.724 7.27527 12.948 8.12927 12.948 9.09994C12.948 10.0706 12.724 10.9293 12.276 11.6759C11.828 12.4133 11.198 12.9873 10.386 13.3979C9.574 13.7993 8.64533 13.9999 7.6 13.9999H3.316V4.19994ZM7.516 12.4599C8.23467 12.4599 8.86467 12.3246 9.406 12.0539C9.95667 11.7739 10.3767 11.3819 10.666 10.8779C10.9647 10.3646 11.114 9.77194 11.114 9.09994C11.114 8.42794 10.9647 7.83994 10.666 7.33594C10.3767 6.82261 9.95667 6.43061 9.406 6.15994C8.86467 5.87994 8.23467 5.73994 7.516 5.73994H5.136V12.4599H7.516ZM38.5844 13.9999L38.5704 7.50394L35.3504 12.8799H34.5384L31.3184 7.58794V13.9999H29.5824V4.19994H31.0804L34.9724 10.6959L38.7944 4.19994H40.2924L40.3064 13.9999H38.5844ZM57.6535 4.19994H59.4735V13.9999H57.6535V4.19994ZM78.8122 5.73994H75.5642V4.19994H83.8802V5.73994H80.6322V13.9999H78.8122V5.73994ZM106.358 13.9999L104.356 11.1299C104.272 11.1393 104.146 11.1439 103.978 11.1439H101.766V13.9999H99.9461V4.19994H103.978C104.827 4.19994 105.565 4.33994 106.19 4.61994C106.825 4.89994 107.31 5.30127 107.646 5.82394C107.982 6.34661 108.15 6.96727 108.15 7.68594C108.15 8.42327 107.968 9.05794 107.604 9.58994C107.249 10.1219 106.736 10.5186 106.064 10.7799L108.318 13.9999H106.358ZM106.316 7.68594C106.316 7.06061 106.111 6.57994 105.7 6.24394C105.289 5.90794 104.687 5.73994 103.894 5.73994H101.766V9.64594H103.894C104.687 9.64594 105.289 9.47794 105.7 9.14194C106.111 8.79661 106.316 8.31127 106.316 7.68594ZM128.978 10.5419V13.9999H127.158V10.5699L123.308 4.19994H125.254L128.124 8.97394L131.022 4.19994H132.814L128.978 10.5419Z" fill="white"/>
                    <path d="M124.448 48.3676C124.169 48.3676 123.889 48.2619 123.67 48.0579C123.217 47.6273 123.194 46.9097 123.625 46.4564L130.189 39.4991L123.625 32.5418C123.194 32.0885 123.217 31.3709 123.67 30.9403C124.123 30.5097 124.841 30.5324 125.271 30.9856L132.576 38.721C132.992 39.1592 132.992 39.839 132.576 40.2772L125.271 48.0126C125.045 48.2467 124.743 48.3676 124.448 48.3676Z" fill="url(#paint0_linear)"/>
                    <path d="M106.44 48.3676C106.138 48.3676 105.835 48.2467 105.616 48.0126L98.3116 40.2772C97.8961 39.839 97.8961 39.1592 98.3116 38.721L105.616 30.9856C106.047 30.5324 106.765 30.5097 107.218 30.9403C107.671 31.3709 107.694 32.0885 107.263 32.5418L100.691 39.4991L107.256 46.4564C107.686 46.9097 107.664 47.6273 107.21 48.0579C106.991 48.2619 106.712 48.3676 106.44 48.3676Z" fill="url(#paint1_linear)"/>
                    <path d="M113.71 52.0011C113.65 52.0011 113.597 51.9936 113.537 51.986C112.917 51.8878 112.494 51.3137 112.585 50.6943L116.06 27.964C116.158 27.3445 116.732 26.9215 117.351 27.0122C117.971 27.1104 118.394 27.6845 118.303 28.3039L114.828 51.0342C114.745 51.6007 114.262 52.0011 113.71 52.0011Z" fill="url(#paint2_linear)"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="123.315" y1="30.631" x2="133.616" y2="31.1377" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FE9417"/>
                    <stop offset="1" stopColor="#F56233"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="98" y1="30.631" x2="108.3" y2="31.1377" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FE9417"/>
                    <stop offset="1" stopColor="#F56233"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="112.573" y1="26.9999" x2="118.764" y2="27.1296" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FE9417"/>
                    <stop offset="1" stopColor="#F56233"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </Link>
              </div>
              <div className="header-menu-btn" onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex={0}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_menu_btn)"/>
                  <rect x="12" y="15" width="16" height="1.28" rx="0.639999" fill="white"/>
                  <rect x="12" y="19.5903" width="16" height="1.28" rx="0.639999" fill="white"/>
                  <rect x="17.3334" y="24.1807" width="10.6666" height="1.28" rx="0.639999" fill="white"/>
                  <defs>
                  <linearGradient id="paint0_linear_menu_btn" x1="0" y1="0" x2="42.7901" y2="3.89986" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FE9417"/>
                  <stop offset="1" stopColor="#F56233"/>
                  </linearGradient>
                  </defs>
                </svg>
              </div>
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
                  <button className="header-contacts__menu" onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex={0} aria-label="menu">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="url(#paint0_linear__menu__btn)"/>
                      <rect x="12" y="17" width="24.9999" height="1.67751" rx="0.838757" fill="white"/>
                      <rect x="12" y="24.1612" width="24.9999" height="1.67751" rx="0.838757" fill="white"/>
                      <rect x="20.3334" y="31.3225" width="16.6666" height="1.67751" rx="0.838757" fill="white"/>
                      <defs>
                      <linearGradient id="paint0_linear__menu__btn" x1="0" y1="0" x2="53.4877" y2="4.87483" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FE9417"/>
                      <stop offset="1" stop-color="#F56233"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </button>
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
              <img fadeIn="false" loading="eager" src={illustration} alt=""/>
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