<! DOCTYPE html>
<html lang="es">
<cabeza>
</cabeza>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <título>Calculadora </title>
    <cuerpo>
    <center><h2><p style="color:#42ad2c"; > Calculadora básica <consulta> Arturo Hernández Sánchez</p></h2></center>
    <acción de formulario ="">
        <borde de tabla="4" align="center">
            <Tr>
                <Td>
                    Ingrese el número 1:
                    < input type = "number" name = "art1" id = "art1">
                </Td>
            </Tr>
            <Tr>
                <Td>
                    Ingrese el número 2:
                    <input type = "number" name = "art2" id = "art2">
                </Td>
            </Tr>
            <Tr>
                
                <Td>
                    <center>¿Que tipo de operacion realizaras?: </center>
                    <Br>
                    1.Suma
                    <Br>
                    2.Resta
                    <Br>
                    3.Multiplicación
                    <Br>
                    4.División
                    <tipo de entrada = nombre "número" = "art3" id = "art3">
                </Td>
            </Tr>
            <Tr>
                <Td>
                    < input type = "button" value ="Calcular" onclick =Calcular();>
                </Td>
            </Tr>
        </mesa>
    </forma>
   
    <Guión>
        

        cálculo de funciones (e1, tv, e2 ) 
        {
            let resil = null;
            interruptor (tv)
            {
                caso 1: retorno resil = e1+e2;
                caso 2:return resil = e1-e2;
                caso 3:return resil = e1*e2;
                caso 4:return resil = e1/e2;
            }
        }
        función Calcular()
        {
            sea a = parseInt(document. getElementById("art1"). valor);
            let b = parseInt(document. getElementById("art2"). valor);
            let c = parseInt(document. getElementById("art3"). valor);
            sea m = cálculo(a,c,b);
            return  alert("El valor es: "+m);

        
        }
      

    </Guión>
    <centro><h3>Formula Cuadrática</h3></centro>
    <acción de formulario ="">
        <borde de tabla="2" align="center">
            <Tr>
                <Td>
                    Ingrese el valor a:
                    <tipo de entrada  = nombre "número" = "a1" id = "a1">
                </Td>
            </Tr>
            <Tr>
                <Td>
                    Ingrese el valor b:
                    <tipo de entrada = nombre "número" = "a2" id = "a2">
                </Td>
            </Tr>
            <Tr>
                <Td>
                    Ingrese el valor c:
                    <tipo de entrada = nombre "número" = "a3" id = "a3">
                </Td>
            </Tr>
            <Tr>
                <Td>
                    <input type = "button" value ="Calcular" onclick ="Cuadratica_Cal();">
                </Td>
            </Tr>
        </mesa>
    </forma>
    <Guión>
        //
    Cuadratica_Cal de funciones() 
    {
        sea a = parseInt(document. getElementById("a1"). valor);
        let b = parseInt(document. getElementById("a2"). valor);
        let c = parseInt(document. getElementById("a3"). valor);
        sea parte1 = (-1)*b;
        sea parte2 = Matemáticas. pow(b,2)-(4*a*c);
        sea parte3 = 2*a;
        if (parte2 > 0) {
            sea x1 = (parte1 - Matemáticas. sqrt(parte2))/parte3;
            sea x2 = (parte1 + Matemáticas. sqrt(parte2))/parte3;
            alert("Los  valores de x son: "+ parseFloat(x1) + " y " +parseFloat(x2));
        } más {
            sea x3 = parte1/parte3;
            alert("El valor de x es: "+ parseFloat(x3));
        }
    }
    </Guión>


    
</cuerpo>
</HTML> 