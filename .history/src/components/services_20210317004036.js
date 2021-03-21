import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ServiceItem from "../components/service";



const Services = () => (
  <section className="services section" data-aos="fade-up" id="services">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2 className="services-title title-h2">Возможности и цены</h2>
            </div>
        </div>
        <div className="row">
            <StaticQuery
                query={graphql`
                    query {
                        allContentfulService {
                        edges {
                            node {
                            id
                            title
                            days
                            icon {
                                file {
                                url
                                }
                            }
                            description {
                                content {
                                content {
                                    value
                                }
                                }
                            }
                            list {
                                content {
                                content {
                                    value
                                }
                                }
                            }
                            }
                        }
                        }
                    }
                `}
                render={data => <ServiceItem data={data} {...props} />}
            />
        </div>
    </div>
  </section>
)

export default Services