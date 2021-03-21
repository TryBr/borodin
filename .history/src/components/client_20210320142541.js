import React, { Fragment } from "react";
import HtmlParser from 'html-react-parser';

const Client = (
    {
        content: {
          logos: {
            file: {
              url
            }
          }
        }
    }
) => {
  return (
    <>
        <img src={url} alt="" className="clients-item__logo"/>
    </>
  )
}



export default Client