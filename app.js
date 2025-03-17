// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    amigo=inputAmigo.value.trim();
    if (amigo!=="" && amigo !== " ")
    {
        amigos.push(amigo);
        inputAmigo.value="";
        inputAmigo.focus();
        mostrarAmigosVentana();
    }else
    {
        alert ("El nombre no puede estar en blanco");
        return;
    }
}
function mostrarAmigosVentana(){
    let listaAmigos=document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    amigos.forEach(function(nombreAmigo) {
        let item = document.createElement("li");
        item.textContent=nombreAmigo;
        listaAmigos.appendChild(item);
    });
}
function sortearAmigo(){
    if(amigos.length >1){
        indiceAmigoElegido = Math.floor(Math.random()*amigos.length)
        console.log(amigos[indiceAmigoElegido]);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML=`El amigo sorteado es: ${amigos[indiceAmigoElegido]}`;
    }
    else{
        alert ("Es necesario ingresar mas amigos para el sorteo");
        return;
    }
}