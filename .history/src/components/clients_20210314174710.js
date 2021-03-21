import * as React from "react";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import clientLogo from "../images/client.jpg";

// install Swiper modules
SwiperCore.use([Autoplay]);


const Clients = () => (
  <div className="clients section">
      <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="clients-slider-desktop">
                        <Swiper
                        spaceBetween={30}
                        slidesPerView={6}
                        slidesPerGroup={3}
                        loop={true}
                        speed={10000}
                        freeMode={true}
                        autoplay={{
                            disableOnInteraction: false
                        }}
                        >
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="clients-slider-mobile">
                        <Swiper
                        spaceBetween={0}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        loop={true}
                        speed={10000}
                        freeMode={true}
                        autoplay={{
                            disableOnInteraction: false
                        }}
                        >
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                            <SwiperSlide className="clients-item">
                                <img src={clientLogo} alt="" className="clients-item__logo"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
      </div>
  </div>
)

export default Clients