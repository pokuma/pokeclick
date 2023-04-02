const pokemonList = [{ name: "bulbasaur", basexp: 64 }, { name: "ivysaur", basexp: 142 }, { name: "venusaur", basexp: 236 }, { name: "charmander", basexp: 62 }, { name: "charmeleon", basexp: 142 }, { name: "charizard", basexp: 240 }, { name: "squirtle", basexp: 63 }, { name: "wartortle", basexp: 142 }, { name: "blastoise", basexp: 239 }, { name: "caterpie", basexp: 39 }, { name: "metapod", basexp: 72 }, { name: "butterfree", basexp: 178 }, { name: "weedle", basexp: 39 }, { name: "kakuna", basexp: 72 }, { name: "beedrill", basexp: 178 }, { name: "pidgey", basexp: 50 }, { name: "pidgeotto", basexp: 122 }, { name: "pidgeot", basexp: 216 }, { name: "rattata", basexp: 51 }, { name: "raticate", basexp: 145 }, { name: "spearow", basexp: 52 }, { name: "fearow", basexp: 155 }, { name: "ekans", basexp: 58 }, { name: "arbok", basexp: 157 }, { name: "pikachu", basexp: 112 }, { name: "raichu", basexp: 218 }, { name: "sandshrew", basexp: 60 }, { name: "sandslash", basexp: 158 }, { name: "nidoran♀", basexp: 55 }, { name: "nidorina", basexp: 128 }, { name: "nidoqueen", basexp: 227 }, { name: "nidoran♂", basexp: 55 }, { name: "nidorino", basexp: 128 }, { name: "nidoking", basexp: 227 }, { name: "clefairy", basexp: 113 }, { name: "clefable", basexp: 217 }, { name: "vulpix", basexp: 63 }, { name: "ninetales", basexp: 178 }, { name: "jigglypuff", basexp: 95 }, { name: "wigglytuff", basexp: 196 }, { name: "zubat", basexp: 49 }, { name: "golbat", basexp: 159 }, { name: "oddish", basexp: 64 }, { name: "gloom", basexp: 138 }, { name: "vileplume", basexp: 221 }, { name: "paras", basexp: 57 }, { name: "parasect", basexp: 142 }, { name: "venonat", basexp: 61 }, { name: "venomoth", basexp: 158 }, { name: "diglett", basexp: 53 }, { name: "dugtrio", basexp: 149 }, { name: "meowth", basexp: 58 }, { name: "persian", basexp: 154 }, { name: "psyduck", basexp: 64 }, { name: "golduck", basexp: 175 }, { name: "mankey", basexp: 61 }, { name: "primeape", basexp: 159 }, { name: "growlithe", basexp: 70 }, { name: "arcanine", basexp: 194 }, { name: "poliwag", basexp: 60 }, { name: "poliwhirl", basexp: 135 }, { name: "poliwrath", basexp: 230 }, { name: "abra", basexp: 62 }, { name: "kadabra", basexp: 140 }, { name: "alakazam", basexp: 225 }, { name: "machop", basexp: 61 }, { name: "machoke", basexp: 142 }, { name: "machamp", basexp: 227 }, { name: "bellsprout", basexp: 60 }, { name: "weepinbell", basexp: 137 }, { name: "victreebel", basexp: 221 }, { name: "tentacool", basexp: 67 }, { name: "tentacruel", basexp: 180 }, { name: "geodude", basexp: 60 }, { name: "graveler", basexp: 137 }, { name: "golem", basexp: 223 }, { name: "ponyta", basexp: 82 }, { name: "rapidash", basexp: 175 }, { name: "slowpoke", basexp: 63 }, { name: "slowbro", basexp: 172 }, { name: "magnemite", basexp: 65 }, { name: "magneton", basexp: 163 }, { name: "farfetch'd", basexp: 123 }, { name: "doduo", basexp: 62 }, { name: "dodrio", basexp: 161 }, { name: "seel", basexp: 65 }, { name: "dewgong", basexp: 166 }, { name: "grimer", basexp: 65 }, { name: "muk", basexp: 175 }, { name: "shellder", basexp: 61 }, { name: "cloyster", basexp: 184 }, { name: "gastly", basexp: 62 }, { name: "haunter", basexp: 142 }, { name: "gengar", basexp: 225 }, { name: "onix", basexp: 77 }, { name: "drowzee", basexp: 66 }, { name: "hypno", basexp: 169 }, { name: "krabby", basexp: 65 }, { name: "kingler", basexp: 166 }, { name: "voltorb", basexp: 66 }, { name: "electrode", basexp: 172 }, { name: "exeggcute", basexp: 65 }, { name: "exeggutor", basexp: 186 }, { name: "cubone", basexp: 64 }, { name: "marowak", basexp: 149 }, { name: "hitmonlee", basexp: 159 }, { name: "hitmonchan", basexp: 159 }, { name: "lickitung", basexp: 77 }, { name: "koffing", basexp: 68 }, { name: "weezing", basexp: 172 }, { name: "rhyhorn", basexp: 69 }, { name: "rhydon", basexp: 170 }, { name: "chansey", basexp: 395 }, { name: "tangela", basexp: 87 }, { name: "kangaskhan", basexp: 172 }, { name: "horsea", basexp: 59 }, { name: "seadra", basexp: 154 }, { name: "goldeen", basexp: 64 }, { name: "seaking", basexp: 158 }, { name: "staryu", basexp: 68 }, { name: "starmie", basexp: 182 }, { name: "mr.mime", basexp: 161 }, { name: "scyther", basexp: 100 }, { name: "jynx", basexp: 159 }, { name: "electabuzz", basexp: 172 }, { name: "magmar", basexp: 173 }, { name: "pinsir", basexp: 175 }, { name: "tauros", basexp: 172 }, { name: "magikarp", basexp: 40 }, { name: "gyarados", basexp: 189 }, { name: "lapras", basexp: 187 }, { name: "ditto", basexp: 101 }, { name: "eevee", basexp: 65 }, { name: "vaporeon", basexp: 184 }, { name: "jolteon", basexp: 184 }, { name: "flareon", basexp: 184 }, { name: "porygon", basexp: 79 }, { name: "omanyte", basexp: 71 }, { name: "omastar", basexp: 173 }, { name: "kabuto", basexp: 71 }, { name: "kabutops", basexp: 173 }, { name: "aerodactyl", basexp: 180 }, { name: "snorlax", basexp: 189 }, { name: "articuno", basexp: 261 }, { name: "zapdos", basexp: 261 }, { name: "moltres", basexp: 261 }, { name: "dratini", basexp: 60 }, { name: "dragonair", basexp: 147 }, { name: "dragonite", basexp: 270 }, { name: "mewtwo", basexp: 306 }, { name: "mew", basexp: 270 }];

