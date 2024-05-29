document.getElementById("botao").addEventListener("click", mudaTexto);

function mudaTexto() {
    var elemento = document.getElementById("titulo");
    elemento.innerText = "Novo Título";
}
