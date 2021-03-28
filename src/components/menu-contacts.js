import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const MenuContacts = () => {


  const { allContentfulContacts } = useStaticQuery(
    graphql`
        query {
          allContentfulContacts {
            nodes {
              phone
              email
            }
          }
        }
    `
  )
  
  const phone = allContentfulContacts.nodes[0].phone ? allContentfulContacts.nodes[0].phone : "",
        email = allContentfulContacts.nodes[0].email ? allContentfulContacts.nodes[0].email : "";

  return (
    <>
    <a href={`tel:${phone}`} className="menu-contacts__item">
        <div className="menu-contacts__icon menu-contacts__icon_phone"></div>
        <div className="menu-contacts__value">
        {phone}
        </div>
    </a>
    <a href={`mailto:${email}`} className="menu-contacts__item">
        <div className="menu-contacts__icon menu-contacts__icon_email"></div>
        <div className="menu-contacts__value">
            {email}
        </div>
    </a>
    </>
  );
};

export default MenuContacts