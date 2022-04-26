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
