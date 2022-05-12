import React, {useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import './index.css'

const urlAPI = 'https://kitsu.io/api/edge/'



export default function App(){
    const [text, setText] = useState('')
    const [info, setInfo] = useState({})
    
    useEffect(() => {
        if(text){
            fetch(`${urlAPI}anime?filter[text]=${text}&page[limit]=200`)
                .then((res) => res.json())
                    .then((res) => {
                        // console.log(res)
                        setInfo(res)
                    })
        }

    }, [text])

    return (
        <div className='App'>
            <h1>React JS Animes</h1>
            <SearchInput 
                value={text} 
                onChange={(search) => setText(search)} 
            />
            {text && !info.data && (
                <span>Carregando...</span>
            )}
            {info.data && (
                <ul className='animes-list'>
                   {info.data.map((anime) => (
                       <li key={anime.id}>
                           <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                           {anime.attributes.canonicalTitle}
                        </li>
                   ))}
                </ul>
            )}

        </div>
    )
}
