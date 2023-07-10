let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const [primero, a, tercero, b, quinto, ...elResto] = numeros
const nuevoArray = [a, b, ...elResto]

console.log(nuevoArray);

//-------------------------------------------------------------

const mascota = {
    nombre: "Hachiko",
    tipoDeMascota: "Perro",
    color: "Amarillo",
    raza: "Akita Inu"
}

const {nombre, tipoDeMascota, color, raza} = mascota; 

console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoDeMascota}, de color: ${color} y su raza es: ${raza}.`);