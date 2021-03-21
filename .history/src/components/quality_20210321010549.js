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
    <div className="quality-items-item">
        <div className="quality-items-item__number">
            {
                url ? <img width="30" height="30" src={url} alt={title} /> : ''
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
  )
}



export default Quality