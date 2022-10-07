import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import "./index.css";
import NavBar from "./components/navbar";
import axios from "axios"
import {
  ButtonPagination,
  TextPagination,
} from "./components/buttonPagination";
import { slugify } from './utils/slugify/slugify';

type Params = Record<string, string>;

interface Options {
  event: string | undefined;
}

const datalayer = (params: Params, options?: Options) => {
  const defaultOptions = { event: 'page', ...options };
  const paramsFormatados = Object.entries(params).reduce<Params>((result, [key, value]) => {
    result[key] = slugify(value);
    return result;
  }, {});

  const data = { ...paramsFormatados };

  if (defaultOptions.event) {
    data.event = defaultOptions.event;
  }

  (window as any)?.dataLayer?.push(data);
};

export { datalayer };


const api = "https://kitsu.io/api/edge/";

export default function App() {
  const [text, setText] = useState<string>("");
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState([]);

  function handlePageAction(action: string) {
    setPage(action === "back" ? page - 1 : page + 1);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (text) {
      const request = async () => {
        const response = await axios.get(
          `${api}anime?filter[text]=${text}&page[limit]=18&page[offset]=${page}"`
        );
        setInfo(response.data.data);
      };
      request();
    }
  }, [text, page]);
  useEffect(() => {
    const infoName: any = info.map(
      (anime: any) => anime.attributes.canonicalTitle
    );
    if (info) {
      datalayer({
        textoPesquisado: infoName,
        textKeyPress: text,
      });
    }
  }, [info, text]);

  return (
    <div className="App">
      <NavBar title="React Animes" />
      <SearchInput
        value={text}
        onChange={(search: string) => setText(search)}
      />
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

      {text && !info && <span>Carregando...</span>}
      {info && (
        <ul className="animes-list">
          {info.map((anime: any) => (
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
