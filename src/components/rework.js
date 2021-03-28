import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "react-scroll";
import HtmlParser from 'html-react-parser';
import Illustration from "../images/rework-illustration.svg";


const Rework = () => {

    const { allContentfulRework } = useStaticQuery(
        graphql`
            query {
              allContentfulRework(
                filter: {node_locale: {eq: "ru-RU"}}
              ) {
                nodes {
                    stars {
                        file {
                          url
                        }
                    }
                    starsMobile {
                        file {
                          url
                        }
                    }
                    planets {
                        file {
                          url
                        }
                    }
                    planetsMobile {
                        file {
                          url
                        }
                    }
                    list,
                    title {
                        title
                    }
                }
              }
            }
        `
    )

    const title = allContentfulRework.nodes[0].title.title,
          stars = allContentfulRework.nodes[0].stars.file.url,
          starsMobile = allContentfulRework.nodes[0].starsMobile.file.url,
          planets = allContentfulRework.nodes[0].planets.file.url,
          planetsMobile = allContentfulRework.nodes[0].planetsMobile.file.url,
          list = allContentfulRework.nodes[0].list;

    return(
        <section className="rework section" id="rework">
            <div className="rework-stars-mobile">
                <img src={ starsMobile } alt=""/>
            </div>
            <div className="rework-stars">
                <img src={ stars } alt=""/>
            </div>
            <div className="rework-planets">
                <img src={ planets } alt=""/>
            </div>
            <div className="rework-planets-mobile">
                <img src={ planetsMobile } alt=""/>
            </div>
            <div className="rework-content section-content">
                <div className="rework-title">
                <h2 className="rework-title__title title-h2-white">Вашему сайту нужны доработки?</h2>
                <h3 className="rework-title__subtitle title-h3-white">Помогу доделать и улучшить ваш сайт</h3>
                </div>
                <div className="rework-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-lg-1 order-2">
                                <div className="rework-info__rocket" data-aos="fade-right">
                                    <img width="265" height="375" src={Illustration} alt="Вашему сайту нужны доработки?"/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1">
                                <div className="rework-info-content" data-aos="fade-left">
                                    <div className="rework-info-content__title title-h4-white">
                                        {HtmlParser(title)}
                                    </div>
                                    <ul className="rework-list">
                                        {
                                            list.map((item, i) => (
                                                <li key={i} className="rework-list__item">{ item }</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rework-request-btn btn-orange-with-animation" data-aos="fade-up">
                    <Link to="footer" className="rework-request-btn__title">
                        Обсудить доработки
                    </Link>
                </div>
            </div>
        </section>
    );
}


export default Rework