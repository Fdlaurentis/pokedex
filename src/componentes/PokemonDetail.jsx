import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import backgroundCard from '../utils/backgroundCard';

const PokemonDetail = () => {

    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [])


    return (
        <div className='detailsPoke' style={{ background: backgroundCard(pokemon?.types?.[0]?.type?.name) }}>

            <i className="fa-solid fa-arrow-left" onClick={() => { navigate(-1) }}></i>

            <img className='imgLogo' src="./images/Pokemon-Logo.png" />
            <img className='pokeImg' src={pokemon?.sprites?.other?.dream_world?.front_default === null ? pokemon?.sprites?.other?.home?.front_default : pokemon?.sprites?.other?.dream_world?.front_default} />
            <div className='divDatos '>
                <div className="tallaPoke">
                    <div>
                        <h4>{pokemon.weight}</h4>
                        <span>Weight</span>
                    </div>
                    <div>
                        <h4>{pokemon.height}</h4>
                        <span>height</span>
                    </div>
                </div>
                <h2>{pokemon?.name}</h2>
                <h5># {pokemon?.id}</h5>
            </div>
            <div className='otrosDatos'>

                <div className="type spaceDiv">
                    <h2>Type</h2>
                    <div>
                        <div className='typePoke' style={{ background: backgroundCard(pokemon?.types?.[0]?.type?.name) }}>
                            <span>{pokemon?.types?.[0]?.type?.name}</span>
                        </div>
                        {
                            pokemon?.types?.[1]?.type?.name && (
                                <div className='typePoke' style={{ background: backgroundCard(pokemon?.types?.[1]?.type?.name) }}>
                                    <span>{pokemon?.types?.[1]?.type?.name}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="ability spaceDiv">
                    <h2>Ability</h2>
                    <div>
                        {
                            pokemon?.abilities?.map(ability => (
                                <div>
                                    <span>{ability.ability.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="stats spaceDiv">
                    <h2>Stats Base</h2>
                    <div className='divStats'>
                        <span>HP:</span>
                        <div>
                            <div className='baseStats' style={{ width: pokemon?.stats?.[0]?.base_stat }}>{pokemon?.stats?.[0]?.base_stat}/150</div>
                        </div>
                    </div>
                    <div className='divStats'>
                        <span>Speed:</span>
                        <div>
                            <div className='baseStats' style={{ width: pokemon?.stats?.[5]?.base_stat }}>{pokemon?.stats?.[5]?.base_stat}/150</div>
                        </div>
                    </div>
                    <div className='divStats'>
                        <span>Attack:</span>
                        <div>
                            <div className='baseStats' style={{ width: pokemon?.stats?.[1]?.base_stat }}>{pokemon?.stats?.[1]?.base_stat}/150</div>
                        </div>
                    </div>
                    <div className='divStats'>
                        <span>Defense:</span>
                        <div>
                            <div className='baseStats' style={{ width: pokemon?.stats?.[2]?.base_stat }}>{pokemon?.stats?.[2]?.base_stat}/150</div>
                        </div>
                    </div>
                </div>
                <div className='moves spaceDiv'>
                    <h2>Movements</h2>
                    <div className="movePoke">
                        {
                            pokemon?.moves?.map(move => (
                                <span>{move.move.name}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;