
/*function queDigitoEs(caracter){
    switch(caracter){
        case 'A':
            return 10;
        case 'B':
            return 11;

            
    }

    return valor
}

let base = 16;
let numeroBin = prompt('Ingresa un numero binario');

let numeroDecimal=0 ;

for(let i=0 ; i < numeroBin.length; i++){
    //console.log(i, numeroBin.charAt(numeroBin.length - i -1));
    valorDigito = queDigitoEs( numeroBin.charAt(numeroBin.length - i -1))
    numeroDecimal += valordigito * Math.pow(base, i);
}

console.log("El decimal es: " + numeroDecimal);

*/

let base = 16;
 

let numeroDecimal = parseInt(prompt('Ingresa un numero binario')) ;
let residuo;
let numeroBin="";
let binFinal="";

while( numeroDecimal > 0){
    residuo = numeroDecimal % base;
    numeroDecimal = Math.floor( numeroDecimal / base);
    numeroBin += ""+residuo
}

for(let i=0 ; i < numeroBin.length; i++){
    binFinal += numeroBin.charAt(numeroBin.length - i -1);
}

console.log(binFinal);
