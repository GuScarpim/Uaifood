import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

import Logo from '../../assets/uaifood/logo-red.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import SearchInput from '../../components/search';

import Globals from '../../Globals.json';

export default function Restaurants() {
  const [stars, setStars] = useState([1, 2, 3])

  return (
    <>
      <S.Header>
        <img src={Logo} alt="Uaifood" />
        <SearchInput />
      </S.Header>

      <S.Container>

        <S.Note>
          <div className="note">
            <label>Nota</label>

          <S.ContentsNote>
            <input type="checkbox" />
            <FontAwesomeIcon className="faStar" icon={faStar} />
          </S.ContentsNote>

          </div>
        </S.Note>

        <S.Contents>
          <div className="Contents">
            <label>Oii</label>
          </div>
        </S.Contents>

      </S.Container>
    </>
  );
} 