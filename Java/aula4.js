let pontosAluno = "ptsBonus1";

switch (pontosAluno) {
    case "ptsBonus1":
    console.log("2.0 pts"); break
    case "ptsBonus2":
    console.log("1.3 pts"); break
    case "ptsBonus3":
    console.log("1.0 pts"); break
    case "ptsBonus4":
    console.log("0.5 pts"); break
    case "ptsBonus5":
    console.log("0.25 pts"); break
    default:
    console.log("Não foi encontrado"); break

}

let idade = 14
while (idade < 18) {
    console.log(`Não pode beber ${idade}`)
    idade +=1
}


do {
    idade +=1
    console.log(`Não pode beber ${idade}`)
}
while (idade < 18)
    console.log("Fim programa")