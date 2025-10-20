const marco=document.getElementById("marco")

function cargar() {
const opciones=document.getElementById("opciones")
for (let i = 3; i <= 10; i++) {
    const op=document.createElement("option")
    op.value=i.toString()
    op.text=i.toString()
    opciones.appendChild(op)
} 
opciones.addEventListener("change",()=>{calcularSoluciones})
}

function crearMatriz(n) {
      let matriz=[]
    let fila=[]
    for (let i = 1; i <=n*n; i++) {
        fila.push(i)
        if (i%n==0) {
            matriz.push(fila)
            fila=[]
        }
    }
    console.log(matriz);
    return matriz
}



function calcularSoluciones() {
    const n= parseInt(document.getElementById("opciones").value) 
    let matriz=crearMatriz(n)
    let c=0
    let soluciones=[]
    for (let i = 0; i <matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            //rellenamos filas
            soluciones[i][j]=matriz[i][j]

        }
    }
  console.log(soluciones);

}



window.addEventListener("load",()=>{cargar();})
