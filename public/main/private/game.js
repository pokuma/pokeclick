import {
    pokemonList,
    locationList,
} from "./data.js";

// Game settings for debugging purposes
let startingRequiredXP = 10;

let hpMultiplier = 3;
let xpMultiplier = 1;
let requiredXpIncrease = 10; // 10 increase in required xp per level, expected to be a formula in the future
let attackDamageIncrease = 2; // 2 increase in attack damage per level, expected to be a formula in the future

let tutorials = false;
let allowAttack = true;

//Objects
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



//Health threshold for the hp bar colors
const yellowZone = 0.65;
const redZone = 0.3;

// Player level Nav
let levelNav = document.getElementById("level");

// Player money  Nav
let moneyNav = document.getElementById("money");

// Player damage  Nav
let damageNav = document.getElementById("damage");

// Pokemon counter Nav
let pokeCount = document.getElementById("pokeCount");

// Pokeball image to know the pokemon is already captured in your pokedex
let caught = document.getElementById("caught");

// Pokemon name
const pokeName = document.getElementById("pokemonName");

// Pokemon image
const pokemonSprite = document.getElementById("pokemon");

// Pokemon health points bar
const hpBar = document.getElementById("hpBar");
const hpBarText = document.getElementById("hpBarText");

// Player experience bar
const xpBar = document.getElementById("xpBar");
const xpBarText = document.getElementById("xpBarText");

// Captured pokemon list
var caughtPokemons = document.getElementById("caughtPokemons");


/* Waits for all the html to load before doing this code
* Add click event listeners to the buttons
* Load the player if it already exists
* Show the tutorial if the player is level 1 and tutorials are enabled
* Load the game elements
* Attack every second
*/
document.addEventListener("DOMContentLoaded", function (e) {
    
    // Add event listener to the pokemon image to attack when spacebar/enter is pressed
    window.addEventListener('keydown', event => {
        if(event.target == document.getElementById("pokemon")) {
            if (event.code == "Space" || event.code == "Enter") {
                event.preventDefault();
                attack();
            }
        }
    });
    
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
        xpBarText.innerHTML = "xp: " + player.xp + " / " + player.nextLevelXP;
    }

    if (player.level == 1 && tutorials == true) {
        setTimeout(function () {
            showTutorial();
        }, 1000);
    }
    orderCaughtListById();
    listCaughtPokemons();
    updateNavBar();
    spawnPokemon();
    loadDefaultRoute();

    setInterval(function () {
        if(allowAttack==true){
            attack();
        }
    }, 1000);
});

//Loads the default route
var loadDefaultRoute = function () {
    route = locationList[0];
}

/*Spawns a random pokemon
 *The pokemon is chosen randomly from the pokemonList array
 *The pokemon's id is set to the pokemonList array index + 1
 *The pokemon object stats are set to the pokemonList array values
 *The pokemon's hp bar is restored to full
 *The pokemon's sprite loaded
 *The pokemon's name is displayed
 *A border is added to the pokemon sprite
 *hpBar and xpBar are updated
 */
 var spawnPokemon = function () {
    pokemon.id = Math.floor(Math.random() * pokemonList.length) + 1;
    updatePokemonObjectFromId(pokemon.id);
    updateHpBar();
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
    updateHpBar();
    updateXpBar();
}

//Every time a pokemon spawns, this function is called, and the pokemon has a chance of being shiny
var spawnShinyPokemon = function () {
    let shinyChance = 0.02; // 2% chance of shiny
    let randShiny = parseFloat(Math.random()).toFixed(4)

    // Shiny spawned
    if (randShiny <= shinyChance) {
        return true;
    }

    return false;
}


var listCaughtPokemons = function()
{
    orderCaughtListById();


    var text = "";
    
    for (let i = 0; i < player.caughtPokemons.length; i++) {
        var pokemon = player.caughtPokemons[i];
        var image = '<img src="assets/images/pokemon/' + findPokemonId(pokemon) + '.png" draggable="false" style="height: 30px;" alt="Caught pokemon icons">';
        text += image + " " + player.caughtPokemons[i]  + "<br>";
    }

    caughtPokemons.innerHTML = '<span class="h2 ml-4">pokedex</span><br><br>' + text;
};

var orderCaughtListById = function () {
    player.caughtPokemons.sort(function(pokemonName1, pokemonName2) {
        var pokemon1 = pokemonList.find(function(pokemon) {
          return pokemon.name === pokemonName1;
        });
        var pokemon2 = pokemonList.find(function(pokemon) {
          return pokemon.name === pokemonName2;
        });
        return pokemon1.id - pokemon2.id;
      });
};


