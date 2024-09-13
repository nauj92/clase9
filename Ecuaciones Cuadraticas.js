let a = 1;
let b = 10;
let c = 24;

// Valida que a sea diferente de cero
if (a !== 0) {


  // Calcula las soluciones
  let x1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a);
  let x2 = (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a);

  
  // Muestra los resultados
  console.log("x1 = " + x1);
  console.log("x2 = " + x2);
} else {
  console.log("Error: a no puede ser cero");
}