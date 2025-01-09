// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Selecionar os elementos do HTML
    const contador = document.getElementById("contador");
    const aumentarBtn = document.getElementById("aumentar");
    const diminuirBtn = document.getElementById("diminuir");
    const resetarBtn = document.getElementById("resetar");

    // Inicializar o contador
    let valor = 0;

    // Funções para alterar o contador
    aumentarBtn.addEventListener("click", function () {
        valor++;
        contador.textContent = valor;
    });

    diminuirBtn.addEventListener("click", function () {
        valor--;
        contador.textContent = valor;
    });

    resetarBtn.addEventListener("click", function () {
        valor = 0;
        contador.textContent = valor;
    });
});
