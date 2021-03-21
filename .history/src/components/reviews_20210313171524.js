import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import reviewAuthorPhoto from "../images/review.png";

const Reviews = () => (
  <div className="reviews">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>

        </Swiper>
      <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="reviews-title title-h2">Отзывы</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="reviews-item">
                        <div className="reviews-item-text">
                            Дмитрий мне здорово помог, когда я еще только начинал свою карьеру. Если бы не он, то мое место занял бы кто-нибудь другой!
                        </div>
                        <div className="reviews-item-separator"></div>
                        <div className="author">
                            <div className="author-photo">
                                <img src={reviewAuthorPhoto} alt="" className="author-photo__img"/>
                            </div>
                            <div className="author-info">
                                <div className="author-fio">Арнольд Шварценеггер</div>
                                <div className="author-post">Бывший Губернатор Калифорнии, терминатор</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </div>
)

export default Reviews