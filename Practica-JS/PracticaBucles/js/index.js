for(let i=0;i<5; i++){
    console.log("Practicando con el bucle for")
}

for (let i= 0; i<10; i++){
    console.log( `La variable i tiene el valor ${i}`)
}

for (let i=2; i<22; i+=2){
    console.log(i)
}
for (let i=5; i<250; i+=5){
    console.log(i)
}
for (let i=100; i>=0; i--){
    console.log(i)
}

let base = 2
let resultados = []

for (let i=0; i<10; i++){
    resultados.push(base*i)
}

console.log(resultados)

ganancias = [50,34,-59,2,43,13,-4,2,-51,10]
suma = 0

for (let i= 0; i=ganancias.length; i++){
    suma += ganancias(i)
}

console.log(suma)

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
           ]


for (let i=0; i<healingIsDifficult.length; i++){
    console.log(`${i+1} ${healingIsDifficult[i]}`)
}


let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for(let i=0; i<got.length; i++){
    console.log(`hola ${got[i].nombre} ${got[i].apellido} criatura viajera`)
    console.log(`Soy ${got[i+1].nombre}  ${got[i+1].apellido} de la ciudad ${got[i+1].ciudad}`)
}