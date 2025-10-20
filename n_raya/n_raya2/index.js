window.addEventListener("load", () => { cargar() })
var marco = document.getElementById("marco")
let PlayerDiv=document.getElementById("playerDiv")
let player1 = []
let player2 = []
let turno = true // true=turno de player1
let tb
let fin=false

function cargar() {
    const n = parseInt(prompt("Ingrese de que tamaño sera"))
    let matriz = GenerarMatriz(n)
    GenerarElementos(matriz, n)
    GenerarSoluciones(n)
}
document.getElementById("btnCargar").addEventListener("click", cargar);

function GenerarMatriz(n) {
    let matriz = []
    let fila = []
    for (let i = 1; i <= n * n; i++) {
        fila.push(i)
        if (i % n == 0) {
            matriz.push(fila)
            fila = []
        }
    }
    console.log(matriz);
    return matriz
}

function GenerarSoluciones(n) {
    const filas = (n * 2) + 2
    tb = new Array(filas)

    for (let i = 0; i < filas; i++)tb[i] = new Array(n)
    let c = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            tb[c][j] = (i * n) + (j + 1)
            tb[c + n][j] = (j * n) + (i + 1)

        }
        c++
    }
    c = (n * 2)
    for (let i = 0; i < n; i++) {
        tb[c][i] = (i * n) + (i + 1)//diagonal principal
        tb[c + 1][i] = (i * n) + (n - i)//diagonal inversa
    }
    console.log(tb);

}

function Comprobar() {
    //Recorrer cada array del array de soluciones y comprobar si este se encuentra dentro del array del jugador

        if (turno) {

           if (tb.some(sub=>sub.every(e=>player1.includes(e)))) {
            alert("jugador 1 ha ganado")
            fin=true

        } 
        }else{
              if (tb.some(sub=>sub.every(e=>player2.includes(e)))) {
            alert("jugador 2 ha ganado")
            fin=true
        } 
        }
     
    
}

function Manejador_Imagenes(e) {
    if (turno) {
        player1.push(parseInt(e.id))
        e.src="./circulo.png"
        PlayerDiv.innerText="Turno del jugador 2"

    } else {
        player2.push(parseInt(e.id))
        e.src="./x.png"
        PlayerDiv.innerText="Turno del jugador 1"
    }
    console.log("se ha seleccionado el: "+e.id);

    Comprobar()

 turno=!turno
}

function GenerarElementos(matriz, n) {
    let cadena = "<table align='center' border=1>"
    for (let i = 0; i < matriz.length; i++) {
        cadena += "<tr>"
        for (let j = 0; j < matriz[i].length; j++) {
            const id = ((n * i) + (j + 1)).toString()
            cadena += "<td><img id=" + id + " src='./logo.png' class='cards'/></td>"

        }
        cadena += "</tr>"

    }
    cadena += "</table>"
    marco.innerHTML = cadena

    const cartas= document.getElementsByClassName("cards")
    console.log(cartas);
    for (let i = 0; i < cartas.length; i++) { 
            cartas[i].addEventListener("click",()=>Manejador_Imagenes(cartas[i]))
    }

}


function dime() {
    let cadena = "<table align='center' border=1>"
    for (let i = 0; i < tb.length; i++) {
        cadena += "<tr>"
        for (let j = 0; j < tb[i].length; j++) {
            cadena += "<td>" + tb[i][j] + "</td>";

        }
        cadena += "</tr>"

    }
    cadena += "</table>"
    return cadena
}