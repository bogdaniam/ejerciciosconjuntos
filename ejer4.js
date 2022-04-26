/*let usuario= "gustavo";
let contrasena= "1234";
let usuario1;
let contrasena1;
let numero_de_veces=0;


do{
    usuario1 = window.prompt("usuario: ");
contrasena1 = window.prompt("contraseña: ");
    if(usuario==usuario1 && contrasena==contrasena1){
        alert ("usuario y contraseña correcta");
        numero_de_veces=3;
     } else if (usuario!=usuario1 || contrasena!=contrasena1){
            alert ("usuario o contraseña incorrecta");
            numero_de_veces++;
    if (numero_de_veces==3){
alert ("se te han agotado los intentos")}
    }
}while(numero_de_veces<3)
*/

const user = "mihai";
const pass = "1234";
function login (){
    for (let n = 3; n > 0; n--) {
        alert(`Tienes ${n} intentos`)
        let user1 = window.prompt("Introduce el usuario: ");
        let pass1 = window.prompt("Introduce la contraseña: ");
        
        if (user === user1 && pass === pass1) {
            alert("Usuario y contraseña correctos.");
            n = 0;
        } else {
            alert("Usuario y contraseña incorrectos");

        }
    }
}


















