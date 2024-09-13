// Matriz original
const matrizOriginal = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

// Matriz para almacenar el resultado
const matrizIncrementada = [];

// Recorrer cada fila de la matriz original
for (const fila of matrizOriginal) {
  // Crear una nueva fila para almacenar los elementos incrementados
  const filaIncrementada = [];
  
  // Recorrer cada elemento de la fila
  for (const elemento of fila) {
    // Incrementar el elemento en 5 y agregarlo a la nueva fila
    filaIncrementada.push(elemento + 5);
  }
  
  // Agregar la nueva fila a la matriz incrementada
  matrizIncrementada.push(filaIncrementada);
}

// Imprimir la matriz incrementada
console.log(matrizIncrementada);