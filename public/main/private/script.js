// Cursor
document.getElementById("body").addEventListener("onmousedown", function (e) { document.getElementById("body").style.cursor.URL = "../images/cursor/clickdown.gif"; });

var cursor = document.getElementsByClassName('clicked')[0]

if (cursor !== null && cursor !== undefined) {
    cursor.onmousedown = function () {
        cursor.classList.add('clickdown')
    }
    cursor.onmouseup = function () {
        cursor.classList.remove('clickdown')
    }
}

// Function that plays the sound of the file url we send as parameter
function playAudio(url) {
    new Audio(url).play();
}

function changeDarkMode() {

    var body = document.getElementById("body");
    body.classList.toggle("dark-mode");

    var isDarkModeEnabled = body.classList.contains("dark-mode");
    document.cookie = "darkModeEnabled=" + isDarkModeEnabled;

    var toggle = document.getElementById("dark-mode-toggle");
    toggle.checked = isDarkModeEnabled;
    document.cookie = "darkModeToggle=" + toggle.checked;

}

function loadDarkMode() {

    var cookies = document.cookie.split(";").map(cookie => cookie.trim());
    var darkModeCookie = cookies.find(cookie => cookie.startsWith("darkModeEnabled="));
    if (darkModeCookie) {
        var isDarkModeEnabled = darkModeCookie.split("=")[1] === "true";
        var body = document.getElementById("body");
        body.classList.toggle("dark-mode", isDarkModeEnabled);

        var toggleCookie = cookies.find(cookie => cookie.startsWith("darkModeToggle="));

        if (toggleCookie && document.getElementById("dark-mode-toggle")) {
            var isToggleChecked = toggleCookie.split("=")[1] === "true";
            var toggle = document.getElementById("dark-mode-toggle");
            toggle.checked = isToggleChecked;
        }
    }
}