var findPokemonId = function (pokemonName) {
    for (let i = 0; i < pokemonList.length; i++) {
        if (pokemonName.toLowerCase() === pokemonList[i].name.toLowerCase()) {
            return pokemonList[i].id;
        }
    }
};

//Loads the new pokemon in the pokemon object given its id
var updatePokemonObjectFromId = function (id) {
    pokemon.name = pokemonList[id - 1].name;
    pokemon.baseHP = Math.floor(pokemonList[id - 1].baseHP * hpMultiplier);
    pokemon.baseXP = Math.floor(pokemonList[id - 1].baseXP * xpMultiplier);
    pokemon.hp = pokemon.baseHP;
    pokemon.catchRate = pokemonList[id - 1].catchRate;
}

//Determines if the pokemon is already captured and changes the pokeball image accordingly
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

/*Check if the pokemon is already captured by the player
 * Iterates through the player's caught pokemons array and check if the pokemon is already captured by comparing the names
 */
var alreadyCaught = function (name) {
    for (let i = 0; i < player.caughtPokemons.length; i++) {
        if (player.caughtPokemons[i] === name) {
            return true;
        }
    }
    return false;
}

/*Every time the player tries attacks the pokemon, this function is called
* If the sprite is not a pokemon, you can't attack
* If the attack kills the pokemon, the pokemon dies
* If the attack doesn't kill the pokemon, the pokemon shakes
* Updates the hp bar
*/
var attack = function () {
    if (!pokemonSprite.getAttribute("src").includes("pokemon")) {
        return
    }
    if (pokemon.hp - player.attacks <= 0) {
        pokemon.hp = 0;
        pokemonDies();
    }
    if (pokemon.hp - player.attacks > 0) {
        pokemon.hp -= player.attacks;
        startPokemonShake();        
    }
    updateHpBar();
}

/* When the pokemon dies:
 * Get the drops of the pokemon (money and xp)
 * Restart next pokemon's shake animation
 * If the pokemon is already captured, the player doesn't capture it again
 * If the pokemon is not already captured, the player has a pokemonCatchRate/256 chance of capturing it
 * If the pokemon is captured, the player's pokedex counter is updated and the player is saved
 * The player object is saved
 * Spawn another random pokemon
 */
var pokemonDies = function () {
    getPokemonDrops();
    stopPokemonShake();
    
    if (!alreadyCaught(pokemon.name)) {
        startCaptureAnimation();
        setTimeout(function () {
            if(pokemon.catchRate > Math.floor(Math.random() * 256)){
                updatePokemonCounter();
                listCaughtPokemons();
                savePlayer();
            }
            spawnPokemon();
        }, 1000);
    }
    else {
        savePlayer();
        spawnPokemon();
    }
}

//When a new pokemon is caught, this function is called to update the pokedex counter and the player's caughtPokemons array
var updatePokemonCounter = function () {
    player.caughtPokemons.push(pokemon.name);
    player.pokeCounter++;
    updateNavBar();
    startPokeCounterAnimation();
}

//Updates all elements in the nav bar
var updateNavBar = function () {
    levelNav.innerHTML = "level: " + player.level;
    moneyNav.innerHTML = "money: " + player.money;
    damageNav.innerHTML = "click damage: " + player.attacks;
    pokeCount.innerHTML = "pokedex: " + player.pokeCounter + " / " + pokemonList.length;
}

//Get the drops of the pokemon (money and xp)
var getPokemonDrops = function () {
    gainXP();
    gainMoney();
}

/* Updates the hp bar
 * Changes the color of the hp bar depending on the pokemon's health
 * Sets the padding of the hp bar
 */
var updateHpBar = function () {
    hpBarText.innerHTML = "hp: " + pokemon.hp + " / " + pokemon.baseHP;
    hpBar.style.width = "" + pokemon.hp / pokemon.baseHP * 100 + "%";
    hpBar.ariaValueNow = pokemon.hp / pokemon.baseHP * 100;

    if (pokemon.hp > pokemon.baseHP * yellowZone) {
        hpBarText.style.color = "white";
        hpBar.classList = "progress-bar progress-bar progress-bar-animated bg-green";
    }
    if (pokemon.hp < pokemon.baseHP * yellowZone) {
        hpBarText.style.color = "black";
        hpBar.classList = "progress-bar progress-bar progress-bar-animated bg-warning";
    }
    if (pokemon.hp < pokemon.baseHP * redZone) {
        hpBar.classList = "progress-bar progress-bar progress-bar-animated bg-danger";
    }
}

