import React from "react"
import { Link } from "react-scroll"

const Service = ({
  content: {
    title,
    description: { description },
    checkList,
    price,
    days,
    icon: {
      file: { url },
    },
  },
}) => {
  return (
    <div className="col-lg-4">
      <div className="services-item">
        <div className="services-item__icon">
          {url ? <img width="180" height="180" src={url} alt={title} /> : ""}
        </div>
        <div className="services-item__title">{title}</div>
        <div className="services-item__separator"></div>
        <div className="services-item__description">{description}</div>
        <ul className="services-item-list">
          {checkList.map((listItem, i) => (
            <li key={i} className="services-item-list__item">
              {listItem}
            </li>
          ))}
        </ul>
        {/* <div className="services-item-price">
                <span className="services-item-price__value">От {price} ₽</span>
                <span className="services-item-price__separator"> / </span>
                <span className="services-item-price__time">{days}</span>
                <span className="services-item-price__days">дней</span>
            </div> */}
        <div className="services-item-btn btn-orange">
          <Link to="footer" className="services-item-btn__link">
            <div className="services-item-btn__title">Оставить заявку</div>
            <div className="services-item-btn__icon"></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Service
