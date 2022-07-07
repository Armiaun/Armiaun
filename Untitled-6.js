<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pratica 6 </title>
</head>
<body>
    <script>
        
        /*  video 37 y su paso  paso*/
        //  1-  Programa una función que obtenga un número aleatorio 501 y 600
        const aleatorio = () => console.info(Math.round((Math.random()*100)+500));
        aleatorio();
       // 2- Programa  una función que reciba  un número y evalúe si es capicúa o no(que se lee igual en un sentido que en otro),pe.Funcion(2002) devolverá true*/
        
        const capicua = (numero = 0) =>{
            if(!numero) return console.warn("No ingresaste un número");

            if(typeof numero !=="number")return console.error(`El valor "${numero}" ingresado, No es un 
            numero`);

            numero = numero.toString();
            let alReves = numero.split("").reverse().join("");

            return(numero === alReves)
            ? console.info(`Sí es capícua, Número original ${numero}, Número al revés ${alReves}`)
            : console.info(`No es capícua, Número original ${numero}, Número al revés ${alReves}`)
        }

        capicua();
        capicua("10");
        capicua({});
        capicua(2000);
        capicua(2002);
        capicua(18.99);
        capicua(212.212);
        
        // 3 Programa una función que calcule  el factorial de un número (El factorial de un entero positivo,se define como el producto de todos los número enteros positivos desde 1 hasta n),pe.miFuncion(5) devolverá 120
        const factorial = (numero = undefined) => {
            if (numero === undefined)return console.warn ("No ingresaste un número");
            
            if (typeof numero!=="number")return console.error(`El valor "${numero}"ingresado, No es un número`);

            if (numero === 0) return console.error("El número no puede ser 0");

            if (Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

            let factorial = 1;

            for(let i = numero; i > 1; i--){
            factorial *= i;
            }

            return console.info(`El factorial de ${numero} es ${factorial}`);
        }
        factorial();
        factorial("5");
        factorial([1,2,3]);
        factorial(0);
        factorial(-5);
        factorial(5);
        factorial(8);
        /* Actividades video 38*/
   
        // 1- Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/
        const numeroPrimo = (numero = undefined) => {
            if (numero === undefined) return console.warn("No ingresaste un número");
            
            if (typeof numero!=="number")return console.error(`El valor "${numero}" ingresado, No es un número`);

            if (numero === 0) return console.error("El número no puede ser 0");

            if (numero === 1) return console.error("El número no puede ser 1");

            if (Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

            let divisible = false;

            for(let i = 2; i < numero; i++){
                if ((numero % i) === 0){
                    divisible = true;
                    break;
                }
            }

            return (divisible)
            ? console.log(`El número ${numero}, No es primo`)
            : console.log(`El número ${numero}, Sí es primo`);
        }
        numeroPrimo();
        numeroPrimo("320");
        numeroPrimo(true);
        numeroPrimo(0);
        numeroPrimo(1);
        numeroPrimo(-13);
        numeroPrimo(13);
        numeroPrimo(200);
        //2- Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/
        const numeroParimpar = (numero = undefined) => {
            if (numero === undefined) return console.warn("No ingresaste un número");
            
            if (typeof numero!=="number")return console.error(`El valor "${numero}" ingresado, No es un número`);

            return ((numero % 2) === 0)
            ? console.log(`El número ${numero}, es Par`)
            : console.log(`El número ${numero}, es Impar`);
        }
        numeroParimpar();
        numeroParimpar("23");
        numeroParimpar(-398);
        numeroParimpar(19);

        // 3- Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F*/

        const convertirGrados = (grados = undefined, unidad = undefined) => {
            if (grados === undefined) return console.warn("No ingresaste grados a convertir");
            
            if (typeof grados!=="number")return console.error(`El valor "${grados}" ingresado, No es un número`);

            if (unidad === undefined)return console.warn("No ingresaste el tipo de grado a convertir");

            if (typeof unidad !== "string")return console.error(`El valor "${grados}" ingresado, No es una cadena de texto`);

            if(unidad.length !== 1||!/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

            if (unidad === "C"){
                return console.info(`${grados}°C = ${Math.round((grados*(9/5))+32)}°C`);
            }
              else if (unidad === "F"){
                return console.info(`${grados}°F = ${Math.round(((grados-32)*(5/9)))}°C`); 
              }
                else{
                    return console.erro("El tipo de grados a convertir No es válido");
                }
       }
       convertirGrados();
       convertirGrados("2");
       convertirGrados(2);
       convertirGrados(2,true);
       convertirGrados(2,"Hola");
       convertirGrados(2,"E");
       convertirGrados(0,"C");
       convertirGrados(100,"C");
        /* Actividades del video 39 Js*/
       //1 Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10*/
       const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
            if (numero === undefined) return console.warn("No ingresaste el número a convertir");
            
            if (typeof numero!=="number")return console.error(`El valor "${numero}" ingresado, No es un número`);

            if (base === undefined)return console.warn("No ingresaste la base a convertir");

            if (typeof base !== "number")return console.error(`El valor "${base}" ingresado, No es un número`);

            if(base === 2){
                return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
            }
              else if (base === 10){
                return console.info(`${numero} base ${base} = ${numero.toString((base))} base 2`);
              }
                else{
                    return console.error("El tipo de base a convertir No es válido");
                }
       }
       convertirBinarioDecimal();
       convertirBinarioDecimal("2");
       convertirBinarioDecimal(100);
       convertirBinarioDecimal(100, "2");
       convertirBinarioDecimal(100,2);
       convertirBinarioDecimal(1110010,2);
       convertirBinarioDecimal(4,10);
       convertirBinarioDecimal(114,10);
       convertirBinarioDecimal(114,3);
       //2-  Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/
        const aplicarDescuento = (monto = undefined, descuento = 0) => {
            if (monto === undefined) return console.warn("No ingresaste el monto");
            
            if (typeof monto!=="number")return console.error(`El valor "${monto}" ingresado, No es un número`);

            if (monto === 0) return console.error("El monto no puede ser 0");

            if (Math.sign(monto) === -1) return console.error("El monto no puede ser negativo");

            if (typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado, No es un número`);

            if (Math.sign(descuento)===-1)return console.error("El descuento no puede ser negativo");

            return console.info(`${monto}-${descuento}% = ${monto - ((monto*descuento)/100)} `)

        }
        aplicarDescuento();
        aplicarDescuento("200");
        aplicarDescuento(0);
        aplicarDescuento(-1000);
        aplicarDescuento(1000,"20");
        aplicarDescuento(1000,-20);
        aplicarDescuento(1000);
        //3 Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020)*/
         const calcularAnios = (fecha = undefined) => {
             if (fecha === undefined) return console.warn ("No ingresaste la fecha");

             if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida");


             let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
             aniosEnMS = 1000 * 60 * 60 * 24 *365
             aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

             return(Math.sign(aniosHumanos)===-1)
             ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}. `)
             : (Math.sign(aniosHumanos)=== 1)
                ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
                : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
         }
         calcularAnios();
         calcularAnios({});   
         calcularAnios(false);
         calcularAnios(new Date());
         calcularAnios(new Date(1984, 4, 23));
         calcularAnios(new Date(1884, 4, 23));
         calcularAnios(new Date(2084, 4, 23));

      

    </script>
</body>
</html>