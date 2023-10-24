class CardPokemon extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const tipo = this.getAttribute('Tipo');
        const nome = this.getAttribute('Nome');
        const numero = this.getAttribute('Numero');
        const tipos = this.getAttribute('Tipos').split(',');
        const foto = this.getAttribute('Foto');
        const tamanho = this.getAttribute('Tamanho');
        const peso = this.getAttribute('Peso');
        const habilidades = this.getAttribute('Habilidades');
        const nomeStatus = this.getAttribute('StatusNome').split(',');
        const valorStatus = this.getAttribute('StatusValor').split(',');

        const componentRoot = document.createElement('li');
        componentRoot.setAttribute('class', `pokemon ${tipo}`);

        const numeroPokemon = document.createElement('span');
        numeroPokemon.setAttribute('class', 'number');
        numeroPokemon.innerText = numero;
        const nomePokemon = document.createElement('span');
        nomePokemon.setAttribute('class', 'name');
        nomePokemon.innerText = nome;
        
        componentRoot.appendChild(numeroPokemon);
        componentRoot.appendChild(nomePokemon);

        const detalhesPokemon = document.createElement('div');
        detalhesPokemon.setAttribute('class', 'detail');      
        const listaTiposPokemons = document.createElement('ol');
        listaTiposPokemons.setAttribute('class', 'types');
        if (tipos.length > 1) {
            const tiposPokemons1 = document.createElement('li');
            tiposPokemons1.setAttribute('class', `type ${tipos[0]}`);
            tiposPokemons1.innerText = `${tipos[0]}`;
            const tiposPokemons2 = document.createElement('li');
            tiposPokemons2.setAttribute('class', `type ${tipos[1]}`);
            tiposPokemons2.innerText = `${tipos[1]}`;

            listaTiposPokemons.appendChild(tiposPokemons1);
            listaTiposPokemons.appendChild(tiposPokemons2);
        } else {
            const tiposPokemons1 = document.createElement('li');
            tiposPokemons1.setAttribute('class', `type ${tipos[0]}`);
            tiposPokemons1.innerText = `${tipos[0]}`;

            listaTiposPokemons.appendChild(tiposPokemons1);
        }
        const photoPokemon = document.createElement('img');
        photoPokemon.src = foto;
        photoPokemon.alt = nome;
        detalhesPokemon.appendChild(listaTiposPokemons);
        detalhesPokemon.appendChild(photoPokemon);
        
        componentRoot.appendChild(detalhesPokemon);

        const infoPokemons = document.createElement('div');
        infoPokemons.setAttribute('id', 'pokemonInfos');

        const botaoSobre = document.createElement('button');
        botaoSobre.setAttribute('class', `botoesCartilhas ${tipo}`);
        botaoSobre.setAttribute('id', 'sobreButton');
        botaoSobre.setAttribute('type', 'button');
        botaoSobre.innerText = 'Sobre';
        infoPokemons.appendChild(botaoSobre);
        
        const botaoStatus = document.createElement('button');
        botaoStatus.setAttribute('class', `botoesCartilhas ${tipo}`);
        botaoStatus.setAttribute('id', 'statusButton');
        botaoStatus.setAttribute('type', 'button');
        botaoStatus.innerText = 'Status';
        infoPokemons.appendChild(botaoStatus);

        const tabelaStatus = document.createElement('table');
        tabelaStatus.setAttribute('class', `info ${tipo}`);

        for (let i = 0; i < nomeStatus.length; i++) {
            const status = document.createElement('tr');
            const statusIndice = document.createElement('th');
            statusIndice.setAttribute('class', 'indice');
            statusIndice.innerText = nomeStatus[i];
            status.appendChild(statusIndice);
            const statusNum = document.createElement('th');
            statusNum.setAttribute('class', 'valor');
            statusNum.innerText = valorStatus[i];
            status.appendChild(statusNum);
            tabelaStatus.appendChild(status);
        }

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
            border-color: #000;
            border-style: ridge;
        }
        
        .pokemon .detail img {
            max-height: 100%;
            max-width: 70px;
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