import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import * as S from './styles';

import api from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Globals from '../../Globals.json';

export default function Search(props) {
  const [titleState, setTitleState] = useState('')
  const [cityName, setCityName] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [countryId, setCountryId] = useState(null)
  const [open, setIsopen] = useState(false)

  let history = useHistory();

  const SearchCity = () => {
    if (searchValue) {
      api.get(Globals.api.locations + `?query=${searchValue}`)
        .then((response) => {
          setTitleState(response.data.location_suggestions[0].title)
          setCityName(response.data.location_suggestions[0].city_name)
          setCountryId(response.data.location_suggestions[0].city_id)
          console.log(response.data)
        }).catch((error) => {
          console.log(error)
        })
    }
  }

  const onChange = (e) => {
    setSearchValue(e.target.value)
    setIsopen(true)
  }

  const SearchRestaurant = () => {
    localStorage.setItem('searchValue', searchValue)
    localStorage.setItem('countryId', countryId)
    if (props.getRestaurants) {
      props.getRestaurants()
    }
    {
      countryId !== null &&
      history.push(Globals.paths.restaurants)
    }

  }

  useEffect(() => {
    let getItem = localStorage.getItem('searchValue')
    setSearchValue(getItem)
    console.log(getItem)
  }, [])

  return (
    <S.Container>
      <S.PositionSearch disabled={countryId !== null && true}>
        <input type="search" placeholder="Digite a sua cidade" onKeyUp={SearchCity}
          onChange={(e) => onChange(e)} value={searchValue} />

        <button onClick={SearchRestaurant}>Buscar</button>
      </S.PositionSearch>
      <FontAwesomeIcon className="faMapMarkerAlt" icon={faMapMarkerAlt} />

      {open && searchValue && searchValue !== titleState &&
        <S.ResultSearch onClick={() => setSearchValue(titleState)}>
          <label>{titleState}</label>
          <span>Estado de {cityName}</span>
        </S.ResultSearch>
      }
    </S.Container>
  );
}