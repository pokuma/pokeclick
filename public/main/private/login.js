function validateForm() {
    const emailInput = document.getElementById("emails");
    const passwordInput = document.getElementById("passwords");


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