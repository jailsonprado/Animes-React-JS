import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import "./index.css";
import NavBar from "./components/navbar";
import axios from "axios";

const api = "https://kitsu.io/api/edge/";

export default function App() {
  const [text, setText] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (text) {
      async function loadContent() {
        const response = await axios.get(
          `${api}anime?filter[text]=${text}&page[limit]=18&page[offset]=2"`
        );
        setInfo(response.data);
        console.log(response.data);
      }
      loadContent();
    }
  }, [text]);

  return (
    <div className="App">
      <NavBar title="React Animes" />
      <SearchInput value={text} onChange={(search) => setText(search)} />
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
