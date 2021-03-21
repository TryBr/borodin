import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Reviews = () => (
  <div className="reviews">
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
                    </div>
                </div>
            </div>
      </div>
  </div>
)

export default Reviews