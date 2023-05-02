
showCorrectRegisterModal();

function validateForm() {
    const nameInput = document.getElementById("nicknames");
    const emailInput = document.getElementById("emails");
    const passwordInput = document.getElementById("passwords");
    const reppasswordInput = document.getElementById("reppasswords");

   


    if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
        alert("Por favor, rellene todos los campos requeridos.");
        return false;
    }

    if (passwordInput.value != reppasswordInput.value) {
        alert("Las contraseñas no coinciden.");
        return false;
    }
    alert("Cuenta \"" + emailInput.value + "\" creada con exito!");
    let user = "";
    user = "user=" + nameInput.value;
    document.cookie = "user=" + user.toLowerCase();
    
    
    
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