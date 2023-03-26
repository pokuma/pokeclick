function validateForm() {
    const emailInput = document.getElementById("emails");
    const passwordInput = document.getElementById("passwords");


    if (emailInput.value === "" || passwordInput.value === "") {
        alert("Por favor, rellene todos los campos requeridos.");
        return false;
    }

    return true;
}