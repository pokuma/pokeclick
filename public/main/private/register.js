function validateForm() {
    const nameInput = document.getElementById("nicknames");
    const emailInput = document.getElementById("emails");
    const passwordInput = document.getElementById("passwords");
    const reppasswordInput = document.getElementById("reppasswords");

    if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
        alert("Por favor, rellene todos los campos requeridos.");
        return false;
    }

    if (passwordInput != reppasswordInput) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    return true;
}