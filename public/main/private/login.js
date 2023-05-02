function validateForm() {
    const emailInput = document.getElementById("emails");
    const passwordInput = document.getElementById("passwords");


    if (emailInput.value === "" || passwordInput.value === "") {
        alert("Por favor, rellene todos los campos requeridos.");
        return false;
    }
    alert("Logeo en la cuenta \"" + emailInput.value + "\" con exito!");
    let user = "";
    user = "user=" + emailInput.value;
    document.cookie = "user=" + user.toLowerCase();

    return true;
}

function forgetPasswordPopup() {
    var popup = document.getElementById("forgetPasswordPopup");
    popup.classList.toggle("show");
}