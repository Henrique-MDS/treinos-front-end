
async function fetchData(){
    const pokeInput = document.getElementById("pokeInput").value.toLowerCase();
    if(pokeInput !== ""){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`);
        if(!response.ok){
            throw new Error("Could not fetch resoureces");
        }
        const data = await response.json();
        const sprite = data.sprites.front_default;
        const ShowPokemon = document.getElementById("ShowPokemon");
        ShowPokemon.src = sprite;
        ShowPokemon.style.display = "block";
    }
}
