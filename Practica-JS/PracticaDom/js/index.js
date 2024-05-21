let bienvenida = "Bienvenidos a mi sitio"
let bienv = alert(bienvenida)
let seguroAvanzar = "¿Esta seguro de querer avanzar?"
let seguro = confirm(seguroAvanzar)
let saludo = document.querySelector("h2");
console.log("saludo: " , saludo)
if (seguro) {
    saludo.innerText = "Que alegria que quieras continuar tu visita";
    
} else{
    saludo.innerText ="Lamentamos que no quieras continuar tu visita";
}
let ingreseNombre = "ingrese su nombre"

let nombre = prompt(ingreseNombre)

let nombres = document.querySelector("h1")

nombres.innerText = `Bienvenido ${nombre}`

let ingreseEdad = "Ingrese su edad"

let edad = prompt(ingreseEdad)
let container = document.querySelector(".container-general") 
let denegado = document.querySelector(".accesoDenegado")
if (edad >17) {
    
} else{
 
}

let progra = "Te gusta la programacion?"

let gustaProgra = confirm(progra)

let background = document.querySelector(".background-img")
if (gustaProgra){
background.innerHTML = background-image

} else{

}