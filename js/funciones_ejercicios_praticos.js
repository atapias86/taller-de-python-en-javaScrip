/*FUNCIONES EJERCICIO 1*/
function ejecicio1_sumar() {
    var num1 = parseInt(document.getElementById("ejer1_num1").value);
    var num2 = parseInt(document.getElementById("ejer1_num2").value);
    let resultado = (num1 + num2);
    document.getElementById("resultados_ejer01").innerHTML = "El resultado de la suma es: " + resultado;
}
function ejecicio1_restar() {
    var num1 = parseInt(document.getElementById("ejer1_num1").value);
    var num2 = parseInt(document.getElementById("ejer1_num2").value);
    let resultado = (num1 - num2);
    document.getElementById("resultados_ejer01").innerHTML = "El resultado de la resta es: " + resultado;
}
function ejecicio1_multiplicar() {
    var num1 = parseInt(document.getElementById("ejer1_num1").value);
    var num2 = parseInt(document.getElementById("ejer1_num2").value);
    let resultado = (num1 * num2);
    document.getElementById("resultados_ejer01").innerHTML = "El resultado de la multiplicación es: " + resultado;
}
function ejecicio1_divicion() {
    var num1 = parseInt(document.getElementById("ejer1_num1").value);
    var num2 = parseInt(document.getElementById("ejer1_num2").value);
    let resultado = (num1 / num2);
    document.getElementById("resultados_ejer01").innerHTML = "El resultado de la división es: " + resultado;
}
/*FUNCIONES EJERCICIO 2*/
function ejercicio2_areaRetangulo() {
    var num1 = parseInt(document.getElementById("ejer2_num1").value);
    var num2 = parseInt(document.getElementById("ejer2_num2").value);
    let resultado = (num1 * num2);
    document.getElementById("resultados_ejer02").innerHTML = "El area del retangulo es: " + resultado;
}
/*FUNCIONES EJERCICIO 3*/
function ejercicio3_media() {
    var num1 = parseInt(document.getElementById("ejer3_num1").value);
    var num2 = parseInt(document.getElementById("ejer3_num2").value);
    var num3 = parseInt(document.getElementById("ejer3_num3").value);
    var num4 = parseInt(document.getElementById("ejer3_num4").value);
    let resultado = (num1 + num2 + num3 + num4) / 4;
    document.getElementById("resultados_ejer03").innerHTML = "El valor de la media es: " + resultado;
}
/*FUNCIONES EJERCICIO 4*/
function ejercicio4_areaTriangulo() {
    var num1 = parseInt(document.getElementById("ejer4_num1").value);
    var num2 = parseInt(document.getElementById("ejer4_num2").value);
    let resultado = (num1 * num2) / 2;
    document.getElementById("resultados_ejer04").innerHTML = "El area del triangulo es: " + resultado;
}
/*FUNCIONES EJERCICIO 5*/
function ejercicio5_LongitudCircuferencia() {
    let pi = 3.14;
    var num1 = parseInt(document.getElementById("ejer5_num1").value);
    let resultado = (2 * num1 * pi);
    document.getElementById("resultados_ejer05").innerHTML = "La longitud de la circoferencia es: " + resultado;
}
function ejercicio5_areaCircuferencia() {
    let pi = 3.14;
    var num1 = parseInt(document.getElementById("ejer5_num1").value);
    let resultado = (num1 * num1) * pi;
    document.getElementById("resultados_ejer05").innerHTML = "La longitud de la circoferencia es: " + resultado;
}
/*FUNCIONES EJERCICIO 6*/
function ejercicio6_velocidadProyectil() {
    var num1 = parseInt(document.getElementById("ejer6_num1").value);
    var num2 = parseInt(document.getElementById("ejer6_num2").value);
    let metros = (num1 * 1000);
    let segundo = (num2 * 60)
    let resultado = (metros / segundo);
    document.getElementById("resultados_ejer06").innerHTML = "La velocidad del proyectil es: " + resultado + " M/S";
}
/*FUNCIONES EJERCICIO 7*/
function ejercicio5_volumenEsfera() {
    let pi = 3.14;
    var num1 = parseInt(document.getElementById("ejer7_num1").value);
    let resultado = (4 / 3) * (pi) * (num1 * num1 * num1);
    document.getElementById("resultados_ejer07").innerHTML = "El volumen de la esfera es: " + resultado;
}
/*FUNCIONES EJERCICIO 8*/
function ejercicio8_exprecion() {
    var a = parseInt(document.getElementById("ejer8_num1").value);
    var b = parseInt(document.getElementById("ejer8_num2").value);
    var c = parseInt(document.getElementById("ejer8_num3").value);
    let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
    document.getElementById("resultados_ejer08").innerHTML = "El resultado de la expresión es : " + resultado;
}
/*FUNCIONES EJERCICIO 9*/
function ejercicio9_areaCilindro() {
    let pi = 3.14;
    var radio = parseInt(document.getElementById("ejer9_num1").value);
    var h = parseInt(document.getElementById("ejer9_num2").value);
    let resultado = (2 * (pi * (radio * radio))) + ((2 * pi * radio) * h);
    document.getElementById("resultados_ejer09").innerHTML = "El area del cilindro es: " + resultado;
}
function ejercicio9_volumenCilindro() {
    let pi = 3.14;
    var radio = parseInt(document.getElementById("ejer9_num1").value);
    var h = parseInt(document.getElementById("ejer9_num2").value);
    let resultado = (pi * (radio * radio)) * h;
    document.getElementById("resultados_ejer09").innerHTML = "El volumen del cilindro es: " + resultado;
}
/*FUNCIONES EJERCICIO 10*/
function ejercicio10_ecuación() {
    var a = parseInt(document.getElementById("ejer10_num1").value);
    var b = parseInt(document.getElementById("ejer10_num2").value);
    var c = parseInt(document.getElementById("ejer10_num3").value);
    let x = 5;
    let resultado = a * (x * x) + b * x + c;
    document.getElementById("resultados_ejer10").innerHTML = "El resultado de la expresión es : " + resultado;
}
/*FUNCIONES EJERCICIO 11*/
function ejercicio11_volumenElipsoide() {
    let pi = 3.14;
    var a = parseInt(document.getElementById("ejer11_num1").value);
    var b = parseInt(document.getElementById("ejer11_num2").value);
    var c = parseInt(document.getElementById("ejer11_num3").value);
    let resultado = (4 / 3) * pi * a * b * c;
    document.getElementById("resultados_ejer11").innerHTML = "El volumen del elipsoide es : " + resultado;
}
/*FUNCIONES EJERCICIO 12*/
function ejercicio12_valorLlamada() {
    var minutos = parseInt(document.getElementById("ejer12_num1").value);
    let val_minutos = (355 * minutos)
    let val_iva = (val_minutos * 20) / 100;
    let resultado = (val_minutos + val_iva);
    document.getElementById("resultados_ejer12").innerHTML = "El costo de la llamada es : " + resultado + " pesos";
}
/*FUNCIONES EJERCICIO 13*/
function ejercicio13_convertir() {
    var km_h = parseInt(document.getElementById("ejer13_num1").value);
    let resultado = (km_h/3.6);
    document.getElementById("resultados_ejer13").innerHTML = "El la velocidad del automovil es : " + resultado + " M/S";
}
/*FUNCIONES EJERCICIO 14*/
function ejercicio13_convertir() {
    var valor = parseInt(document.getElementById("ejer13_num1").value);
    val_iva = (valor*10)/100;
    let resultado = (valor-val_iva);
    document.getElementById("resultados_ejer13").innerHTML = "El la velocidad del automovil es : " + resultado + " M/S";
}