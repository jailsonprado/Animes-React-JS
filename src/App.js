/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import "./index.css";
import NavBar from "./components/navbar";
import axios from "axios";
import {ButtonPagination, TextPagination } from "./components/buttonPagination";

const api = "https://kitsu.io/api/edge/";

export default function App() {
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState([]);

  function handlePageAction(action) {
    setPage(action === "back" ? page - 1 : page + 1);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (text) {
      async function loadContent() {
        const response = await axios.get(
          `${api}anime?filter[text]=${text}&page[limit]=18&page[offset]=${page}"`
        );
        setInfo(response.data);
        console.log(response.data);
      }
      loadContent();
    }
  }, [text, page]);

  return (
    <div className="App">
      <NavBar title="React Animes" />
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {text && (
        <>
          <div className="btn-group">
            <ButtonPagination
              handlePage={() => handlePageAction("back")}
              buttonText="Voltar"
              iconButton="&#8672;"
            />
            <ButtonPagination
              handlePage={() => handlePageAction("next")}
              buttonText="Proxima pagina"
              iconButton="&#8674;"
            />
          </div>
        <TextPagination textPage={`Pagina ${page}`} />
         
        </>
      )}

      {text && !info.data && <span>Carregando...</span>}
      {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
