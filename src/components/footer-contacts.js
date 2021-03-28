import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const FooterContacts = () => {


  const { allContentfulContacts } = useStaticQuery(
    graphql`
        query {
          allContentfulContacts {
            nodes {
              phone
              email
              whatsapp
              vk
              telegram
            }
          }
        }
    `
  )
  
  const phone = allContentfulContacts.nodes[0].phone ? allContentfulContacts.nodes[0].phone : "",
        email = allContentfulContacts.nodes[0].email ? allContentfulContacts.nodes[0].email : "",
        whatsapp = allContentfulContacts.nodes[0].whatsapp ? allContentfulContacts.nodes[0].whatsapp : "",
        telegram = allContentfulContacts.nodes[0].telegram ? allContentfulContacts.nodes[0].telegram : "",
        vk = allContentfulContacts.nodes[0].vk ? allContentfulContacts.nodes[0].vk : "";

  return (
    <>
    <div className="footer-contacts-item">
        <div className="footer-contacts-item__title">Звоните:</div>
        <a href={`tel: ${phone}`} className="footer-contacts-item__value">{phone}</a>
    </div>
    <div className="footer-contacts-item">
        <div className="footer-contacts-item__title">Пишите:</div>
        <a href={`mailto: ${email}`} className="footer-contacts-item__value">{email}</a>
    </div>
    <div className="footer-contacts-item">
        <div className="footer-contacts-item__title">Соц. сети:</div>
        <div className="footer-social">
            <a href={telegram} target="_blank" rel="noreferrer" className="footer-social__item footer-social__item_tg" aria-label="tg"> </a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="footer-social__item footer-social__item_wa" aria-label="wa"> </a>
            <a href={vk} target="_blank" rel="noreferrer" className="footer-social__item footer-social__item_vk" aria-label="vk"> </a>
        </div>
    </div>
    </>
  );
};

export default FooterContacts