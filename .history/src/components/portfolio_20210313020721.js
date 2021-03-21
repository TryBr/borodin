import React from "react"

const Portfolio = () => (
  <div className="portfolio">
     <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2 className="portfolio-title title-h2">Портфолио</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4">
                <div className="portfolio-item">
                    <div className="portfolio-item-preview">

                    </div>
                    <div className="portfolio-info">
                        <div className="portfolio-info__title">
                            Завод металлоконструкций <br/>
                            СПК-ЧИМОЛАИ
                        </div>
                        <div className="portfolio-info__separator"></div>
                        <div className="portfolio-info__description">
                            Сайт для предприятия по производству сложных металлоконструкций зданий и сооружений. Уникальность проекта заключается в анимации строительных объектов: здания, мосты, стадионы, промышленные объекты.
                        </div>
                        <a href="" className="portfolio-info__link">
                            Посмотреть
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
)

export default Portfolio