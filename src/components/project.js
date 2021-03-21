import React from "react";

const Project = (
  {
    content: {
        title,
        link,
        image: {
            file: {
                url
            }
        },
        description: {
            description
        }
    }
  }
) => {
  return (
    <div className="col-lg-6">
        <div className="portfolio-item">
            <div className="portfolio-item-preview">
                {
                    url ? <img src={url} alt={title} /> : ''
                }
            </div>
            <div className="portfolio-info">
                <div className="portfolio-info__title title-h4">
                    { title }
                </div>
                <div className="portfolio-info__separator"></div>
                <div className="portfolio-info__description">
                    { description }
                </div>
                <a href={link} target="_blank" rel="noreferrer" className="portfolio-info__link">
                    Посмотреть
                </a>
            </div>
        </div>
    </div>
  )
}



export default Project