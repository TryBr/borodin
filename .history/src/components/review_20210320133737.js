import React from "react";
import HtmlParser from 'html-react-parser';

const Review = (
  {
    content: {
        fio,
        post,
        id,
        avatar: {
            file: {
                url
            }
        },
        text: {
            text
        }
    }
  }
) => {
  return (
    <div className="reviews-item">
        <div className="reviews-item-text">
            Дмитрий мне здорово помог, когда я еще только начинал свою карьеру. Если бы не он, то мое место занял бы кто-нибудь другой!
        </div>
        <div className="reviews-item-separator"></div>
        <div className="author">
            <div className="author-photo">
                <img src={reviewAuthorPhoto} alt="" className="author-photo__img"/>
            </div>
            <div className="author-info">
                <div className="author-fio">Арнольд Шварценеггер</div>
                <div className="author-post">Бывший Губернатор Калифорнии, терминатор</div>
            </div>
        </div>
    </div>
  )
}



export default Review