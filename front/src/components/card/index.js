import React, { useState, useEffect } from 'react';
import * as S from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons'

export default function Card({ image_url, title }) {
  const [stars] = useState([{ "stars": [0, 1, 2] }])

  return (
    <S.Card>
      <img src={image_url} alt={title} />

      <content>
        <label>{title}</label>
        <span>{localStorage.getItem('searchValue')}</span>

        {stars.map((star, index) => (
          <div key={index}>
            {star.stars.map((item, index) => (
              <FontAwesomeIcon className="faStar" key={index} icon={faStar} />
            ))}
          </div>
        ))}
      </content>

        <S.PositionInfo>
          <div className="price" >
            <FontAwesomeIcon className="faUserFriends" icon={faUserFriends} />
            <span>R$75</span>
          </div>
          <div className="type_meet">Japonesa</div>
        </S.PositionInfo>
    </S.Card>
  );
}

// collection_id: 1
// description: "Most popular restaurants in town this week"
// image_url: "https://b.zmtcdn.com/data/collections/b53772a204429cb9b42313d6dc22bf3c_1556018415.jpg"
// res_count: 30
// share_url: "http://www.zoma.to/c-30/1"
// title: "Trending This Week"
// url: "https://www.zomato.com/brasilia/top-restaurants?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"