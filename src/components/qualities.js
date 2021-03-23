import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Quality from "../components/quality";
import QualityFigure from "../images/quality-figure.svg";
import QualityIllustration from "../images/quality-illustration.svg";

const Qualities = () => {

  const { allContentfulQuality } = useStaticQuery(
      graphql`
          query {
            allContentfulQuality(
              sort: {fields: contentful_id, order: DESC}
              filter: {node_locale: {eq: "ru-RU"}}
            ) {
              nodes {
                id
                title
                description
                node_locale
                icon {
                  file {
                    url
                  }
                }
              }
            }
          }
      `
  )
  
  return(
    <section className="quality section" id="quality">
      <div className="quality-figure">
        <img src={QualityFigure} alt="Хотите качественно и надежно?"/>
      </div>
      <div className="quality-content section-content">
        <div className="quality-title">
          <h2 className="quality-title__title title-h2-white">Хотите качественно и надежно?</h2>
          <h3 className="quality-title__subtitle title-h3">Гарантирую вам прозрачность и уверенность в результате</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="quality-illustration" data-aos="fade-right">
                <img src={QualityIllustration} alt="Гарантирую вам прозрачность и уверенность в результате"/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="quality-items" data-aos="fade-left">
                {
                    allContentfulQuality.nodes.map((node, i) => (
                        <Quality key={node.id} content={node} />
                    ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Qualities