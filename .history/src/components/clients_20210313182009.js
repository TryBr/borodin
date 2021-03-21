import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

const Clients = () => (
  <div className="clients">
      <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={6}
                    loop={true}
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

export default Reviews