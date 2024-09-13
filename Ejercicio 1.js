// definimos constates de los estudiantes mas las notas
const estudiantes = [
    { nombre: "Juan", nota: 80 },
    { nombre: "María", nota: 40 },
    { nombre: "Pedro", nota: 90 },
    { nombre: "Ana", nota: 70 },
    { nombre: "Luis", nota: 50 },
      {nombre: "Alejandro", nota: 59},
      {nombre:"lucho", nota: 60},
      {nombre:"cathe", nota:71},
      {nombre:"laura", nota:15},
      {nombre:"rosa", nota:100},
      {nombre:"camilo", nota:35},
      {nombre:"johana", nota:99},
      {nombre:"hugo", nota:49},
      {nombre:"walter", nota:61},
      {nombre:"luisa", nota:71},
      {nombre:"vicente", nota:71},
      {nombre:"andrea", nota:50},
      {nombre:"daniela", nota:60},
      {nombre:"valentina", nota:63},
      {nombre:"kevin", nota:98},
  
  ];
      // se realiza la validacion de las notas de los estudiantes
  const estudiantesAprobados = estudiantes
    .filter(estudiante => estudiante.nota >= 60)
    .map(estudiante => estudiante.nombre);
  
      //mostrar estudiantes aprobados
  console.log("Estudiantes Aprobados 👍 :");
  console.log(estudiantesAprobados); 
  