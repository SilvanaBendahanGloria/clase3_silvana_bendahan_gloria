//Sorteo de la lotería. 3 intentos. Números ganadores: 15 y 80

/*let numero = "";

for (i=0; i<3; i++) {
    numero = parseInt (prompt ("Ingresá un número"));
    if (numero == 15) {
        alert ("¡Ganaste un auto 0km!");
        break;
    } 

    else if (numero == 80) {
        alert ("¡Afortunado! Ganaste una entrada al cine");
        break;
    }

    else {
        alert ("ups, seguí participando");
    }
}*/




//Sorteo con ganador (casi) asegurado

/*let numero = prompt ("Escriba un número");

while (numero != 0) {
        
    alert ("¡Ganaste un premio!");
    numero = prompt ("Escribí otro número");

}*/

//Opción con Do... While
let numero = prompt ("Escriba un número");

do {
    alert ("¡Ganaste un premio!");
    numero = prompt ("Escribí otro número");
}
while (numero != 0)
        
  


