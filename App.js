
import imgRickMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';
import React  from 'react'

function App() {

  const [ characters, setCharacters] = useState(null);
  const recAppi = async () => {

    const appi = await fetch("https://rickandmortyapi.com/api/character");
    const charactersAppi = await appi.json();
    setCharacters(charactersAppi.results)
  }

  return (

    <div className="App">
      <header className="App-header">
       <h1 className='title'>App Rick and Morty</h1>
       {characters ? (

          <Characters characters={characters} setCharacters={setCharacters} />

       ) : (

          <>
          <img src={imgRickMorty} alt='Rick & Morty' className='img-home'></img>
          <button onClick={recAppi} className='btn-search'>Buscar Personajes</button>
          </>
      )}
        
      </header>

    </div>
  );
  
}

export default App;