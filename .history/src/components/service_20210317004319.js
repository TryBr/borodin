import React from "react"

const Service = ({
  content: {
    title
  }
}) => (
  <div className="col-lg-4">
      <div className="services-item">
          <div className="services-item__icon">
              123
          </div>
          <div className="services-item__title">
              Интернет-магазин
          </div>
          <div className="services-item__separator"></div>
          <div className="services-item__description">
              Лучшее решение для осуществления продаж продукции или услуг компании. Комплексная разработка интернет-магазина любой сложности. Интеграция с 1С, службами доставки и оплаты.
          </div>
          <ul className="services-item-list">
              <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
              <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
              <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
              <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
              <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
          </ul>
          <div className="services-item-price">
              <span className="services-item-price__value">От 90 000 ₽</span>
              <span className="services-item-price__separator"> / </span>
              <span className="services-item-price__time">15-30</span>
              <span className="services-item-price__days">дней</span>
          </div>
          <div className="services-item-btn btn-orange">
              <div className="services-item-btn__title">
                  Оставить заявку
              </div>
              <div className="services-item-btn__icon">
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5H1M15 1L19 5L15 1ZM19 5L15 9L19 5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
          </div>
      </div>
  </div>     
)

export default Service