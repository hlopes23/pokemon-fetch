
async function fetchPokemon(pokemonName){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();


pokemonStats = {
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    specialAttack: data.stats[3].base_stat,
    specialDefense: data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
    height: data.height / 10, 
    weight: data.weight / 10, 
    ability: data.abilities[0].ability.name, 
    hiddenAbility: data.abilities[1] ? data.abilities[1].ability.name : 'N/A' 
}

    changeCardInfo(data)
}

 function changeCardInfo(data){

    pokemonType.innerHTML = data.types[0].type.name;
    pokemonName.innerHTML = data.name;
    pokemonValues[0].innerHTML = pokemonStats.hp;
    pokemonValues[1].innerHTML = pokemonStats.attack;
    pokemonValues[2].innerHTML = pokemonStats.defense;
    pokemonValues[3].innerHTML = pokemonStats.specialAttack;
    pokemonValues[4].innerHTML = pokemonStats.specialDefense;
    pokemonValues[5].innerHTML = pokemonStats.speed;
    pokemonValues[6].innerHTML = pokemonStats.height;
    pokemonValues[7].innerHTML = pokemonStats.weight;
    pokemonValues[8].innerHTML = pokemonStats.ability;
    pokemonValues[9].innerHTML = pokemonStats.hiddenAbility;
}

function editCard(pokemon){

    card.style.display = "flex";

    switch (pokemon){

            case "pikachu":
            pokeImg.src = "/pokemons/pikachu.png";
            card.style.background = "linear-gradient(to bottom right, rgb(239, 231, 122), rgb(219, 165, 1))";
            break;

            case "mewtwo":
            pokeImg.src = "/pokemons/mewtwo.png";
            card.style.background = "linear-gradient(to bottom right, rgb(234, 232, 232), rgb(194, 173, 173))";
            break;

            case "charizard":
            pokeImg.src = "/pokemons/charizard.png";
            card.style.background = "linear-gradient(to bottom right, rgb(228, 175, 77), rgb(168, 3, 3))";
            break;

            case "pidgeot":
            pokeImg.src = "/pokemons/pidgeot.png";
            card.style.background = "linear-gradient(to bottom right,rgb(208, 161, 72), rgb(180, 135, 183))";
            break;

            case "gyarados":
            pokeImg.src = "/pokemons/gyarados.png";
            card.style.background = "linear-gradient(to bottom right,rgb(72, 206, 224), rgb(30, 51, 235))";
            break;
    }
}


document.querySelector('.dropdown-list-items').addEventListener('click', function (e) {

    let selected = document.querySelector('.selected-pokemons');

    if (e.target.tagName.toLowerCase() === 'li') {
      pokemon = e.target.innerHTML; 
      selected.innerHTML = pokemon;
    }

    fetchPokemon(pokemon);
    editCard(pokemon);
  });




// ----- variables -----


let pokemon;
let pokeImg = document.getElementById('pokemon-image');
let pokemonType = document.querySelector('.pokemon-type');
let pokemonName = document.querySelector('.pokemon-name');
const pokemonValues = document.querySelectorAll('.pokemon-value');
let pokemonStats; 
let card = document.querySelector('.card');