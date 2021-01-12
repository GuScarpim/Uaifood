import React, { useState, history } from 'react';
import * as S from './styles';

import api from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Globals from '../../Globals.json';

export default function Search() {
  // const history = history()
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

  const SearchRestaurant = () => {
    // history.push(Globals.paths.restaurants)
  }

  return (
    <S.Container>
      <S.PositionSearch>
        <input type="search" placeholder="Digite a sua cidade" onKeyUp={SearchCity}
          onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
        <button onClick={SearchRestaurant}>Buscar</button>
      </S.PositionSearch>
      <FontAwesomeIcon className="faMapMarkerAlt" icon={faMapMarkerAlt} />

      {searchValue.length > 3 && searchValue !== titleState &&
        <S.ResultSearch onClick={() => setSearchValue(titleState)}>
          <label>{titleState}</label>
          <span>Estado de {cityName}</span>
        </S.ResultSearch>
      }
    </S.Container>
  );
} 