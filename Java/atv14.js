const mediaAluno = () =>{
    let notaT1 = document.getElementById("nota01");
    let notaT2 = document.getElementById("nota02");
    let res = document.getElementById("resultado");

    let notaNum1 = Number(notaT1.value);
    let notaNum2 = Number(notaT2.value);
    let resultado = (notaNum1 + notaNum2) / 2;
    res.innerHTML = `Sua média é ${resultado}`

}