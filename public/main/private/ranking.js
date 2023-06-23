function reloadRanking() {
    let playerList = JSON.parse(localStorage.getItem("playerList"));

    // Ordenar el array playerList en orden descendente según el contador de Pokémon
    playerList.sort(function(a, b) {
        return b.pokeCounter - a.pokeCounter;
    });

    var tableBody = document.querySelector(".table tbody");

    // Limpiar el contenido actual de la tabla
    tableBody.innerHTML = "";

    // Recorrer los datos del array y crear las filas de la tabla
    for (var i = 0; i < playerList.length; i++) {
        console.log(playerList);
        var player = playerList[i];

        // Crear una nueva fila de tabla
        var row = document.createElement("tr");

        // Crear celdas de la fila con los datos del jugador

        var rankCell = document.createElement("td");
        rankCell.textContent = i+1;
        row.appendChild(rankCell);

        var updownCell = document.createElement("td");
        // Código para la celda "updown" si es necesario
        updownCell.innerHTML = ' <span style="display: inline-flex; background-color: #646464; border-radius: 8px; width: 8px; height: 2px;"></span>';
        row.appendChild(updownCell);

        var nameCell = document.createElement("td");
        nameCell.textContent = player.name;
        row.appendChild(nameCell);

        var levelCell = document.createElement("td");
        levelCell.textContent = player.level;
        row.appendChild(levelCell);

        var pokedexCell = document.createElement("td");
        pokedexCell.textContent = player.pokeCounter + "/151 - (" + Math.trunc((player.pokeCounter/151)*100) + "%)";
        row.appendChild(pokedexCell);

        // Agregar la fila a la tabla
        tableBody.appendChild(row);
    }
}