import React from 'react';
import * as S from './search.styles'

type Props = {
  title: string
}

export default function NavBar({title}: Props){
  return (
    <S.NavBar>
      <h1>{title}</h1>
    </S.NavBar>
  )
}