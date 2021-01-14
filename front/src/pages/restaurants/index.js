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
  const [cust] = useState([{ id: 1, text: "Até R$50" }, { id: 2, text: "De R$50 a R$80" }, { id: 3, text: "De R$80 a R$110" }, { id: 4, text: "Acima de R$110" }])
  const [typeMeet] = useState(["Árabe", "Brasileira", "Chinesa", "Francesa", "Frutos do mar", "Italiana", "Japonesa", "Mexicana", "Peruana"])
  const [restaurants, setRestaurants] = useState([])
  const [orderBy, setOrderBy] = useState('Até R$50')

  useEffect(() => {
    getRestaurants()
  }, [])

  const getRestaurants = (order, e) => {
    const city = localStorage.getItem('searchValue')
    if (e) {
      setOrderBy(e.target.value)
    }
    api.get(Globals.api.search + `?entity_type=city&q=${city}`).then(response => {
      console.log(orderBy)
        if (e) {
          if (e.target.value === "Até R$50") {
            console.log('entrou no"Até R$50" ')
            var orderBy1 = response.data.restaurants.filter(item => item.restaurant.average_cost_for_two <= 50)
            return setRestaurants(orderBy1)
            // console.log('saiu do "Até R$50"', orderBy1, restaurants)
          } else
          if (e.target.value === "De R$50 a R$80") {
            console.log('entrou no "De R$50 a R$80"')
            var orderBy2 = response.data.restaurants.filter(item => item.restaurant.average_cost_for_two > 50 && item.restaurant.average_cost_for_two <= 80)
            return setRestaurants(orderBy2)
            // console.log('saiu do "De R$50 a R$80"', orderBy2, restaurants)
          } else
          if (e.target.value === "De R$80 a R$110") {
            console.log('entrou no "De R$80 a R$110"')
            var orderBy3 = response.data.restaurants.filter(item => item.restaurant.average_cost_for_two > 80 && item.restaurant.average_cost_for_two <= 110)
            return setRestaurants(orderBy3)
            // console.log('saiu do "De R$80 a R$110"', orderBy3, restaurants)
          } else
          if (e.target.value === "Acima de R$110") {
            console.log('entrou no "Acima de R$110"')
            var orderBy4 = response.data.restaurants.filter(item => item.restaurant.average_cost_for_two > 110)
            return setRestaurants(orderBy4)
            // console.log('saiu do "Acima de R$110"', orderBy4, restaurants)
          }
        } else {
          var orderBy1 = response.data.restaurants.filter(item => item.restaurant.average_cost_for_two <= 50)
          return setRestaurants(orderBy1)
        }
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <S.Header>
        <img src={Logo} alt="Uaifood" />
        <SearchInput getRestaurants={() => getRestaurants()} />
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
                <input type="checkbox" checked={orderBy === item.text ? true : false} onChange={(e) => getRestaurants(true, e)} value={item.text} />
                <span>{item.text}</span>
              </S.ContentsNote>
            ))}

            <label>Tipo de cozinha</label>

            {typeMeet.map((item, index) => (
              <S.ContentsNote key={index}>
                <input type="checkbox" value={item} />
                <span>{item}</span>
              </S.ContentsNote>
            ))}
          </div>


        </S.Note>

        <S.Contents>
          <div className="Contents">
            <label className="title_restaurant">Restaurantes em {localStorage.getItem('searchValue')}</label>

            <S.FlexCard>
              {restaurants.map((item, index) => (
                <div key={index}>
                  <Card image_url={item.restaurant.thumb} title={item.restaurant.name} link={item.restaurant.menu_url || ''}
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