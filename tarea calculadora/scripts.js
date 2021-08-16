var valor1 = 0;
var valor2 = 0;

var sumar = function(){
    valor1 = parseInt(document.getElementById("valor1").value)
    valor2 = parseInt(document.getElementById("valor2").value)

    console.log(valor1 + valor2)
};
var restar = function(){
    valor1 = parseInt(document.getElementById("valor1").value)
    valor2 = parseInt(document.getElementById("valor2").value)

    console.log(valor1 - valor2)
};
var multiplicar = function(){
    valor1 = parseInt(document.getElementById("valor1").value)
    valor2 = parseInt(document.getElementById("valor2").value)

    console.log(valor1 * valor2)
};
var dividir = function(){
    valor1 = parseInt(document.getElementById("valor1").value)
    valor2 = parseInt(document.getElementById("valor2").value)

    console.log(valor1 / valor2)
};
var resultado = function(){
    switch (valor1 && valor2 !== 0) {
        case sumar:
            alert(sumar)
    }
};