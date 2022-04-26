/*function contar2() {
    let frase = window.prompt("Introduce una frase: ");
    let a = window.prompt("Introduce una letra: ");
    let n = frase.split(`${a}`).length - 1;
    alert(`La letra ${a} aparece en la frase ${n} veces`);
}*/






let frase = prompt("escribe una frase");
let letra = prompt("escribe una letra");
let n1 = 0;
console.log(frase);
for(let j= 0;j<frase.length;j++){
    if(frase[j] == letra){
        n1++;
    }

}
alert("la letra se repite "+n1+" veces" )