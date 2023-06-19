const emailInput = document.getElementById("emails");
const passwordInput = document.getElementById("passwords");
const iconEmail = document.getElementById('icon-email');
const iconPassword = document.getElementById('icon-password');

emailInput.addEventListener('input', function() {
if (emailInput.value !== "") {
    iconEmail.style.color = ''; // Change the color to your desired color
} else {
    iconEmail.style.color = 'red'; // Revert to the default color
}
});

passwordInput.addEventListener('input', function() {
    if (passwordInput.value !== "") {
        iconPassword.style.color = ''; // Change the color to your desired color
    } else {
        iconPassword.style.color = 'red'; // Revert to the default color
    }
    });

function validateForm() {
    


    if (emailInput.value === "" || passwordInput.value === "") {
        alert("Por favor, rellene todos los campos requeridos.");
        return false;
    }
    let playerList = JSON.parse(localStorage.getItem("playerList"));
    console.log(playerList);
    for (let i = 0; i < playerList.length; i++) {
        if (playerList[i].email === emailInput.value) {
            if (playerList[i].password === passwordInput.value) {
                localStorage.setItem("player", JSON.stringify(playerList[i]));
                alert("Logeo en la cuenta \"" + emailInput.value + "\" con exito!");
                return true;
            }else{
                alert("Contraseña incorrecta.");
                return false;
            }
        }
    }

    alert("No se ha encontrado ninguna cuenta con el email \"" + emailInput.value + "\".");
    return false;
}

function forgetPasswordPopup() {
    var popup = document.getElementById("forgetPasswordPopup");
    popup.classList.toggle("show");
}