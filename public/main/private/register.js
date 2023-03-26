function validateForm() {
    const nameInput = document.getElementById("nicknames");
    const emailInput = document.getElementById("emails");
    const passwordInput = document.getElementById("passwords");

    if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
        alert("Por favor, rellene todos los campos requeridos.");
        return false;
    }
    return true;
}