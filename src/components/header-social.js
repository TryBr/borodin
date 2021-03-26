import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const HeaderSocial = () => {


  const { allContentfulContacts } = useStaticQuery(
    graphql`
        query {
          allContentfulContacts {
            nodes {
              whatsapp
              vk
              telegram
            }
          }
        }
    `
  )
  
  const whatsapp = allContentfulContacts.nodes[0].whatsapp ? allContentfulContacts.nodes[0].whatsapp : "",
        telegram = allContentfulContacts.nodes[0].telegram ? allContentfulContacts.nodes[0].telegram : "",
        vk = allContentfulContacts.nodes[0].vk ? allContentfulContacts.nodes[0].vk : "";

  return (
    <>
    <a href={telegram} target="_blank" rel="noreferrer" className="header-social__item header-social__item_tg" aria-label="tg"> </a>
    <a href={whatsapp} target="_blank" rel="noreferrer" className="header-social__item header-social__item_wa" aria-label="wa"> </a>
    <a href={vk} target="_blank" rel="noreferrer" className="header-social__item header-social__item_vk" aria-label="vk"> </a>
    </>
  );
};

export default HeaderSocial