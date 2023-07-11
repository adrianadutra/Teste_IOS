class Pessoa01 {
    constructor(Nome, SobreNome, Idade, DataNas, End) {
        this.Nome = Nome;  
        this.SobreNome = SobreNome;
        this.Idade = Idade;
        this.DataNas = DataNas;
        this.End = End;
    }
}

let kaue = new Pessoa01("Kauê", "Paixao", 18, "24-09-2004", "Rua 2")

console.log(kaue)
console.log(typeof kaue)
console.log(`Ola, ${kaue.Nome}` )

class Animal {
    constructor(Nome, Raça, Cor, Idade, DataNas) {
        this.Nome = Nome;  
        this.Raca = Raça;
        this.Cor = Cor;
        this.Idade = Idade;
        this.DataNas = DataNas;
    
    }
}

let animal1 = new Animal("Kauê", "Pinscher", 3, "24-09-2019")
let animal2 = new Animal("Lara", "Yorkie", 1, "10-08-2021")
let animal3 = new Animal("Bob", "Labrador", 5, "03-02-2018", "Rua 2")
console.log(animal1)
console.log(animal2)
console.log(animal3)
console.log(`O cachorro ${animal1.Nome} ${animal1.Raca}` )
console.log(`O cachorro ${animal2.Nome} é da raça ${animal2.Raca}` )
console.log(`O cachorro ${animal3.Nome} é da raça ${animal3.Raca}` )


class Artista {
    constructor(Nome, Idade, DataNas, Genero, Musica) {
        this.Nome = Nome;  
        this.Idade = Idade;
        this.DataNas = DataNas;
        this.Genero = Genero;
        this.Musica = Musica;
    }
}

let art1 = new Artista("Taylor", 30, "24-09-2019", "Feminino", "All too well")
let art2 = new Artista("Harry", 30, "24-09-2019", "Masculino", "As It Was")
let art3 = new Artista("Harry", 30, "24-09-2019", "Masculino", "18")
console.log(`A ${art1.Nome} escreveu a música ${art1.Musica}` )
console.log(`O ${art2.Nome} escreveu a música ${art2.Musica}` )
console.log(`O ${art3.Nome} escreveu a música ${art3.Musica}` )



