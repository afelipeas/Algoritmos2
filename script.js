// --- LÓGICA DE LA INTERFAZ DE BOTONES PARA CADA EJERCICIO ---

document.addEventListener("DOMContentLoaded", () => {
  const menuNavegacion = document.getElementById("menu-navegacion");
  const enunciadoDiv = document.getElementById("enunciado");
  const outputDiv = document.getElementById("output");

  // Función para mostrar el enunciado y el botón de resolver
  window.mostrarEjercicio = function (numero) {
    // Limpia el resultado anterior
    outputDiv.innerHTML = " ";

    const ejercicio = ejercicios[numero];

    if (ejercicio && typeof ejercicio.enunciado === "function") {
      // Muestra el enunciado y el botón para resolver
      enunciadoDiv.innerHTML = `
                <h2>Enunciado del Problema No. ${numero}</h2>
                <div>${ejercicio.enunciado()}</div>
                <button id="btn-resolver" onclick="ejecutarSolucion(${numero})">Resolver</button>
            `;
    } else {
      enunciadoDiv.innerHTML = `
                <h2>Ejercicio No. ${numero}</h2>
                <p>Aún no se ha definido el enunciado para este ejercicio.</p>
            `;
    }
  };

  // Función para ejecutar la lógica de la solución
  window.ejecutarSolucion = function (numero) {
    const ejercicio = ejercicios[numero];
    if (ejercicio && typeof ejercicio.resolver === "function") {
      // Se ejecuta la función resolver
      ejercicio.resolver(outputDiv);
    } else {
      outputDiv.innerHTML = `<p>Aún no se ha definido la lógica de solución para este ejercicio.</p>`;
    }
  };

  // Genera los botones del menú de navegación dinámicamente
  for (let i = 1; i <= 23; i++) {
    const boton = document.createElement("button");
    boton.textContent = `Ejercicio No. ${i}`;
    boton.className = "btn-ejercicio";
    boton.onclick = () => mostrarEjercicio(i);
    menuNavegacion.appendChild(boton);

    // Si un ejercicio no está definido, se le asigna una plantilla para evitar errores
    if (!ejercicios[i]) {
      ejercicios[i] = {
        enunciado: () =>
          `<p>El enunciado para el ejercicio ${i} aún no ha sido agregado.</p>`,
        resolver: (output) => {
          output.innerHTML = `<p>La lógica para el ejercicio ${i} aún no ha sido implementada.</p>`;
        },
      };
    }
  }
});

// --------------------------------------------------------------------
// --- ÁREA PARA INSERTAR ENUNCIADOS Y LÓGICA DE SOLUCIONES ---
// --------------------------------------------------------------------

