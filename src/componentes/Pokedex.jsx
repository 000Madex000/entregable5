import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import pikachu from '../img/pikachu.png'
import axios from 'axios';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

const name = useSelector(state => state.userName);
const [pokemonList,setPokemonList]=useState([]);

useEffect(()=>{
 axios.get('https://pokeapi.co/api/v2/pokemon/')
 .then(res=>setPokemonList(res.data.results)) ;

},[])
console.log(pokemonList)



    return (
        <div className='container_pokedex'>
            
            <p className='pokedex_phase'>..bienvenido " {name} "</p>
            <img className='img_pikachu' src= {pikachu} alt="" width={300}/> <br />

            {
                pokemonList.map(Pokedex =>(
                    <PokemonCard url={Pokedex.url} key={Pokedex.url} />
                ))
            }

        </div>
    );
};

export default Pokedex;