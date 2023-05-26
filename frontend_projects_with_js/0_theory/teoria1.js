console.log("Hola Mundo!");
var variable="hola";
console.log(variable);
const constante=5;
console.log(constante);

// probando variables
var numero1=5;
var numero2=10;
var resultado=numero1+numero2;
console.log("la respuesta es: " + resultado);

var otraRespuesta=numero1*numero2;
console.log("la respuesta es: " + otraRespuesta);

// potencia
var potencia=Math.pow(numero1,numero2);
var potenciaConDivicion=Math.pow(numero1,numero2)/numero1;
console.log("la potencia es: " + potencia);
console.log("la potencia con divicion es: " + potenciaConDivicion);

// probando incremento y decremento
var numero3=5;
var numero4=10;
var resultadoIncremento=++numero3;
var resultadoDecremento=--numero4;
console.log("el resultado del incremento es: " + resultadoIncremento);
console.log("el resultado del decremento es: " + resultadoDecremento);

// probando operadores relacionales
var numero5=5;
var numero6=10;
var resultadoMayor=numero5>numero6;
var resultadoMenor=numero5<numero6;
var resultadoMayorIgual=numero5>=numero6;
var resultadoMenorIgual=numero5<=numero6;
var resultadoIgual=numero5==numero6;
var resultadoDiferente=numero5!=numero6;
console.log("el resultado de mayor es: " + resultadoMayor);
console.log("el resultado de menor es: " + resultadoMenor);
console.log("el resultado de mayor igual es: " + resultadoMayorIgual);
console.log("el resultado de menor igual es: " + resultadoMenorIgual);
console.log("el resultado de igual es: " + resultadoIgual);
console.log("el resultado de diferente es: " + resultadoDiferente);

// probando el estrictamente igual
var numero7=5;
var numero8="5";
var resultadoEstrictamenteIgual=numero7===numero8;
console.log("el resultado de estrictamente igual es: " + resultadoEstrictamenteIgual);

// probando operadores logicos
var numero9=5;
var numero10=10;
var resultadoAnd=numero9<numero10 && numero9>numero10;
var resultadoOr=numero9<numero10 || numero9>numero10;
var resultadoNot=!(numero9<numero10);
console.log("el resultado de and es: " + resultadoAnd);
console.log("el resultado de or es: " + resultadoOr);
console.log("el resultado de not es: " + resultadoNot);

var miPrueba=(numero9<numero10 && numero9==5);
console.log("el resultado de mi prueba es: " + miPrueba);

// probando operadores de asignacion
var a = 3;
a += 5;
console.log(a);

// probando condicional if
var numero11=54;
var numero12=10;
if(numero11<numero12){
    console.log("el numero 11 es menor que el numero 12");
}
else if(numero11==numero12){
    console.log("el numero 11 es igual que el numero 12");
}
else{
    console.log("el numero 11 es mayor que el numero 12");
}
// probando bucle while
var numero13=0;
while(numero13<10){
    console.log(numero13);
    numero13++;
}

var i=0;
while(i<10){
    console.log(i);
    i++;
}

// probando bucle for
//hay que inicializar el contador con una varialbe
for(var i=0;i<10;i++){
    console.log(i + " hola");
}

for(var j=0;j<15;j++){
    console.log(j);
}

// probando bucle for con array
var miArray=["hola","mundo","como","estas"];
for(var i=0;i<miArray.length;i++){
    console.log(miArray[i]);
}

// probando bucle for con un array de frutas
var frutas=["manzana","pera","platano","uva","sandia","melon"];
for(var i=0;i<frutas.length;i++){
    console.log(frutas[i]);
}

// probando funciones
var resultado = "cafecito";
function cafetera(ingrediente1, ingrediente2){
    if (ingrediente1=="cafe" && ingrediente2=="agua"){
        return resultado;
    }
}

var tasa = cafetera("cafe","agua");
console.log(tasa);