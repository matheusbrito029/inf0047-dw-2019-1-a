function calcular() {
    var idadeStr = document.getElementById("idade").value;
    var idade = parseInt(idadeStr);
    if (idade >= 18) {
        alert("MAIOR de idade.");
    } else {
        alert("MENOR de idade.");
    }
}