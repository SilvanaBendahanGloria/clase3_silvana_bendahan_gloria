//Sorteo de la lotería. 3 intentos. Números ganadores: 15 y 80

let numero1 = "";

for (i=0; i<3; i++) {
    numero1 = parseInt (prompt ("Ingresá un número"));
    if (numero1 == 15) {
        alert ("¡Ganaste un auto 0km!");
        break;
    } 

    else if (numero1 == 80) {
        alert ("¡Afortunado! Ganaste una entrada al cine");
        break;
    }

    else {
        alert ("ups, seguí participando");
    }
}




//Sorteo con ganador (casi) asegurado (Exit con 0 (cero))

let numero2 = prompt ("Escriba un número");

while (numero2 != 0) {
        
    alert ("¡Ganaste un premio!");
    numero2 = prompt ("Escribí otro número");

}



//Opción con Do... While
let numero3 = prompt ("Escriba un número");

do {
    alert ("¡Ganaste un premio!");
    numero3 = prompt ("Escribí otro número");
}
while (numero3 != 0)
        
  


