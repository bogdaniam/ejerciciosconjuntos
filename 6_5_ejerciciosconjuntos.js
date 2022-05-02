/*ejercicio1
buscar que numero es el menor*/
function ejercicio1() {
    let n1 = prompt("introduce el primer numero");
    let n2 = prompt("introduce el segundo numero");
    let n3 = prompt("introduce el tercer numero");
    let resultado;
    if (n1 < n2 && n1 < n3) {
        alert("el primer numero es el menor")
    }
    else if (n2 < n1 && n2 < n3) {
        alert("el segundo numero es el menor")
    }
    else if (n3 < n1 && n3 < n2) {
        alert("el tercer numero es el menor")
    }
    else {
        alert("los tres numeros son iguales")
    }
    
}




/*ejercicio1.1*/
const ejercicio1_1= function () {
    let n1 = prompt("introduce el primer numero");
    let n2 = prompt("introduce el segundo numero");
    let n3 = prompt("introduce el tercer numero");
    let resultado;
    if (n1 < n2 && n1 < n3) {
        alert("el primer numero es el menor")
    }
    else if (n2 < n1 && n2 < n3) {
        alert("el segundo numero es el menor")
    }
    else if (n3 < n1 && n3 < n2) {
        alert("el tercer numero es el menor")
    }
    else {
        alert("los tres numeros son iguales")
    }
    
}



/*ejercicio2
contar cuantas veces sale una letra en una frase*/
function ejercicio2() {
    let frase = prompt("escribe una frase");
    let letra = prompt("escribe una letra");
    let n1 = 0;
    for (let j = 0; j < frase.length; j++) {
        if (frase[j] == letra) {
            n1++;
        }

    }
    alert("la letra se repite " + n1 + " veces")
}

/*ejercicio3
sumar o restar*/
function sumaoresta(){
    const r= "r";
    const s= "s";
    let n3
    let letra = prompt("pulsa s para sumar o pulsa r para restar");
    switch (letra){
        case s:
    n1 = +prompt("primer numero");
    n2 = +prompt("segundo numero");
    n3 = n1 + n2;
    alert("el resultado es " + n3);
    break;

        case r:
    n1 = +prompt("primer numero");
    n2 = +prompt("segundo numero");
    n3 = n1 - n2;
    alert("el resultado es " + n3)
    break;
    default:
        alert("te has equivocado de letra");
        break;
}
}
/*ejercicio3.1*/
const sumaoresta2= ()=> {
    const r= "r";
    const s= "s";
    let n3
    let letra = prompt("pulsa s para sumar o pulsa r para restar");
    switch (letra){
        case s:
    n1 = +prompt("primer numero");
    n2 = +prompt("segundo numero");
    n3 = n1 + n2;
    alert("el resultado es " + n3);
    break;

        case r:
    n1 = +prompt("primer numero");
    n2 = +prompt("segundo numero");
    n3 = n1 - n2;
    alert("el resultado es " + n3)
    break;
    default:
        alert("te has equivocado de letra");
        break;
}
}
   
   

/*ejercicio4
validacion de usuario y contraseña*/
(function () {
    let usuario = 0;
    let contraseña = 0;
    const usuario1 = "gustavo";
    const contraseña1 = "1234";
    let n1 = 3;
    do {
        usuario = prompt("usuario")
        contraseña = prompt("contraseña");
        if (usuario == usuario1 && contraseña == contraseña1) {
            alert("bienbenido "+usuario1);
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
})();
/*ejercicio5
das una letra y te da un numero*/
function ejercicio5() {
    const a = "a";
    const b = "b";
    const c = "c";
    let letra = prompt("dime una letra");
    switch (letra) {
        case a:
            alert(7);
            break;
        case b:
            alert(9);
            break;
        case c:
            alert(101);
            break;
        default:
            alert("te as equivocado de letra")
            break;
    }
}

/*ejercicio6
colocar alfabeticamente unas oalabras*/

function ejercicio6() {
    let lista = [];
    let n, i, k, aux;

    
    let n1 = prompt("¿cuantas palabras?");

    for (let i1 = 0; i1 < n1; i1++) {
        n2 = prompt("dime la palabra");
        lista.push(n2);
    }
    n = lista.length;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;


            }
        }
    }

    alert(lista);
}