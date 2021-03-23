import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import HtmlParser from 'html-react-parser';
import aboutPhoto from "../images/photo.jpg";
import Advantages from "../components/advantages";
import AboutIllustration from "../images/about-illustration.svg";

const About = () => {
    const { allContentfulAbout } = useStaticQuery(
        graphql`
            query {
              allContentfulAbout(
                filter: {node_locale: {eq: "ru-RU"}}
              ) {
                nodes {
                  description {
                    description
                  }
                  title
                }
              }
            }
        `
    )

    const title = allContentfulAbout.nodes[0].title,
          description = allContentfulAbout.nodes[0].description.description;

    return(
        <section className="about section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="about-title title-h2">Обо мне</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="about-illustration">
                        <img src={AboutIllustration} alt="Обо мне"/>
                    </div>
                        <div className="about-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="about-photo" data-aos="fade-right">
                                            <img width="100%" height="100%" src={aboutPhoto} alt="" className="about-photo__img"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="about-info" data-aos="fade-left">
                                            <div className="about-info__title title-h4">
                                                {HtmlParser(title)}
                                            </div>
                                            <div className="about-info__description">
                                                {HtmlParser(description)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Advantages />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About