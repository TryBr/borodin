import React from "react"

const Quality = (
  {
    content: {
      title,
      description,
      icon: {
        file: {
          url
        }
      }
    }
  }
) => {
  return (
    <div className="col-lg-4">
        <div className="quality-items-item">
            <div className="quality-items-item__number">
                {
                    url ? <img src={url} alt={title} /> : ''
                }
            </div>
            <div className="quality-items-item-info">
            <div className="quality-items-item-info__title title-h4">
                {title}
            </div>
            <div className="quality-items-item-info__description">
                {description}
            </div>
            </div>
        </div>
    </div>   
  )
}



export default Quality