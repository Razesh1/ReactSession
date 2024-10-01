import { useState } from "react";
import PokemonForm from "./pokemon";

function App(){
    const [pokemonName,setPokemonName] =useState('');

    function handleSubmit(newPokemonName){
        setPokemonName(newPokemonName)
      }

      console.log(pokemonName);

    return <PokemonForm myPokemonName ={pokemonName}  onSubmit ={handleSubmit}/>;
 }
 export default App;