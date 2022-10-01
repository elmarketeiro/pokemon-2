const fetchPokemon = () => {
    const getPokemonUrl = id =>'https://pokeapi.co/api/v2/pokemon/${id}'
    
    const pokemonPromises =[]

    for (let i = 1; i <= 150; i++){
       pokemonPromises.push(fetch(getPokemonUrl(i)).then(Response => Response. json())
    }
 Promise.all (pokemonPromises)
 .then(pokemons => {
    console.log(pokemons)

    const lispokemons = pokemons.reduce((acumulator, pokemon)=> {
        acumulator += '
        <li class="card">
        <img class= "card-image ${types [0]}" alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
        <h2 class="card-title">${pokemon.id} ${pokemon.name}</h2>
        <p class= "card-subtitle">${pokemon.types.map(typeinfo => typeinfo.type.name).join(' | ')}</p>
        </li>
        '
        return accumulator
    }, '')
     
    const ul = document. queryselector ('[data-js="pokedex"]')

    ul.innerhtml = lispokemons
 })
}
fetchPokemon()