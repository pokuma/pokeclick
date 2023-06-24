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
        alert("Complete all the fields marked with an asterisk");
        return false;
    }
    let playerList = JSON.parse(localStorage.getItem("playerList"));
    console.log(playerList);
    for (let i = 0; i < playerList.length; i++) {
        if (playerList[i].email === emailInput.value) {
            if (playerList[i].password === passwordInput.value) {
                localStorage.setItem("player", JSON.stringify(playerList[i]));
                alert("Login in the account \"" + emailInput.value + "\" success!");
                return true;
            }else{
                alert("Incorrect password.");
                return false;
            }
        }
    }

    alert("There is no account with the email\"" + emailInput.value + "\".");
    return false;
}

function forgetPasswordPopup() {
    var popup = document.getElementById("forgetPasswordPopup");
    popup.classList.toggle("show");
}