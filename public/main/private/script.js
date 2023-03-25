let pokemonList = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];

// Pokemon health points bar
const hpBar = document.getElementById("hpBar");
const yellowZone = hpBar.ariaValueMax / 1.5;
const redZone = hpBar.ariaValueMax / 3;
let hpBarText = document.getElementById("hpBarText");


// Experience bar
const xpBar = document.getElementById("xpBar");
let xpBarText = document.getElementById("xpBarText");
let xp = 0;
const xpGain = 9;

// Player level 
let levelNav = document.getElementById("level");
let lvl = 1;

// Player money
let moneyNav = document.getElementById("money");
let money = 0;

// Player damage
let damageNav = document.getElementById("damage");
let dmg = 9;

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

    levelNav.innerHTML = "level: " + lvl;
    moneyNav.innerHTML = "money: " + money;
    damageNav.innerHTML = "player damage: " + dmg;
    pokeDamageNav.innerHTML = "pokemon damage: " + pokeDmg;
    hpBarText.innerHTML = "hp: " + hpBar.ariaValueNow + " / " + hpBar.ariaValueMax;
    hpBarText.style.color = "white";
    xpBarText.innerHTML = "xp: " + xpBar.ariaValueNow + " / " + xpBar.ariaValueMax;
    setExperiencePadding();
    xpBarText.style.color = "black";

}

function attack() {
    if (hpBar.ariaValueNow > 0) {
        startPokemonShake();
        if (hpBar.ariaValueNow - dmg <= 65) {
            hpBarText.style.color = "black";

            if (hpBar.ariaValueNow < redZone) {
                hpBar.classList = "progress-bar progress-bar-striped progress-bar-animated bg-danger";

            } else if (hpBar.ariaValueNow < yellowZone && hpBar.ariaValueNow > redZone) {
                hpBar.classList = "progress-bar progress-bar-striped progress-bar-animated bg-warning";
            }
        }

        hpBar.ariaValueNow -= dmg;
        hpBarText.innerHTML = "hp: " + hpBar.ariaValueNow + " / " + hpBar.ariaValueMax;
        hpBar.style.width = "" + hpBar.ariaValueNow + "%";
    }

    if (hpBar.ariaValueNow <= 0) {
        hpBarText.innerHTML = "hp: " + hpBar.ariaValueMax + " / " + hpBar.ariaValueMax;
        hpBarText.style.color = "white";
        pokemonDies();
    }

    setHealthPointsPadding();
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
    hpBar.classList = "progress-bar progress-bar-striped progress-bar-animated bg-sucess";
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

function setExperiencePadding() {
    if (xpBar.ariaValueNow == 100) {
        xpBarText.style.paddingLeft = "100px";
    }
    else if (xpBar.ariaValueNow > 9 && xpBar.ariaValueNow < 100) {
        xpBarText.style.paddingLeft = "104px";
    }
    else {
        xpBarText.style.paddingLeft = "108px";
    }
}

function setHealthPointsPadding() {
    if (hpBar.ariaValueNow - dmg <= 0) {
        hpBarText.style.paddingLeft = "108px";
    }
    else if (xpBar.ariaValueNow - dmg > 9 && xpBar.ariaValueNow - dmg < 100) {
        hpBarText.style.paddingLeft = "104px";
    }
    else {
        hpBarText.style.paddingLeft = "100px";
    }
}


function gainXP() {
    if (xpBar.ariaValueNow < 100) {
        xp += xpGain;
        xpBar.ariaValueNow = xp;
        xpBarText.innerHTML = "xp: " + xpBar.ariaValueNow + " / " + xpBar.ariaValueMax;
    }

    if (xpBar.ariaValueNow >= 100) {

        lvl += 1;
        xp = 0;

        levelNav.innerHTML = "Level: " + lvl;
        xpBar.ariaValueNow = 0;
        xpBarText.innerHTML = "xp: " + xpBar.ariaValueNow + " / " + xpBar.ariaValueMax;

        if (lvl % 5 == 0) {
            alert("You got stronger! +2 damage :)");
            dmg += 2;
            damageNav.innerHTML = "Damage: " + dmg;
        }
        else {
            alert("Level up!");
        }
    }

    xpBar.style.width = "" + xp + "%";
    setExperiencePadding();
}

function restoreHP() {
    hpBar.ariaValueNow = hpBar.ariaValueMax;
    hpBar.style.width = "100%";
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