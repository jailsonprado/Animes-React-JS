/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

interface Props {
  handlePage: () => void,
  buttonText: string
  iconButton: string
}

export function ButtonPagination({handlePage, buttonText, iconButton}: Props){
  return (
    <div className="btn-group">
    <a className="btn text-white" onClick={handlePage}>
      {iconButton} {buttonText}
    </a>
  </div>
  )
}

interface TextProps {
  textPage: string
}

export function TextPagination({textPage}: TextProps) {
  return  (
    <div className="text-center text-danger">{textPage}</div>
  )
}
