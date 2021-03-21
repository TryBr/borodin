import React from "react";
import { useStaticQuery, StaticQuery, graphql } from "gatsby";
import Service from "../components/service";

const Services = () => {
    const { data } = useStaticQuery(
        graphql`
            query {
                allContentfulService(sort: {order: DESC, fields: id}, filter: {id: {}}) {
                    edges {
                    node {
                        id
                        title
                        days
                        icon {
                        file {
                            url
                        }
                        }
                        price
                        description {
                        description
                        }
                        checkList
                    }
                    }
                }
            }
        `
    )

    console.log(data);

    return (
        <section className="services section" data-aos="fade-up" id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="services-title title-h2">Возможности и цены</h2>
                </div>
            </div>
            <div className="row">
                {
                    data.map(({ node }) => (
                        <Service key={node.id} content={node} />
                    ))
                }
            </div>
        </div>
      </section>
    )
}


// const Services = () => (
    
//   <section className="services section" data-aos="fade-up" id="services">
//     <div className="container">
//         <div className="row">
//             <div className="col-lg-12">
//                 <h2 className="services-title title-h2">Возможности и цены</h2>
//             </div>
//         </div>
//         <div className="row">
//             <StaticQuery
//                 query={graphql`
//                     query {
//                         allContentfulService(sort: {order: DESC, fields: id}, filter: {id: {}}) {
//                             edges {
//                               node {
//                                 id
//                                 title
//                                 days
//                                 icon {
//                                   file {
//                                     url
//                                   }
//                                 }
//                                 price
//                                 description {
//                                   description
//                                 }
//                                 checkList
//                               }
//                             }
//                           }
//                     }
//                 `}
//                 render={
//                     ({
//                         allContentfulService: {
//                             edges
//                         }
//                     }) => (
//                         edges.map(({ node }) => (
//                         <Service key={node.id} content={node} />
//                         ))
//                     )
//                 }
//             />
//             {/* <div className="col-lg-4">
//                 <div className="services-item">
//                     <div className="services-item__icon">
                        
//                     </div>
//                     <div className="services-item__title">
//                         Продающий лендинг
//                     </div>
//                     <div className="services-item__separator"></div>
//                     <div className="services-item__description">
//                         Хотите быстро продавать в интернете? Продающая страница поможет презентовать услугу или товар, сконцентрирует пользователя на преимуществах и он обратится именно к вам.
//                     </div>
//                     <ul className="services-item-list">
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                     </ul>
//                     <div className="services-item-price">
//                         <span className="services-item-price__value">От 35 000 ₽</span>
//                         <span className="services-item-price__separator"> / </span>
//                         <span className="services-item-price__time">5-10</span>
//                         <span className="services-item-price__days">дней</span>
//                     </div>
//                     <div className="services-item-btn btn-orange">
//                         <div className="services-item-btn__title">
//                             Оставить заявку
//                         </div>
//                         <div className="services-item-btn__icon">
//                         <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M19 5H1M15 1L19 5L15 1ZM19 5L15 9L19 5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         </svg>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-lg-4">
//                 <div className="services-item">
//                     <div className="services-item__icon">
                        
//                     </div>
//                     <div className="services-item__title">
//                         Сайт компании
//                     </div>
//                     <div className="services-item__separator"></div>
//                     <div className="services-item__description">
//                         Желаете рассказать о своей компании, услугах или товарах в интернете? Многостраничный сайт с необходимым функционалом внутри идеально вам подойдет.
//                     </div>
//                     <ul className="services-item-list">
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                     </ul>
//                     <div className="services-item-price">
//                         <span className="services-item-price__value">От 45 000 ₽</span>
//                         <span className="services-item-price__separator"> / </span>
//                         <span className="services-item-price__time">10-20</span>
//                         <span className="services-item-price__days">дней</span>
//                     </div>
//                     <div className="services-item-btn btn-orange">
//                         <div className="services-item-btn__title">
//                             Оставить заявку
//                         </div>
//                         <div className="services-item-btn__icon">
//                         <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M19 5H1M15 1L19 5L15 1ZM19 5L15 9L19 5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         </svg>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-lg-4">
//                 <div className="services-item">
//                     <div className="services-item__icon">
                        
//                     </div>
//                     <div className="services-item__title">
//                         Интернет-магазин
//                     </div>
//                     <div className="services-item__separator"></div>
//                     <div className="services-item__description">
//                         Лучшее решение для осуществления продаж продукции или услуг компании. Комплексная разработка интернет-магазина любой сложности. Интеграция с 1С, службами доставки и оплаты.
//                     </div>
//                     <ul className="services-item-list">
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                         <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
//                     </ul>
//                     <div className="services-item-price">
//                         <span className="services-item-price__value">От 90 000 ₽</span>
//                         <span className="services-item-price__separator"> / </span>
//                         <span className="services-item-price__time">15-30</span>
//                         <span className="services-item-price__days">дней</span>
//                     </div>
//                     <div className="services-item-btn btn-orange">
//                         <div className="services-item-btn__title">
//                             Оставить заявку
//                         </div>
//                         <div className="services-item-btn__icon">
//                         <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M19 5H1M15 1L19 5L15 1ZM19 5L15 9L19 5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         </svg>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//         </div>
//     </div>
//   </section>
// )

export default Services