//Increase the player money
var gainMoney = function () {
    player.money += 1;
    updateNavBar();
    startMoneyAnimation();
}

/*  When the pokemon is defeated, the player gains xp according to the pokemon base xp and some other factors
*   If the player has enough xp to level up, the player levels up and the xp bar resets, but keeps the extra xp
*   xp bar is updated
*/  
var gainXP = function () {
    player.xp += pokemon.baseXP;
    if (player.xp >= player.nextLevelXP) {
        
        while (player.xp >= player.nextLevelXP) {
            player.level++;
            player.xp -= player.nextLevelXP;
            player.nextLevelXP += requiredXpIncrease;
            player.attacks += attackDamageIncrease;
            startLevelUpAnimation();
        }
        player.xp = player.xp % player.nextLevelXP;
        updateNavBar();
    }
    updateXpBar();
}

//Updates the xp bar
var updateXpBar = function () {
    xpBar.ariaValueMax = player.nextLevelXP;
    xpBar.ariaValueNow = Math.floor((player.xp / xpBar.ariaValueMax) * 100);
    xpBarText.innerHTML = "xp " + player.xp + " / " + player.nextLevelXP;
    xpBar.style.width = "" + xpBar.ariaValueNow + "%";
};

//Level up animation
var startLevelUpAnimation = function () {
    levelNav.style.animation = "levelUp 1s";
    levelNav.onanimationiteration = "infinite";
    setTimeout(function () {
        levelNav.style.animation = "none";
        levelNav.onanimationiteration = "none";
    }, 1000);
}

//Money animation, moves the money counter up
var startMoneyAnimation = function () {
    moneyNav.style.animation = "moneyUp 1s";
    moneyNav.onanimationiteration = "infinite";
    setTimeout(function () {
        moneyNav.style.animation = "none";
        moneyNav.onanimationiteration = "none";
    }, 1000);
}

//Pokemon shake animation
var startPokemonShake = function () {
    pokemonSprite.style.animation = "shake 0.5s";
    pokemonSprite.onanimationiteration = "infinite";
}

//Stop the pokemon shake animation
var stopPokemonShake = function () {
    pokemonSprite.style.animation = "none";
    pokemonSprite.onanimationiteration = "none";
}

//Pokedex animation, moves the pokedex counter up
var startPokeCounterAnimation = function () {
    pokeCount.style.animation = "pokedexUp 1s";
    pokeCount.onanimationiteration = "infinite";
    setTimeout(function () {
        pokeCount.style.animation = "none";
        pokeCount.onanimationiteration = "none";
    }, 1000);
}

//Capture animation, rotates the pokeball
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

// Saves the player by writing player to JSON and saving it in localStorage
var savePlayer = function () {
    localStorage.setItem("player", JSON.stringify(player));
};

// Loads the player from localStorage
var loadPlayer = function () {
    player = JSON.parse(localStorage.getItem("player"));
};

// Shows a prompt to reset the player profile if the player enters "RESET"
var resetProfile = function () {
    let confirm = prompt('If you wish to reset your profile, please enter "RESET":', "");

    if (confirm === null || confirm === "") {
        alert("Profile was NOT reset!");
    } else if (confirm === "RESET") {
        resetConfirmed();
    }
};

// Resets the player profile and reloads the page
var resetConfirmed = function () {
    alert("You have reset your profile!");

    player = {
        nextLevelXP: startingRequiredXP,
        xp: 0,
        level: 1,
        money: 0,
        attacks: 5,
        pokeCounter: 0,
        caughtPokemons: [],
    };

    savePlayer();
    window.location.reload(true);
}

//Start tutorial
var showTutorial = function () {
    allowAttack = false;
    $('#welcomeModal').modal({
        backdrop: 'static',
        keyboard: false,
    });
    $('#attackTutorial').popover({
        placement: 'top',
        title: 'Attack',
        html: true,
        content: 'clicking the sprite of the pokemon on the screen will deal damage to the pokemon for damage equal to your click damage. try it!<br><div class="row"><div class="col-8"></div><div class="col-4"><a id="attackTutorialButton" class="btn btn-secondary text-light">next</a></div></div>',
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
        content: 'this is the menu. here you will find on option to replay this tutorial if needed, among other useful stuff.<br><div class="row"><div class="col-4"></div><div class="col-8"><a id="menuTutorialButton" class="btn btn-secondary text-light">end tutorial</a></div></div>',
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
    allowAttack = true;
});