// 1 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar um novo array contendo o dobro de cada elemento.
const numeros =  [1, 2, 3, 4, 5]
const doublenumbers = numeros.map(numeros => numeros * 2);
console.log(doublenumbers)

console.log(`--------------------------`);

// 2 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método filter para criar um novo array contendo apenas os números pares.
const numbers = [1, 2, 3, 4, 5]
const pares = numbers.filter(x => x % 2 === 0)
console.log(pares)

console.log(`--------------------------`);

// 3 - Dado o array fruits = ['apple', 'banana', 'orange', 'kiwi'], utilize o método forEach para exibir cada fruta no console.
const frutas = ['apple', 'banana', 'orange', 'kiwi']
frutas.forEach((fruit) => {
console.log(fruit);
});

console.log(`--------------------------`);

// 4 - Dado o array students = [
// { name: 'John', age: 20 },
// { name: 'Jane', age: 25 }, 
// { name: 'Mark', age: 22 }
// ], 
// Utilize o método forEach para exibir o nome e a idade de cada aluno no 
// console.
const alunos = [
    {name: 'John', age: 20 },
    {name: 'Jane', age: 25 }, 
    {name: 'Mark', age: 22 }
];
    alunos.forEach((alunos) => {
        console.log(`Nome: ${alunos.name}, idade: ${alunos.age}`);
    });

    
console.log(`--------------------------`);

// 5 - Dado o array students = [
// { name: 'John', age: 20 },
// { name: 'Jane', age: 25 },
// { name: 'Mark', age: 22 }
// ], 
// Utilize o método map para criar um novo array contendo apenas os nomes 
// dos alunos
const students = [
    {name: 'John', age: 20 },
    {name: 'Jane', age: 25 }, 
    {name: 'Mark', age: 22 },
];

let students1 = students.map((alunos) => alunos.name) 
    console.log(students1);

