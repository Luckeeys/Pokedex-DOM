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
            <li class="pokemon ${pokemon.type}">
                <span class="number">'${pokemon.number}'</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    
                    <img src=${pokemon.photo} alt="${pokemon.name}">
                </div> 
                <div id="pokemonInfos">
                    <button type="button" id="sobreButton" class="botoesCartilhas ${pokemon.type}">
                        Sobre
                    </button> 
                    <button type="button" id="statusButton" class="botoesCartilhas ${pokemon.type}">
                        Status
                    </button>
                        <table class="info ${pokemon.type}">
                            <tr>
                                <th class="indice"> Tamanho </th>
                                <th class="valor"> ${pokemon.height} cm </th>
                            </tr>
                            <tr>
                                <th class="indice"> Peso </th>
                                <th class="valor"> ${pokemon.weight} kg </th>
                            </tr>
                            <tr>
                                <th class="indice"> Habilidades </th>
                                ${pokemon.abilities.map((ability) => `<th class="valor">${ability}</th>`).join('')}
                            </tr>
                        </table>
                </div>
            </li>
        `).join('')
                    
    pokemonList.innerHTML += newHtml 
    })
}
            
function loadPokemonInfos() {
                
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

// statusButton.addEventListener('click', () => {
//     console.log('clicou')
//         `
//         <table class="info ${pokemon.type}">
//             <tr>
//                 <th class="indice"> Tamanho </th>
//                 <th class="valor"> ${pokemon.height} cm </th>
//             </tr>
//             <tr>
//                 <th class="indice"> Peso </th>
//                 <th class="valor"> ${pokemon.weight} kg </th>
//             </tr>
//             <tr>
//                 <th class="indice"> Habilidades </th>
//                 ${pokemon.abilities.map((ability) => `<th class="valor">${ability}</th>`).join('')}
//             </tr>
//     </table>
//     `
// })
