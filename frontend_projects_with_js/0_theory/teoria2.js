const txtn1= document.getElementById("n1")
const txtn2= document.getElementById("n2")
const resultado= document.getElementById("resultado")
const btnCalcular= document.getElementById("calcular")

btnCalcular.addEventListener("click",calcular)

function calcular(){
    const op1=parseFloat(txtn1.value)
    const op2=parseFloat(txtn2.value)
    let resp=op1+op2
    resultado.innerText=resp
    resultado.style.color="red"
}

const btnEjecutar= document.getElementById("ejecuta")
const resultado2= document.getElementById("resultado2")
//array de frutas
let frutas=["manzana","pera","platano","naranja","sandia","melon","kiwi","fresa","cereza","uva"]
btnEjecutar.addEventListener("click",calcularArray)

function calcularArray(){
    let resp2=""
    for(let i=0;i<frutas.length;i++){
        resp2=resp2+frutas[i]+" "
    }
    resultado2.innerText=resp2 + " " + frutas.length
    resultado2.style.color="blue"
}

//probar funcion con for each
const btnEjecutar2= document.getElementById("ejecuta2")
const resultado3= document.getElementById("resultado3")
btnEjecutar2.addEventListener("click",calcularArray2)

function calcularArray2(){
    let resp3=""
    frutas.forEach(function(fruta){
        resp3=resp3+fruta+" "
    })
    resultado3.innerText=resp3 + " " + frutas.length
    resultado3.style.color="green"
}