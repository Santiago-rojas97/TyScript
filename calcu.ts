
//Funciones

function suma(a:number,b:number){
    return a+b;
}
console.log(suma(10,5));


function resta(a:number,b:number): number{
    return a-b;
}
console.log(resta(10,5));


function multi(a:number,b:number): number{
    return a*b;
}
console.log(multi(10,5));

function div(a:number,b:number): any{
    if(b==0){
        return `Èrror:ZERO`
    }else{
        return a/b;

    }
}
console.log(div(10,0));

//Arrow functions:

let sum= (x: number, y: number): number => x + y;
console.log(sum(10,58))

//Funciones anónimas:

let ressta = function (x: number, y: number): number {
   return x - y;
}
console.log(ressta(1, 2));