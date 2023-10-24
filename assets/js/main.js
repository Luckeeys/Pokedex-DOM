const pokemonList = document.getElementById('pokemonsList')
const loadMoreButton = document.getElementById('loadMoreButton')
const sobreButton = document.getElementById('sobreButton')
const statusButton = document.getElementById('statusButton')
const pokemonInfos = document.getElementById('pokemonInfos')
const limit = 9
const maxPokemons = 151
let offset = 0

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <card-pokemon
            Tipo=${pokemon.type}
            Nome=${pokemon.name}
            Numero=${pokemon.number}
            Tipos=${pokemon.types}
            Foto=${pokemon.photo}
            Tamanho=${pokemon.height}
            Peso=${pokemon.weight}
            Habilidades=${pokemon.abilities}
            StatusNome=${pokemon.stats.map((stats) => Object.keys(stats))}
            StatusValor=${pokemon.stats.map((stats) => stats[Object.keys(stats)])}
            ></card-pokemon>
        `).join('');
                    
    pokemonList.innerHTML += newHtml
    })
}
                        
loadPokemonItens(offset, limit)
            
loadMoreButton.addEventListener('click', () =>{
    offset += limit
                
    const qtdPokemonsProxPag = offset + limit
    
    if (qtdPokemonsProxPag >= maxPokemons) {
        
        const novoLimite = maxPokemons - offset
        loadPokemonItens(offset, novoLimite)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
        
    } else {
        loadPokemonItens(offset, limit)
    }
    
})

// statusButton.addEventListener('click', () => alert('clicou'))



{/* <tr>
    <th class="indice"> Tamanho </th>
    <th class="valor"> ${pokemon.height} m </th>
</tr>
<tr>
    <th class="indice"> Peso </th>
    <th class="valor"> ${pokemon.weight} kg </th>
</tr>
<tr>
    <th class="indice"> Habilidades </th>
    ${pokemon.abilities.map((ability) => `<th class="valor">${ability}</th>`).join('')}
</tr> */}