let player = {
    xp: 0,
    level: 5,
    money: 0,
    attacks: 5,
    pokeCounter: 0,
    caughtPokemons: []
};

// Pokemon health points bar
const hpBar = document.getElementById("hpBar");
const yellowZone = hpBar.ariaValueMax / 1.5;
const redZone = hpBar.ariaValueMax / 3;
let hpBarText = document.getElementById("hpBarText");

// Experience bar
const xpBar = document.getElementById("xpBar");
let xpBarText = document.getElementById("xpBarText");
const xpGain = 10;


// Player level Nav
let levelNav = document.getElementById("level");

// Player money  Nav
let moneyNav = document.getElementById("money");

// Player damage  Nav
let damageNav = document.getElementById("damage");

// Pokemon counter Nav
let pokeCount = document.getElementById("pokeCount");

// Pokemon image
const pokemon = document.getElementById("pokemon");

// Pokemon name
const pokeName = document.getElementById("pokemonName");

// Pokeball image to know the pokemon is already captured in your pokedex
let caught = document.getElementById("caught");
caught.style.width = "30px";
caught.style.height = "30px";


// Waits for all the html to load before doing this code
document.addEventListener("DOMContentLoaded", function (e) {
    if (localStorage.getItem("player") !== null) {
        loadPlayer();
    }

    if (localStorage.getItem("pokeCounter") !== null && localStorage.getItem("caught") !== null) {
        loadPokeCaught();
    }


    // Attack every second
    setInterval(function () {
        attack();
    }, 1000);

    // Spawn the first pokemon
    spawnPokemon();

    levelNav.innerHTML = "level: " + player.level;
    moneyNav.innerHTML = "money: " + player.money;
    damageNav.innerHTML = "click damage: " + player.attacks;
    pokeCount.innerHTML = "pokemon caught: " + player.pokeCounter;
    hpBarText.innerHTML = "hp: " + hpBar.ariaValueNow + " / " + hpBar.ariaValueMax;
    hpBarText.style.color = "white";
    xpBarText.innerHTML = "xp: " + xpBar.ariaValueNow + " / " + xpBar.ariaValueMax;
    setExperiencePadding();
    setHealthPointsPadding();
    xpBarText.style.color = "black";
});



function pokemonIsCapturedPokeball() {
    if (alreadyCaught(pokeName.innerHTML)) {
        caught.src = "assets/images/pokeballs/Pokeball.svg";
        caught.style.filter = "invert(0%)";
    }
    else {
        caught.src = "assets/images/pokeballs/None.svg";
        caught.style.filter = "invert(100%)";
    }
}


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
    for (let i = 0; i < player.caughtPokemons.length; i++) {

        if (player.caughtPokemons[i] === name) {
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
    if (!alreadyCaught(pokeName.innerHTML)) {
        player.caughtPokemons.push(pokeName.innerHTML);
        player.pokeCounter++;
        pokeCount.innerHTML = "pokemon caught: " + player.pokeCounter;
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
    let pokemonNumber = Math.floor(Math.random() * pokeSize) + 1;
    pokemon.src = "assets/images/pokemon/" + (pokemonNumber) + ".png";
    pokeName.innerHTML = (pokemonList[pokemonNumber - 1].name);
    pokemonIsCapturedPokeball();

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
        xpBarText.innerHTML = "xp " + xpBar.ariaValueNow + " / " + xpBar.ariaValueMax;
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
    localStorage.setItem("caught", JSON.stringify(caughtPokemons));
    localStorage.setItem("pokeCounter", JSON.stringify(player.pokeCounter));
}

// Loads the game from localStorage and update favIcon to starter
var loadPlayer = function () {
    player = JSON.parse(localStorage.getItem("player"));

}

var loadPokeCaught = function () {
    caughtPokemons = JSON.parse(localStorage.getItem("caught"));
    player.pokeCounter = JSON.parse(localStorage.getItem("pokeCounter"));
}

function resetConfirmed() {
    alert("You have reset your profile!");

    player = {
        xp: 0,
        level: 1,
        money: 0,
        attacks: 5,
        pokeCounter: 0,
        caughtPokemons: []
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