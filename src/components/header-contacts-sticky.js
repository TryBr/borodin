import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const HeaderContactsSticky = () => {


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
    <a href={`tel:${phone}`}  className="header-sticky-contacts__item  header-sticky-contacts__phone">
        <div className="header-sticky-contacts__icon header-sticky-contacts__icon_phone"></div>
        <div className="header-sticky-contacts__value">
            {phone}
        </div>
    </a>
    <a href={`mailto:${email}`} className="header-sticky-contacts__item header-sticky-contacts__email">
        <div className="header-sticky-contacts__icon header-sticky-contacts__icon_email"></div>
        <div className="header-sticky-contacts__value">
            {email}
        </div>
    </a>
    </>
  );
};

export default HeaderContactsSticky