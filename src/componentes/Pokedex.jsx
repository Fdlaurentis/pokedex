import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import PokemonList from './PokemonList';
import pokedex from '"../images/pokedex.png"'


const Pokedex = () => {

    const user= useSelector(state=>state.userName)
    const itemsPage= useSelector(state=>state.itemsPage)
    const [pokemons, setPokemons] = useState([])
    const [searchPokemon, setSearchPokemon]=useState("")
    const [types, setTypes]=useState([])
    const [switchSelect, setSwitchSelect]=useState('false')

    const navigate=useNavigate()

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
            .then(res=>setPokemons(res.data.results))
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res=>setTypes(res.data.results))
    },[])


    const [page, setPage]=useState(1)
    const lastIndex= page * itemsPage
    const firstIndex= lastIndex - itemsPage
    const pokemonPag= pokemons.slice(firstIndex, lastIndex)
    const lastPage=Math.ceil(pokemons.length) / itemsPage
    const numbers=[]
    for(let i=1; i<=lastPage; i++){
        numbers.push(i)
    }

 
    
    const search= e =>{
        e.preventDefault()
        navigate(`/pokedex/${searchPokemon}`)
    }

    const changeType=e=>{   
        if(e.target.value==='1'){
            axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res=>setPokemons(res.data.results))
        }else if (e.target.value !=='1'){
            axios.get(e.target.value)
                .then(res=>setPokemons(res.data.pokemon))
        }  
    }

    const switchClick=()=>{
        setSwitchSelect(!switchSelect)
    }
    
    
    return (
        <div className='containerPokedex'>
            <i className="fa-solid fa-gear" onClick={()=>{navigate('/pokedex/setting')}}></i>
            
            <img src={pokedex} className='pokedex'/>
            <h2>Welcome {user}, here you can find your favorite pokemon</h2>
            <div className="selectShearch">
                <h4>Type</h4>
                <div className='switch' style={{background:switchSelect?'#ffbb00':'#03a9f4'}} onClick={switchClick}>
                    <div className={`slider ${!switchSelect ? 'sliderRigth' : 'sliderLeft'}`}></div>
                </div>
                <h4>Pokemon</h4>
            </div>
            {
                switchSelect?<>                
                    <select onChange={changeType}>
                        <option value="1">All Pokemon</option>
                        {
                            types.map(type=>(
                                <option 
                                    key={type.url}
                                    value={type.url}
                                >{type.name}</option>
                            ))
                        }
                    </select>
                </>:<>        
                    <form onSubmit={search}>
                        <input type="text" 
                            value={searchPokemon}
                            onChange={e=>setSearchPokemon(e.target.value)}                
                        />
                    </form>            
                </>
            }            
            <div className='container'>                
                {
                    pokemonPag.map(pokemon=>(
                        <div key={pokemon.name?pokemon.name:pokemon.pokemon.name}>
                            <PokemonList                                 
                                pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
                        </div>                           
                    ))
                }
            </div>
            <div className='itemsPerPage'>
                <i 
                    className="fa-solid fa-backward" 
                    onClick={()=>setPage(page-1)}
                    style={{display:page===1?'none':'block'}}
                ></i>
                {
                    numbers.map(number=>(
                        <div  onClick={()=>setPage(number)} key={number}>
                            <span onClick={()=>setPage(number)}>{number}</span>
                        </div>
                    ))
                }
                <i 
                    className="fa-solid fa-forward" 
                    onClick={()=>setPage(page+1)}
                    style={{display:page===lastPage?'none':'block'}}
                ></i>
            </div>
        </div>
    );
};

export default Pokedex;