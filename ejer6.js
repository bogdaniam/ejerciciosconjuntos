/*let palabras = ["rojo", "azul", "amarillo", "blanco", "negro", "verde", "naranja"];
console.log(palabras);
let nuevaPalabra = palabras.sort();
console.log(nuevaPalabra);
*/

let num = [5, 2, 3, 8, 1, 7];
console.log(num);
let aux;
for (let i = 0; i <= num.length; i++){
    for(let x = 0; x <= num.length; x++){
        if (num[x] > num[x+1]){
            aux = num[x+1];
            num[x+1] = num[x];
            num[x] = aux;
        }
    }
}
console.log(num);
