import {
    pokemonList,
    locationList,
} from "./data.js";

let route = {
    id: 0,
    name: "",
    minLevel: 1,
    maxLevel: 1,
    dropMultiplier: 1,
    pokemon: [],
}

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
    loadDefaultRoute();
    document.getElementById("replayTutorialButton").addEventListener("click", function () {
        showTutorial();
    });
    document.getElementById("resetProfileButton").addEventListener("click", function () {
        resetProfile();
    });
    document.getElementById("pokemon").addEventListener("click", function () {
        attack();
    });
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



var loadDefaultRoute = function () {
    route = locationList[0];
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