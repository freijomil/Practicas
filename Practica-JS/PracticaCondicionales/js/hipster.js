let ingreseNacionalidad= "Ingrese su nacionalidad"

let nacionalidad = prompt(ingreseNacionalidad)

let ingreseProfesion = "Ingrese su profesion"

let profesion = prompt(ingreseProfesion)

let ingreseKm = "Ingrese cuantos kms camina al dia"

let km = prompt(ingreseKm)

function filosofoHipster (nacionalidad,profesion,km){
    if (nacionalidad == "Argentino" && profesion == "Músico" && km >= "2" ) {
        return "Soy un filosofo hipster"
    }
    else {
        return "Aun no soy filosofo hipster"
    }
}
