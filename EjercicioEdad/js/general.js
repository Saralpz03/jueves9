let nombre = prompt("Dime tu nombre");
while (!isNaN(nombre)) {
    nombre = prompt("Pon un nombre valido");
}
let edad = parseInt(prompt("Dinos tu edad", "Solo puedes tener entre 18 y 40 años"));
while (edad < 18 || edad > 40 || isNaN(edad)) {
    edad = prompt("Escribe una edad valida");
}
document.getElementById("nombre").innerHTML = "New Text";