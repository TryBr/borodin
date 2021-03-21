import * as React from "react";
import SwiperCore, { Autoplay } from 'swiper';
import { useStaticQuery, graphql } from "gatsby";
import { Swiper, SwiperSlide } from 'swiper/react';
import Client from "../components/client";

// install Swiper modules
SwiperCore.use([Autoplay]);


const Clients = () => {

    const { allContentfulClients } = useStaticQuery(
        graphql`
            query {
              allContentfulClients(
                sort: {fields: contentful_id, order: ASC}
                filter: {node_locale: {eq: "ru-RU"}}
              ) {
                nodes {
                  id,
                  logos {
                    file {
                      url
                    }
                  }
                }
              }
            }
        `
    )

    console.log("allContentfulClients");
    console.log(allContentfulClients);

    return(
        <div className="clients section" data-aos="fade-up">
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
                                        {
                                            allContentfulClients.nodes.map((node) => (
                                                <Client key={node.id} content={node} />
                                            ))
                                        }
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="clients-slider-mobile">
                                <Swiper
                                spaceBetween={0}
                                slidesPerView={2}
                                slidesPerGroup={2}
                                loop={true}
                                speed={10000}
                                freeMode={true}
                                autoplay={{
                                    disableOnInteraction: false
                                }}
                                >
                                    <SwiperSlide className="clients-item">
                                        {
                                            allContentfulClients.nodes.map((node) => (
                                                <Client key={node.id} content={node} />
                                            ))
                                        }
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Clients