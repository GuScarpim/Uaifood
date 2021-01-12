import React, { useContext, useState } from 'react';
import * as S from './styles';

import Logo from '../../assets/uaifood/logo-white.jpg';

import Context from '../../context/context';

import Background from '../../assets/uaifood/bg.jpg';
import SearchInput from '../../components/search';

export default function Landing() {
  const [context, setContext] = useState();

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

          <SearchInput />
        </S.PositionContents>

      </S.Content>
    </S.Container >
  );
}