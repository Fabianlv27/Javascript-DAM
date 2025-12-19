const solucion_div = document.getElementById("solucion")
const intentos_div = document.getElementById("intentos")
const pistas_div = document.getElementById("pistas")
const colores_div = document.getElementById("colores")

const colors = ["g", "v", "r", "y", "c", "b"]
let combinacion_secreta = []
const intentos = 8
const combinaciones_totales = 4


function alea(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function Generar_combinacion_secreta() {
    combinacion_secreta = []
    for (let i = 0; i < combinaciones_totales.length; i++) {
        combinacion_secreta.push(colors[alea(0, colors.length - 1)])
    }
    console.log(combinacion_secreta);
}

function cargar() {
    for (let i = 0; i < colors.length; i++) {
        const color_div = document.createElement("div")
        color_div.classList.add("color_div")
        color_div.classList.add(colors[i])
      //  color_div.addEventListener("click", añadir_color(i))
        colores_div.appendChild(color_div)
    }
    const borrar_boton = document.createElement("button")
    borrar_boton.textContent="Borrar"
  //  borrar_boton.addEventListener("click", borrar)
  colores_div.appendChild(borrar_boton)
    Generar_combinacion_secreta()
    Cargar_intentos_div()
    Cargar_pistas_div()
}



function Cargar_intentos_div() {

    for (let j = 0; j < intentos; j++) {
        const intento_div=document.createElement("div")
        intento_div.classList.add("intento_div")

        for (let i = 0; i < combinaciones_totales; i++) {
            const intento_solo = document.createElement("div")
            intento_solo.classList.add("intento_solo_div")
            intento_solo.id =j+"_"+i
            intento_div.appendChild(intento_solo)
        }
        intentos_div.appendChild(intento_div)
    }

}

function Cargar_pistas_div() {
    for (let i = 0; i < intentos; i++) {
        const pista_div=document.createElement("div")
        pista_div.classList.add("pista_div")
        for (let j = 0; j < combinaciones_totales; j++) {
            const pista_solo=document.createElement("div")
            pista_solo.classList.add("pista_solo_div")
            pista_div.appendChild(pista_solo)
            
        }
        pistas_div.appendChild(pista_div)
    }
}

