class CardPokemon extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement('li');
        componentRoot.setAttribute('class', 'pokemon');

        const numeroPokemon = document.createElement('span');
        numeroPokemon.setAttribute('class', 'number');
        const nomePokemon = document.createElement('span');
        nomePokemon.setAttribute('class', 'name');
        
        componentRoot.appendChild(numeroPokemon);
        componentRoot.appendChild(nomePokemon);

        const detalhesPokemon = document.createElement('div');
        detalhesPokemon.setAttribute('class', 'detail');      
        const listaTiposPokemons = document.createElement('ol');
        listaTiposPokemons.setAttribute('class', 'types');
        const tiposPokemons = document.createElement('li');
        tiposPokemons.setAttribute('class', 'type');
        listaTiposPokemons.appendChild(tiposPokemons);
        const photoPokemon = document.createElement('img');
        photoPokemon.src = 'photo.jpg';
        photoPokemon.alt = 'foto do pokemon';
        detalhesPokemon.appendChild(listaTiposPokemons);
        detalhesPokemon.appendChild(photoPokemon);
        
        componentRoot.appendChild(detalhesPokemon);

        const infoPokemons = document.createElement('div');
        infoPokemons.setAttribute('id', 'pokemonInfos');

        const botaoSobre = document.createElement('button');
        botaoSobre.setAttribute('class', 'botoesCartilhas');
        botaoSobre.setAttribute('id', 'sobreButton');
        botaoSobre.setAttribute('type', 'button');
        infoPokemons.appendChild(botaoSobre);
        
        const botaoStatus = document.createElement('button');
        botaoStatus.setAttribute('class', 'botoesCartilhas');
        botaoStatus.setAttribute('id', 'statusButton');
        botaoStatus.setAttribute('type', 'button');
        infoPokemons.appendChild(botaoStatus);

        const tabelaStatus = document.createElement('table');
        tabelaStatus.setAttribute('class', 'info');

        const status = document.createElement('tr');

        const statusNome = document.createElement('th');
        statusNome.setAttribute('class', 'indice');
        status.appendChild(statusNome);
        
        const statusValor = document.createElement('th');
        statusValor.setAttribute('class', 'valor');
        status.appendChild(statusValor);

        tabelaStatus.appendChild(status);
        infoPokemons.appendChild(tabelaStatus);

        
        componentRoot.appendChild(infoPokemons);

        return componentRoot
    }

    style(){
        const style = document.createElement('style');
        style.textContent = `
        .pokemon{
            border-color: #000;
            border-style: ridge;
            display: flex;
            flex-direction: column;
            margin: .5rem;
            padding: 2rem 1rem;
            border-radius: 1rem;
            width: 280px;
        }
        
        .normal{
            background-color: #A9A878;
        }
        
        .fire{
            background-color: #F07F2F;
        }
        
        .water{
            background-color: #6790F0;
        }
        
        .poison{
            background-color: #9F40A1;
        }
        
        .psychic{
            background-color: #F85888;
        }
        
        .grass{
            background-color: #78C84F;
        }
        
        .electric{
            background-color: #F9CF30;
        }
        
        .ice{
            background-color: #98D8D8;
        }
        
        .fighting{
            background-color: #C03028;
        }
        
        .ground{
            background-color: #E0C068;
        }
        
        .flying{
            background-color: #A890F0;
        }
        
        .rock{
            background-color: #B7A039;
        }
        
        .dark{
            background-color: #6F5848;
        }
        
        .ghost{
            background-color: #705798;
        }
        
        .steel{
            background-color: #B8B8D0;
        }
        
        .bug{
            background-color: #A8B720;
        }
        
        .dragon{
            background-color: #7038F9;
        }
        
        .fairy{
            background-color: #FFA3B1;
        }
        
        .pokemon .name{
            color: #000;
            margin-bottom: .25rem;
            text-transform: capitalize;
        }
        
        .pokemon .number {
            color: #000;
            opacity: .3;
            text-align: right;
            font-size: .625rem;
        }
        
        .pokemon .detail{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        
        .pokemon .detail .types {
            padding: 0;
            margin: 0;
            list-style: none;
        }
        
        .pokemon .detail .types .type{
            color: #000;
            padding: .25rem .5rem;
            margin: .25rem 0;
            font-size: .825rem;
            border-radius: 1rem;
            filter: brightness(1.1);
            text-align: center;
        }
        
        .pokemon .detail img {
            max-height: 100%;
            max-width: 70px;
        }
        
        .pagination {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 1rem;
        }
        
        .pagination button {
            padding: 0.25rem 0.5rem;
            margin: 0.25rem 0;
            font-size: .625rem;
            color: #fff;
            background-color: #31323d;
            border: none;
            border-radius: 1rem;
        }
        
        .info {
            border-style: ridge;
            padding: 1rem;
            filter: brightness(0.8);
            border-radius: 1rem;
            width: 100%;
        }
        
        .indice{
            font-size: .825rem;
            font-style: normal;
            text-transform: uppercase;    
        }
        
        .valor{
            font-size: .825rem;
        }
        
        .botoesCartilhas {
            color: #000;
            border-style: ridge;
            border-radius: 1rem;
            border-color: #000;
            padding: 0.25rem 0.5rem;
            margin: 0px 0px 3px 3px;
            font-size: .825rem;
            text-align: center;
            filter: brightness(0.8);
            width: 47.5%;
        }        
        `

        return style
    }

}

customElements.define('card-pokemon', CardPokemon);