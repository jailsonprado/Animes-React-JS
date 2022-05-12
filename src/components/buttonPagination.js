import React from 'react';

export default function ButtonPagination() {
  return (
    <div className="btn-groupe">
      <a className="btn text-white" onClick={() => handlePage('back')} disabled={page < 2} >
    &#8672; Voltar
    </a>
      <a className="btn text-white" onClick={() => handlePage('next')}>
        Proxima pagina &#8674;
    </a>
</div>
  )
}