const pokemonList = [
    { id: 1, name: "bulbasaur", baseXP: 64, baseHP: 45, catchRate: 45, },
    { id: 2, name: "ivysaur", baseXP: 142, baseHP: 60, catchRate: 45, },
    { id: 3, name: "venusaur", baseXP: 236, baseHP: 80, catchRate: 45, },
    { id: 4, name: "charmander", baseXP: 62, baseHP: 39, catchRate: 45, },
    { id: 5, name: "charmeleon", baseXP: 142, baseHP: 58, catchRate: 45, },
    { id: 6, name: "charizard", baseXP: 240, baseHP: 78, catchRate: 45, },
    { id: 7, name: "squirtle", baseXP: 63, baseHP: 44, catchRate: 45, },
    { id: 8, name: "wartortle", baseXP: 142, baseHP: 59, catchRate: 45, },
    { id: 9, name: "blastoise", baseXP: 239, baseHP: 79, catchRate: 45, },
    { id: 10, name: "caterpie", baseXP: 39, baseHP: 45, catchRate: 255, },
    { id: 11, name: "metapod", baseXP: 72, baseHP: 50, catchRate: 120, },
    { id: 12, name: "butterfree", baseXP: 178, baseHP: 60, catchRate: 45, },
    { id: 13, name: "weedle", baseXP: 39, baseHP: 40, catchRate: 255, },
    { id: 14, name: "kakuna", baseXP: 72, baseHP: 45, catchRate: 120, },
    { id: 15, name: "beedrill", baseXP: 178, baseHP: 65, catchRate: 45, },
    { id: 16, name: "pidgey", baseXP: 50, baseHP: 40, catchRate: 255, },
    { id: 17, name: "pidgeotto", baseXP: 122, baseHP: 63, catchRate: 120, },
    { id: 18, name: "pidgeot", baseXP: 216, baseHP: 83, catchRate: 45, },
    { id: 19, name: "rattata", baseXP: 51, baseHP: 30, catchRate: 255, },
    { id: 20, name: "raticate", baseXP: 145, baseHP: 55, catchRate: 127, },
    { id: 21, name: "spearow", baseXP: 52, baseHP: 40, catchRate: 255, },
    { id: 22, name: "fearow", baseXP: 155, baseHP: 65, catchRate: 90, },
    { id: 23, name: "ekans", baseXP: 58, baseHP: 35, catchRate: 255, },
    { id: 24, name: "arbok", baseXP: 157, baseHP: 60, catchRate: 90, },
    { id: 25, name: "pikachu", baseXP: 112, baseHP: 35, catchRate: 190, },
    { id: 26, name: "raichu", baseXP: 218, baseHP: 60, catchRate: 75, },
    { id: 27, name: "sandshrew", baseXP: 60, baseHP: 50, catchRate: 255, },
    { id: 28, name: "sandslash", baseXP: 158, baseHP: 75, catchRate: 90, },
    { id: 29, name: "nidoran♀", baseXP: 55, baseHP: 55, catchRate: 235, },
    { id: 30, name: "nidorina", baseXP: 128, baseHP: 70, catchRate: 120, },
    { id: 31, name: "nidoqueen", baseXP: 227, baseHP: 90, catchRate: 45, },
    { id: 32, name: "nidoran♂", baseXP: 55, baseHP: 46, catchRate: 235, },
    { id: 33, name: "nidorino", baseXP: 128, baseHP: 61, catchRate: 120, },
    { id: 34, name: "nidoking", baseXP: 227, baseHP: 81, catchRate: 45, },
    { id: 35, name: "clefairy", baseXP: 113, baseHP: 70, catchRate: 150, },
    { id: 36, name: "clefable", baseXP: 217, baseHP: 95, catchRate: 25, },
    { id: 37, name: "vulpix", baseXP: 63, baseHP: 38, catchRate: 190, },
    { id: 38, name: "ninetales", baseXP: 178, baseHP: 73, catchRate: 75, },
    { id: 39, name: "jigglypuff", baseXP: 95, baseHP: 115, catchRate: 170, },
    { id: 40, name: "wigglytuff", baseXP: 196, baseHP: 140, catchRate: 50, },
    { id: 41, name: "zubat", baseXP: 49, baseHP: 40, catchRate: 255, },
    { id: 42, name: "golbat", baseXP: 159, baseHP: 75, catchRate: 90, },
    { id: 43, name: "oddish", baseXP: 64, baseHP: 45, catchRate: 255, },
    { id: 44, name: "gloom", baseXP: 138, baseHP: 60, catchRate: 120, },
    { id: 45, name: "vileplume", baseXP: 221, baseHP: 75, catchRate: 45, },
    { id: 46, name: "paras", baseXP: 57, baseHP: 35, catchRate: 190, },
    { id: 47, name: "parasect", baseXP: 142, baseHP: 60, catchRate: 75, },
    { id: 48, name: "venonat", baseXP: 61, baseHP: 60, catchRate: 190, },
    { id: 49, name: "venomoth", baseXP: 158, baseHP: 70, catchRate: 75, },
    { id: 50, name: "diglett", baseXP: 53, baseHP: 10, catchRate: 255, },
    { id: 51, name: "dugtrio", baseXP: 149, baseHP: 35, catchRate: 50, },
    { id: 52, name: "meowth", baseXP: 58, baseHP: 40, catchRate: 255, },
    { id: 53, name: "persian", baseXP: 154, baseHP: 65, catchRate: 90, },
    { id: 54, name: "psyduck", baseXP: 64, baseHP: 50, catchRate: 190, },
    { id: 55, name: "golduck", baseXP: 175, baseHP: 80, catchRate: 75, },
    { id: 56, name: "mankey", baseXP: 61, baseHP: 40, catchRate: 190, },
    { id: 57, name: "primeape", baseXP: 159, baseHP: 65, catchRate: 75, },
    { id: 58, name: "growlithe", baseXP: 70, baseHP: 55, catchRate: 190, },
    { id: 59, name: "arcanine", baseXP: 194, baseHP: 90, catchRate: 75, },
    { id: 60, name: "poliwag", baseXP: 60, baseHP: 40, catchRate: 255, },
    { id: 61, name: "poliwhirl", baseXP: 135, baseHP: 65, catchRate: 120, },
    { id: 62, name: "poliwrath", baseXP: 230, baseHP: 90, catchRate: 45, },
    { id: 63, name: "abra", baseXP: 62, baseHP: 25, catchRate: 200, },
    { id: 64, name: "kadabra", baseXP: 140, baseHP: 40, catchRate: 100, },
    { id: 65, name: "alakazam", baseXP: 225, baseHP: 55, catchRate: 50, },
    { id: 66, name: "machop", baseXP: 61, baseHP: 70, catchRate: 180, },
    { id: 67, name: "machoke", baseXP: 142, baseHP: 80, catchRate: 90, },
    { id: 68, name: "machamp", baseXP: 227, baseHP: 90, catchRate: 45, },
    { id: 69, name: "bellsprout", baseXP: 60, baseHP: 50, catchRate: 255, },
    { id: 70, name: "weepinbell", baseXP: 137, baseHP: 65, catchRate: 120, },
    { id: 71, name: "victreebel", baseXP: 221, baseHP: 80, catchRate: 45, },
    { id: 72, name: "tentacool", baseXP: 67, baseHP: 40, catchRate: 190, },
    { id: 73, name: "tentacruel", baseXP: 180, baseHP: 80, catchRate: 60, },
    { id: 74, name: "geodude", baseXP: 60, baseHP: 40, catchRate: 255, },
    { id: 75, name: "graveler", baseXP: 137, baseHP: 55, catchRate: 120, },
    { id: 76, name: "golem", baseXP: 223, baseHP: 80, catchRate: 45, },
    { id: 77, name: "ponyta", baseXP: 82, baseHP: 50, catchRate: 190, },
    { id: 78, name: "rapidash", baseXP: 175, baseHP: 65, catchRate: 60, },
    { id: 79, name: "slowpoke", baseXP: 63, baseHP: 90, catchRate: 190, },
    { id: 80, name: "slowbro", baseXP: 172, baseHP: 95, catchRate: 75, },
    { id: 81, name: "magnemite", baseXP: 65, baseHP: 25, catchRate: 190, },
    { id: 82, name: "magneton", baseXP: 163, baseHP: 50, catchRate: 60, },
    { id: 83, name: "farfetch'd", baseXP: 123, baseHP: 52, catchRate: 45, },
    { id: 84, name: "doduo", baseXP: 62, baseHP: 35, catchRate: 190, },
    { id: 85, name: "dodrio", baseXP: 161, baseHP: 60, catchRate: 45, },
    { id: 86, name: "seel", baseXP: 65, baseHP: 65, catchRate: 190, },
    { id: 87, name: "dewgong", baseXP: 166, baseHP: 90, catchRate: 75, },
    { id: 88, name: "grimer", baseXP: 65, baseHP: 80, catchRate: 190, },
    { id: 89, name: "muk", baseXP: 175, baseHP: 105, catchRate: 75, },
    { id: 90, name: "shellder", baseXP: 61, baseHP: 30, catchRate: 190, },
    { id: 91, name: "cloyster", baseXP: 184, baseHP: 50, catchRate: 60, },
    { id: 92, name: "gastly", baseXP: 62, baseHP: 30, catchRate: 190, },
    { id: 93, name: "haunter", baseXP: 142, baseHP: 45, catchRate: 90, },
    { id: 94, name: "gengar", baseXP: 225, baseHP: 60, catchRate: 45, },
    { id: 95, name: "onix", baseXP: 77, baseHP: 35, catchRate: 45, },
    { id: 96, name: "drowzee", baseXP: 66, baseHP: 60, catchRate: 190, },
    { id: 97, name: "hypno", baseXP: 169, baseHP: 85, catchRate: 75, },
    { id: 98, name: "krabby", baseXP: 65, baseHP: 30, catchRate: 225, },
    { id: 99, name: "kingler", baseXP: 166, baseHP: 55, catchRate: 60, },
    { id: 100, name: "voltorb", baseXP: 66, baseHP: 40, catchRate: 190, },
    { id: 101, name: "electrode", baseXP: 172, baseHP: 60, catchRate: 60, },
    { id: 102, name: "exeggcute", baseXP: 65, baseHP: 60, catchRate: 90, },
    { id: 103, name: "exeggutor", baseXP: 186, baseHP: 95, catchRate: 45, },
    { id: 104, name: "cubone", baseXP: 64, baseHP: 50, catchRate: 190, },
    { id: 105, name: "marowak", baseXP: 149, baseHP: 60, catchRate: 75, },
    { id: 106, name: "hitmonlee", baseXP: 159, baseHP: 50, catchRate: 45, },
    { id: 107, name: "hitmonchan", baseXP: 159, baseHP: 50, catchRate: 45, },
    { id: 108, name: "lickitung", baseXP: 77, baseHP: 90, catchRate: 45, },
    { id: 109, name: "koffing", baseXP: 68, baseHP: 40, catchRate: 190, },
    { id: 110, name: "weezing", baseXP: 172, baseHP: 65, catchRate: 60, },
    { id: 111, name: "rhyhorn", baseXP: 69, baseHP: 80, catchRate: 120, },
    { id: 112, name: "rhydon", baseXP: 170, baseHP: 105, catchRate: 60, },
    { id: 113, name: "chansey", baseXP: 395, baseHP: 250, catchRate: 30, },
    { id: 114, name: "tangela", baseXP: 87, baseHP: 65, catchRate: 45, },
    { id: 115, name: "kangaskhan", baseXP: 172, baseHP: 105, catchRate: 45, },
    { id: 116, name: "horsea", baseXP: 59, baseHP: 30, catchRate: 225, },
    { id: 117, name: "seadra", baseXP: 154, baseHP: 55, catchRate: 75, },
    { id: 118, name: "goldeen", baseXP: 64, baseHP: 45, catchRate: 225, },
    { id: 119, name: "seaking", baseXP: 158, baseHP: 80, catchRate: 60, },
    { id: 120, name: "staryu", baseXP: 68, baseHP: 30, catchRate: 225, },
    { id: 121, name: "starmie", baseXP: 182, baseHP: 60, catchRate: 60, },
    { id: 122, name: "mr.mime", baseXP: 161, baseHP: 40, catchRate: 45, },
    { id: 123, name: "scyther", baseXP: 100, baseHP: 70, catchRate: 45, },
    { id: 124, name: "jynx", baseXP: 159, baseHP: 65, catchRate: 45, },
    { id: 125, name: "electabuzz", baseXP: 172, baseHP: 65, catchRate: 45, },
    { id: 126, name: "magmar", baseXP: 173, baseHP: 65, catchRate: 45, },
    { id: 127, name: "pinsir", baseXP: 175, baseHP: 65, catchRate: 45, },
    { id: 128, name: "tauros", baseXP: 172, baseHP: 75, catchRate: 45, },
    { id: 129, name: "magikarp", baseXP: 40, baseHP: 20, catchRate: 255, },
    { id: 130, name: "gyarados", baseXP: 189, baseHP: 95, catchRate: 45, },
    { id: 131, name: "lapras", baseXP: 187, baseHP: 130, catchRate: 45, },
    { id: 132, name: "ditto", baseXP: 101, baseHP: 48, catchRate: 35, },
    { id: 133, name: "eevee", baseXP: 65, baseHP: 55, catchRate: 45, },
    { id: 134, name: "vaporeon", baseXP: 184, baseHP: 130, catchRate: 45, },
    { id: 135, name: "jolteon", baseXP: 184, baseHP: 65, catchRate: 45, },
    { id: 136, name: "flareon", baseXP: 184, baseHP: 65, catchRate: 45, },
    { id: 137, name: "porygon", baseXP: 79, baseHP: 65, catchRate: 45, },
    { id: 138, name: "omanyte", baseXP: 71, baseHP: 35, catchRate: 45, },
    { id: 139, name: "omastar", baseXP: 173, baseHP: 70, catchRate: 45, },
    { id: 140, name: "kabuto", baseXP: 71, baseHP: 30, catchRate: 45, },
    { id: 141, name: "kabutops", baseXP: 173, baseHP: 60, catchRate: 45, },
    { id: 142, name: "aerodactyl", baseXP: 180, baseHP: 80, catchRate: 45, },
    { id: 143, name: "snorlax", baseXP: 189, baseHP: 160, catchRate: 25, },
    { id: 144, name: "articuno", baseXP: 261, baseHP: 90, catchRate: 3, },
    { id: 145, name: "zapdos", baseXP: 261, baseHP: 90, catchRate: 3, },
    { id: 146, name: "moltres", baseXP: 261, baseHP: 90, catchRate: 3, },
    { id: 147, name: "dratini", baseXP: 60, baseHP: 41, catchRate: 45, },
    { id: 148, name: "dragonair", baseXP: 147, baseHP: 61, catchRate: 45, },
    { id: 149, name: "dragonite", baseXP: 270, baseHP: 91, catchRate: 45, },
    { id: 150, name: "mewtwo", baseXP: 306, baseHP: 106, catchRate: 3, },
    { id: 151, name: "mew", baseXP: 270, baseHP: 100, catchRate: 45, },
];

