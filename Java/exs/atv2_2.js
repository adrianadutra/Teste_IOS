function sorteia10(){
    return Math.round(Math.random() * 10);
}
var numeroPensado = sorteia10();
var chute = parseFloat(prompt("Informe um número de 0 a 10:"));
var tentativasRestantes = 9
while(isNaN(chute)){
    chute = parseFloat(prompt("Informe apenas números.\nInforme um número de 0 a 10:"));
}
while(chute < 0 || chute > 10) {
    chute = parseFloat(prompt("Erro! Informe um número de 0 a 10:"));
}

if(chute == numeroPensado) {
    mostra("Parabéns, você acertou");
} else {
    while(chute != numeroPensado) {
    chute = parseFloat(prompt("Tente novamente! Informe um número de 0 a 10:"));
    if(chute == numeroPensado) {
        alert("Parabéns, você acertou.");
    }
}
}
