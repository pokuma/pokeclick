var pokemonList = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran", "nidorina", "nidoqueen", "nidoran", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetch\'d", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr.mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew"];

var caughtPokemons = [];

var player = {
    xp: 0,
    level: 1,
    money: 0,
    attacks: 5,
}

// Pokemon health points bar
const hpBar = document.getElementById("hpBar");
const yellowZone = hpBar.ariaValueMax / 1.5;
const redZone = hpBar.ariaValueMax / 3;
let hpBarText = document.getElementById("hpBarText");

// Experience bar
const xpBar = document.getElementById("xpBar");
let xpBarText = document.getElementById("xpBarText");
const xpGain = 10;

// Player level 
let levelNav = document.getElementById("level");

// Player money
let moneyNav = document.getElementById("money");

// Player damage
let damageNav = document.getElementById("damage");

// Pokemon image
const pokemon = document.getElementById("pokemon");

// Pokemon name
const pokeName = document.getElementById("pokemonName");

// Pokeball image to know the pokemon is already captured in your pokedex
let caught = document.getElementById("caught");
caught.style.width = "30px";
caught.style.height = "30px";


var pokemonIsCapturedPokeball = function () {
    if (alreadyCaught(pokeName.innerHTML)) {
        caught.src = "assets/images/pokeballs/Pokeball.svg";
        caught.style.filter = "invert(0%)";
    }
    else {
        caught.src = "assets/images/pokeballs/None.svg";
        caught.style.filter = "invert(100%)";
    }
}


// Waits for all the html to load before doing this code
document.addEventListener("DOMContentLoaded", function (e) {
    if (localStorage.getItem("player") != null) {
        load();
    }

    pokemonIsCapturedPokeball();

    // Attack every second
    setInterval(function () {
        attack();
    }, 1000);

    // Spawn the first pokemon
    spawnPokemon();

    levelNav.innerHTML = "level: " + player.level;
    moneyNav.innerHTML = "money: " + player.money;
    damageNav.innerHTML = "click damage: " + player.attacks;
    hpBarText.innerHTML = "hp: " + hpBar.ariaValueNow + " / " + hpBar.ariaValueMax;
    hpBarText.style.color = "white";
    xpBarText.innerHTML = "xp: " + xpBar.ariaValueNow + " / " + xpBar.ariaValueMax;
    setExperiencePadding();
    setHealthPointsPadding();
    xpBarText.style.color = "black";
});


function attack() {
    if (hpBar.ariaValueNow > 0) {
        startPokemonShake();
        if (hpBar.ariaValueNow - player.attacks <= 65) {
            hpBarText.style.color = "black";

            if (hpBar.ariaValueNow < redZone) {
                hpBar.classList = "progress-bar progress-bar progress-bar-animated bg-danger";

            } else if (hpBar.ariaValueNow < yellowZone && hpBar.ariaValueNow > redZone) {
                hpBar.classList = "progress-bar progress-bar progress-bar-animated bg-warning";
            }
        }
        hpBar.ariaValueNow -= player.attacks;
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

var alreadyCaught = function (name) {
    for (let i = 0; i < caughtPokemons.length; i++) {
        if (caughtPokemons[i] === name) {
            return true;
        }
    }
    return false;
}

/* When the pokemon dies:
 *      Get the drops of the pokemon (money and xp)
 *      Restart next pokemon's shake animation
 *      Change the color of the hp bar to green
 *      Spawn another random pokemon
 *      Restore the bar's hp for the next pokemon
 */
function pokemonDies() {
    if (caughtPokemons === undefined || !alreadyCaught(pokeName.innerHTML)) {
        caughtPokemons.push(pokeName.innerHTML);
    }

    getPokemonDrops();
    stopPokemonShake()
    hpBar.classList = "progress-bar progress-bar progress-bar-animated bg-sucess";
    spawnPokemon();
    restoreHP();
    pokemonIsCapturedPokeball();
    save();
}

function getPokemonDrops() {
    gainXP();
    gainMoney();
}

function gainMoney() {
    player.money += 1;
    moneyNav.innerHTML = "money: " + player.money;
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

    pokeName.innerHTML = (pokemonList[pokemonNumber]);

}

function setExperiencePadding() {
    if (xpBar.ariaValueNow == 100) {
        xpBarText.style.paddingLeft = "100px";
    } else if (xpBar.ariaValueNow > 9 && xpBar.ariaValueNow < 100) {
        xpBarText.style.paddingLeft = "104px";
    } else {
        xpBarText.style.paddingLeft = "108px";
    }
}

function setHealthPointsPadding() {

    if (hpBar.ariaValueNow == 100) {
        hpBarText.style.paddingLeft = "100px";
    } else {
        if (hpBar.ariaValueNow - player.attacks > 9) {
            hpBarText.style.paddingLeft = "104px";
        } else if (hpBar.ariaValueNow <= 9) {
            hpBarText.style.paddingLeft = "108px";
        }
    }
}


function gainXP() {
    if (xpBar.ariaValueNow < 100) {
        player.xp += xpGain;
        xpBar.ariaValueNow = player.xp;
        xpBarText.innerHTML = xpBar.ariaValueNow + " / " + xpBar.ariaValueMax;
    }

    if (xpBar.ariaValueNow >= 100) {
        player.level += 1;
        player.xp = 0;

        levelNav.innerHTML = "level: " + player.level;
        xpBar.ariaValueNow = 0;
        xpBarText.innerHTML = "xp: " + xpBar.ariaValueNow + " / " + xpBar.ariaValueMax;

        if (player.level % 2 == 0) {
            player.attacks += 3;
            damageNav.innerHTML = "click damage: " + player.attacks;
        }
    }

    xpBar.style.width = "" + player.xp + "%";
    setExperiencePadding();
}

function restoreHP() {
    hpBar.ariaValueNow = hpBar.ariaValueMax;
    hpBar.style.width = "100%";
}

// Saves the game by writing play to JSON and save it in localStorage			
var save = function () {
    localStorage.setItem("player", JSON.stringify(player));
}

// Loads the game from localStorage and update favIcon to starter
var load = function () {
    player = JSON.parse(localStorage.getItem("player"));
}

function resetConfirmed() {
    alert("You have reset your profile!");

    player = {
        xp: 0,
        level: 1,
        money: 0,
        attacks: 5
    }

    save();
    location.reload();
}

var resetProfile = function () {
    let confirm = prompt("If you wish to reset your profile, please enter \"RESET\":", "");

    if (confirm === null || confirm === "") {
        alert("Profile was NOT reset!");
    } else if (confirm === "RESET") {
        resetConfirmed();
    }
}