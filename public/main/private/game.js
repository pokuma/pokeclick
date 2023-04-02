const pokemonList = [
    { id: 1, name: "bulbasaur", baseXP: 64, baseHP: 45, route: 1 },
    { id: 2, name: "ivysaur", baseXP: 142, baseHP: 60, route: 1 },
    { id: 3, name: "venusaur", baseXP: 236, baseHP: 80, route: 1 },
    { id: 4, name: "charmander", baseXP: 62, baseHP: 39, route: 1 },
    { id: 5, name: "charmeleon", baseXP: 142, baseHP: 58, route: 1 },
    { id: 6, name: "charizard", baseXP: 240, baseHP: 78, route: 1 },
    { id: 7, name: "squirtle", baseXP: 63, baseHP: 44, route: 1 },
    { id: 8, name: "wartortle", baseXP: 142, baseHP: 59, route: 1 },
    { id: 9, name: "blastoise", baseXP: 239, baseHP: 79, route: 1 },
    { id: 10, name: "caterpie", baseXP: 39, baseHP: 45, route: 1 },
    { id: 11, name: "metapod", baseXP: 72, baseHP: 50, route: 1 },
    { id: 12, name: "butterfree", baseXP: 178, baseHP: 60, route: 1 },
    { id: 13, name: "weedle", baseXP: 39, baseHP: 40, route: 1 },
    { id: 14, name: "kakuna", baseXP: 72, baseHP: 45, route: 1 },
    { id: 15, name: "beedrill", baseXP: 178, baseHP: 65, route: 1 },
    { id: 16, name: "pidgey", baseXP: 50, baseHP: 40, route: 1 },
    { id: 17, name: "pidgeotto", baseXP: 122, baseHP: 63, route: 1 },
    { id: 18, name: "pidgeot", baseXP: 216, baseHP: 83, route: 1 },
    { id: 19, name: "rattata", baseXP: 51, baseHP: 30, route: 1 },
    { id: 20, name: "raticate", baseXP: 145, baseHP: 55, route: 1 },
    { id: 21, name: "spearow", baseXP: 52, baseHP: 40, route: 1 },
    { id: 22, name: "fearow", baseXP: 155, baseHP: 65, route: 1 },
    { id: 23, name: "ekans", baseXP: 58, baseHP: 35, route: 1 },
    { id: 24, name: "arbok", baseXP: 157, baseHP: 60, route: 1 },
    { id: 25, name: "pikachu", baseXP: 112, baseHP: 35, route: 1 },
    { id: 26, name: "raichu", baseXP: 218, baseHP: 60, route: 1 },
    { id: 27, name: "sandshrew", baseXP: 60, baseHP: 50, route: 1 },
    { id: 28, name: "sandslash", baseXP: 158, baseHP: 75, route: 1 },
    { id: 29, name: "nidoran♀", baseXP: 55, baseHP: 55, route: 1 },
    { id: 30, name: "nidorina", baseXP: 128, baseHP: 70, route: 1 },
    { id: 31, name: "nidoqueen", baseXP: 227, baseHP: 90, route: 1 },
    { id: 32, name: "nidoran♂", baseXP: 55, baseHP: 46, route: 1 },
    { id: 33, name: "nidorino", baseXP: 128, baseHP: 61, route: 1 },
    { id: 34, name: "nidoking", baseXP: 227, baseHP: 81, route: 1 },
    { id: 35, name: "clefairy", baseXP: 113, baseHP: 70, route: 1 },
    { id: 36, name: "clefable", baseXP: 217, baseHP: 95, route: 1 },
    { id: 37, name: "vulpix", baseXP: 63, baseHP: 38, route: 1 },
    { id: 38, name: "ninetales", baseXP: 178, baseHP: 73, route: 1 },
    { id: 39, name: "jigglypuff", baseXP: 95, baseHP: 115, route: 1 },
    { id: 40, name: "wigglytuff", baseXP: 196, baseHP: 140, route: 1 },
    { id: 41, name: "zubat", baseXP: 49, baseHP: 40, route: 1 },
    { id: 42, name: "golbat", baseXP: 159, baseHP: 75, route: 1 },
    { id: 43, name: "oddish", baseXP: 64, baseHP: 45, route: 1 },
    { id: 44, name: "gloom", baseXP: 138, baseHP: 60, route: 1 },
    { id: 45, name: "vileplume", baseXP: 221, baseHP: 75, route: 1 },
    { id: 46, name: "paras", baseXP: 57, baseHP: 35, route: 1 },
    { id: 47, name: "parasect", baseXP: 142, baseHP: 60, route: 1 },
    { id: 48, name: "venonat", baseXP: 61, baseHP: 60, route: 1 },
    { id: 49, name: "venomoth", baseXP: 158, baseHP: 70, route: 1 },
    { id: 50, name: "diglett", baseXP: 53, baseHP: 10, route: 1 },
    { id: 51, name: "dugtrio", baseXP: 149, baseHP: 35, route: 1 },
    { id: 52, name: "meowth", baseXP: 58, baseHP: 40, route: 1 },
    { id: 53, name: "persian", baseXP: 154, baseHP: 65, route: 1 },
    { id: 54, name: "psyduck", baseXP: 64, baseHP: 50, route: 1 },
    { id: 55, name: "golduck", baseXP: 175, baseHP: 80, route: 1 },
    { id: 56, name: "mankey", baseXP: 61, baseHP: 40, route: 1 },
    { id: 57, name: "primeape", baseXP: 159, baseHP: 65, route: 1 },
    { id: 58, name: "growlithe", baseXP: 70, baseHP: 55, route: 1 },
    { id: 59, name: "arcanine", baseXP: 194, baseHP: 90, route: 1 },
    { id: 60, name: "poliwag", baseXP: 60, baseHP: 40, route: 1 },
    { id: 61, name: "poliwhirl", baseXP: 135, baseHP: 65, route: 1 },
    { id: 62, name: "poliwrath", baseXP: 230, baseHP: 90, route: 1 },
    { id: 63, name: "abra", baseXP: 62, baseHP: 25, route: 1 },
    { id: 64, name: "kadabra", baseXP: 140, baseHP: 40, route: 1 },
    { id: 65, name: "alakazam", baseXP: 225, baseHP: 55, route: 1 },
    { id: 66, name: "machop", baseXP: 61, baseHP: 70, route: 1 },
    { id: 67, name: "machoke", baseXP: 142, baseHP: 80, route: 1 },
    { id: 68, name: "machamp", baseXP: 227, baseHP: 90, route: 1 },
    { id: 69, name: "bellsprout", baseXP: 60, baseHP: 50, route: 1 },
    { id: 70, name: "weepinbell", baseXP: 137, baseHP: 65, route: 1 },
    { id: 71, name: "victreebel", baseXP: 221, baseHP: 80, route: 1 },
    { id: 72, name: "tentacool", baseXP: 67, baseHP: 40, route: 1 },
    { id: 73, name: "tentacruel", baseXP: 180, baseHP: 80, route: 1 },
    { id: 74, name: "geodude", baseXP: 60, baseHP: 40, route: 1 },
    { id: 75, name: "graveler", baseXP: 137, baseHP: 55, route: 1 },
    { id: 76, name: "golem", baseXP: 223, baseHP: 80, route: 1 },
    { id: 77, name: "ponyta", baseXP: 82, baseHP: 50, route: 1 },
    { id: 78, name: "rapidash", baseXP: 175, baseHP: 65, route: 1 },
    { id: 79, name: "slowpoke", baseXP: 63, baseHP: 90, route: 1 },
    { id: 80, name: "slowbro", baseXP: 172, baseHP: 95, route: 1 },
    { id: 81, name: "magnemite", baseXP: 65, baseHP: 25, route: 1 },
    { id: 82, name: "magneton", baseXP: 163, baseHP: 50, route: 1 },
    { id: 83, name: "farfetch'd", baseXP: 123, baseHP: 52, route: 1 },
    { id: 84, name: "doduo", baseXP: 62, baseHP: 35, route: 1 },
    { id: 85, name: "dodrio", baseXP: 161, baseHP: 60, route: 1 },
    { id: 86, name: "seel", baseXP: 65, baseHP: 65, route: 1 },
    { id: 87, name: "dewgong", baseXP: 166, baseHP: 90, route: 1 },
    { id: 88, name: "grimer", baseXP: 65, baseHP: 80, route: 1 },
    { id: 89, name: "muk", baseXP: 175, baseHP: 105, route: 1 },
    { id: 90, name: "shellder", baseXP: 61, baseHP: 30, route: 1 },
    { id: 91, name: "cloyster", baseXP: 184, baseHP: 50, route: 1 },
    { id: 92, name: "gastly", baseXP: 62, baseHP: 30, route: 1 },
    { id: 93, name: "haunter", baseXP: 142, baseHP: 45, route: 1 },
    { id: 94, name: "gengar", baseXP: 225, baseHP: 60, route: 1 },
    { id: 95, name: "onix", baseXP: 77, baseHP: 35, route: 1 },
    { id: 96, name: "drowzee", baseXP: 66, baseHP: 60, route: 1 },
    { id: 97, name: "hypno", baseXP: 169, baseHP: 85, route: 1 },
    { id: 98, name: "krabby", baseXP: 65, baseHP: 30, route: 1 },
    { id: 99, name: "kingler", baseXP: 166, baseHP: 55, route: 1 },
    { id: 100, name: "voltorb", baseXP: 66, baseHP: 40, route: 1 },
    { id: 101, name: "electrode", baseXP: 172, baseHP: 60, route: 1 },
    { id: 102, name: "exeggcute", baseXP: 65, baseHP: 60, route: 1 },
    { id: 103, name: "exeggutor", baseXP: 186, baseHP: 95, route: 1 },
    { id: 104, name: "cubone", baseXP: 64, baseHP: 50, route: 1 },
    { id: 105, name: "marowak", baseXP: 149, baseHP: 60, route: 1 },
    { id: 106, name: "hitmonlee", baseXP: 159, baseHP: 50, route: 1 },
    { id: 107, name: "hitmonchan", baseXP: 159, baseHP: 50, route: 1 },
    { id: 108, name: "lickitung", baseXP: 77, baseHP: 90, route: 1 },
    { id: 109, name: "koffing", baseXP: 68, baseHP: 40, route: 1 },
    { id: 110, name: "weezing", baseXP: 172, baseHP: 65, route: 1 },
    { id: 111, name: "rhyhorn", baseXP: 69, baseHP: 80, route: 1 },
    { id: 112, name: "rhydon", baseXP: 170, baseHP: 105, route: 1 },
    { id: 113, name: "chansey", baseXP: 395, baseHP: 250, route: 1 },
    { id: 114, name: "tangela", baseXP: 87, baseHP: 65, route: 1 },
    { id: 115, name: "kangaskhan", baseXP: 172, baseHP: 105, route: 1 },
    { id: 116, name: "horsea", baseXP: 59, baseHP: 30, route: 1 },
    { id: 117, name: "seadra", baseXP: 154, baseHP: 55, route: 1 },
    { id: 118, name: "goldeen", baseXP: 64, baseHP: 45, route: 1 },
    { id: 119, name: "seaking", baseXP: 158, baseHP: 80, route: 1 },
    { id: 120, name: "staryu", baseXP: 68, baseHP: 30, route: 1 },
    { id: 121, name: "starmie", baseXP: 182, baseHP: 60, route: 1 },
    { id: 122, name: "mr.mime", baseXP: 161, baseHP: 40, route: 1 },
    { id: 123, name: "scyther", baseXP: 100, baseHP: 70, route: 1 },
    { id: 124, name: "jynx", baseXP: 159, baseHP: 65, route: 1 },
    { id: 125, name: "electabuzz", baseXP: 172, baseHP: 65, route: 1 },
    { id: 126, name: "magmar", baseXP: 173, baseHP: 65, route: 1 },
    { id: 127, name: "pinsir", baseXP: 175, baseHP: 65, route: 1 },
    { id: 128, name: "tauros", baseXP: 172, baseHP: 75, route: 1 },
    { id: 129, name: "magikarp", baseXP: 40, baseHP: 20, route: 1 },
    { id: 130, name: "gyarados", baseXP: 189, baseHP: 95, route: 1 },
    { id: 131, name: "lapras", baseXP: 187, baseHP: 130, route: 1 },
    { id: 132, name: "ditto", baseXP: 101, baseHP: 48, route: 1 },
    { id: 133, name: "eevee", baseXP: 65, baseHP: 55, route: 1 },
    { id: 134, name: "vaporeon", baseXP: 184, baseHP: 130, route: 1 },
    { id: 135, name: "jolteon", baseXP: 184, baseHP: 65, route: 1 },
    { id: 136, name: "flareon", baseXP: 184, baseHP: 65, route: 1 },
    { id: 137, name: "porygon", baseXP: 79, baseHP: 65, route: 1 },
    { id: 138, name: "omanyte", baseXP: 71, baseHP: 35, route: 1 },
    { id: 139, name: "omastar", baseXP: 173, baseHP: 70, route: 1 },
    { id: 140, name: "kabuto", baseXP: 71, baseHP: 30, route: 1 },
    { id: 141, name: "kabutops", baseXP: 173, baseHP: 60, route: 1 },
    { id: 142, name: "aerodactyl", baseXP: 180, baseHP: 80, route: 1 },
    { id: 143, name: "snorlax", baseXP: 189, baseHP: 160, route: 1 },
    { id: 144, name: "articuno", baseXP: 261, baseHP: 90, route: 1 },
    { id: 145, name: "zapdos", baseXP: 261, baseHP: 90, route: 1 },
    { id: 146, name: "moltres", baseXP: 261, baseHP: 90, route: 1 },
    { id: 147, name: "dratini", baseXP: 60, baseHP: 41, route: 1 },
    { id: 148, name: "dragonair", baseXP: 147, baseHP: 61, route: 1 },
    { id: 149, name: "dragonite", baseXP: 270, baseHP: 91, route: 1 },
    { id: 150, name: "mewtwo", baseXP: 306, baseHP: 106, route: 1 },
    { id: 151, name: "mew", baseXP: 270, baseHP: 100, route: 1 },
];

