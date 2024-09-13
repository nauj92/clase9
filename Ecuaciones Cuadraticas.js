/*Plantilla para el ejercicio de ecuaciones cuadráticas
Autor:
fecha:

ax^2 + bx +c = 0
donde a,b,c son números reales y a!=0
x = -b + - raiz(b^2 - 4ac) / 2a

para hacer exponenciación, se tiene que
z = 3**2 lo que significa 3 elevado a la dos
ó Math.pow(3,3)

para hacer raíces
j = 100**(1/2) que significa raíz cuadrada de 10
ó Math.sqrt(100)

asset:
sea la ecuación cuadrática x^2+10x+24=0
a=1
b=10
c=24 
las respuestas son:
x1=-4
x2=-6
*/
// definiendo las variables...
let a=1;
let b=10;
let c=24;
//valida que a sea diferente de cero! ...
if(a!==0){
//termina de completar las ecuaciones dentro de los paréntesis

let x1=(-b+Math.sqrt(b**2-4*a*c)) / (2*a); //nota que aquí la expresión matemática tiene +

let x2=(-b-Math.sqrt(b**2-4*a*c)) / (2*a); //nota que aquí la expresión matemática tiene -


//Muestra los resultados de ambas x ...
console.log("x1 = "+x1);
console.log("x2 = "+x2);
}else{
    console.log("error:a no puede ser cero");
}
/*
emplea posteriormente ciclos y funciones para solucionar
varias ecuaciones a la vez!
*/
    
    function operaciónCuadratica(a, b, c) {
        if (a != 0) {
            let x1 = ((-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a));
            let x2 = ((-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a));
            return { x1, x2 };
        } else {
            console.log("a es igual a cero");
            return { mensaje: "a es igual a cero" };
        }
    }
    
    const ecuaciones = [
        { a: 1, b: 10, c: 24 },
        { a: 1, b: 15, c: 27 },
        { a: 1, b: 20, c: 13 },
    ];
    
    for (let i = 0; i < ecuaciones.length; i++) {
        const { a, b, c } = ecuaciones[i];
        const resultado = operaciónCuadratica(a, b, c);
    
        if (resultado.x1 !== undefined && resultado.x2 !== undefined) {
            console.log(`Ecuación ${i + 1}:`);
            console.log(`x1 = ${resultado.x1}`);
            console.log(`x2 = ${resultado.x2}`);
        } else {
            console.log(`Ecuación ${i + 1}: ${resultado.mensaje}`);
        }
    }
