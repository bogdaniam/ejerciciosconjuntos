let n1 = window.prompt("Introduce primer numero: ");
let n2 = window.prompt("Introduce el segundo numero: ");
let n3 = window.prompt("Introduce el tercer numero: ");

if(n1 < n2 && n1 < n3) {
    alert("El primer numero es el menor")
} else if (n2 < n1 && n2 < n3) {
    alert("El segundo numero es el menor")
} else {
    alert("El tercer numero es el menor")
}
