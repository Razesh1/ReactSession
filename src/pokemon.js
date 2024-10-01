
import { useState } from "react";
import App from "./App";



const PokemonForm =({myPokemonName,onSubmit,initialValue=myPokemonName||" "}) =>{
    const [pokemonName,setPokemonName] = useState(initialValue);

    function handleSubmit(e){
      e.preventDefault();
      onSubmit(pokemonName)
    }

    function handleChange(e){
       setPokemonName(e.target.value);
    }

    function handleSelect(newPokemonName){
        setPokemonName(newPokemonName);

    }

     return (<div className ="pokemon-info-app">
    <form className="pokemon-form" onSubmit ={handleSubmit}>
         <label htmlFor="pokemonName-input">Pokemon Name</label>
         <small>
             Try      
             <button 
                className="invisible-button" 
                onClick={()=>handleSelect('Pikachu')} type="button"
            >
            "Pikachu"
             </button>
             <button 
             className="invisible-button"
             onClick={()=>{handleSelect('Charizard')}}
             type="button"
             >
            "Charizard"
            </button>
             or 
             <button 
             className="invisible-button"
             onClick={()=>handleSelect('mew')}
             type="button"
             >
             "mew"</button>
         </small>
         <div>
             <input id="pokemonName-input" placeholder="Pokemon Name..." name="pokemonName" onChange={handleChange}
             value={pokemonName}
             />
             <button 
             type="submit" 
             onSubmit={handleSubmit}
             disabled = {!pokemonName.length}
             >Submit</button>
         </div>
    </form>
     </div>)

}

export default PokemonForm;