function contar2() {
    let frase = window.prompt("Introduce una frase: ");
    let a = window.prompt("Introduce la letra que quieres contar: ")
    console.log(frase.length);
    let i = frase.split(`${a}`).length - 1;
    console.log(i);
   
    
    alert(`La letra ${a} aparece en la frase introducida ${i} veces`);
    
};