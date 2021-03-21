import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Service from "../components/service";



const Services = () => (
  <section className="services section" data-aos="fade-up" id="services">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2 className="services-title title-h2">Возможности и цены</h2>
            </div>
        </div>
        <div className="row">
            <StaticQuery
                query={graphql`
                    Query {
                        allContentfulService(sort: {fields: id, order: DESC}) {
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
                            description {
                                content {
                                content {
                                    value
                                }
                                }
                            }
                            list {
                                content {
                                content {
                                    value
                                }
                                }
                            }
                            price
                            }
                        }
                        }
                    }
                `}
                render={
                    ({
                        allContentfulService: {
                        edges
                        }
                    }) => (
                        edges.map(({ node }) => (
                        <Service key={node.id} content={node} />
                        ))
                    )
                }
            />
            {/* <div className="col-lg-4">
                <div className="services-item">
                    <div className="services-item__icon">
                        
                    </div>
                    <div className="services-item__title">
                        Продающий лендинг
                    </div>
                    <div className="services-item__separator"></div>
                    <div className="services-item__description">
                        Хотите быстро продавать в интернете? Продающая страница поможет презентовать услугу или товар, сконцентрирует пользователя на преимуществах и он обратится именно к вам.
                    </div>
                    <ul className="services-item-list">
                        <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
                        <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
                        <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
                        <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
                        <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
                    </ul>
                    <div className="services-item-price">
                        <span className="services-item-price__value">От 35 000 ₽</span>
                        <span className="services-item-price__separator"> / </span>
                        <span className="services-item-price__time">5-10</span>
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
            <div className="col-lg-4">
                <div className="services-item">
                    <div className="services-item__icon">
                        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="90" cy="90" r="89" stroke="url(#paint0_linear__comp)" stroke-width="2"/>
                            <path d="M62.7358 98.2993H65.1068V100.67H62.7358V98.2993Z" fill="url(#paint1_linear__comp)"/>
                            <path d="M69.846 98.2993H72.2169V100.67H69.846V98.2993Z" fill="url(#paint2_linear__comp)"/>
                            <path d="M76.9621 98.2993H79.333V100.67H76.9621V98.2993Z" fill="url(#paint3_linear__comp)"/>
                            <path d="M124.379 99.4839H114.895V94.7419H122.008C124.623 94.7419 126.75 92.6152 126.75 90C126.75 87.7668 125.197 85.889 123.117 85.3883C122.604 81.9661 119.644 79.3306 116.081 79.3306C115.68 79.3306 115.285 79.377 114.895 79.4447V60.3629H110.153V53.25H69.8468V55.735C69.0167 55.878 68.2156 56.1605 67.4758 56.594C66.3876 55.9555 65.1737 55.621 63.9194 55.621C60.356 55.621 57.3957 58.2565 56.8834 61.6786C54.8031 62.1793 53.25 64.0571 53.25 66.2903C53.25 68.9056 55.3767 71.0323 57.9919 71.0323H65.1048V93.5565H55.621V119.637H53.25V126.75H126.75V119.637H124.379V99.4839ZM120.823 86.4435V87.629H122.008C123.316 87.629 124.379 88.6924 124.379 90C124.379 91.3076 123.316 92.371 122.008 92.371H103.04C101.733 92.371 100.669 91.3076 100.669 90C100.669 88.6924 101.733 87.629 103.04 87.629H104.226V86.4435C104.226 83.8283 106.352 81.7016 108.968 81.7016C109.984 81.7016 110.968 82.0385 111.809 82.6735L112.524 83.213L113.239 82.6735C114.081 82.0385 115.065 81.7016 116.081 81.7016C118.696 81.7016 120.823 83.8283 120.823 86.4435ZM112.524 80.3037C111.436 79.6652 110.222 79.3306 108.968 79.3306C105.878 79.3306 103.248 81.3149 102.269 84.0726H93.5565V86.4435H99.914C98.9253 87.3136 98.2984 88.5836 98.2984 90C98.2984 92.6152 100.425 94.7419 103.04 94.7419H112.524V99.4839H91.1855V62.7339H112.524V80.3037ZM107.782 60.3629H91.1855V55.621H107.782V60.3629ZM88.8145 55.621V60.3629H72.2177V55.621H88.8145ZM57.9919 68.6613C56.6843 68.6613 55.621 67.5979 55.621 66.2903C55.621 64.9827 56.6843 63.9194 57.9919 63.9194H59.1774V62.7339C59.1774 60.1186 61.3041 57.9919 63.9194 57.9919C64.9352 57.9919 65.9193 58.3288 66.7609 58.9638L67.4758 59.5033L68.1907 58.9638C68.6978 58.5812 69.2598 58.3213 69.8468 58.1639V60.3629H65.1048V68.6613H57.9919ZM67.4758 62.7339H88.8145V99.4839H86.4435V93.5565H67.4758V62.7339ZM57.9919 95.9274H84.0726V106.597H117.266V104.226H86.4435V101.855H122.008V104.226H119.637V106.597H122.008V119.637H119.637V108.968H110.153V119.637H107.782V108.968H98.2984V119.637H95.9274V108.968H86.4435V119.637H79.3306V103.04H76.9597V119.637H72.2177V103.04H69.8468V119.637H65.1048V103.04H62.7339V119.637H57.9919V95.9274ZM117.266 119.637H112.524V111.339H117.266V119.637ZM105.411 119.637H100.669V111.339H105.411V119.637ZM93.5565 119.637H88.8145V111.339H93.5565V119.637ZM124.379 124.379H55.621V122.008H124.379V124.379Z" fill="url(#paint4_linear__comp)"/>
                            <path d="M69.846 65.1034H86.4427V67.4744H69.846V65.1034Z" fill="url(#paint5_linear__comp)"/>
                            <path d="M69.846 74.5882H86.4427V76.9592H69.846V74.5882Z" fill="url(#paint6_linear__comp)"/>
                            <path d="M69.846 84.073H86.4427V86.444H69.846V84.073Z" fill="url(#paint7_linear__comp)"/>
                            <path d="M72.2186 69.8467H74.5896V72.2176H72.2186V69.8467Z" fill="url(#paint8_linear__comp)"/>
                            <path d="M76.9621 69.8467H79.333V72.2176H76.9621V69.8467Z" fill="url(#paint9_linear__comp)"/>
                            <path d="M81.7016 69.8467H84.0726V72.2176H81.7016V69.8467Z" fill="url(#paint10_linear__comp)"/>
                            <path d="M72.2186 79.3296H74.5896V81.7006H72.2186V79.3296Z" fill="url(#paint11_linear__comp)"/>
                            <path d="M76.9621 79.3296H79.333V81.7006H76.9621V79.3296Z" fill="url(#paint12_linear__comp)"/>
                            <path d="M81.7016 79.3296H84.0726V81.7006H81.7016V79.3296Z" fill="url(#paint13_linear__comp)"/>
                            <path d="M72.2186 88.8144H74.5896V91.1854H72.2186V88.8144Z" fill="url(#paint14_linear__comp)"/>
                            <path d="M76.9621 88.8144H79.333V91.1854H76.9621V88.8144Z" fill="url(#paint15_linear__comp)"/>
                            <path d="M81.7016 88.8144H84.0726V91.1854H81.7016V88.8144Z" fill="url(#paint16_linear__comp)"/>
                            <path d="M93.557 65.1034H110.154V67.4744H93.557V65.1034Z" fill="url(#paint17_linear__comp)"/>
                            <path d="M93.557 74.5882H110.154V76.9592H93.557V74.5882Z" fill="url(#paint18_linear__comp)"/>
                            <path d="M95.9278 69.8467H98.2988V72.2176H95.9278V69.8467Z" fill="url(#paint19_linear__comp)"/>
                            <path d="M100.671 69.8467H103.042V72.2176H100.671V69.8467Z" fill="url(#paint20_linear__comp)"/>
                            <path d="M105.413 69.8467H107.784V72.2176H105.413V69.8467Z" fill="url(#paint21_linear__comp)"/>
                            <path d="M95.9278 79.3296H98.2988V81.7006H95.9278V79.3296Z" fill="url(#paint22_linear__comp)"/>
                            <path d="M100.671 79.3296H103.042V81.7006H100.671V79.3296Z" fill="url(#paint23_linear__comp)"/>
                            <defs>
                            <linearGradient id="paint0_linear__comp" x1="0" y1="0" x2="192.556" y2="17.5494" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear__comp" x1="62.7358" y1="98.2993" x2="65.2721" y2="98.5304" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear__comp" x1="69.846" y1="98.2993" x2="72.3823" y2="98.5304" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear__comp" x1="76.9621" y1="98.2993" x2="79.4984" y2="98.5304" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint4_linear__comp" x1="53.25" y1="53.25" x2="131.877" y2="60.416" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint5_linear__comp" x1="69.846" y1="65.1034" x2="82.5693" y2="73.2206" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint6_linear__comp" x1="69.846" y1="74.5882" x2="82.5693" y2="82.7054" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint7_linear__comp" x1="69.846" y1="84.073" x2="82.5693" y2="92.1902" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint8_linear__comp" x1="72.2186" y1="69.8467" x2="74.755" y2="70.0778" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint9_linear__comp" x1="76.9621" y1="69.8467" x2="79.4984" y2="70.0778" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint10_linear__comp" x1="81.7016" y1="69.8467" x2="84.2379" y2="70.0778" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint11_linear__comp" x1="72.2186" y1="79.3296" x2="74.755" y2="79.5608" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint12_linear__comp" x1="76.9621" y1="79.3296" x2="79.4984" y2="79.5608" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint13_linear__comp" x1="81.7016" y1="79.3296" x2="84.2379" y2="79.5608" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint14_linear__comp" x1="72.2186" y1="88.8144" x2="74.755" y2="89.0456" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint15_linear__comp" x1="76.9621" y1="88.8144" x2="79.4984" y2="89.0456" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint16_linear__comp" x1="81.7016" y1="88.8144" x2="84.2379" y2="89.0456" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint17_linear__comp" x1="93.557" y1="65.1034" x2="106.28" y2="73.2206" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint18_linear__comp" x1="93.557" y1="74.5882" x2="106.28" y2="82.7054" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint19_linear__comp" x1="95.9278" y1="69.8467" x2="98.4642" y2="70.0778" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint20_linear__comp" x1="100.671" y1="69.8467" x2="103.208" y2="70.0778" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint21_linear__comp" x1="105.413" y1="69.8467" x2="107.949" y2="70.0778" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint22_linear__comp" x1="95.9278" y1="79.3296" x2="98.4642" y2="79.5608" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint23_linear__comp" x1="100.671" y1="79.3296" x2="103.208" y2="79.5608" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="services-item__title">
                        Сайт компании
                    </div>
                    <div className="services-item__separator"></div>
                    <div className="services-item__description">
                        Желаете рассказать о своей компании, услугах или товарах в интернете? Многостраничный сайт с необходимым функционалом внутри идеально вам подойдет.
                    </div>
                    <ul className="services-item-list">
                        <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
                        <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
                        <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
                        <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
                        <li className="services-item-list__item">Адаптивность под мобильные устройства</li>
                    </ul>
                    <div className="services-item-price">
                        <span className="services-item-price__value">От 45 000 ₽</span>
                        <span className="services-item-price__separator"> / </span>
                        <span className="services-item-price__time">10-20</span>
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
            <div className="col-lg-4">
                <div className="services-item">
                    <div className="services-item__icon">
                        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="90" cy="90" r="89" stroke="url(#paint0_linear__es)" stroke-width="2"/>
                            <path d="M125.25 80.0971C125.25 77.8012 123.382 75.9335 121.086 75.9335H112.562L102.052 57.7292C100.822 55.5996 98.0885 54.8669 95.959 56.0967C94.927 56.6923 94.1889 57.6542 93.8806 58.8051C93.5722 59.9558 93.7305 61.1579 94.3262 62.1896L102.261 75.9336H96.5054C95.753 75.9336 95.1431 76.5436 95.1431 77.2959C95.1431 78.0482 95.753 78.6582 96.5054 78.6582H103.834L106.322 82.9665C106.918 83.9982 107.879 84.7363 109.03 85.0447C109.414 85.1477 109.804 85.1986 110.192 85.1986C110.965 85.1986 111.727 84.9959 112.414 84.5992C113.446 84.0037 114.184 83.0418 114.493 81.8908C114.786 80.7959 114.656 79.655 114.13 78.6582H121.086C121.88 78.6582 122.525 79.3037 122.525 80.0972V87.5726C122.525 88.3661 121.88 89.0116 121.086 89.0116H59.6637C58.8702 89.0116 58.2246 88.3661 58.2246 87.5726V80.0972C58.2246 79.3037 58.8702 78.6582 59.6637 78.6582H66.6201C66.0938 79.655 65.9639 80.7959 66.2573 81.8908C66.5657 83.0418 67.3038 84.0037 68.3354 84.5991C69.0226 84.9959 69.7854 85.1986 70.5584 85.1986C70.9458 85.1986 71.3357 85.1477 71.7199 85.0447C72.8706 84.7363 73.8325 83.9982 74.4281 82.9665L76.9156 78.6582L84.0629 78.6581C84.8153 78.6581 85.4252 78.048 85.4252 77.2958C85.4252 76.5434 84.8152 75.9335 84.0629 75.9335L78.4886 75.9336L86.4236 62.1897C87.0195 61.1579 87.1778 59.9559 86.8694 58.8051C86.561 57.6542 85.8229 56.6923 84.7912 56.0968C82.6612 54.8669 79.928 55.5997 78.6984 57.7292L68.1884 75.9333H59.6637C57.3679 75.9333 55.5 77.8012 55.5 80.0971V87.5724C55.5 87.6916 55.5063 87.8092 55.5161 87.9258C55.4932 88.0795 55.4948 88.2394 55.5279 88.4004L61.9893 119.81C62.6377 122.961 65.4435 125.249 68.6611 125.249H112.087C115.305 125.249 118.111 122.962 118.759 119.81L125.222 88.4006C125.255 88.2396 125.257 88.0796 125.234 87.9258C125.244 87.8092 125.25 87.6915 125.25 87.5724V80.0971ZM111.861 81.1855C111.741 81.6333 111.454 82.0076 111.052 82.2393C110.651 82.471 110.183 82.5327 109.735 82.4127C109.287 82.2927 108.913 82.0055 108.681 81.6039L96.6857 60.8271C96.454 60.4258 96.3924 59.958 96.5125 59.5102C96.6323 59.0624 96.9196 58.6882 97.3213 58.4564C97.5939 58.2991 97.8918 58.2243 98.1862 58.2243C98.7864 58.2243 99.3711 58.5356 99.6922 59.0917L111.688 79.8686C111.919 80.2699 111.981 80.7378 111.861 81.1855ZM69.0624 79.8686L81.0579 59.0916C81.379 58.5353 81.9635 58.2242 82.5638 58.2242C82.8581 58.2242 83.1563 58.2991 83.4289 58.4564C83.8304 58.688 84.1175 59.0623 84.2375 59.5101C84.3576 59.9578 84.296 60.4257 84.0641 60.8271L72.0685 81.604C71.8368 82.0055 71.4625 82.2928 71.0147 82.4128C70.5672 82.5329 70.0993 82.4714 69.6975 82.2393C69.2962 82.0077 69.009 81.6335 68.889 81.1857C68.769 80.7379 68.8306 80.2701 69.0624 79.8686ZM116.091 119.261C115.701 121.152 114.018 122.524 112.088 122.524H68.6611C66.7306 122.524 65.047 121.152 64.6581 119.261L58.9842 91.6798C59.2056 91.7163 59.4323 91.7362 59.6637 91.7362H121.086C121.318 91.7362 121.544 91.7163 121.766 91.6799L116.091 119.261Z" fill="url(#paint1_linear__es)"/>
                            <path d="M91.3385 76.3317C91.0851 76.0783 90.7336 75.9326 90.3753 75.9326C90.017 75.9326 89.6656 76.0782 89.4122 76.3317C89.1588 76.5851 89.013 76.9366 89.013 77.2949C89.013 77.6531 89.1588 78.0046 89.4122 78.2579C89.6656 78.5114 90.017 78.6572 90.3753 78.6572C90.7336 78.6572 91.0851 78.5114 91.3385 78.2579C91.5919 78.0046 91.7376 77.6531 91.7376 77.2949C91.7376 76.9366 91.5919 76.5851 91.3385 76.3317Z" fill="url(#paint2_linear__es)"/>
                            <path d="M69.9335 116.392L67.9385 96.5027C67.8634 95.7539 67.1955 95.2067 66.447 95.2831C65.6985 95.3583 65.1524 96.026 65.2275 96.7746L67.2225 116.664C67.2929 117.367 67.8851 117.891 68.5763 117.891C68.6218 117.891 68.6677 117.888 68.7139 117.884C69.4625 117.809 70.0085 117.141 69.9335 116.392Z" fill="url(#paint3_linear__es)"/>
                            <path d="M79.4753 95.276C78.7229 95.276 78.113 95.886 78.113 96.6383V116.528C78.113 117.28 78.7229 117.89 79.4753 117.89C80.2277 117.89 80.8376 117.28 80.8376 116.528V96.6383C80.8376 95.886 80.2277 95.276 79.4753 95.276Z" fill="url(#paint4_linear__es)"/>
                            <path d="M90.3753 95.276C89.6229 95.276 89.013 95.886 89.013 96.6383V110.67C89.013 111.422 89.6229 112.032 90.3753 112.032C91.1277 112.032 91.7376 111.422 91.7376 110.67V96.6383C91.7376 95.886 91.1277 95.276 90.3753 95.276Z" fill="url(#paint5_linear__es)"/>
                            <path d="M91.3385 115.566C91.0851 115.313 90.7336 115.167 90.3753 115.167C90.017 115.167 89.6656 115.313 89.4122 115.566C89.1588 115.82 89.013 116.171 89.013 116.53C89.013 116.888 89.1588 117.239 89.4122 117.493C89.6656 117.746 90.017 117.892 90.3753 117.892C90.7336 117.892 91.0851 117.746 91.3385 117.493C91.5919 117.239 91.7376 116.888 91.7376 116.53C91.7376 116.171 91.5919 115.82 91.3385 115.566Z" fill="url(#paint6_linear__es)"/>
                            <path d="M101.274 95.276C100.521 95.276 99.9113 95.886 99.9113 96.6383V116.528C99.9113 117.28 100.521 117.89 101.274 117.89C102.026 117.89 102.636 117.28 102.636 116.528V96.6383C102.636 95.886 102.026 95.276 101.274 95.276Z" fill="url(#paint7_linear__es)"/>
                            <path d="M114.389 95.2833C113.64 95.2064 112.97 95.7486 112.892 96.4969L110.819 116.387C110.741 117.135 111.284 117.805 112.032 117.883C112.08 117.888 112.128 117.89 112.175 117.89C112.864 117.89 113.455 117.369 113.529 116.669L115.602 96.7795C115.68 96.0312 115.137 95.3613 114.389 95.2833Z" fill="url(#paint8_linear__es)"/>
                            <defs>
                            <linearGradient id="paint0_linear__es" x1="0" y1="0" x2="192.556" y2="17.5494" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear__es" x1="55.5" y1="55.5" x2="130.115" y2="62.3005" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear__es" x1="89.013" y1="75.9326" x2="91.9277" y2="76.1982" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear__es" x1="65.2206" y1="95.276" x2="70.3097" y2="95.3728" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint4_linear__es" x1="78.113" y1="95.276" x2="81.0515" y2="95.3083" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint5_linear__es" x1="89.013" y1="95.276" x2="91.9513" y2="95.3195" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint6_linear__es" x1="89.013" y1="115.167" x2="91.9277" y2="115.433" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint7_linear__es" x1="99.9113" y1="95.276" x2="102.85" y2="95.3083" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            <linearGradient id="paint8_linear__es" x1="110.811" y1="95.276" x2="115.985" y2="95.3761" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9417"/>
                            <stop offset="1" stop-color="#F56233"/>
                            </linearGradient>
                            </defs>
                        </svg>
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
            </div> */}
        </div>
    </div>
  </section>
)

export default Services