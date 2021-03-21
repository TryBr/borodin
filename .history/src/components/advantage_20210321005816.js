import React from "react";
import HtmlParser from 'html-react-parser';

const Advantage = (
  {
    content: {
      title: {
        title
      },
      icon: {
        file: {
          url
        }
      }
    }
  }
) => {
  return (
    <div className="col-lg-3 col-md-6">
        <div className="advantages-item">
            <div className="advantages-item__icon">
                {
                    url ? <img width="70" height="70"  src={url} alt={title} /> : ''
                }
            </div>
            <div className="advantages-item__title">
                {HtmlParser(title)}
            </div>
        </div>
    </div>
  )
}



export default Advantage