import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Globals from '../../Globals.json';
import Background from '../../assets/uaifood/bg.jpg';
import Logo from '../../assets/uaifood/logo-white.jpg';

export default function ScrollAnimated() {
  const [search, setSearch] = useState([])
  const [titleState, setTitleState] = useState('')
  const [cityName, setCityName] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const SearchCity = () => {
    if (searchValue.length > 3) {
      api.get(Globals.api.locations + `?query=${searchValue}`)
        .then((response) => {
          setSearch(response.data.location_suggestions)
          setTitleState(response.data.location_suggestions[0].title)
          setCityName(response.data.location_suggestions[0].city_name)
          console.log(search)
        }).catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <S.Container bg={Background}>
      <S.Content>
        <S.Logo>
          <img src={Logo} alt="Uaifood" />
        </S.Logo>

        <S.PositionContents>
          <h1>Descubra os melhores
            <h1>restaurantes em sua cidade</h1>
          </h1>

          <S.PositionSearch>
            <input type="search" placeholder="Digite a sua cidade" onKeyUp={SearchCity}
              onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
            <button>Buscar</button>
          </S.PositionSearch>
          <FontAwesomeIcon className="faMapMarkerAlt" icon={faMapMarkerAlt} />

          {searchValue.length > 3 &&
            <S.ResultSearch>
              <label>{titleState}</label>
              <span>Estado de {cityName}</span>
            </S.ResultSearch>
          }

        </S.PositionContents>

      </S.Content>
    </S.Container >
  );
} 