/*2 - Utilizando os conceitos apresentados, pergunte ao usuário. 
• Qual o nome do usuário; 
• Qual sua idade; 
• Bairro onde mora; 
• Passe o nome do usuário para todas as letras em maiúscula. 
• Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o 
resultado da soma desses números na tela. 
 */

var nome = "Adriana"
let idade = 21;
let bairro = "Mandaqui";

console.log(`A ${nome.toUpperCase()} tem ${idade} anos de idade`)

alert(`Olá, ${nome}. Vamos fazer uma soma!`);


let num1 = Number(prompt('Digite um número: '));
let num2 = Number(prompt('Digite outro número: '));

let res = num1 + num2;

alert(`A soma dos valores ${num1} e ${num2} é: ${res}`)