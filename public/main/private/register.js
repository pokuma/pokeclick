
//showCorrectRegisterModal();

const nameInput = document.getElementById("nicknames");
const emailInput = document.getElementById("emails");
const passwordInput = document.getElementById("passwords");
const reppasswordInput = document.getElementById("reppasswords");

const iconPerson = document.getElementById('icon-person');
const iconEmail = document.getElementById('icon-email');
const iconPassword = document.getElementById('icon-lock');
const iconRepPassword = document.getElementById('icon-refresh');

nameInput.addEventListener('input', function() {
    if (nameInput.value !== "") {
        iconPerson.style.color = '';
    } else {
        iconPerson.style.color = 'red';
    }
});

emailInput.addEventListener('input', function() {
    if (emailInput.value !== "") {
        iconEmail.style.color = '';
    } else {
        iconEmail.style.color = 'red';
    }
});

passwordInput.addEventListener('input', function() {
    if (passwordInput.value !== "") {
        iconPassword.style.color = '';
    } else {
        iconPassword.style.color = 'red';
    }
});

reppasswordInput.addEventListener('input', function() {
    if (reppasswordInput.value !== "") {
        iconRepPassword.style.color = '';
    } else {
        iconRepPassword.style.color = 'red';
    }
});

function validateForm() {

    if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
        alert("Complete all the fields marked with an asterisk");
        return false;
    }

    if (passwordInput.value != reppasswordInput.value) {
        alert("The passwords do not match");
        return false;
    }
    alert("Account \"" + nameInput.value + "\" has been successfully created!");
    let user = "";
    user = "user=" + nameInput.value;
    document.cookie = "user=" + user.toLowerCase();
    let player = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        nextLevelXP: 100,
        xp: 0,
        level: 1,
        money: 0,
        attacks: 5,
        pokeCounter: 0,
        caughtPokemons: [],
   }
    let playerList = [];
    if(localStorage.getItem("playerList") != null){
        playerList = JSON.parse(localStorage.getItem("playerList"));
        playerList.push(player);
        localStorage.setItem("playerList", JSON.stringify(playerList));
    }else{
        playerList.push(player);
        localStorage.setItem("playerList", JSON.stringify(playerList));
    }

    localStorage.setItem("player", JSON.stringify(player));
        
    
    
    return showCorrectRegisterModal();
    
}

var showCorrectRegisterModal = function () {
    $('#correctRegisterModal').modal({
        backdrop: 'static',
        keyboard: false,
    });
    $('#correctRegisterModal').modal('show');
};

$(document).on('click', '#correctRegisterModalButton', function () {
    $('#correctRegisterModal').modal('hide');
});