let nomes = ["Ermeson","Jaque","Adri","Luan"];
nomes.pop()
console.log(nomes);
nomes.push('Bia')
console.log(nomes);
nomes.push('Luan')
//inserir valores
console.log(nomes);
nomes.shift();
console.log(nomes);
nomes.unshift("Dayane");
console.log(nomes);
//delete
delete nomes[2]
console.log(nomes);


let pessoa = {
    nome: "Bia",
    sobreNome: 'Franco',
    idade: 21,
    região: "Mooca",
    corDosOlhos: "verde",
    hobbies: ['Esportes', 'dormir', 'ouvir musicas'],
    endereço: {
        rua: 'Av. Paulista',
        cep: 55555,
    },
    salario: 4500,
}
console.log(pessoa.nome);
console.log(pessoa.sobreNome);
console.log(pessoa.idade);
console.log(pessoa.endereço.rua);
console.log(pessoa.endereço.rua);
console.log(`A aluna ${pessoa.nome} mora na ${pessoa.endereço.rua} e tem ${pessoa.idade} anos de idade`);






let pessoa1 = {
    nome: "Adriana",
    sobreNome: 'Dutra',
    idade: 21,
    região: "Mandaqui",
    corDosOlhos: "preto",
    hobbies: ['Esportes', 'dormir', 'ouvir musicas'],
    endereço: {
        rua: 'Rua General',
        cep: 55555,
    },
    salario: 1500,
}
console.log(pessoa1);

let pessoa2 = {
    nome: "João",
    sobreNome: 'Pedro',
    idade: 15,
    região: "Casa Verde",
    corDosOlhos: "preto",
    hobbies: ['Esportes', 'dormir', 'ouvir musicas'],
    endereço: {
        rua: 'Rua Qualquer',
        cep: 55555,
    },
    salario: 1500,
}
console.log(pessoa2);



