import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Service from "../components/service";

const Services = () => {
    const { allContentfulServices } = useStaticQuery(
        graphql`
            query {
                allContentfulServices(
                    sort: {fields: contentful_id, order: ASC}
                    filter: {node_locale: {eq: "ru-RU"}}
                  ) {
                    nodes {
                      title
                      description {
                        description
                      }
                      checkList
                      price
                      days
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

    return (
        <section className="services section" data-aos="fade-up" id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="services-title title-h2">Возможности и цены</h2>
                </div>
            </div>
            <div className="row">
                {
                    allContentfulServices.nodes.map((node, i) => (
                        <Service key={i} content={node} />
                    ))
                }
            </div>
        </div>
      </section>
    )
}

export default Services