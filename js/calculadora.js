//alert ("el js se ejecuta");


function escribir(valor){
    let pantalla = document.getElementById("pantalla");

    if (pantalla.value == "0" || pantalla.value == "Error") {
        pantalla.value = valor;
    }

    else {
        pantalla.value += valor;
    }
}

function calcular() {
    let pantalla = document.getElementById("pantalla");

    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = "Error";
    }
}

function borrar() {
    document.getElementById("pantalla").value = "0";
}