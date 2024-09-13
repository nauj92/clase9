// Definimos un array de precios
const precios = [
    100.990, 200.990, 50.990, 150.990, 300.990,
    400.990, 250.990, 180.990, 120.990, 80.990,
    100.909, 200.909, 50.909, 150.909, 300.909,
    400.909, 250.909, 180.909, 120.909, 80.909,
    10.990, 20.990, 5.990, 15.990, 30.990,
    40.990, 25.990, 18.990, 12.990, 8.990,
    100.99, 200.99, 5.990, 15.990, 30.990,
    400.99, 250.99, 18.990, 12.990, 8.990,
    100.99, 200.99, 5.990, 15.990, 30.990,
    400.990, 205.909, 108.909, 102.909, 80.990,
    100.990, 200.909, 50.990, 105.909, 300.990,
    400.990, 205.909, 180.990, 120.990, 80.990,
    10.990, 20.990, 5.990, 15.990, 30.990,
    40.990, 25.990, 18.990, 12.990, 8.990,
    10.990, 20.990, 5.990, 15.990, 30.990,
    40.990, 25.990, 18.990, 12.990, 8.990,
];

// Utilizamos el método reduce() para calcular el total de los precios con descuento
const totalConDescuento = precios.reduce((acumulador, precio) => {
    // Calculamos el precio con descuento multiplicando cada precio por 0.9
    const precioConDescuento = precio * 0.9;
    // Sumamos el precio con descuento al acumulador
    return acumulador + precioConDescuento;
}, 0);

// Mostramos el resultado en la consola
console.log(totalConDescuento);