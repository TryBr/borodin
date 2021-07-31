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
                    url ? <img className="portfolio-item-preview__img" src={url} alt={title} /> : ''
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
                <div className="portfolio-info-btn btn-orange">
                    <a href={link} target="_blank" rel="noreferrer" className="portfolio-info-btn__link">
                        <div className="portfolio-info-btn__title">
                        Посмотреть
                        </div>
                        <div className="portfolio-info-btn__icon"></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}



export default Project