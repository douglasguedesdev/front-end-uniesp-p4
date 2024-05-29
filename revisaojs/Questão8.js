<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Botão</title>
</head>
<body>

<button id="meuBotao">Clique aqui</button>

<script>

    var botao = document.getElementById("meuBotao");

    botao.addEventListener("click", function() {
        alert("Botão clicado!");
    });
</script>

</body>
</html>
