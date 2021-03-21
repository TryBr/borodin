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
    <div className="menu-contacts">
        <a href={`tel: ${phone}`} className="menu-contacts__item  menu-contacts__phone">
          <div className="menu-contacts__icon">
            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.35271 9.13242C3.64467 7.30642 3.07968 5.30343 3.91613 4.97879C5.11255 4.51444 6.06233 4.32104 5.39735 1.8398C4.73281 -0.640296 3.13091 0.333887 1.97221 0.784262C0.633883 1.30369 -0.0131423 5.15372 1.89988 10.0844C3.81406 15.0146 6.89002 17.4177 8.2287 16.8975C9.389 16.4478 11.2258 16.0907 10.0432 13.8117C8.86098 11.5319 8.02976 12.029 6.83183 12.4946C5.99644 12.8169 5.0619 10.958 4.35271 9.13242Z" fill="white"/>
            </svg>
          </div>
          <div className="menu-contacts__value">
            {phone}
          </div>
        </a>
        <a href={`mailto: ${email}`} className="menu-contacts__item header-contacts__email">
            <div className="menu-contacts__icon">
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 0.00012207H1.5C0.675 0.00012207 0.00749999 0.675122 0.00749999 1.50012L0 10.5001C0 11.3251 0.675 12.0001 1.5 12.0001H13.5C14.325 12.0001 15 11.3251 15 10.5001V1.50012C15 0.675122 14.325 0.00012207 13.5 0.00012207ZM13.2 3.18762L7.8975 6.50262C7.6575 6.65262 7.3425 6.65262 7.1025 6.50262L1.8 3.18762C1.7248 3.14541 1.65894 3.08837 1.60642 3.01996C1.55389 2.95156 1.5158 2.87321 1.49443 2.78965C1.47307 2.70609 1.46888 2.61907 1.48212 2.53385C1.49536 2.44863 1.52575 2.36698 1.57146 2.29385C1.61717 2.22071 1.67724 2.15761 1.74804 2.10837C1.81885 2.05912 1.8989 2.02476 1.98337 2.00735C2.06784 1.98994 2.15496 1.98985 2.23947 2.00708C2.32397 2.02432 2.4041 2.05852 2.475 2.10762L7.5 5.25012L12.525 2.10762C12.5959 2.05852 12.676 2.02432 12.7605 2.00708C12.845 1.98985 12.9322 1.98994 13.0166 2.00735C13.1011 2.02476 13.1812 2.05912 13.252 2.10837C13.3228 2.15761 13.3828 2.22071 13.4285 2.29385C13.4742 2.36698 13.5046 2.44863 13.5179 2.53385C13.5311 2.61907 13.5269 2.70609 13.5056 2.78965C13.4842 2.87321 13.4461 2.95156 13.3936 3.01996C13.3411 3.08837 13.2752 3.14541 13.2 3.18762Z" fill="white"/>
              </svg>
            </div>
            <div className="menu-contacts__value">
              {email}
            </div>
        </a>
    </div>
    </>
  );
};

export default MenuContacts