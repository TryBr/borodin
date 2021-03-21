import * as React from "react";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Autoplay]);


const Clients = () => (
  <div className="clients">
      <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={6}
                    loop={true}
                    speed={1500}
                    freeMode={true}
                    autoplay={{
                        delay: 100,
                        disableOnInteraction: true
                    }}
                    >
                        <SwiperSlide>
                            Клиент 1
                        </SwiperSlide>
                        <SwiperSlide>
                            Клиент 2
                        </SwiperSlide>
                        <SwiperSlide>
                            Клиент 3
                        </SwiperSlide>
                        <SwiperSlide>
                            Клиент 4
                        </SwiperSlide>
                        <SwiperSlide>
                            Клиент 5
                        </SwiperSlide>
                        <SwiperSlide> 
                            Клиент 6
                        </SwiperSlide>
                        <SwiperSlide>
                            Клиент 7
                        </SwiperSlide>
                        <SwiperSlide>
                            Клиент 8
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
      </div>
  </div>
)

export default Clients