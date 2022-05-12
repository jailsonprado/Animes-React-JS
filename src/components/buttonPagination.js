/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export function ButtonPagination({handlePage, buttonText, iconButton}){
  return (
    <div className="btn-group">
    <a className="btn text-white" onClick={handlePage}>
      {iconButton} {buttonText}
    </a>
  </div>
  )
}

export function TextPagination({textPage}) {
  return  (
    <div className="text-center text-danger">{textPage}</div>
  )
}