let pokemon = {
    id: 0,
    name: "",
    baseXP: 0,
    baseHP: 0,
    catchRate: 0,
}

let player = {
    xp: 0,
    level: 5,
    money: 0,
    attacks: 5,
    pokeCounter: 0,
    caughtPokemons: [],
};


let tutorials = true;

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

//Tutorial Modals
const tutorialModal = document.getElementById("welcomeModal");

// Waits for all the html to load before doing this code
document.addEventListener("DOMContentLoaded", function (e) {
    if (localStorage.getItem("player") !== null) {
        loadPlayer();
    }

    if (localStorage.getItem("pokeCounter") !== null && localStorage.getItem("caught") !== null) {
        loadPokeCaught();
    }

    if (player.level == 1 && tutorials == true) {
        setTimeout(function () {
            $('#welcomeModal').modal({
                backdrop: 'static',
                keyboard: false,
            });
            $('#welcomeModal').modal('show');
        }, 1000);
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

var showTutorial = function () {
    $('#attackTutorial').popover({
        placement: 'bottom',
        title: 'Attack',
        content: 'clicking the pokemon will deal damge, and you also have damage per second.',
        trigger: 'manual',
    });
    $('#logoTutorial').popover({
        placement: 'bottom',
        title: 'Home Screen',
        content: 'clicking on the logo will take you back to the home screen.',
        trigger: 'manual',
    });
    $('#levelTutorial').popover({
        placement: 'bottom',
        title: 'Level',
        content: 'this is your level, the higher the level the more damage you do, and the more xp you need to level up.',
        trigger: 'manual',
    });
    $('#moneyTutorial').popover({
        placement: 'bottom',
        title: 'Money',
        content: 'this is your money, you can use it to buy upgrades.',
        trigger: 'manual',
    });
    $('#clickDamageTutorial').popover({
        placement: 'bottom',
        title: 'Click Damage',
        content: 'this is your click damage, the higher the damage the more damage you do when you click on the pokemon.',
        trigger: 'manual',
    });
    $('#pokedexTutorial').popover({
        placement: 'bottom',
        title: 'Pokedex',
        content: 'this is your pokedex, it shows how many pokemon you have caught.',
        trigger: 'manual',
    });
    $('#sliderTutorial').popover({
        placement: 'bottom',
        title: 'Dark Mode',
        content: 'this is a slider, it shows whether you have activated dark mode or not.',
        trigger: 'manual',
    });
    $('#menuTutorial').popover({
        placement: 'bottom',
        title: 'Menu',
        content: 'this is the menu, a list of utilities.',
        trigger: 'manual',
    });

    let timeout = 4000;

    $('#attackTutorial').popover('show');
    setTimeout(() => {
        $('#attackTutorial').popover('hide');
    }, timeout);
    setTimeout(() => {
        $('#logoTutorial').popover('show');
    }, timeout);
    setTimeout(() => {
        $('#logoTutorial').popover('hide');
    }, timeout * 2);
    setTimeout(() => {
        $('#levelTutorial').popover('show');
    }, timeout * 2);
    setTimeout(() => {
        $('#levelTutorial').popover("hide");
    }, timeout * 3);
    setTimeout(() => {
        $('#moneyTutorial').popover('show');
    }, timeout * 3);
    setTimeout(() => {
        $('#moneyTutorial').popover("hide");
    }, timeout * 4);
    setTimeout(() => {
        $('#clickDamageTutorial').popover('show');
    }, timeout * 4);
    setTimeout(() => {
        $('#clickDamageTutorial').popover("hide");
    }, timeout * 5);
    setTimeout(() => {
        $('#pokedexTutorial').popover('show');
    }, timeout * 5);
    setTimeout(() => {
        $('#pokedexTutorial').popover("hide");
    }, timeout * 6);
    setTimeout(() => {
        $('#sliderTutorial').popover('show');
    }, timeout * 6);
    setTimeout(() => {
        $('#sliderTutorial').popover("hide");
    }, timeout * 7);
    setTimeout(() => {
        $('#menuTutorial').popover('show');
    }, timeout * 7);
    setTimeout(() => {
        $('#menuTutorial').popover("hide");
    }, timeout * 8);
}

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
        if (pokemon.catchRate > Math.floor(Math.random() * 256)) {
            setTimeout(function () {
                updatePokemonCounter();
                save();
            }, 1000);
        }
        setTimeout(function () {
            spawnPokemon();
            pokemonIsCapturedPokeball();
            moneyNav.style.animation = "none";
            moneyNav.onanimationiteration = "none";
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
    pokeCount.style.animation = "pokedexUp 1s";
    pokeCount.onanimationiteration = "infinite";
    setTimeout(function () {
        pokeCount.style.animation = "none";
        pokeCount.onanimationiteration = "none";

    }, 1000);
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
    moneyNav.style.animation = "moneyUp 1s";
    moneyNav.onanimationiteration = "infinite";
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
    pokemon.catchRate = pokemonList[id - 1].catchRate;
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
        levelNav.style.animation = "levelUp 1s";
        levelNav.onanimationiteration = "infinite";
        setTimeout(function () {
            levelNav.style.animation = "none";
            levelNav.onanimationiteration = "none";
        }, 1000);
        xpBar.ariaValueNow = player.xp;
        xpBarText.innerHTML = "xp: " + xpBar.ariaValueNow + " / " + xpBar.ariaValueMax;

        if (player.level % 2 == 0) {
            player.attacks += 3;
            damageNav.innerHTML = "click damage: " + player.attacks;
            damageNav.style.animation = "damageUp 1s";
            damageNav.onanimationiteration = "infinite";
        }
        else {
            damageNav.style.animation = "none";
            damageNav.onanimationiteration = "none";
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
