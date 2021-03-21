import React from "react"

const Service = (
  {
    content: {
      title,
      description: {
        description
      },
      checkList,
      price,
      days,
      icon: {
        file: {
          url
        }
      }
    }
  }
) => {
  return (

    <div className="col-lg-4">
        <div className="services-item">
            <div className="services-item__icon">
              {
                url ? <img width="100%" height="100%"  src={url} alt={title} /> : ''
              }
            </div>
            <div className="services-item__title">
              {title}
            </div>
            <div className="services-item__separator"></div>
            <div className="services-item__description">
              {description}
            </div>
            <ul className="services-item-list">
              {
                checkList.map(( listItem, i ) => (
                  <li key={i} className="services-item-list__item">{listItem}</li>
                ))
              }
            </ul>
            <div className="services-item-price">
                <span className="services-item-price__value">От {price} ₽</span>
                <span className="services-item-price__separator"> / </span>
                <span className="services-item-price__time">{days}</span>
                <span className="services-item-price__days">дней</span>
            </div>
            <div className="services-item-btn btn-orange">
                <div className="services-item-btn__title">
                    Оставить заявку
                </div>
                <div className="services-item-btn__icon">
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5H1M15 1L19 5L15 1ZM19 5L15 9L19 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
            </div>
        </div>
    </div>   
  )
}



export default Service