//Funciones
function suma(a, b) {
    return a + b;
}
console.log(suma(10, 5));
function resta(a, b) {
    return a - b;
}
console.log(resta(10, 5));
function multi(a, b) {
    return a * b;
}
console.log(multi(10, 5));
function div(a, b) {
    if (b == 0) {
        return "\u00C8rror:ZERO";
    }
    else {
        return a / b;
    }
}
console.log(div(10, 0));

//Arrow functions:
var sum = function (x, y) { return x + y; };
console.log(sum(10, 58));


//Funciones anónimas:
var ressta = function (x, y) {
    return x - y;
};
console.log(ressta(1, 2));
