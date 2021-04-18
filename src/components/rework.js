import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "react-scroll";
import HtmlParser from 'html-react-parser';
import ReworkRocket from "../images/rework-illustration.svg";
import ReworkStars from "../images/stars.svg";
import ReworkStarsMobile from "../images/stars-m.svg";
import ReworkPlanets from "../images/planets.svg";
import ReworkPlanetsMobile from "../images/planets-m.svg";

const Rework = () => {

    const { allContentfulRework } = useStaticQuery(
        graphql`
            query {
              allContentfulRework(
                filter: {node_locale: {eq: "ru-RU"}}
              ) {
                nodes {
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
          list = allContentfulRework.nodes[0].list;

    return(
        <section className="rework section" id="rework">
            <div className="rework-stars-mobile">
                <img src={ ReworkStarsMobile } alt=""/>
            </div>
            <div className="rework-stars">
                <img width="1445" height="823" src={ ReworkStars } alt=""/>
            </div>
            <div className="rework-planets">
                <img width="1482" height="779" src={ ReworkPlanets } alt=""/>
            </div>
            <div className="rework-planets-mobile">
                <img src={ ReworkPlanetsMobile } alt=""/>
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
                                    <img width="265" height="375" src={ReworkRocket} alt="Вашему сайту нужны доработки?"/>
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