<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Musica!</title>
    <!-- Ícone do Spotify -->
    <link rel="icon" href="URL_DA_IMAGEM_DO_SPOTIFY">
    <style>
        body {
            background-color: #121212; /* Cor de fundo parecida com a do Spotify */
            color: #1DB954; /* Cor verde similar ao Spotify */
            font-family: Arial, sans-serif;
            text-align: center;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
        }

        h1 {
            font-size: 5rem;
            color: white;
            text-shadow: 0 0 10px #1DB954, 0 0 20px #1DB954, 0 0 30px #1DB954; /* Brilho esverdeado */
        }

        audio {
            display: none; /* O áudio ficará oculto */
        }
    </style>
</head>
<body>
    <h1>Musica!</h1>

    <!-- Player de música oculto -->
    <audio autoplay loop>
        <source src="https://youtu.be/AtYuKryoKoI?si=pm0rXQc-UDxILhrD" type="audio/mpeg">
        Seu navegador não suporta o elemento de áudio.
    </audio>
</body>
</html>
