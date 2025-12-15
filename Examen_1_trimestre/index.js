const resultado = document.getElementById("resultado")
const temp = document.getElementById("temp")
const radios = document.getElementsByName("opt")
const medida=document.getElementById("medida")

const nombres={"FC":"Fahrenheit_Celcius","CK":"Celcius_Kelvin","FK":"Fahrenheit_Kelvin","CF":"Celius_Fahrenheit","KC":"Kelvin_Celcius","KF":"Kelvin_Fahrenheit"}

let valor = temp.value
let Temps = "FC"
let converciones

function cargar() {
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("click", () => { Temps = radios[i].id; Convertir() })
    }
    Convertir()
}
function Convertir() {
    valor=temp.value
    converciones = { "FC": (valor - 32)/1.8, "CK": valor + 273.15, "FK": (5 / 9 * (valor - 32)) + 273.15,"CF":(valor*1.8 )+32,"KC":valor-273.15,"KF":1.8*(valor-273.15)+12}


    let convercion = converciones[Temps]
    
    t1=nombres[Temps].split("_")[0]; t2=nombres[Temps].split("_")[1]

    resultado.innerText= valor+" "+t1+" = "+convercion.toString()+" "+t2 
    medida.innerText=t1
    
}
window.addEventListener("load", cargar())
//0,0186567164179104