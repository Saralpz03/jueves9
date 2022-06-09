let nombre = prompt("Dime tu nombre");
let nota1 = parseInt(prompt("Escribe la primera nota"));
let nota2 = parseInt(prompt("Escribe la segunda nota"));
let nota3 = parseInt(prompt("Escribe la tercera nota"));

let media_total = ((nota1 + nota2 + nota3) / 3).toFixed(2);

switch (true) {
    case (media_total < 5):
        document.write("<h3>Bienvenido " + nombre + "</h3><br>");
        document.write("Tu primera nota ha sido: " + nota1 + "<br> Tu segunda nota ha sido: " + nota2 + "<br>Tu tercera nota ha sido un: " + nota3 + "<br>Y tu media: " + media_total + "<br>");
        document.write("SUSPENSO");
        break;
    case (media_total > 4 && media_total < 7):
        document.write("<h3>Bienvenido " + nombre + "</h3><br>");
        document.write("Tu primera nota ha sido: " + nota1 + "<br> Tu segunda nota ha sido: " + nota2 + "<br>Tu tercera nota ha sido un: " + nota3 + "<br>Y tu media: " + media_total + "<br>");
        document.write("APROBADO");
        break;
    case (media_total > 6 && media_total < 9):
        document.write("<h3>Bienvenido " + nombre + "</h3><br>");
        document.write("Tu primera nota ha sido: " + nota1 + "<br> Tu segunda nota ha sido: " + nota2 + "<br>Tu tercera nota ha sido un: " + nota3 + "<br>Y tu media: " + media_total + "<br>");
        document.write("NOTABLE");
        break;
    case (media_total > 8 && media_total <= 10):
        document.write("<h3>Bienvenido " + nombre + "</h3><br>");
        document.write("Tu primera nota ha sido: " + nota1 + "<br> Tu segunda nota ha sido: " + nota2 + "<br>Tu tercera nota ha sido un: " + nota3 + "<br>Y tu media: " + media_total + "<br>");
        document.write("SOBRESALIENTE");
        break;
}