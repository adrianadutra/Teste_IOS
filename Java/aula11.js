for (let i = 0; i <= 10; i++) {
    console.log(`Contador: ${i}`);
}
console.log(`--------------------------`);

// console.log(salaAula[0]);
// console.log(salaAula[1]);
// console.log(salaAula[2]);
// console.log(salaAula[3]);
// console.log(salaAula[4]);

let salaAula = ["Vitor", "Samuel", "Bruno", "Hilary", "Day"];

console.log(`--------------------------`);

const nomes = (nome, ind) => {
    return console.log(`Olá Aluno: ${nome} está na chamada num: ${ind}`)
}

salaAula.forEach((a,b) => {
    nomes(a,b);
});

console.log(`--------------------------`);

let cores = ["Azul", "Amarelo", "Verde", "tábom"]
cores.forEach((item, num, array) => {
})
console.log(`--------------------------`);


let email = ["Vitor@email.com", "Samuel@email.com", "Bruno@email.com", "Hilary@email.com", "Day@email.com", "João@email.com"]
// email.forEach((valor) => {
//     console.log(`E-mail enviado para ${valor}`)
// })

const msg = (valorEmail) => {
    console.log(`E-mail enviado para: ${valorEmail}`);
};

email.forEach((item) => {
msg(item)
})