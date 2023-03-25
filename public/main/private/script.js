let pokemonList = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];

// Pokemon health points bar
const hpBar = document.getElementById("hpBar");
const yellowZone = hpBar.value / 1.5;
const redZone = hpBar.value / 3;

// Experience bar
let xpBar = document.getElementById("xpBar");

// Player level 
let levelNav = document.getElementById("level");
let lvl = 1;

// Player money
let moneyNav = document.getElementById("money");
let money = 0;

// Player damage
let damageNav = document.getElementById("damage");
let dmg = 1;

// Player's pokemon damage
let pokeDamageNav = document.getElementById("pokeDamage");
let pokeDmg = 1;

// Pokemon image
const pokemon = document.getElementById("pokemon");

// Pokemon name
const pokeName = document.getElementById("pokemonName");

init();

// Initiates the game for the first time
function init() {
    // Spawn the first pokemon
    spawnPokemon();



    levelNav.innerHTML = "Level: " + lvl;
    moneyNav.innerHTML = "Money: " + money;
    damageNav.innerHTML = "Player Damage: " + dmg;
    pokeDamageNav.innerHTML = "Pokemon damage: " + pokeDmg;

}

function attack() {
    if (hpBar.value > 0) {
        if (hpBar.value < redZone) {
            hpBar.style.accentColor = "red";

        } else if (hpBar.value < yellowZone && hpBar.value > redZone) {
            hpBar.style.accentColor = "yellow";
        }

        hpBar.value -= dmg;
        startPokemonShake();
    }

    if (hpBar.value <= 0) {
        pokemonDies();
    }
}

/* When the pokemon dies:
 *      Get the drops of the pokemon (money and xp)
 *      Restart next pokemon's shake animation
 *      Change the color of the hp bar to green
 *      Spawn another random pokemon
 *      Restore the bar's hp for the next pokemon
 */
function pokemonDies() {
    getPokemonDrops();
    stopPokemonShake()
    hpBar.style.accentColor = "green";
    spawnPokemon();
    restoreHP();

}

function getPokemonDrops() {
    gainXP();
    gainMoney();
}


function gainMoney() {
    money += 1;
    moneyNav.innerHTML = "Money: " + money;
}

function startPokemonShake() {
    pokemon.style.animation = "shake 0.5s";
    pokemon.onanimationiteration = "infinite";
}

function stopPokemonShake() {
    pokemon.style.animation = "none";
    pokemon.onanimationiteration = "none";
}


function spawnPokemon() {
    let pokeSize = pokemonList.length;
    let pokemonNumber = Math.floor(Math.random() * (pokeSize - 1));
    pokemon.src = "assets/images/pokemon/" + (pokemonNumber + 1) + ".png";
    pokeName.innerHTML = (pokemonList[pokemonNumber].toLowerCase());
}

function gainXP() {
    if (xpBar.value < 100) {
        xpBar.value += 20;
    }

    if (xpBar.value >= 100) {
        lvl += 1;
        levelNav.innerHTML = "Level: " + lvl;
        xpBar.value = 0;

        if (lvl % 5 == 0) {
            alert("You got stronger! +2 damage :)");
            dmg += 2;
            damageNav.innerHTML = "Damage: " + dmg;
        }
    }
}

function restoreHP() {
    hpBar.value = hpBar.getAttribute("max");
}

function login() {
    alert("Login was clicked");
}

function register() {
    alert("Register was clicked");
}

function options() {
    alert("Options was clicked");
}

// Function that plays the sound of the file url we send as parameter
function playAudio(url) {
    new Audio(url).play();
}

function validateForm() {
    const nameInput = document.getElementById("nicknames");
    const emailInput = document.getElementById("emails");
    const passwordInput = document.getElementById("passwords");

    if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
        alert("Por favor, rellene todos los campos requeridos.");
        return false;
    }
    return true;
}



function changeDarkMode() {
    var body = document.getElementById("body");
    body.classList.toggle("dark-mode");
}