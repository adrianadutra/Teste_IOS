let elemento1 = document.querySelector("p");
elemento1.style.color = "pink";

let elemento2 = document.querySelector(".par1");
elemento2.style.color = "green";

let elemento3 = document.querySelector("#par3");
elemento3.style.color = "blue";

let elemento4 = (document.querySelector('#par4').innerHTML =
'Mudei o texto aqui');

const cliquei = () =>{
    let elemento4 = document.querySelector('#par4');
   elemento4.style.color = "red";
}

    let itemLista = document.querySelectorAll("li");
    for (let i = 0; i <= itemLista.length; i++){
    itemLista[i].style.color = "silver"
}

// for (let i = 0; i <= 5 ; i++){
//     console.log(`Cotador: ${i}`)
// }


