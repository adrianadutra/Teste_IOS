/*7 Faça um programa que peça ao usuário para digitar um número inteiro. Se o número 
for positivo, exiba uma mensagem informando que o número é positivo. Se o número for 
negativo, exiba uma mensagem informando que o número é negativo. Se o número for 
igual a zero, exiba uma mensagem informando que o número é zero. (Aplicar no Console).
 */

let num = Number(prompt("Digite um número inteiro: "));

if (num > 0) {
  alert(num + ` é um número positivo`);
} else if (num < 0) {
  alert(num + `  é um número negativo`);
} else if ((num = 0)) {
  alert(num + ` é número zero`);
}

console.log(`Fim Programa`);