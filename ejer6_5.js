/*ejercicio1*/
function ejercicio1() {
    let n1 = window.prompt("Introduce primer numero: ");
    let n2 = window.prompt("Introduce el segundo numero: ");
    let n3 = window.prompt("Introduce el tercer numero: ");

    if (n1 < n2 && n1 < n3) {
        alert("El primer numero es el menor")
    } else if (n2 < n1 && n2 < n3) {
        alert("El segundo numero es el menor")
    } else {
        alert("El tercer numero es el menor")
    }
};

/*ejercicio2*/

function ejercicio2() {
    let frase = prompt("escribe una frase");
    let letra = prompt("escribe una letra");
    let n1 = 0;
    console.log(frase);
    for (let j = 0; j < frase.length; j++) {
        if (frase[j] == letra) {
            n1++;
        }

    }
    alert("la letra se repite " + n1 + " veces")
}

/*ejercicio3*/

function suma() {
    let n1 = window.prompt("Añade primer numero: ");
    n1 = Number(n1);
    let n2 = window.prompt("Añade segundo numero: ");
    n2 = Number(n2);
    let n3 = n1 + n2;

    alert(`La suma de ${n1} y ${n2} es ${n3}`);
};

function resta() {
    let n1 = window.prompt("Añade primer numero: ");
    n1 = Number(n1);
    let n2 = window.prompt("Añade segundo numero: ");
    n2 = Number(n2);
    let n3 = n1 - n2;

    alert(`La resta de ${n1} y ${n2} es ${n3}`);
};



/*ejercicio4*/
function ejercicio4(){
let usuario = 0;
let contraseña = 0;
const usuario1 = "gustavo";
const contraseña1 = "1234";
let n1 = 3;
do {
    usuario = prompt("usuario")
    contraseña = prompt("contraseña");
    if (usuario == usuario1 && contraseña == contraseña1) {
        alert("usuario y contraseña correctos");
        n1 = 0;
    } else if (usuario != usuario1 || contraseña != contraseña1) {
        n1--;
        if (n1 > 0) {
            alert("usuario o contraseña incorrectos te quedan " + n1 + " intentos");
        } else if (n1 == 0) {
            alert("se han acabado los intentos")
        }



    }



} while (n1 > 0)

}

/*ejercicio5*/
function ejercicio5() {
    let letra = window.prompt("Introduce una letra: ");
    switch (letra) {
        case "a":
            alert("El numero es 7");
            break;
        case "b":
            alert("El numero es 9");
            break;
        case "c":
            alerat("El numero es 101");
            break;
        default:
            alert("Te has equivocado de letra");
    };
}

/*ejercicio6*/
