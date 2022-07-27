import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import backgroundCard from '../utils/backgroundCard';

const PokemonList = ({ pokemonUrl }) => {

    const [pokemonDetail, setPokemonDetail] = useState({})
    
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemonDetail(res.data))           
    }, [])
    
    
    return (

        <div className='container'>
            <div className='cardPokemon' onClick={() => { navigate(`/pokedex/${pokemonDetail.id}`) }} style={{background:backgroundCard(pokemonDetail?.types?.[0]?.type?.name)}}>
                
                <h3>{pokemonDetail.name}</h3>
                <div className='itemDetail' >            
                    <div className="textDetail">
                        <p>Types: <span>{pokemonDetail?.types?.[0]?.type?.name} {pokemonDetail?.types?.[1] && pokemonDetail?.types?.[1]?.type?.name}</span></p>
                        <p>Hp: <span>{pokemonDetail?.stats?.[0]?.base_stat}</span></p>
                        <p>Attack: <span>{pokemonDetail?.stats?.[1]?.base_stat}</span></p>
                        <p>Defense: <span>{pokemonDetail?.stats?.[2]?.base_stat}</span></p>
                        <p>Speed: <span>{pokemonDetail?.stats?.[5]?.base_stat}</span></p>
                    </div>
                    <div className="imgDetail">
                        <img src={pokemonDetail?.sprites?.other?.dream_world?.front_default===null?pokemonDetail?.sprites?.other?.home?.front_default:pokemonDetail?.sprites?.other?.dream_world?.front_default}/>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default PokemonList;