const ejercicios = {
  1: {
    enunciado: () => {
      return `
                <p><b>Problema 1:</b></p>
                <p>Hacer un algoritmo que imprima el nombre de un producto, clave, precio original y su total con descuento. El descuento lo hace en base a la clave, Si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento en del 20% (sólo existen dos claves).</p>
            `;
    },
    resolver: (output) => {
      // Esta es la lógica para resolver el problema 1.
      // Aquí es donde declaramos las constantes y variables
      let nombre, precioOriginal, clave, descuento, totalConDescuento;

      nombre = prompt("Ingrese el nombre del producto");
      precioOriginal = prompt("Ingrese el precio del producto");
      clave = prompt("Ingrese la clave de descuento, 01 o 02");

      if (clave == "01") {
        descuento = precioOriginal * 0.1;
        totalConDescuento = precioOriginal - descuento;
        output.innerHTML = `El nombre del producto es: ${nombre} <br>`;
        output.innerHTML += `La clave del producto es: ${clave}, y su descuento es: 10% <br>`;
        output.innerHTML += `El precio original del producto es: ${precioOriginal} <br>`;
        output.innerHTML += `El precio del producto con descuento es: ${totalConDescuento} <br>`;
      } else if (clave == "02") {
        descuento = precioOriginal * 0.2;
        totalConDescuento = precioOriginal - descuento;
        output.innerHTML = `El nombre del producto es: ${nombre} <br>`;
        output.innerHTML += `La clave del producto es: ${clave}, y su descuento es: 20% <br>`;
        output.innerHTML += `El precio original del producto es: ${precioOriginal} <br>`;
        output.innerHTML += `El precio del producto con descuento es: ${totalConDescuento} <br>`;
      } else {
        alert("Ingrese la clave correcta");
        output.innerHTML = `No es posible mostrar un resultado`;
      }

      // --------------------------------------------------------------------------------
    },
  },
  2: {
    enunciado: () => {
      return `
                <p><b>Problema 2:</b> Enunciado del problema No. 2.</p>
                <p>Hacer un algoritmo que calcule el total a pagar por la compra de camisas, precio de las camisas 25000. Si se compran tres camisas o más se aplica un descuento del 20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%.</p>
            `;
    },
    resolver: (output) => {
      // Lógica para resolver el problema 2.
      // Aquí es donde declaramos las constantes y variables
      const precioCamisa = 25000;
      const descuento20 = 0.2;
      const descuento10 = 0.1;
      let numeroCamisas, totalCompra, descuento, totalPagar;
      numeroCamisas = parseInt(prompt("¿Cuantas camisas desea comprar?"));

      if (numeroCamisas >= 3) {
        totalCompra = numeroCamisas * precioCamisa;
        descuento = totalCompra * descuento20;
        totalPagar = totalCompra - descuento;
        output.innerHTML = `Como su compra fue de: ${numeroCamisas} camisas, su descuento es del 20%. <br>`;
        output.innerHTML += `El total a pagar por su compra es de: $ ${totalPagar}.`;
      } else {
        totalCompra = numeroCamisas * precioCamisa;
        descuento = totalCompra * descuento10;
        totalPagar = totalCompra - descuento;
        output.innerHTML = `Como su compra fue de: ${numeroCamisas} camisas, su descuento es del 10%. <br>`;
        output.innerHTML += `El total a pagar por su compra es de: $ ${totalPagar}.`;
      }
    },
  },
  3: {
    enunciado: () => {
      return `
                <p><b>Problema 3:</b> En un supermercado se hace una promoción, mediante la cual el cliente obtiene un descuento dependiendo de un número que se escoge al azar los números deben de estar entre 1 y 10. Si el número escogido es menor o igual que 10 el descuento es del 15% sobre el total de la compra, si es menor o igual a 5 el descuento es del 20%. Obtener cuánto dinero se le descuenta.</p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 3
      // Aquí es donde declaramos las constantes y variables
      const descuento15 = 0.15;
      const descuento20 = 0.2;
      let totalCompra, numero, descuento;
      totalCompra = prompt("¿Cuanto compró usted en la tienda?");
      numero = parseInt(prompt("Escriba un numero que este entre 1 y 10"));
      if (numero >= 6 && numero <= 10) {
        descuento = totalCompra * descuento15;
        output.innerHTML = `Como escogiste el ${numero}, tu ganaste un descuento del 15%, y tu descuento es de $${descuento}`;
      } else if (numero >= 1 && numero <= 5) {
        descuento = totalCompra * descuento20;
        output.innerHTML = `Como escogiste el ${numero}, tu ganaste un descuento del 20%, y tu descuento es de $${descuento}`;
      } else {
        alert("Por favor escoge un numero entre 1 y 10");
        output.innerHTML = `No es posible mostrar un resultado`;
      }
    },
  },

  4: {
    enunciado: () => {
      return `
                <p><b>Problema 4:</b> Calcular el número de pulsaciones que debe tener una persona por cada 10 segundos de ejercicio aeróbico; la fórmula que se aplica cuando el sexo es femenino es: </br> num. pulsaciones = (220 - edad)/10
                <br> y si el sexo es masculino:
                <br> num. pulsaciones = (210 - edad)/10 </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 4
      // Aquí es donde declaramos las constantes y variables
      let edad, genero, pulsaciones;
      edad = parseInt(prompt("Ingrese su edad aquí, por favor."));
      genero = prompt(
        "Ingrese su genero, pulse (m) para masculino o pulse (f) para femenino."
      );
      if (genero == "m") {
        pulsaciones = (210 - edad) / 10;
        output.innerHTML = `Su pulso es de ${pulsaciones} pulsaciones por cada 10 segundos.`;
      } else if (genero == "f") {
        pulsaciones = (220 - edad) / 10;
        output.innerHTML = `Su pulso es de ${pulsaciones} pulsaciones por cada 10 segundos.`;
      } else {
        alert("La opción debe ser entre (m) y (f)");
        output.innerHTML = `No es posible mostrar un resultado`;
      }
    },
  },
  5: {
    enunciado: () => {
      return `
                <p><b>Problema 5:</b> Elabore un algoritmo que lea un número negativo e imprima el número y el positivo del mismo. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 4
      // Aquí es donde declaramos las constantes y variables
      let numero, operacion;

      numero = parseInt(prompt("Ingrese un número negativo"));
      if (numero < 0) {
        operacion = numero * -1;

        output.innerHTML = `El número negativo ${numero} se ha convertido en un número positivo: ${operacion}`;
      } else {
        alert("Por favor ingrese un numero negativo");
        output.innerHTML = `No es posible mostrar un resultado`;
      }
    },
  },
  6: {
    enunciado: () => {
      return `
                <p><b>Problema 6:</b> Hacer un algoritmo que permita pasar de kilogramos a gramos y toneladas. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 6
      // Aquí es donde declaramos las constantes y variables
      let kilogramos, gramos, toneladas;

      kilogramos = parseInt(
        prompt("Ingrese la cantidad de kilogramos a convertir")
      );
      gramos = kilogramos * 1000;
      toneladas = kilogramos / 1000;

      output.innerHTML = `La cantidad de ${kilogramos} kilogramos, equivale a ${gramos} gramos y a ${toneladas} toneladas.`;
    },
  },
  7: {
    enunciado: () => {
      return `
                <p><b>Problema 7:</b> Un paquete de galletas cuesta $3.500 y contiene 15 galletas, cuánto cuestan X cantidad de galletas de ellas? Elabore un algoritmo para obtener la respuesta. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 7
      // Aquí es donde declaramos las constantes y variables
      const costo = 3500,
        totalGalletas = 15;
      let numeroGalletas, costoGalletas;
      numeroGalletas = parseInt(
        prompt("Escriba el numero de galletas que quiere saber cuanto cuesta.")
      );

      costoGalletas = Math.round((numeroGalletas * costo) / totalGalletas);

      output.innerHTML = `La cantidad de las ${numeroGalletas} galletas cuesta en total $${costoGalletas}`;
    },
  },
  8: {
    enunciado: () => {
      return `
                <p><b>Problema 8:</b> Si 15 cuadernos cuestan $75000, cuánto cuestan X cantidad de cuadernos?. Elabore un algoritmo para hallar la respuesta correcta. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 8
      // Aquí es donde declaramos las constantes y variables
      const costoC = 75000,
        totalCuadernos = 15;
      let numeroCuadernos, costoCuadernos;
      numeroCuadernos = parseInt(
        prompt(
          "Escriba la cantidad de cuadernos que quiere saber cuanto cuesta."
        )
      );

      costoCuadernos = Math.round((numeroCuadernos * costoC) / totalCuadernos);

      output.innerHTML = `La cantidad de los ${numeroCuadernos} cuadernos cuesta en total $${costoCuadernos}`;
    },
  },
  9: {
    enunciado: () => {
      return `
                <p><b>Problema 9:</b> Realizar un programa que cuente de 1 a 200 e imprima en pantalla los números divisibles por 6, y cuando llegue a 200 cuente de forma regresiva hasta 20 e imprima los divisibles por 8. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 9
      // Aquí es donde declaramos las constantes y variables
      output.innerHTML += ` <br>Estos son los números divisibles entre 6: <br> `;
      for (let y = 1; y <= 200; y++) {
        if (y % 6 == 0) {
          output.innerHTML += ` ${y}  `;
        }
      }
      output.innerHTML += ` <br>Estos son los números divisibles entre 8: <br> `;
      for (let x = 200; x >= 20; x--) {
        if (x % 8 == 0) {
          output.innerHTML += ` ${x}  `;
        }
      }
    },
  },
  10: {
    enunciado: () => {
      return `
                <p><b>Problema 10:</b> Realizar un programa que capture el nombre de dos personas y las fechas de nacimiento con cada campo por separado día, mes y año y calcule la edad de dos personas diferentes y diga cuál de ellos es mayor. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 10
      // Aquí es donde declaramos las constantes y variables
      let nombrePersona1,
        nombrePersona2,
        diaPersona1,
        diaPersona2,
        mesPersona1,
        mesPersona2,
        añoPersona1,
        añoPersona2;

      nombrePersona1 = prompt("Ingrese el nombre de la primera persona");
      diaPersona1 = parseInt(
        prompt("Ingrese el día de nacimiento de la primera persona")
      );
      mesPersona1 = parseInt(
        prompt("Ingrese el mes de nacimiento de la primera persona")
      );
      añoPersona1 = parseInt(
        prompt("Ingrese el año de nacimiento de la primera persona")
      );

      nombrePersona2 = prompt("Ingrese el nombre de la segunda persona");
      diaPersona2 = parseInt(
        prompt("Ingrese el día de nacimiento de la segunda persona")
      );
      mesPersona2 = parseInt(
        prompt("Ingrese el mes de nacimiento de la segunda persona")
      );
      añoPersona2 = parseInt(
        prompt("Ingrese el año de nacimiento de la segunda persona")
      );

      const fechaNacimiento1 = new Date(
        añoPersona1,
        mesPersona1 - 1,
        diaPersona1
      );

      const fechaNacimiento2 = new Date(
        añoPersona2,
        mesPersona2 - 1,
        diaPersona2
      );

      const fechaActual = new Date();

      const diferenciaPersona1 =
        fechaActual.getTime() - fechaNacimiento1.getTime();
      const diferenciaPersona2 =
        fechaActual.getTime() - fechaNacimiento2.getTime();
      const milisegundosPorDia = 1000 * 60 * 60 * 24;
      const edadDiasPersona1 = Math.floor(
        diferenciaPersona1 / milisegundosPorDia
      );
      const edadDiasPersona2 = Math.floor(
        diferenciaPersona2 / milisegundosPorDia
      );
      if (edadDiasPersona1 > edadDiasPersona2) {
        output.innerHTML = `La persona, ${nombrePersona1}, es mayor que la persona ${nombrePersona2}.`;
      } else if (edadDiasPersona2 > edadDiasPersona1) {
        output.innerHTML = `La persona, ${nombrePersona2}, es mayor que la persona ${nombrePersona1}.`;
      } else {
        output.innerHTML = `Las dos personas tiene la misma edad.`;
      }
    },
  },
  11: {
    enunciado: () => {
      return `
                <p><b>Problema 11:</b> Un programa que me capture el salario de un empleado y me realice el descuento de pensión y salud, pero si el salario es superior a 1200000 no le debe descontar. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 11
      // Aquí es donde declaramos las constantes y variables
      const descuentoPension = 0.04;
      const descuentoSalud = 0.04;
      let salario, totalDescuento, salarioFinal;
      salario = parseInt(prompt("Ingrese su salario aquí, por favor."));
      if (salario > 1200000) {
        output.innerHTML = `Su salario es de $${salario}, por lo tanto no tiene descuentos.`;
      } else if (salario <= 1200000) {
        totalDescuento = salario * (descuentoPension + descuentoSalud);
        salarioFinal = salario - totalDescuento;
        output.innerHTML = `Su salario es de $${salario}, por lo tanto su descuento es de $${totalDescuento} y su salario final es de $${salarioFinal}.`;
      } else {
        alert("Por favor ingrese un salario válido");
        output.innerHTML = `No es posible mostrar un resultado`;
      }
    },
  },
  12: {
    enunciado: () => {
      return `
                <p><b>Problema 12:</b> Un programa que, capture el salario de un empleado, y lo divida por 30 meses del mes, también debe capturar los días trabajados y me debe mostrar el total ganado. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 12
      // Aquí es donde declaramos las constantes y variables
      const diasMes = 30;
      let salario, salarioDias, diasTrabajados, totalGanado;
      salario = parseInt(prompt("Por favor ingrese su salario"));
      diasTrabajados = parseInt(
        prompt("Por favor ingrese los dias trabajados")
      );
      salarioDias = Math.round(salario / diasMes);
      totalGanado = Math.round(diasTrabajados * salarioDias);

      output.innerHTML = `Tu salario por día fue de $${salarioDias}, como trabajaste ${diasTrabajados} días, el total ganado fue de $${totalGanado}.`;
    },
  },

  13: {
    enunciado: () => {
      return `
                <p><b>Problema 13:</b> Mientras a<=1500; contar hasta 1500 e imprimir los números divisibles por 4 y 5 y decir si son pares o impares. </p>
            `;
    },

    resolver: (output) => {
      // Lógica del problema 13
      // Aquí es donde declaramos las constantes y variables
      output.innerHTML += ` <br>Estos son los números divisibles entre 4 y 5:<br> `;
      for (let y = 1; y <= 1500; y++) {
        if (y % 4 == 0 || y % 5 == 0) {
          if (y % 2 == 0) {
            output.innerHTML += `El número ${y} es par <br>`;
          } else {
            output.innerHTML += `El número ${y} es impar <br>`;
          }
        }
      }
    },
  },

  14: {
    enunciado: () => {
      return `
                <p><b>Problema 14:</b> Elaborar un algoritmo, que tenga 10 números enteros. El programa debe sumar todos los números que sean múltiplos de 3. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 14
      // Aquí es donde declaramos las constantes y variables
      let suma, numero;
      suma = 0;
      for (let x = 1; x <= 10; x++) {
        numero = parseInt(prompt("Por favor ingrese un número entero"));
        if (numero % 3 == 0) {
          suma = suma + numero;
          output.innerHTML += ` <br>${numero}, `;
        }
      }
      output.innerHTML += `<br> La suma de los números múltiplos de tres es ${suma}`;
    },
  },
  15: {
    enunciado: () => {
      return `
                <p><b>Problema 15:</b> Mostrar las 30 primeras potencias de 3 y la suma de ellos.</p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 15
      // Aquí es donde declaramos las constantes y variables
      let suma, potencia;
      suma = 0;
      for (let x = 1; x <= 30; x++) {
        output.innerHTML += `<br> 3^${x}`;
        potencia = 3 ** x;
        suma = suma + potencia;
      }
      output.innerHTML += `<br> La suma de las 30 primeras potencias es ${suma}`;
    },
  },
  16: {
    enunciado: () => {
      return `
                <p><b>Problema 16:</b> Un programa con 5 alumnos cada uno con 5 notas, calcular el promedio de sus notas por alumnos y solo muestra los que ganaron. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 16
      // Aquí es donde declaramos las constantes y variables
      const nombre1 = "Pepe";
      let nota1, suma1, promedio1;

      output.innerHTML += `<br> Las notas de ${nombre1} son : `;
      suma1 = 0;
      for (x = 1; x <= 5; x++) {
        nota1 = Math.random() * (5 - 1) + 1;
        nota1 = parseFloat(nota1.toFixed(1));
        suma1 = suma1 + nota1;
        promedio1 = suma1 / 5;
        output.innerHTML += ` ${nota1} `;
      }
      output.innerHTML += `<br> El promedio de ${nombre1} es: ${promedio1.toFixed(
        1
      )}`;

      const nombre2 = "Paco";
      let nota2, suma2, promedio2;

      output.innerHTML += `<br> Las notas de ${nombre2} son : `;
      suma2 = 0;
      for (x = 1; x <= 5; x++) {
        nota2 = Math.random() * (5 - 1) + 1;
        nota2 = parseFloat(nota2.toFixed(1));
        suma2 = suma2 + nota2;
        promedio2 = suma2 / 5;
        output.innerHTML += ` ${nota2} `;
      }
      output.innerHTML += `<br> El promedio de ${nombre2} es: ${promedio2.toFixed(
        1
      )}`;

      const nombre3 = "Luis";
      let nota3, suma3, promedio3;

      output.innerHTML += `<br> Las notas de ${nombre3} son : `;
      suma3 = 0;
      for (x = 1; x <= 5; x++) {
        nota3 = Math.random() * (5 - 1) + 1;
        nota3 = parseFloat(nota3.toFixed(1));
        suma3 = suma3 + nota3;
        promedio3 = suma3 / 5;
        output.innerHTML += ` ${nota3} `;
      }
      output.innerHTML += `<br> El promedio de ${nombre3} es: ${promedio3.toFixed(
        1
      )}`;

      const nombre4 = "Pedro";
      let nota4, suma4, promedio4;

      output.innerHTML += `<br> Las notas de ${nombre4} son : `;
      suma4 = 0;
      for (x = 1; x <= 5; x++) {
        nota4 = Math.random() * (5 - 1) + 1;
        nota4 = parseFloat(nota4.toFixed(1));
        suma4 = suma4 + nota4;
        promedio4 = suma4 / 5;
        output.innerHTML += ` ${nota4} `;
      }
      output.innerHTML += `<br> El promedio de ${nombre4} es: ${promedio4.toFixed(
        1
      )}`;

      const nombre5 = "Sarah";
      let nota5, suma5, promedio5;

      output.innerHTML += `<br> Las notas de ${nombre5} son : `;
      suma5 = 0;
      for (x = 1; x <= 5; x++) {
        nota5 = Math.random() * (5 - 1) + 1;
        nota5 = parseFloat(nota5.toFixed(1));
        suma5 = suma5 + nota5;
        promedio5 = suma5 / 5;
        output.innerHTML += ` ${nota5} `;
      }
      output.innerHTML += `<br> El promedio de ${nombre5} es: ${promedio5.toFixed(
        1
      )}`;
      output.innerHTML += `<br> ----------------------------------------------`;

      if (promedio1 >= 3) {
        output.innerHTML += `<br> ${nombre1} pasaste el curso.`;
      }
      if (promedio2 >= 3) {
        output.innerHTML += `<br> ${nombre2} pasaste el curso.`;
      }
      if (promedio3 >= 3) {
        output.innerHTML += `<br> ${nombre3} pasaste el curso.`;
      }
      if (promedio4 >= 3) {
        output.innerHTML += `<br> ${nombre4} pasaste el curso.`;
      }
      if (promedio5 >= 3) {
        output.innerHTML += `<br> ${nombre5} pasaste el curso.`;
      }
      output.innerHTML += `<br> ----------------------------------------------`;
    },
  },
  17: {
    enunciado: () => {
      return `
                <p><b>Problema 17:</b> Diseñar un algoritmo, con el dividendo y el divisor y que luego me calcule el residuo y el cociente de dicha división. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 17
      // Aquí es donde declaramos las constantes y variables
      let dividendo, divisor, residuo, cociente;
      dividendo = parseInt(prompt("Por favor ingrese el numero a dividir"));
      divisor = parseInt(prompt("Por favor ingrese el numero que divide"));
      cociente = dividendo / divisor;
      residuo = dividendo % divisor;

      output.innerHTML += `<br> El dividendo de la operación es: ${dividendo}`;
      output.innerHTML += `<br> El divisor de la operación es: ${divisor}`;
      output.innerHTML += `<br> El cociente de la operación es: ${cociente.toFixed(
        2
      )}`;
      output.innerHTML += `<br> El residuo de la operación es: ${residuo}`;
    },
  },
  18: {
    enunciado: () => {
      return `
                <p><b>Problema 18:</b> Diseñar un algoritmo que intercambie los valores de dos variables numéricas. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 18
      // Aquí es donde declaramos las constantes y variables
      let valor1, valor2;
      valor1 = parseInt(
        prompt("Por favor ingrese un número entero, se asignara como valor 1")
      );
      valor2 = parseInt(
        prompt("Por favor ingrese otro número entero, se asignara como valor 2")
      );
      valor3 = valor2;
      valor4 = valor1;

      output.innerHTML += `<br> Inicialmente el valor 1 era ${valor1}.`;
      output.innerHTML += `<br> Inicialmente el valor 2 era ${valor2}.`;
      output.innerHTML += `<br> Ahora el valor 1 es ${valor3}.`;
      output.innerHTML += `<br> Y el valor 2 es ${valor4}.`;
    },
  },
  19: {
    enunciado: () => {
      return `
                <p><b>Problema 19:</b> Diseñar un algoritmo que me permita ingresar un valor inicial y luego un valor final, para luego calcular el valor central de los números. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 19
      // Aquí es donde declaramos las constantes y variables
      let valorInicial, valorCentral, valorFinal;

      valorInicial = parseInt(prompt("Ingrese el valor inicial"));
      valorFinal = parseInt(prompt("Ingrese el valor final"));
      valorCentral = (valorInicial + valorFinal) / 2;
      output.innerHTML += `<br> El valor inicial que ingresaste fue: ${valorInicial}`;
      output.innerHTML += `<br> El valor final que ingresaste fue: ${valorFinal}`;
      output.innerHTML += `<br> Entonces, el valor central es: ${valorCentral.toFixed(
        2
      )}`;
    },
  },
  20: {
    enunciado: () => {
      return `
                <p><b>Problema 20:</b> Se desea calcular independientemente la suma de los números pares e impares comprendidos entre 1 y 50.</p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 20
      // Aquí es donde declaramos las constantes y variables
      let sumaPares, sumaImpares;
      sumaPares = 0;
      sumaImpares = 0;
      for (let x = 1; x <= 50; x++) {
        if (x % 2 == 0) {
          sumaPares = sumaPares + x;
        } else {
          sumaImpares = sumaImpares + x;
        }
      }
      output.innerHTML += `<br>La suma de los números pares comprendidos entre 1 y 50 es: ${sumaPares}`;
      output.innerHTML += `<br> La suma de los números impares comprendidos entre 1 y 50 es: ${sumaImpares}`;
    },
  },
  21: {
    enunciado: () => {
      return `
                <p><b>Problema 21:</b> Determinar el promedio de una lista 20 de números positivos. </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 21
      // Aquí es donde declaramos las constantes y variables

      let numero, sumatoria, promedio;
      sumatoria = 0;
      output.innerHTML += `Esta es una lista de 20 números escogidos entre 1 y 100 <br>`;
      for (x = 1; x <= 20; x++) {
        numero = parseInt(Math.random() * (100 - 1) + 1);
        output.innerHTML += `<br> ${numero}<br> `;
        sumatoria = sumatoria + numero;
      }

      promedio = sumatoria / 20;

      output.innerHTML += `El resultado de la suma de los números es: ${sumatoria}, y su promedio es ${promedio.toFixed(
        2
      )}`;
    },
  },
  22: {
    enunciado: () => {
      return `
                <p><b>Problema 22:</b> Diseñar un algoritmo que calcule los 5 primeros números impares que preceden a un numero N </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 22
      // Aquí es donde declaramos las constantes y variables
      let n;

      n = parseInt(prompt("Ingrese un numero positivo"));
      output.innerHTML += `Los cinco primeros impares que preceden a ${n} son: <br>`;
      for (x = n - 10; x < n; x++) {
        if (x % 2 != 0) {
          output.innerHTML += `<br> ${x} <br>`;
        }
      }
    },
  },
  23: {
    enunciado: () => {
      return `
                <p><b>Problema 23:</b> Hacer un programa que muestre si los cincos primeros números impares son múltiples de tres arrancando de 10 </p>
            `;
    },
    resolver: (output) => {
      // Lógica del problema 23
      // Aquí es donde declaramos las constantes y variables

      for (x = 10; x <= 20; x++) {
        if (x % 2 != 0 && x % 3 == 0) {
          output.innerHTML += `<br> <b>El número ${x} es impar y también múltiplo de tres</b>`;
        }
        if (x % 2 != 0 && x % 3 != 0) {
          output.innerHTML += `<br> El número ${x} es impar pero no es múltiplo de tres`;
        }
      }
    },
  },
};
