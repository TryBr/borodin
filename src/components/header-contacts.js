import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const HeaderContacts = () => {


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
    <a href={`tel:${phone}`}  className="header-contacts__item  header-contacts__phone">
        <div className="header-contacts__icon header-contacts__icon_phone"></div>
        <div className="header-contacts__value">
            {phone}
        </div>
    </a>
    <a href={`mailto:${email}`} className="header-contacts__item header-contacts__email">
        <div className="header-contacts__icon header-contacts__icon_email"></div>
        <div className="header-contacts__value">
            {email}
        </div>
    </a>
    </>
  );
};

export default HeaderContacts