import React from "react";
import FooterContacts from "../components/footer-contacts";
import FooterForm from "../components/footer-form";
import FooterIllustration from "../images/footer-illustration.svg";

const Footer = () => {

    return(
        <footer className="footer section">
            <img width="100%" height="100%"  src={FooterIllustration} className="footer-illustration" data-aos="fade-left" alt=""/>
            <div  id="footer" className="footer-title">
                <h2 className="footer-title__title title-h2-white">Готовы обсудить ваш проект или идею?</h2>
                <h3 className="footer-title__subtitle title-h3-white">Свяжитесь со мной и мы обсудим детально</h3>
            </div>
            <div className="footer-content section-content">
                <div className="footer-content-plane" data-aos="fade-right"></div>
                <FooterForm />
                <div className="footer-contacts order-lg-2 order-1" data-aos="fade-left">
                    <FooterContacts />
                </div>
            </div>
            <div className="footer-copyright">
                © {(new Date().getFullYear())} Дмитрий Бородин
            </div>
        </footer>
    );
}

export default Footer