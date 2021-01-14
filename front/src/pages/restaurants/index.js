import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

import Logo from '../../assets/uaifood/logo-red.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Card from '../../components/card';
import SearchInput from '../../components/search';

import Globals from '../../Globals.json';

export default function Restaurants() {
  const [stars] = useState([{ "id": 1, "stars": [0] }, { "id": 2, "stars": [0, 1] }, { "id": 3, "stars": [0, 1, 2] }, { "id": 4, "stars": [0, 1, 2, 3] }, { "id": 5, "stars": [0, 1, 2, 3, 4] }])
  const [cust] = useState([{ id: 1, text: "Até R$50" }, { id: 2, text: "De R$50 a R$80" }, { id: 3, text: "De R$180 a R$110" }, { id: 4, text: "Acima de R110" }])
  const [typeMeet] = useState(["Árabe", "Brasileira", "Chinesa", "Francesa", "Frutos do mar", "Italiana", "Japonesa", "Mexicana", "Peruana"])
  const [restautants, setRestautants] = useState([])

  useEffect(() => {
    getRestautants()
  }, [])

  const getRestautants = () => {
    const countryId = localStorage.getItem('countryId');
    const city = localStorage.getItem('searchValue')
    // api.get(Globals.api.collections + `?city_id=${countryId}`).then(response => {
    //   setRestautants(response.data.collections)
    //   console.log('Collections', restautants)
    // }).catch(err => {
    //   console.log(err)
    // })
    api.get(Globals.api.search + `?entity_type=city&q=${city}`).then(response => {
      setRestautants(response.data.restaurants)
      // setCost(response.data.restaurants.average_cost_for_two)
      console.log('Collections', restautants)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <S.Header>
        <img src={Logo} alt="Uaifood" />
        <SearchInput getRestaurants={() => getRestautants()} />
      </S.Header>

      <S.Container>

        <S.Note>
          <div className="note">
            <label>Nota</label>

            {stars.map(item => (
              <S.ContentsNote key={item.id}>
                <input type="checkbox" id={item.id} />

                {item.stars.map((star, index) => (
                  <div key={index}>
                    <FontAwesomeIcon className="faStar" icon={faStar} />
                  </div>
                ))}
              </S.ContentsNote>
            ))}
            <label>Custo para 2 pessoas</label>

            {cust.map(item => (
              <S.ContentsNote key={item.id}>
                <input type="checkbox" id={item.id} />
                <span>{item.text}</span>
              </S.ContentsNote>
            ))}

            <label>Tipo de cozinha</label>

            {typeMeet.map((item, index) => (
              <S.ContentsNote key={index}>
                <input type="checkbox" />
                <span>{item}</span>
              </S.ContentsNote>
            ))}
          </div>


        </S.Note>

        <S.Contents>
          <div className="Contents">
            <label className="title_restaurant">Restaurantes em {localStorage.getItem('searchValue')}</label>

            <S.FlexCard>
              {restautants.map((item, index) => (
                <div key={index}>
                  <Card image_url={item.restaurant.thumb} title={item.restaurant.name} link={item.restaurant.menu_url}
                    cost={item.restaurant.average_cost_for_two} cuisines={item.restaurant.cuisines} />
                </div>
              ))}
            </S.FlexCard>
          </div>
        </S.Contents>

      </S.Container>
    </>
  );
}