let ingresa_nombre = "ingresa tu nombre"

let nombre = prompt(ingresa_nombre)

console.log(nombre)

let ingresa_edad = "ingresa tu edad"

let edad = prompt(ingresa_edad)

console.log(edad)

let gusta_deporte = "Te gustan los deportes?"

let fanDeportes = confirm(gusta_deporte)

console.log(fanDeportes)

let agradecimiento = `Muchas gracias ${nombre} por responder nuestras preguntas`

let gracias = alert(agradecimiento)

console.log(gracias)

let usuario = {
    nombreUsuario : nombre,
    edadUsuario : edad,
    fanDeporte : fanDeportes,
    deportistaProfesional: function(){
        if (fanDeporte) {
            return "Si, soy fan de los deportes"
        }
        else {
            return "No soy tan fan aun de los deportes"
        }
    } 
}
console.log(deportistaProfesional)

