import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Service from "../components/service";

const Services = () => {
    const { allContentfulService } = useStaticQuery(
        graphql`
            query {
                allContentfulService(sort: {order: DESC, fields: id}) {
                    nodes {
                        id
                        title
                        days
                        icon {
                        file {
                            url
                        }
                        }
                        price
                        description {
                        description
                        }
                        checkList
                    }
                }
            }
        `
    )

    // console.log("DATA !!!");
    // console.log(allContentfulService.nodes[0]);

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
                    allContentfulService.nodes.map((node) => (
                        <Service key={node.id} />
                    ))
                }
            </div>
        </div>
      </section>
    )
}

export default Services