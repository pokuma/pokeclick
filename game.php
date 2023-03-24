<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="description" content="Webpage designed for my game project">
    </meta>
    <meta name="author" content="Edgar Álvarez González">
    <meta charset="utf-8">
    <meta name="theme-color" content="rgb(83, 82, 82);" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="apple-touch-icon" href="assets/images/others/icon.png">

    <title>PokéttoMonsta</title>

    <!-- BOOTSTRAP -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="assets/styles/styles.css" media="all" rel="stylesheet" type="text/css" />
</head>
<body>
    <div class="d-flex justify-content-center align-items-center" id="saveSelector">
        <div class="justify-content-center container row">
            <div class="justify-content-center  container row">
                <img onclick="attack()" draggable="false" id="pokemon" src="">
            </div>
            <div class="justify-content-center container row">
                <progress id="hpBar" value="10" max="10"></progress>
            </div>
            <div class="justify-content-center container row">
                <progress id="xpBar" value="0" max="100"></progress>
            </div>


        </div>
    </div>
    <script src="public/main/private/script.js"></script>
</body>

</html>