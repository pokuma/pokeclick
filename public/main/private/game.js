let pokemon = {
    id: 0,
    name: "",
    baseXP: 0,
    baseHP: 0,
    hp: 0,
    xp: 0,
    catchRate: 0,
}

let player = {
    nextLevelXP: 100,
    xp: 0,
    level: 1,
    money: 0,
    attacks: 5,
    pokeCounter: 0,
    caughtPokemons: [],
};

let hpMultiplier = 2;
let xpMultiplier = 1;

let tutorials = true;

// Pokemon health points bar
const hpBar = document.getElementById("hpBar");
const yellowZone = 0.65;
const redZone = 0.3;
let hpBarText = document.getElementById("hpBarText");

// Experience bar
const xpBar = document.getElementById("xpBar");
let xpBarText = document.getElementById("xpBarText");

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
const logoTutorial = document.getElementById("logoTutorial");

// Waits for all the html to load before doing this code
document.addEventListener("DOMContentLoaded", function (e) {
    if (localStorage.getItem("player") !== null) {
        loadPlayer();
        xpBar.ariaValueNow = player.xp;
        xpBar.ariaValueMax = player.nextLevelXP;
        $("#xpBar").css("width", xpBar.ariaValueNow + "%");
    }

    if (localStorage.getItem("pokeCounter") !== null && localStorage.getItem("caught") !== null) {
        loadPokeCaught();
    }

    if (player.level == 1 && tutorials == true) {
        setTimeout(function () {
            showTutorial();
        }, 1000);
    }

    // Attack every second
    setInterval(function () {
        if (!pokemonSprite.getAttribute("src").includes("Pokeball")) {
            attack();
        }
    }, 1000);


    // Spawn the first pokemon
    spawnPokemon();

    levelNav.innerHTML = "level: " + player.level;
    moneyNav.innerHTML = "money: " + player.money;
    damageNav.innerHTML = "click damage: " + player.attacks;
    pokeCount.innerHTML = "pokedex: " + player.pokeCounter + " / " + pokemonList.length;
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
    if (pokemonSprite.getAttribute("src").includes("Pokeball")) {
        return
    }

    if (pokemon.hp - player.attacks <= 0) {
        hpBarText.style.color = "white";
        pokemonDies();
    }
    if (pokemon.hp - player.attacks > 0) {
        startPokemonShake();
        pokemon.hp -= player.attacks;
        //function that changes progress bar color based on the pokemon hp
        if (pokemon.hp < pokemon.baseHP * yellowZone) {
            hpBarText.style.color = "black";
            hpBar.classList = "progress-bar progress-bar progress-bar-animated bg-warning";
        }

        if (pokemon.hp < pokemon.baseHP * redZone) {
            hpBar.classList = "progress-bar progress-bar progress-bar-animated bg-danger";
        }

        hpBarText.innerHTML = "hp: " + pokemon.hp + " / " + pokemon.baseHP;
        hpBar.style.width = "" + pokemon.hp / pokemon.baseHP * 100 + "%";
        hpBar.ariaValueNow = pokemon.hp / pokemon.baseHP * 100;
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
    setTimeout(function () {
        pokemonSprite.style.animation = "none";
        pokemonSprite.onanimationiteration = "none";
    }, 1000);
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

    hpBar.ariaValueMax = pokemon.baseHP;
    hpBar.ariaValueNow = 100;

    hpBarText.innerHTML = "hp: " + hpBar.ariaValueMax + " / " + hpBar.ariaValueMax;
    hpBarText.style.color = "white";
    setHealthPointsPadding();

    xpBar.ariaValueMax = player.nextLevelXP;
    xpBar.ariaValueNow = Math.floor((player.xp / xpBar.ariaValueMax) * 100);
    xpBarText.innerHTML = "xp " + player.xp + " / " + player.nextLevelXP;
    xpBar.style.width = "" + xpBar.ariaValueNow + "%";
    setExperiencePadding();
}



var updatePokemonObjectFromId = function (id) {
    pokemon.name = pokemonList[id - 1].name;
    pokemon.baseHP = Math.floor(pokemonList[id - 1].baseHP * hpMultiplier);
    pokemon.baseXP = Math.floor(pokemonList[id - 1].baseXP * xpMultiplier);
    pokemon.hp = pokemon.baseHP;
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
    if (player.xp + pokemon.baseXP < player.nextLevelXP) {
        player.xp += pokemon.baseXP;
    }

    if (player.xp + pokemon.baseXP >= player.nextLevelXP) {
        player.xp += pokemon.baseXP;

        let obtainedLevels = Math.floor(player.xp / player.nextLevelXP);
        player.level += obtainedLevels;
        levelNav.innerHTML = "level: " + player.level;
        levelNav.style.animation = "levelUp 1s";
        levelNav.onanimationiteration = "infinite";
        setTimeout(function () {
            levelNav.style.animation = "none";
            levelNav.onanimationiteration = "none";
        }, 1000);

        let xpLeft = player.xp % player.nextLevelXP;
        player.xp = xpLeft;
        player.nextLevelXP += 10 * obtainedLevels;

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

    xpBar.ariaValueMax = player.nextLevelXP;
    xpBar.ariaValueNow = Math.floor((player.xp / xpBar.ariaValueMax) * 100);
    xpBarText.innerHTML = "xp " + player.xp + " / " + player.nextLevelXP;
    xpBar.style.width = "" + xpBar.ariaValueNow + "%";
    setExperiencePadding();
}

var restoreHP = function () {
    hpBarText.innerHTML = "hp: " + hpBar.ariaValueMax + " / " + hpBar.ariaValueMax;
    hpBar.ariaValueNow = 100;
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
        nextLevelXP: 100,
        xp: 0,
        level: 1,
        money: 0,
        attacks: 5,
        pokeCounter: 0,
        caughtPokemons: [],
    };

    save();
    window.location.reload(true);
}

var resetProfile = function () {
    let confirm = prompt('If you wish to reset your profile, please enter "RESET":', "");

    if (confirm === null || confirm === "") {
        alert("Profile was NOT reset!");
    } else if (confirm === "RESET") {
        resetConfirmed();
    }
};

//Start tutorial
var showTutorial = function () {
    $('#welcomeModal').modal({
        backdrop: 'static',
        keyboard: false,
    });
    $('#attackTutorial').popover({
        placement: 'top',
        title: 'Attack',
        html: true,
        content: 'this is the attack button, it will attack the pokemon for damage equal to your click damage.<br><div class="row"><div class="col-8"></div><div class="col-4"><a id="attackTutorialButton" class="btn btn-secondary text-light">next</a></div></div>',
        trigger: 'manual',
    });
    $('#logoTutorial').popover({
        placement: 'bottom',
        title: 'Home Screen',
        html: true,
        content: 'clicking on the logo will take you back to the home screen.<br><div class="row"><div class="col-8"></div><div class="col-4"><a id="logoTutorialButton" class="btn btn-secondary text-light">next</a></div></div>',
        trigger: 'manual',
    });
    $('#levelTutorial').popover({
        placement: 'bottom',
        title: 'Level',
        html: true,
        content: 'this is your level, the higher the level the more damage you do, and the more xp you need to level up.<br><div class="row"><div class="col-8"></div><div class="col-4"><a id="levelTutorialButton" class="btn btn-secondary text-light">next</a></div></div>',
        trigger: 'manual',
    });
    $('#moneyTutorial').popover({
        placement: 'bottom',
        title: 'Money',
        html: true,
        content: 'this is your money, you can use it to buy upgrades.<br><div class="row"><div class="col-8"></div><div class="col-4"><a id="moneyTutorialButton" class="btn btn-secondary text-light">next</a></div></div>',
        trigger: 'manual',
    });
    $('#clickDamageTutorial').popover({
        placement: 'bottom',
        title: 'Click Damage',
        html: true,
        content: 'this is your click damage, the higher the damage the more damage you do when you click on the pokemon.<br><div class="row"><div class="col-8"></div><div class="col-4"><a id="clickDamageTutorialButton" class="btn btn-secondary text-light">next</a></div></div>',
        trigger: 'manual',
    });
    $('#pokedexTutorial').popover({
        placement: 'bottom',
        title: 'Pokedex',
        html: true,
        content: 'this is your pokedex, it shows how many pokemon you have caught.<br><div class="row"><div class="col-8"></div><div class="col-4"><a id="pokedexTutorialButton" class="btn btn-secondary text-light">next</a></div></div>',
        trigger: 'manual',
    });
    $('#sliderTutorial').popover({
        placement: 'bottom',
        title: 'Dark Mode',
        html: true,
        content: 'this is a slider, it shows whether you have activated dark mode or not.<br><div class="row"><div class="col-8"></div><div class="col-4"><a id="sliderTutorialButton" class="btn btn-secondary text-light">next</a></div></div>',
        trigger: 'manual',
    });
    $('#menuTutorial').popover({
        placement: 'bottom',
        title: 'Menu',
        html: true,
        content: 'this is the menu, a list of utilities.<br><div class="row"><div class="col-4"></div><div class="col-8"><a id="menuTutorialButton" class="btn btn-secondary text-light">end tutorial</a></div></div>',
        trigger: 'manual',
    });

    $('#welcomeModal').modal('show');
}

//Tutorial Buttons Sequence Control
$(document).on('click', '#welcomeTutorialButton', function () {
    $('#welcomeModal').modal('hide');
    $('#attackTutorial').popover('show');
});
$(document).on('click', '#attackTutorialButton', function () {
    $('#attackTutorial').popover('hide');
    $('#logoTutorial').popover('show');
});
$(document).on('click', '#logoTutorialButton', function () {
    $('#logoTutorial').popover('hide');
    $('#levelTutorial').popover('show');
});
$(document).on('click', '#levelTutorialButton', function () {
    $('#levelTutorial').popover('hide');
    $('#moneyTutorial').popover('show');
});
$(document).on('click', '#moneyTutorialButton', function () {
    $('#moneyTutorial').popover('hide');
    $('#clickDamageTutorial').popover('show');
});
$(document).on('click', '#clickDamageTutorialButton', function () {
    $('#clickDamageTutorial').popover('hide');
    $('#pokedexTutorial').popover('show');
});
$(document).on('click', '#pokedexTutorialButton', function () {
    $('#pokedexTutorial').popover('hide');
    $('#sliderTutorial').popover('show');
});
$(document).on('click', '#sliderTutorialButton', function () {
    $('#sliderTutorial').popover('hide');
    $('#menuTutorial').popover('show');
});
$(document).on('click', '#menuTutorialButton', function () {
    $('#menuTutorial').popover('hide');
});

//List of all available pokemon with stats and catch rate
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

//List of all locations in the game the pokemon you can catch in each location
//Spawn rates must add up to 100 for each route and all pokemon must be available in at least one route
const locationList = [
    {
        id: 0, name: "Pallet Town", minLevel: 5, maxLevel: 5, dropMultiplier: 1, pokemon: [
            { name: "bulbasaur", spawnRate: 100 },
        ]
    },
    {
        id: 1, name: "Route 1", minLevel: 3, maxLevel: 4, dropMultiplier: 1, pokemon: [
            { name: "pidgey", spawnRate: 40 },
            { name: "ratata", spawnRate: 30 },
            { name: "oddish", spawnRate: 30 },
            { name: "bellsprout", spawnRate: 30 },
        ]
    },
    {
        id: 2, name: "Viridian Forest", minLevel: 3, maxLevel: 6, dropMultiplier: 1, pokemon: [
            { name: "caterpie", spawnRate: 25 },
            { name: "metapod", spawnRate: 10 },
            { name: "butterfree", spawnRate: 1 },
            { name: "weedle", spawnRate: 25 },
            { name: "kakuna", spawnRate: 10 },
            { name: "beedrill", spawnRate: 1 },
            { name: "pidgey", spawnRate: 15 },
            { name: "pikachu", spawnRate: 4 },
            { name: "oddish", spawnRate: 10 },
            { name: "bellsprout", spawnRate: 10 },
            { name: "bulbasaur", spawnRate: 1 },

        ]
    },
    {
        id: 3, name: "Route 22", minLevel: 3, maxLevel: 4, dropMultiplier: 1, pokemon: [
            { name: "ratata", spawnRate: 30 },
            { name: "spearow", spawnRate: 30 },
            { name: "nidoran♀", spawnRate: 20 },
            { name: "nidoran♂", spawnRate: 20 },
        ]
    },
    {
        id: 4, name: "Route 2", minLevel: 3, maxLevel: 4, dropMultiplier: 1, pokemon: [
            { name: "pidgey", spawnRate: 30 },
            { name: "ratata", spawnRate: 20 },
            { name: "oddish", spawnRate: 20 },
            { name: "bellsprout", spawnRate: 20 },
            { name: "caterpie", spawnRate: 15 },
            { name: "weedle", spawnRate: 15 },
        ]
    },
    {
        id: 5, name: "Route 3", minLevel: 3, maxLevel: 8, dropMultiplier: 1, pokemon: [
            { name: "mankey", spawnRate: 20 },
            { name: "sandshrew", spawnRate: 20 },
            { name: "ekans", spawnRate: 20 },
            { name: "spearow", spawnRate: 20 },
            { name: "ratata", spawnRate: 20 },
        ]
    },
    {
        id: 6, name: "Route 4", minLevel: 7, maxLevel: 12, dropMultiplier: 1, pokemon: [
            { name: "charmander", spawnRate: 1 },
            { name: "psyduck", spawnRate: 4 },
            { name: "mankey", spawnRate: 15 },
            { name: "sandshrew", spawnRate: 20 },
            { name: "ekans", spawnRate: 15 },
            { name: "arbok", spawnRate: 5 },
            { name: "spearow", spawnRate: 20 },
            { name: "ratata", spawnRate: 20 },
        ]
    },
    {
        id: 7, name: "Mt. Moon", minLevel: 5, maxLevel: 10, dropMultiplier: 1, pokemon: [
            { name: "chansey", spawnRate: 1 },
            { name: "onix", spawnRate: 1 },
            { name: "clefairy", spawnRate: 2 },
            { name: "clefable", spawnRate: 1 },
            { name: "paras", spawnRate: 15 },
            { name: "zubat", spawnRate: 30 },
            { name: "geodude", spawnRate: 30 },
            { name: "omanyte", spawnRate: 9 },
            { name: "kabuto", spawnRate: 9 },
            { name: "kabutops", spawnRate: 1 },
            { name: "omastar", spawnRate: 1 },
        ]
    },
    {
        id: 8, name: "Route 24", minLevel: 7, maxLevel: 12, dropMultiplier: 1, pokemon: [
            { name: "psyduck", spawnRate: 20 },
            { name: "bellsprout", spawnRate: 10 },
            { name: "oddish", spawnRate: 10 },
            { name: "meowth", spawnRate: 20 },
            { name: "pidgey", spawnRate: 20 },
            { name: "venonat", spawnRate: 20 },
        ]
    },
    {
        id: 9, name: "Route 25", minLevel: 9, maxLevel: 14, dropMultiplier: 1, pokemon: [
            { name: "squirtle", spawnRate: 1 },
            { name: "psyduck", spawnRate: 19 },
            { name: "bellsprout", spawnRate: 10 },
            { name: "oddish", spawnRate: 10 },
            { name: "meowth", spawnRate: 10 },
            { name: "persian", spawnRate: 10 },
            { name: "pidgey", spawnRate: 20 },
            { name: "venonat", spawnRate: 20 },

        ]
    },
    {
        id: 10, name: "Route 5", minLevel: 11, maxLevel: 16, dropMultiplier: 1, pokemon: [
            { name: "chansey", spawnRate: 1 },
            { name: "psyduck", spawnRate: 10 },
            { name: "abra", spawnRate: 4 },
            { name: "pidgeotto", spawnRate: 10 },
            { name: "jigglypuff", spawnRate: 15 },
            { name: "ratata", spawnRate: 10 },
            { name: "pidgey", spawnRate: 10 },
            { name: "vulpix", spawnRate: 20 },
            { name: "growlithe", spawnRate: 20 },
        ]
    },
    {
        id: 11, name: "Route 6", minLevel: 11, maxLevel: 16, dropMultiplier: 1, pokemon: [
            { name: "chansey", spawnRate: 1 },
            { name: "abra", spawnRate: 4 },
            { name: "pidgeotto", spawnRate: 10 },
            { name: "jigglypuff", spawnRate: 15 },
            { name: "ratata", spawnRate: 15 },
            { name: "pidgey", spawnRate: 15 },
            { name: "vulpix", spawnRate: 20 },
            { name: "growlithe", spawnRate: 20 },
        ]
    },
    {
        id: 12, name: "Route 11", minLevel: 13, maxLevel: 18, dropMultiplier: 1, pokemon: [
            { name: "chansey", spawnRate: 1 },
            { name: "mr.mime", spawnRate: 4 },
            { name: "raticate", spawnRate: 10 },
            { name: "pidgeotto", spawnRate: 10 },
            { name: "drowzee", spawnRate: 25 },
            { name: "hypno", spawnRate: 10 },
            { name: "ratata", spawnRate: 20 },
            { name: "pidgey", spawnRate: 20 },

        ]
    },
    {
        id: 13, name: "Digglet's Cave", minLevel: 13, maxLevel: 18, dropMultiplier: 1, pokemon: [
            { name: "chansey", spawnRate: 1 },
            { name: "dugtrio", spawnRate: 4 },
            { name: "zubat", spawnRate: 10 },
            { name: "dugtrio", spawnRate: 75 },
            { name: "sandshrew", spawnRate: 5 },
            { name: "sandslash", spawnRate: 5 },
        ]
    },
    {
        id: 14, name: "Route 9", minLevel: 17, maxLevel: 22, dropMultiplier: 1, pokemon: [
            { name: "chansey", spawnRate: 1 },
            { name: "nidoran♀", spawnRate: 15 },
            { name: "nidoran♂", spawnRate: 15 },
            { name: "nidorina", spawnRate: 5 },
            { name: "nidorino", spawnRate: 5 },
            { name: "raticate", spawnRate: 9 },
            { name: "fearow", spawnRate: 10 },
            { name: "ratata", spawnRate: 20 },
            { name: "spearow", spawnRate: 20 },

        ]
    },
    {
        id: 15, name: "Route 10", minLevel: 18, maxLevel: 23, dropMultiplier: 1, pokemon: [
            { name: "chansey", spawnRate: 1 },
            { name: "nidoran♀", spawnRate: 15 },
            { name: "nidoran♂", spawnRate: 15 },
            { name: "nidorina", spawnRate: 5 },
            { name: "nidorino", spawnRate: 5 },
            { name: "raticate", spawnRate: 10 },
            { name: "fearow", spawnRate: 10 },
            { name: "ratata", spawnRate: 15 },
            { name: "spearow", spawnRate: 15 },
            { name: "krabby", spawnRate: 9 },
        ]
    },
    {
        id: 16, name: "Rock Tunnel", minLevel: 18, maxLevel: 23, dropMultiplier: 1, pokemon: [
            { name: "charmeleon", spawnRate: 1 },
            { name: "kangaskhan", spawnRate: 1 },
            { name: "cubone", spawnRate: 8 },
            { name: "geodude", spawnRate: 20 },
            { name: "graveler", spawnRate: 10 },
            { name: "zubat", spawnRate: 20 },
            { name: "golbat", spawnRate: 10 },
            { name: "machop", spawnRate: 10 },
            { name: "onix", spawnRate: 10 },
            { name: "rhyhorn", spawnRate: 10 },
        ]
    },
    {
        id: 17, name: "Pokemon Tower", minLevel: 20, maxLevel: 25, dropMultiplier: 1, pokemon: [
            { name: "gastly", spawnRate: 60 },
            { name: "haunter", spawnRate: 20 },
            { name: "cubone", spawnRate: 9 },
            { name: "zubat", spawnRate: 5 },
            { name: "golbat", spawnRate: 5 },
            { name: "marowak", spawnRate: 1 },
        ]
    },
    {
        id: 18, name: "Route 8", minLevel: 22, maxLevel: 27, dropMultiplier: 1, pokemon: [
            { name: "kadabra", spawnRate: 1 },
            { name: "arcanine", spawnRate: 1 },
            { name: "ninetales", spawnRate: 1 },
            { name: "abra", spawnRate: 2 },
            { name: "growlithe", spawnRate: 20 },
            { name: "vulpix", spawnRate: 20 },
            { name: "raticate", spawnRate: 10 },
            { name: "ratata", spawnRate: 10 },
            { name: "pidgeotto", spawnRate: 10 },
            { name: "pidgey", spawnRate: 10 },
            { name: "jigglypuff", spawnRate: 15 },
            { name: "wigglytuff", spawnRate: 1 },
            
        ]
    },
    {
        id: 19, name: "Route 7", minLevel: 22, maxLevel: 27, dropMultiplier: 1, pokemon: [
            { name: "porygon", spawnRate: 1 },
            { name: "kadabra", spawnRate: 1 },
            { name: "arcanine", spawnRate: 1 },
            { name: "ninetales", spawnRate: 1 },
            { name: "abra", spawnRate: 1 },
            { name: "growlithe", spawnRate: 20 },
            { name: "vulpix", spawnRate: 20 },
            { name: "raticate", spawnRate: 10 },
            { name: "ratata", spawnRate: 10 },
            { name: "pidgeotto", spawnRate: 10 },
            { name: "pidgey", spawnRate: 10 },
            { name: "jigglypuff", spawnRate: 15 },
        ]
    },
    {
        id: 20, name: "Route 12", minLevel: 25, maxLevel: 30, dropMultiplier: 1, pokemon: [
            { name: "kingler", spawnRate: 5 },
            { name: "krabby", spawnRate: 15 },
            { name: "farfetch'd", spawnRate: 10 },
            { name: "bellsprout", spawnRate: 10 },
            { name: "weepinbell", spawnRate: 15 },
            { name: "oddish", spawnRate: 10 },
            { name: "gloom", spawnRate: 15 },
            { name: "pidgey", spawnRate: 10 },
            { name: "pidgeotto", spawnRate: 10 },
        ]
    },
    {
        id: 21, name: "Route 13", minLevel: 27, maxLevel: 32, dropMultiplier: 1, pokemon: [
            { name: "ivysaur", spawnRate: 1 },
            { name: "parasect", spawnRate: 1 },
            { name: "kingler", spawnRate: 1 },
            { name: "krabby", spawnRate: 15 },
            { name: "farfetch'd", spawnRate: 10 },
            { name: "bellsprout", spawnRate: 10 },
            { name: "weepinbell", spawnRate: 15 },
            { name: "oddish", spawnRate: 10 },
            { name: "gloom", spawnRate: 15 },
            { name: "pidgey", spawnRate: 10 },
            { name: "pidgeotto", spawnRate: 10 },
        ]
    },
    {
        id: 22, name: "Route 14", minLevel: 29, maxLevel: 34, dropMultiplier: 1, pokemon: [
            { name: "pinsir", spawnRate: 1 },
            { name: "scyther", spawnRate: 1 },
            { name: "tauros", spawnRate: 3 },
            { name: "venomoth", spawnRate: 10 },
            { name: "venonat", spawnRate: 15 },
            { name: "bellsprout", spawnRate: 10 },
            { name: "weepinbell", spawnRate: 15 },
            { name: "oddish", spawnRate: 10 },
            { name: "gloom", spawnRate: 15 },
            { name: "pidgey", spawnRate: 10 },
            { name: "pidgeotto", spawnRate: 10 },
        ]
    },
    {
        id: 23, name: "Route 15", minLevel: 31, maxLevel: 36, dropMultiplier: 1, pokemon: [
            { name: "pinsir", spawnRate: 1 },
            { name: "scyther", spawnRate: 1 },
            { name: "tauros", spawnRate: 2 },
            { name: "venomoth", spawnRate: 10 },
            { name: "venonat", spawnRate: 15 },
            { name: "bellsprout", spawnRate: 10 },
            { name: "weepinbell", spawnRate: 15 },
            { name: "oddish", spawnRate: 10 },
            { name: "gloom", spawnRate: 15 },
            { name: "pidgey", spawnRate: 10 },
            { name: "pidgeotto", spawnRate: 10 },
            { name: "pidgeot", spawnRate: 1 },
        ]
    },
    {
        id: 24, name: "Route 16", minLevel: 33, maxLevel: 38, dropMultiplier: 1, pokemon: [
            { name: "pidgey", spawnRate: 20 },
            { name: "pidgeotto", spawnRate: 20 },
            { name: "ratata", spawnRate: 15 },
            { name: "raticate", spawnRate: 15 },
            { name: "doduo", spawnRate: 25 },
            { name: "dodrio", spawnRate: 3 },
            { name: "snorlax", spawnRate: 1 },
            { name: "pidgeot", spawnRate: 1 },
        ]
    },
    {
        id: 25, name: "Route 17", minLevel: 35, maxLevel: 40, dropMultiplier: 1, pokemon: [
            { name: "eevee", spawnRate: 4 },
            { name: "doduo", spawnRate: 20 },
            { name: "dodrio", spawnRate: 5 },
            { name: "ponyta", spawnRate: 20 },
            { name: "rapidash", spawnRate: 5 },
            { name: "ratata", spawnRate: 5 },
            { name: "raticate", spawnRate: 5 },
            { name: "pidgey", spawnRate: 10 },
            { name: "pidgeotto", spawnRate: 10 },
            { name: "psyduck", spawnRate: 15 },
            { name: "golduck", spawnRate: 1 },
        ]
    },
    {
        id: 26, name: "Route 18", minLevel: 37, maxLevel: 42, dropMultiplier: 1, pokemon: [
            { name: "pidgey", spawnRate: 20 },
            { name: "pidgeotto", spawnRate: 20 },
            { name: "ratata", spawnRate: 15 },
            { name: "raticate", spawnRate: 15 },
            { name: "doduo", spawnRate: 25 },
            { name: "dodrio", spawnRate: 3 },
            { name: "golduck", spawnRate: 1 },
            { name: "snorlax", spawnRate: 1 },
        ]
    },
    {

        id: 27, name: "Route 19", minLevel: 39, maxLevel: 44, dropMultiplier: 1, pokemon: [
            { name: "lapras", spawnRate: 1 },
            { name: "wartortle", spawnRate: 1 },
            { name: "starmie", spawnRate: 1 },
            { name: "staryu", spawnRate: 20 },
            { name: "tentacruel", spawnRate: 7 },
            { name: "tentacool", spawnRate: 20 },
            { name: "magikarp", spawnRate: 20 },
            { name: "gyarados", spawnRate: 10 },
            { name: "horsea", spawnRate: 10 },
            { name: "seadra", spawnRate: 10 },
        ]
    },
    {
        id: 28, name: "Route 20", minLevel: 41, maxLevel: 46, dropMultiplier: 1, pokemon: [
            { name: "lapras", spawnRate: 1 },
            { name: "wartortle", spawnRate: 1 },
            { name: "starmie", spawnRate: 1 },
            { name: "staryu", spawnRate: 20 },
            { name: "tentacruel", spawnRate: 7 },
            { name: "tentacool", spawnRate: 20 },
            { name: "magikarp", spawnRate: 20 },
            { name: "gyarados", spawnRate: 10 },
            { name: "goldeen", spawnRate: 10 },
            { name: "seaking", spawnRate: 10 },
        ]
    },
    {
        id: 29, name: "Pokemon Mansion", minLevel: 43, maxLevel: 48, dropMultiplier: 1, pokemon: [
            { name: "ditto", spawnRate: 1 },
            { name: "weezing", spawnRate: 5 },
            { name: "koffing", spawnRate: 40 },
            { name: "muk", spawnRate: 5 },
            { name: "grimer", spawnRate: 40 },
            { name: "magmar", spawnRate: 14 },
        ]
    },
    {
        id: 30, name: "Route 21", minLevel: 45, maxLevel: 50, dropMultiplier: 1, pokemon: [
            { name: "victreebel", spawnRate: 1 },
            { name: "vileplume", spawnRate: 1 },
            { name: "tangela", spawnRate: 15 },
            { name: "gloom", spawnRate: 14 },
            { name: "weepinbell", spawnRate: 14 },
            { name: "bellsprout", spawnRate: 10 },
            { name: "oddish", spawnRate: 10 },
            { name: "exeggcute", spawnRate: 25 },
            { name: "exeggutor", spawnRate: 20 },
        ]
    },
    {
        id: 31, name: "Route 23", minLevel: 47, maxLevel: 52, dropMultiplier: 1, pokemon: [
            { name: "exeggutor", spawnRate: 1 },
            { name: "exeggcute", spawnRate: 12 },
            { name: "nidoqueen", spawnRate: 1 },
            { name: "nidoking", spawnRate: 1 },
            { name: "nidorina", spawnRate: 20 },
            { name: "nidorino", spawnRate: 20 },
            { name: "spearow", spawnRate: 10 },
            { name: "fearow", spawnRate: 10 },
            { name: "primeape", spawnRate: 5 },
            { name: "nidoran♀", spawnRate: 10 },
            { name: "nidoran♂", spawnRate: 10 },
        ]
    },
    {
        id: 32, name: "Victory Road", minLevel: 49, maxLevel: 54, dropMultiplier: 1, pokemon: [
            { name: "hitmonchan", spawnRate: 1 },
            { name: "hitmonlee", spawnRate: 1 },
            { name: "lickitung", spawnRate: 1 },
            { name: "rhydon", spawnRate: 1 },
            { name: "rhyhorn", spawnRate: 10 },
            { name: "onix", spawnRate: 8 },
            { name: "geodude", spawnRate: 10 },
            { name: "graveler", spawnRate: 15 },
            { name: "machop", spawnRate: 10 },
            { name: "machoke", spawnRate: 15 },
            { name: "zubat", spawnRate: 10 },
            { name: "golbat", spawnRate: 15 },
            { name: "aerodactyl", spawnRate: 1 },
            { name: "flareon", spawnRate: 1 },
            { name: "moltres", spawnRate: 1 },

        ]
    },
    {
        id: 33, name: "Power Plant", minLevel: 51, maxLevel: 56, dropMultiplier: 1, pokemon: [
            { name: "weezing", spawnRate: 5 },
            { name: "koffing", spawnRate: 15 },
            { name: "muk", spawnRate: 5 },
            { name: "grimer", spawnRate: 15 },
            { name: "electrode", spawnRate: 5 },
            { name: "voltorb", spawnRate: 15 },
            { name: "pikachu", spawnRate: 15 },
            { name: "raichu", spawnRate: 5 },
            { name: "magnemite", spawnRate: 10 },
            { name: "magneton", spawnRate: 5 },
            { name: "electabuzz", spawnRate: 3 },
            { name: "jolteon", spawnRate: 1 },
            { name: "zapdos", spawnRate: 1 }
        ]
    },
    {
        id: 34, name: "Seafoam Islands", minLevel: 53, maxLevel: 58, dropMultiplier: 1, pokemon: [
            { name: "dewgong", spawnRate: 10 },
            { name: "seel", spawnRate: 15 },
            { name: "shellder", spawnRate: 15 },
            { name: "cloyster", spawnRate: 10 },
            { name: "jinx", spawnRate: 6 },
            { name: "slowpoke", spawnRate: 10 },
            { name: "slowbro", spawnRate: 10 },
            { name: "slowking", spawnRate: 1 },
            { name: "poliwag", spawnRate: 10 },
            { name: "poliwhirl", spawnRate: 10 },
            { name: "poliwrath", spawnRate: 1 },
            { name: "vaporeon", spawnRate: 1 },
            { name: "articuno", spawnRate: 1 },
        ]
    },
    {
        id: 35, name: "Cerulean Cave", minLevel: 55, maxLevel: 60, dropMultiplier: 1, pokemon: [
            { name: "mew", spawnRate: 1 },
            { name: "mewtwo", spawnRate: 1 },
            { name: "gengar", spawnRate: 2 },
            { name: "machamp", spawnRate: 2 },
            { name: "golem", spawnRate: 2 },
            { name: "alakazam", spawnRate: 2 },
            { name: "venusaur", spawnRate: 3 },
            { name: "charizard", spawnRate: 3 },
            { name: "blastoise", spawnRate: 3 },
            { name: "dragonite", spawnRate: 1 },
            { name: "dratini", spawnRate: 60 },
            { name: "dragonair", spawnRate: 30 },
            
        ]
    },
];