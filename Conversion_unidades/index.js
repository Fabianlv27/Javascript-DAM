const unidades = ["metro","gramo","litro","metro cuadrado","metro cubico"]
const prefijos=["kilo","hecta","deca","","deci","centi","mili"]
let unidad_actual="m"
let exponente=1
//solo necesario para la version 1 de convertir

const factores=[1000,100,10,1,0.1,0.01,0.001]

const select_unidades=document.getElementById("unidades")
const select_medida1=document.getElementById("medida1")
const select_medida2=document.getElementById("medida2")
const valor1=document.getElementById("valor1")
const valor2=document.getElementById("valor2")

document.addEventListener("load",cargar_medidas())


function cargar_medidas() {
    const separado=select_unidades.value.split("_")

    unidad_actual=unidades[parseInt(separado[0]) ]
    exponente=parseInt(separado[1])

    console.log(unidad_actual);
    select_medida1.innerHTML=""
    select_medida2.innerHTML=""

    for (let i = 0; i < prefijos.length; i++) {
        const option=document.createElement("option")
        option.innerText=prefijos[i]+unidad_actual
        option.value=i.toString() 

       select_medida1.appendChild(option) 
       const option2=document.createElement("option")

       option2.innerHTML=option.innerHTML
        option2.value=i.toString()   
       select_medida2.appendChild(option2)
        
           
    }
    select_medida2.value="3"
    convertir_v2()
   
}

function convertir() {
    console.log(factores[parseInt(select_medida2.value)])

    const equivalencia=parseInt(valor1.value)*( Math.pow(factores[parseInt(select_medida1.value)],exponente) /Math.pow(factores[parseInt(select_medida2.value)],exponente) )

    console.log(equivalencia)
    valor2.value=equivalencia

}

function convertir_v2(){

    const equivalencia=Math.pow(10,(parseInt(select_medida2.value)-parseInt(select_medida1.value))*exponente) 

    console.log(equivalencia)
    valor2.value=parseInt(valor1.value)*equivalencia
}

select_unidades.addEventListener("change",cargar_medidas)
valor1.addEventListener("change",convertir_v2)
select_medida1.addEventListener("change",convertir_v2)
select_medida2.addEventListener("change",convertir_v2)