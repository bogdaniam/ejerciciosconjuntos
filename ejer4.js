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
function login () {
    for (let n = 3; n > 0; n--){
        alert(`Tienes ${n} intentos para el Login`);
        let user1 = window.prompt("Introduce tu usuario: ");
        let pass1 = window.prompt("introduce tu contraseña: ");
        if (user === user1 && pass === pass1) {
        alert("Datos introducidos correctos")
         n = 0;
        } else {
        alert(`Datos introducidos erroneos.`)
        }
    }
};







