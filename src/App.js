function App(){
   function handleSubmit(e){
    e.preventDefault();
   }
     
    return (<div className ="pokemon-info-app">
   <form class="pokemon-form" onSubmit={handleSubmit}>
        <label htmlFor="pokemonName-input">Pokemon Name</label>
        <small>
            Try      
            <button className="invisible-button" type="button"> "Pikachu"</button>
            <button className="invisible-button" type="button"> "Charizard"</button>
            or 
            <button className="invisible-button" type="button"> "mew"</button>
        </small>
        <div>
            <input id="pokemonName-input" placeholder="Pokemon Name..." name="pokemonName"/>
            <button type="submit">Submit</button>
        </div>
   </form>
    </div>)
}
export default App;