let pokemon = {
    id: 0,
    name: "",
    baseXP: 0,
    baseHP: 0,
    route: 0,
}

let player = {
    xp: 0,
    level: 5,
    money: 0,
    attacks: 5,
    pokeCounter: 0,
    caughtPokemons: [],
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
const pokemonSprite = document.getElementById("pokemon");

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
    pokeCount.innerHTML = "pokedex: " + player.pokeCounter + " / " + pokemonList.length;
    hpBarText.innerHTML = "hp: " + hpBar.ariaValueNow + " / " + hpBar.ariaValueMax;
    hpBarText.style.color = "white";
    xpBarText.innerHTML = "xp: " + xpBar.ariaValueNow + " / " + xpBar.ariaValueMax;
    setExperiencePadding();
    setHealthPointsPadding();
    xpBarText.style.color = "black";
});

var pokemonIsCapturedPokeball = function () {
    if (alreadyCaught(pokemon.name)) {
        caught.src = "assets/images/pokeballs/Pokeball.svg";
        caught.style.filter = "invert(0%)";
    }
    else {
        caught.src = "assets/images/pokeballs/None.svg";
        caught.style.filter = "invert(100%)";
    }
}

var attack = function () {
    if (hpBar.ariaValueNow > 0) {
        if (pokemonSprite.getAttribute("src").includes("Pokeball")) {
            return
        }
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
};

/* When the pokemon dies:
 *      Get the drops of the pokemon (money and xp)
 *      Restart next pokemon's shake animation
 *      Change the color of the hp bar to green
 *      Spawn another random pokemon
 *      Restore the bar's hp for the next pokemon
 */
var pokemonDies = function () {
    getPokemonDrops();
    stopPokemonShake();
    restoreHP();
    hpBar.classList = "progress-bar progress-bar progress-bar-animated bg-sucess";
    if (!alreadyCaught(pokemon.name)) {
        startCaptureAnimation();

        setTimeout(function () {
            updatePokemonCounter();
            spawnPokemon();
            pokemonIsCapturedPokeball();
            save();
        }, 1000);
    }
    else {
        spawnPokemon();
        pokemonIsCapturedPokeball();
        save();
    }
}

var updatePokemonCounter = function () {
    player.caughtPokemons.push(pokemon.name);
    player.pokeCounter++;
    pokeCount.innerHTML = "pokedex: " + player.pokeCounter + " / " + pokemonList.length;
}

var startCaptureAnimation = function () {
    pokemonSprite.style.border = "none";
    pokemonSprite.src = "assets/images/pokeballs/Pokeball.svg";
    pokemonSprite.style.animation = "rotate 1s";
    pokemonSprite.onanimationiteration = "infinite";
}

var getPokemonDrops = function () {
    gainXP();
    gainMoney();
}

var gainMoney = function () {
    player.money += 1;
    moneyNav.innerHTML = "money: " + player.money;
}

var startPokemonShake = function () {
    pokemonSprite.style.animation = "shake 0.5s";
    pokemonSprite.onanimationiteration = "infinite";
}

var stopPokemonShake = function () {
    pokemonSprite.style.animation = "none";
    pokemonSprite.onanimationiteration = "none";
}

var spawnShinyPokemon = function () {
    let shinyChance = 0.02; // 2% chance of shiny
    let randShiny = parseFloat(Math.random()).toFixed(4)

    // Shiny spawned!
    if (randShiny <= shinyChance) {
        return true;
    }

    return false;
}

var spawnPokemon = function () {
    pokemon.id = Math.floor(Math.random() * pokemonList.length) + 1;
    updatePokemonObjectFromId(pokemon.id);

    if (spawnShinyPokemon()) {
        pokemonSprite.src = "assets/images/pokemon/shiny/" + pokemon.id + ".png";
        pokeName.innerHTML = pokemon.name + "✨";
    }
    else {
        pokemonSprite.src = "assets/images/pokemon/" + pokemon.id + ".png";
        pokeName.innerHTML = pokemon.name;
    }

    pokemonSprite.style.border = "1px solid white";
    pokemonSprite.style.borderRadius = "20px";

    pokemonIsCapturedPokeball();
}



var updatePokemonObjectFromId = function (id) {
    pokemon.name = pokemonList[id - 1].name;
    pokemon.baseHP = pokemonList[id - 1].baseHP;
    pokemon.baseXP = pokemonList[id - 1].baseXP;
    pokemon.route = pokemonList[id - 1].route;
}

var setExperiencePadding = function () {
    if (xpBar.ariaValueNow == 100) {
        xpBarText.style.paddingLeft = "100px";
    } else if (xpBar.ariaValueNow > 9 && xpBar.ariaValueNow < 100) {
        xpBarText.style.paddingLeft = "104px";
    } else {
        xpBarText.style.paddingLeft = "108px";
    }
}

var setHealthPointsPadding = function () {
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

var gainXP = function () {
    if (xpBar.ariaValueNow < 100) {
        player.xp += pokemon.baseXP;
        xpBar.ariaValueNow = player.xp;
        xpBarText.innerHTML = "xp " + xpBar.ariaValueNow + " / " + xpBar.ariaValueMax;
    }

    if (xpBar.ariaValueNow >= 100) {
        // If the player has enough xp to level up, level up and reset the xp bar
        let obtainedLevels = Math.floor(xpBar.ariaValueNow / xpBar.ariaValueMax);
        player.level += obtainedLevels;
        let xpLeft = xpBar.ariaValueNow % xpBar.ariaValueMax;
        player.xp = xpLeft;

        //TODO: Make a formula for the xp bar

        // If the player has leveled up, increase level, update xp bar with correct xp and increase damage
        levelNav.innerHTML = "level: " + player.level;
        xpBar.ariaValueNow = player.xp;
        xpBarText.innerHTML = "xp: " + xpBar.ariaValueNow + " / " + xpBar.ariaValueMax;

        if (player.level % 2 == 0) {
            player.attacks += 3;
            damageNav.innerHTML = "click damage: " + player.attacks;
        }
    }

    xpBar.style.width = "" + player.xp + "%";
    setExperiencePadding();
}

var restoreHP = function () {
    hpBar.ariaValueNow = hpBar.ariaValueMax;
    hpBar.style.width = "100%";
}

// Saves the game by writing play to JSON and save it in localStorage
var save = function () {
    localStorage.setItem("player", JSON.stringify(player));
    localStorage.setItem("caught", JSON.stringify(caughtPokemons));
    localStorage.setItem("pokeCounter", JSON.stringify(player.pokeCounter));
};

// Loads the game from localStorage and update favIcon to starter
var loadPlayer = function () {
    player = JSON.parse(localStorage.getItem("player"));
};

var loadPokeCaught = function () {
    caughtPokemons = JSON.parse(localStorage.getItem("caught"));
    player.pokeCounter = JSON.parse(localStorage.getItem("pokeCounter"));
};

var resetConfirmed = function () {
    alert("You have reset your profile!");

    player = {
        xp: 0,
        level: 1,
        money: 0,
        attacks: 5,
        pokeCounter: 0,
        caughtPokemons: [],
    };

    save();
    location.reload();
}

var resetProfile = function () {
    let confirm = prompt('If you wish to reset your profile, please enter "RESET":', "");

    if (confirm === null || confirm === "") {
        alert("Profile was NOT reset!");
    } else if (confirm === "RESET") {
        resetConfirmed();
    }
};
