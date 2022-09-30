import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'




const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState({});
    const [imgPok,setImgPok] = useState({})

    const navigate=useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data));
    }, [])

    useEffect(() => {
        axios.get(url)
            .then(res => setImgPok(res.data.sprites.other.dream_world.front_default));
    }, [])

    console.log(pokemon)
    return (
        <div className='main_container' onClick={()=>navigate(`/pokedex/${pokemon.name}`)}>
            <div className='container_card'>
                <img className='img_card' src={imgPok} alt="" />
                <h3>{pokemon.name}</h3>
                <hr />
                

                <div>
                   
                </div>
             </div>   
                
                
                

        </div>
    );
};

export default PokemonCard;