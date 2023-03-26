// Cursor
document.getElementById("body").addEventListener("onmousedown", function(e) { document.getElementById("body").style.cursor.URL = "../images/cursor/clickdown.gif"; });

var cursor = document.getElementsByClassName('clicked')[0]
cursor.onmousedown = function() {
    cursor.classList.add('clickdown')
}
cursor.onmouseup = function() {
    cursor.classList.remove('clickdown')
}

// Function that plays the sound of the file url we send as parameter
function playAudio(url) {
    new Audio(url).play();
}

function changeDarkMode() {
    var body = document.getElementById("body");
    body.classList.toggle("dark-mode");
}