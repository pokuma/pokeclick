const pokemonList = [
    { id: 1, name: "bulbasaur", baseXP: 64, baseHP: 100, route: 1 },
    { id: 2, name: "ivysaur", baseXP: 142, baseHP: 100, route: 1 },
    { id: 3, name: "venusaur", baseXP: 236, baseHP: 100, route: 1 },
    { id: 4, name: "charmander", baseXP: 62, baseHP: 100, route: 1 },
    { id: 5, name: "charmeleon", baseXP: 142, baseHP: 100, route: 1 },
    { id: 6, name: "charizard", baseXP: 240, baseHP: 100, route: 1 },
    { id: 7, name: "squirtle", baseXP: 63, baseHP: 100, route: 1 },
    { id: 8, name: "wartortle", baseXP: 142, baseHP: 100, route: 1 },
    { id: 9, name: "blastoise", baseXP: 239, baseHP: 100, route: 1 },
    { id: 10, name: "caterpie", baseXP: 39, baseHP: 100, route: 1 },
    { id: 11, name: "metapod", baseXP: 72, baseHP: 100, route: 1 },
    { id: 12, name: "butterfree", baseXP: 178, baseHP: 100, route: 1 },
    { id: 13, name: "weedle", baseXP: 39, baseHP: 100, route: 1 },
    { id: 14, name: "kakuna", baseXP: 72, baseHP: 100, route: 1 },
    { id: 15, name: "beedrill", baseXP: 178, baseHP: 100, route: 1 },
    { id: 16, name: "pidgey", baseXP: 50, baseHP: 100, route: 1 },
    { id: 17, name: "pidgeotto", baseXP: 122, baseHP: 100, route: 1 },
    { id: 18, name: "pidgeot", baseXP: 216, baseHP: 100, route: 1 },
    { id: 19, name: "rattata", baseXP: 51, baseHP: 100, route: 1 },
    { id: 20, name: "raticate", baseXP: 145, baseHP: 100, route: 1 },
    { id: 21, name: "spearow", baseXP: 52, baseHP: 100, route: 1 },
    { id: 22, name: "fearow", baseXP: 155, baseHP: 100, route: 1 },
    { id: 23, name: "ekans", baseXP: 58, baseHP: 100, route: 1 },
    { id: 24, name: "arbok", baseXP: 157, baseHP: 100, route: 1 },
    { id: 25, name: "pikachu", baseXP: 112, baseHP: 100, route: 1 },
    { id: 26, name: "raichu", baseXP: 218, baseHP: 100, route: 1 },
    { id: 27, name: "sandshrew", baseXP: 60, baseHP: 100, route: 1 },
    { id: 28, name: "sandslash", baseXP: 158, baseHP: 100, route: 1 },
    { id: 29, name: "nidoran♀", baseXP: 55, baseHP: 100, route: 1 },
    { id: 30, name: "nidorina", baseXP: 128, baseHP: 100, route: 1 },
    { id: 31, name: "nidoqueen", baseXP: 227, baseHP: 100, route: 1 },
    { id: 32, name: "nidoran♂", baseXP: 55, baseHP: 100, route: 1 },
    { id: 33, name: "nidorino", baseXP: 128, baseHP: 100, route: 1 },
    { id: 34, name: "nidoking", baseXP: 227, baseHP: 100, route: 1 },
    { id: 35, name: "clefairy", baseXP: 113, baseHP: 100, route: 1 },
    { id: 36, name: "clefable", baseXP: 217, baseHP: 100, route: 1 },
    { id: 37, name: "vulpix", baseXP: 63, baseHP: 100, route: 1 },
    { id: 38, name: "ninetales", baseXP: 178, baseHP: 100, route: 1 },
    { id: 39, name: "jigglypuff", baseXP: 95, baseHP: 100, route: 1 },
    { id: 40, name: "wigglytuff", baseXP: 196, baseHP: 100, route: 1 },
    { id: 41, name: "zubat", baseXP: 49, baseHP: 100, route: 1 },
    { id: 42, name: "golbat", baseXP: 159, baseHP: 100, route: 1 },
    { id: 43, name: "oddish", baseXP: 64, baseHP: 100, route: 1 },
    { id: 44, name: "gloom", baseXP: 138, baseHP: 100, route: 1 },
    { id: 45, name: "vileplume", baseXP: 221, baseHP: 100, route: 1 },
    { id: 46, name: "paras", baseXP: 57, baseHP: 100, route: 1 },
    { id: 47, name: "parasect", baseXP: 142, baseHP: 100, route: 1 },
    { id: 48, name: "venonat", baseXP: 61, baseHP: 100, route: 1 },
    { id: 49, name: "venomoth", baseXP: 158, baseHP: 100, route: 1 },
    { id: 50, name: "diglett", baseXP: 53, baseHP: 100, route: 1 },
    { id: 51, name: "dugtrio", baseXP: 149, baseHP: 100, route: 1 },
    { id: 52, name: "meowth", baseXP: 58, baseHP: 100, route: 1 },
    { id: 53, name: "persian", baseXP: 154, baseHP: 100, route: 1 },
    { id: 54, name: "psyduck", baseXP: 64, baseHP: 100, route: 1 },
    { id: 55, name: "golduck", baseXP: 175, baseHP: 100, route: 1 },
    { id: 56, name: "mankey", baseXP: 61, baseHP: 100, route: 1 },
    { id: 57, name: "primeape", baseXP: 159, baseHP: 100, route: 1 },
    { id: 58, name: "growlithe", baseXP: 70, baseHP: 100, route: 1 },
    { id: 59, name: "arcanine", baseXP: 194, baseHP: 100, route: 1 },
    { id: 60, name: "poliwag", baseXP: 60, baseHP: 100, route: 1 },
    { id: 61, name: "poliwhirl", baseXP: 135, baseHP: 100, route: 1 },
    { id: 62, name: "poliwrath", baseXP: 230, baseHP: 100, route: 1 },
    { id: 63, name: "abra", baseXP: 62, baseHP: 100, route: 1 },
    { id: 64, name: "kadabra", baseXP: 140, baseHP: 100, route: 1 },
    { id: 65, name: "alakazam", baseXP: 225, baseHP: 100, route: 1 },
    { id: 66, name: "machop", baseXP: 61, baseHP: 100, route: 1 },
    { id: 67, name: "machoke", baseXP: 142, baseHP: 100, route: 1 },
    { id: 68, name: "machamp", baseXP: 227, baseHP: 100, route: 1 },
    { id: 69, name: "bellsprout", baseXP: 60, baseHP: 100, route: 1 },
    { id: 70, name: "weepinbell", baseXP: 137, baseHP: 100, route: 1 },
    { id: 71, name: "victreebel", baseXP: 221, baseHP: 100, route: 1 },
    { id: 72, name: "tentacool", baseXP: 67, baseHP: 100, route: 1 },
    { id: 73, name: "tentacruel", baseXP: 180, baseHP: 100, route: 1 },
    { id: 74, name: "geodude", baseXP: 60, baseHP: 100, route: 1 },
    { id: 75, name: "graveler", baseXP: 137, baseHP: 100, route: 1 },
    { id: 76, name: "golem", baseXP: 223, baseHP: 100, route: 1 },
    { id: 77, name: "ponyta", baseXP: 82, baseHP: 100, route: 1 },
    { id: 78, name: "rapidash", baseXP: 175, baseHP: 100, route: 1 },
    { id: 79, name: "slowpoke", baseXP: 63, baseHP: 100, route: 1 },
    { id: 80, name: "slowbro", baseXP: 172, baseHP: 100, route: 1 },
    { id: 81, name: "magnemite", baseXP: 65, baseHP: 100, route: 1 },
    { id: 82, name: "magneton", baseXP: 163, baseHP: 100, route: 1 },
    { id: 83, name: "farfetch'd", baseXP: 123, baseHP: 100, route: 1 },
    { id: 84, name: "doduo", baseXP: 62, baseHP: 100, route: 1 },
    { id: 85, name: "dodrio", baseXP: 161, baseHP: 100, route: 1 },
    { id: 86, name: "seel", baseXP: 65, baseHP: 100, route: 1 },
    { id: 87, name: "dewgong", baseXP: 166, baseHP: 100, route: 1 },
    { id: 88, name: "grimer", baseXP: 65, baseHP: 100, route: 1 },
    { id: 89, name: "muk", baseXP: 175, baseHP: 100, route: 1 },
    { id: 90, name: "shellder", baseXP: 61, baseHP: 100, route: 1 },
    { id: 91, name: "cloyster", baseXP: 184, baseHP: 100, route: 1 },
    { id: 92, name: "gastly", baseXP: 62, baseHP: 100, route: 1 },
    { id: 93, name: "haunter", baseXP: 142, baseHP: 100, route: 1 },
    { id: 94, name: "gengar", baseXP: 225, baseHP: 100, route: 1 },
    { id: 95, name: "onix", baseXP: 77, baseHP: 100, route: 1 },
    { id: 96, name: "drowzee", baseXP: 66, baseHP: 100, route: 1 },
    { id: 97, name: "hypno", baseXP: 169, baseHP: 100, route: 1 },
    { id: 98, name: "krabby", baseXP: 65, baseHP: 100, route: 1 },
    { id: 99, name: "kingler", baseXP: 166, baseHP: 100, route: 1 },
    { id: 100, name: "voltorb", baseXP: 66, baseHP: 100, route: 1 },
    { id: 101, name: "electrode", baseXP: 172, baseHP: 100, route: 1 },
    { id: 102, name: "exeggcute", baseXP: 65, baseHP: 100, route: 1 },
    { id: 103, name: "exeggutor", baseXP: 186, baseHP: 100, route: 1 },
    { id: 104, name: "cubone", baseXP: 64, baseHP: 100, route: 1 },
    { id: 105, name: "marowak", baseXP: 149, baseHP: 100, route: 1 },
    { id: 106, name: "hitmonlee", baseXP: 159, baseHP: 100, route: 1 },
    { id: 107, name: "hitmonchan", baseXP: 159, baseHP: 100, route: 1 },
    { id: 108, name: "lickitung", baseXP: 77, baseHP: 100, route: 1 },
    { id: 109, name: "koffing", baseXP: 68, baseHP: 100, route: 1 },
    { id: 110, name: "weezing", baseXP: 172, baseHP: 100, route: 1 },
    { id: 111, name: "rhyhorn", baseXP: 69, baseHP: 100, route: 1 },
    { id: 112, name: "rhydon", baseXP: 170, baseHP: 100, route: 1 },
    { id: 113, name: "chansey", baseXP: 395, baseHP: 100, route: 1 },
    { id: 114, name: "tangela", baseXP: 87, baseHP: 100, route: 1 },
    { id: 115, name: "kangaskhan", baseXP: 172, baseHP: 100, route: 1 },
    { id: 116, name: "horsea", baseXP: 59, baseHP: 100, route: 1 },
    { id: 117, name: "seadra", baseXP: 154, baseHP: 100, route: 1 },
    { id: 118, name: "goldeen", baseXP: 64, baseHP: 100, route: 1 },
    { id: 119, name: "seaking", baseXP: 158, baseHP: 100, route: 1 },
    { id: 120, name: "staryu", baseXP: 68, baseHP: 100, route: 1 },
    { id: 121, name: "starmie", baseXP: 182, baseHP: 100, route: 1 },
    { id: 122, name: "mr.mime", baseXP: 161, baseHP: 100, route: 1 },
    { id: 123, name: "scyther", baseXP: 100, baseHP: 100, route: 1 },
    { id: 124, name: "jynx", baseXP: 159, baseHP: 100, route: 1 },
    { id: 125, name: "electabuzz", baseXP: 172, baseHP: 100, route: 1 },
    { id: 126, name: "magmar", baseXP: 173, baseHP: 100, route: 1 },
    { id: 127, name: "pinsir", baseXP: 175, baseHP: 100, route: 1 },
    { id: 128, name: "tauros", baseXP: 172, baseHP: 100, route: 1 },
    { id: 129, name: "magikarp", baseXP: 40, baseHP: 100, route: 1 },
    { id: 130, name: "gyarados", baseXP: 189, baseHP: 100, route: 1 },
    { id: 131, name: "lapras", baseXP: 187, baseHP: 100, route: 1 },
    { id: 132, name: "ditto", baseXP: 101, baseHP: 100, route: 1 },
    { id: 133, name: "eevee", baseXP: 65, baseHP: 100, route: 1 },
    { id: 134, name: "vaporeon", baseXP: 184, baseHP: 100, route: 1 },
    { id: 135, name: "jolteon", baseXP: 184, baseHP: 100, route: 1 },
    { id: 136, name: "flareon", baseXP: 184, baseHP: 100, route: 1 },
    { id: 137, name: "porygon", baseXP: 79, baseHP: 100, route: 1 },
    { id: 138, name: "omanyte", baseXP: 71, baseHP: 100, route: 1 },
    { id: 139, name: "omastar", baseXP: 173, baseHP: 100, route: 1 },
    { id: 140, name: "kabuto", baseXP: 71, baseHP: 100, route: 1 },
    { id: 141, name: "kabutops", baseXP: 173, baseHP: 100, route: 1 },
    { id: 142, name: "aerodactyl", baseXP: 180, baseHP: 100, route: 1 },
    { id: 143, name: "snorlax", baseXP: 189, baseHP: 100, route: 1 },
    { id: 144, name: "articuno", baseXP: 261, baseHP: 100, route: 1 },
    { id: 145, name: "zapdos", baseXP: 261, baseHP: 100, route: 1 },
    { id: 146, name: "moltres", baseXP: 261, baseHP: 100, route: 1 },
    { id: 147, name: "dratini", baseXP: 60, baseHP: 100, route: 1 },
    { id: 148, name: "dragonair", baseXP: 147, baseHP: 100, route: 1 },
    { id: 149, name: "dragonite", baseXP: 270, baseHP: 100, route: 1 },
    { id: 150, name: "mewtwo", baseXP: 306, baseHP: 100, route: 1 },
    { id: 151, name: "mew", baseXP: 270, baseHP: 100, route: 1 },
];
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
    pokeCount.innerHTML = "pokedex: " + player.pokeCounter + " / " + pokemonList.length;
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
        if (pokemon.getAttribute("src").includes("Pokeball")) {
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
function pokemonDies() {
    getPokemonDrops();
    stopPokemonShake();
    restoreHP();
    hpBar.classList = "progress-bar progress-bar progress-bar-animated bg-sucess";
    if (!alreadyCaught(pokeName.innerHTML)) {
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
    player.caughtPokemons.push(pokeName.innerHTML);
    player.pokeCounter++;
    pokeCount.innerHTML = "pokedex: " + player.pokeCounter + " / " + pokemonList.length;
}

function startCaptureAnimation() {
    pokemon.style.border = "none";
    pokemon.src = "assets/images/pokeballs/Pokeball.svg";
    pokemon.style.animation = "rotate 1s";
    pokemon.onanimationiteration = "infinite";
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
    pokemon.src = "assets/images/pokemon/" + pokemonNumber + ".png";
    pokemon.style.border = "1px solid white";
    pokemon.style.borderRadius = "20px";
    pokeName.innerHTML = pokemonList[pokemonNumber - 1].name;
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
};

// Loads the game from localStorage and update favIcon to starter
var loadPlayer = function () {
    player = JSON.parse(localStorage.getItem("player"));
};

var loadPokeCaught = function () {
    caughtPokemons = JSON.parse(localStorage.getItem("caught"));
    player.pokeCounter = JSON.parse(localStorage.getItem("pokeCounter"));
};

function resetConfirmed() {
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
