

let desconto = prompt('Digite um cupom de desconto: ');
let valorProduto = 1000;

switch (desconto.toUpperCase()) {
    case "DESC1": 
        valorProduto *=0.95;
    console.log("5%"); break
    case "DESC2":
        valorProduto *=0.9;
    console.log("10%"); break
    case "DESC3":
        valorProduto *=0.85;
    console.log("15%"); break
    case "DESC4":
        valorProduto *=0.80;
            console.log("20%"); break
    case "DESC5":
        valorProduto *=0.75;
    console.log("25%"); break
    default:
    console.log("Não foi encontrado"); break
}



if (desconto !=""){
    alert('Valor original do produto: R$1000');
    alert("Valor com desconto: R$ " + valorProduto.toFixed(2));

}
