import { useState } from "react";


function App(){
    const[pokemonName, setPokemonName] = useState(' ');
   function handleSubmit(e){
        e.preventDefault(); 
        setPokemonName(pokemonName); 
   }
   console.log(pokemonName);

   function handleChange(e){
        setPokemonName(e.target.value);
    }

    function handleSelect(newPokemonName){
        setPokemonName(newPokemonName);
    }
    
     
    return (<div className ="pokemon-info-app">
   <form className="pokemon-form" onSubmit={handleSubmit}>
        <label htmlFor="pokemonName-input">Pokemon Name</label>
        <small>
            Try      
            <button className="invisible-button" type="button" onClick={()=>handleSelect("Pikachu")}> "Pikachu"</button>
            <button className="invisible-button" type="button"
            onClick={()=>handleSelect("Charizard")}> "Charizard"</button>
            or 
            <button className="invisible-button" type="button"
            onClick={()=>handleSelect("mew")}> "mew"</button>
        </small>
        <div>
            <input id="pokemonName-input" placeholder="Pokemon Name..." name="pokemonName" onChange ={handleChange} value={pokemonName}/>
            <button type="submit" disabled = {!pokemonName.length}>Submit</button>
        </div>
   </form>
    </div>)
}
export default App;