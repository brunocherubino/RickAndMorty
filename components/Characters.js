import {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'animate.css';

export default function Characters(props) {
    
    const [usuarios, setUsuarios]= useState([]);
    const { characters, setCharacters } = props;
    const [busqueda, setBusqueda]= useState("");
    const [tablaUsuarios, setTablaUsuarios]= useState([]);

    const FilterWithButton = document.querySelector('#filters');
    const filterAliveButton = document.querySelector('#butonfiltAlive');
    const filterDeadButton = document.querySelector('#butonfiltAlive2');   
    const filterEpisodeButton = document.querySelector('#butonfiltEpisode');
    const filterEpisodeValue = document.getElementById('butonfiltEpisode');
    const SearchEpisodeButton = document.querySelector('#butonfiltEpisode2');    
    const filterHuamnButton = document.querySelector('#butonfiltEspecie');
    const filterAlienButton = document.querySelector('#butonfiltEspecie2');

    const resetCharacters = () => {

        setCharacters(null);
    }

    const peticionGet=async(characters)=>{
          setUsuarios(characters);
          setTablaUsuarios(characters);
        }
      

    const handleChange=e=>{
        setBusqueda(e.target.value);
        console.log(e.target.value);
        filtrar(e.target.value);
      }

      const filtrarBoton=e=>{
        const a = document.getElementById('inputBusqueda').value;
        filtrar(a);
      }

      const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
          if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          ){        

            return elemento;
          }
        });
        setUsuarios(resultadosBusqueda);
      }

      const filterWhit=e=>
      {       
        if(FilterWithButton.style.display == 'none'){

            FilterWithButton.style.display = 'block';

        }else{
            FilterWithButton.style.display = 'none'
        }
      }

      const filterAlive=e=>
      {        
        if(filterAliveButton.style.display == 'none' && filterDeadButton.style.display == 'none'){

            filterAliveButton.style.display = 'block';
            filterDeadButton.style.display = 'block';
            
            filterEpisodeButton.style.display = 'none';
            SearchEpisodeButton.style.display = 'none';  
            filterHuamnButton.style.display = 'none';
            filterAlienButton.style.display = 'none';

        }else{
            filterAliveButton.style.display = 'none'
            filterDeadButton.style.display = 'none'
        }
      }

      const filterEpisode=e=>
      {
        if(filterEpisodeButton.style.display == 'none' && SearchEpisodeButton.style.display == 'none'){

            filterEpisodeButton.style.display = 'block';
            SearchEpisodeButton.style.display = 'block';

            filterAliveButton.style.display = 'none';
            filterDeadButton.style.display = 'none';  
            filterHuamnButton.style.display = 'none';
            filterAlienButton.style.display = 'none';

        }else{
            filterEpisodeButton.style.display = 'none'
            SearchEpisodeButton.style.display = 'none'
        }
      }

      const filterEspecie=e=>
      {
        if(filterHuamnButton.style.display == 'none' && filterAlienButton.style.display == 'none'){

            filterHuamnButton.style.display = 'block';
            filterAlienButton.style.display = 'block';

            filterEpisodeButton.style.display = 'none';
            SearchEpisodeButton.style.display = 'none';  
            filterAliveButton.style.display = 'none';
            filterDeadButton.style.display = 'none';

        }else{
            filterHuamnButton.style.display = 'none'
            filterAlienButton.style.display = 'none'
        }
      }

      const OculrtarTodoAlive=e=>
      {;
        FilterWithButton.style.display = 'none';
        var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
            if(elemento.status == 'Alive')
            {        
  
              return elemento;
            }
          });
          setUsuarios(resultadosBusqueda);
      }

      const OculrtarTodoDead=e=>
      {
        FilterWithButton.style.display = 'none';
        var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
            if(elemento.status == 'Dead')
            {        
  
              return elemento;
            }
          });
          setUsuarios(resultadosBusqueda);
      }

      const OculrtarTodoHuman=e=>
      {
        FilterWithButton.style.display = 'none';
        var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
            if(elemento.species == 'Human')
            {        
  
              return elemento;
            }
          });
          setUsuarios(resultadosBusqueda);
      }

      const OculrtarTodoAlien=e=>
      {
        FilterWithButton.style.display = 'none';
        var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
            if(elemento.species == 'Alien')
            {        
  
              return elemento;
            }
          });
          setUsuarios(resultadosBusqueda);
      }

      const filtrarEpisodeButton=e=>{
        const a = filterEpisodeValue;
        OcultarTodoEpisode(a);
      }

      const OcultarTodoEpisode=(terminoBusqueda)=>{
        FilterWithButton.style.display = 'none';
        var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
          if(elemento.episode.length == terminoBusqueda.value)
          {        

            return elemento;
          }
          
        });

        setUsuarios(resultadosBusqueda);
        filterEpisodeValue = null;
      }

      var i = 0;
      var e = 0;
      const array2 = characters.map(function(element){
               
        return element;       
      });

      const array = array2.map(function(element){
               
        return element.episode;       
      });

      for(i; i <= characters[0].episode.length; i++){
        for(e; e <= 10; e++){

          console.log(array[i][e]);
        }        
      }


      useEffect(()=>{
        peticionGet(characters);
        },[])

    return (
    
    <div className="characters  animate__animated animate__backInDown">
        <h1>Personajes</h1>
        
        <div className="containerInput">
         <input className="form-control inputBuscar" placeholder="Búsqueda por Nombre" id='inputBusqueda'/>
         <button className="btn btn-secondary" onClick={filtrarBoton} id='ThreeButtons'>
            Buscar 
         </button>
         <button className="btn btn-secondary dropdown-toggle" id='butonfilt' onClick={filterWhit} >
            Filtar por
         </button>

         <div id='filters'>
         <ul>
            <button className="btn btn-secondary dropdown-toggle" onClick={filterAlive}  id='ThreeButtons'>Alive o Dead</button>
            <button className="btn btn-secondary dropdown-toggle" onClick={filterEpisode} id='ThreeButtons'>Episode</button>
            <button className="btn btn-secondary dropdown-toggle" onClick={filterEspecie} id='ThreeButtons'>Especie</button>
            
         </ul>
            <ul>
                <button className="btn btn-secondary" id='butonfiltAlive' onClick={OculrtarTodoAlive}>Alive</button>
                <button className="btn btn-secondary" id='butonfiltAlive2' onClick={OculrtarTodoDead}>Dead</button>
            </ul>
            
            <input placeholder="Búsqueda por Episode" id='butonfiltEpisode'/>
            <button className="btn btn-secondary" id='butonfiltEpisode2' onClick={filtrarEpisodeButton}>Buscar</button>

            <ul>
                <button className="btn btn-secondary" id='butonfiltEspecie' onClick={OculrtarTodoHuman}>Human</button>
                <button className="btn btn-secondary" id='butonfiltEspecie2' onClick={OculrtarTodoAlien}>Alien</button>
            </ul>

        </div>
<br></br>
        <span className="back-home" onClick={resetCharacters}>Volver al home</span>

       </div>
        <div className="container-characters">
            {usuarios.map((characters, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={characters.image} alt={characters.name}></img>
                    </div>
                    <div>
                        <h3>{characters.name}</h3>
                        <h6>
                            {characters.status === "Alive" ? (
                                <>
                                <span className="alive"></span>
                                Alive
                                </>
                            ): (
                                <>
                                <span className="dead"></span>
                                Dead
                                </>
                            )}
                        </h6>
                        <p >
                            <span className="text-grey">Episodio: </span>
                            <span>{characters.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Especie: </span>
                            <span>{characters.species}</span>
                        </p>
                    </div>

                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetCharacters}>Volver al home</span>
    </div>
    )
}