let misDatos = {
    nombre : "Maximo",
    apellido : "Freijomil",
    dni : "45753895",
    comidasFavoritas : [Hamburguesa, Fideos, Sushi],
    saludar: function(){  
         return "Hola mi nombre es" + this.nombre + this.apellido + "y tengo" + this.años  +"años. Mi primer comida favorita es" + this.comidasFavoritas 
    }

}

let saludo = misdatos.saludar()

console.log(saludo)

let auto = {
    marca: "subaru",
    modelo: "impreza",
    anio: "2007",
    color: "azul",
    posicion: 0,
    avanzar: function(n){
        return this.posicion += n
    },
    retroceder: function(n){
        return this.posicion -= n
    }
}

auto.avanzar(10)

auto.retroceder(5)

console.log(auto.posicion)

let autoNuevo = {
    marca: "subaru",
    modelo: "impreza",
    anio: "2007",
    color: "azul",
    posicion: 0,
    moverse: function (n) {
        return this.posicion += n
    }
}

autoNuevo.moverse(10)
autoNuevo.moverse(-5)

console.log(autoNuevo.posicion)

let ironMan = {
    nombre: "Iron man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar laser"],
    energia: 100,
    getPoder: function(numero){
        return `Poder elegido de ${this.nombre}, ${this.poderes(numero)}, energia restante ${this.energia -= 10}`
    }
}

let hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(numero){
        return `Poder elegido de ${this.nombre}, ${this.poderes(numero)}, energia restante ${this.energia -= 10}`
    }
}

console.log(hulk.getPoder(1))
console.log(ironMan.getPoder(0))
console.log(hulk.getPoder(0))
console.log(ironMan.getPoder(2))
console.log(hulk.getPoder(2))
console.log(ironMan.getPoder(1))