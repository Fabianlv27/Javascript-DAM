const tabla=document.getElementById("tabla")
const contador=document.getElementById("contador")
const numero_de_cartas=14
let matriz
let e1
let e2

function cargar() {
    matriz=new Array(numero_de_cartas).fill("x")
    e1="x"
    e2="x"
    tabla.innerHTML=''
    console.log(Math.sqrt(numero_de_cartas,2));
    const n_columnas_filas=Math.floor(Math.sqrt(numero_de_cartas,2)) 
    //redondear la raiz del numero para abajo, cambiar el for

    for (let i = 0; i <n_columnas_filas; i++) {
        const tr=document.createElement("tr")
        let td
       // matriz[i-1]=[]
        for (let j = 0; j <n_columnas_filas ; j++) {
            td=document.createElement("td")
            const imagen=document.createElement("img")
            imagen.src="./logo.png"
            imagen.id=(i*n_columnas_filas+j)
            td.appendChild(imagen)
            tr.appendChild(td)  
            imagen.addEventListener("dblclick",()=>{click(imagen)})        
          //  matriz[i-1].push("x")
        }
        
        tabla.appendChild(tr)
    }
    console.log(matriz);
    cargar_numeros()
}



function alea(min,max){
   return Math.floor(Math.random()*(max-min+1))+min
}

function cargar_numeros() {

    for (let i = 1; i <= (numero_de_cartas/2); i++) {

        for (let j = 0; j < 2; j++) {

        let x
        let keep=true

        while (keep) {
            x=alea(0,numero_de_cartas-1)
            if (matriz[x]=="x") {
                matriz[x]=i.toString()
                keep=false
            }
        }  
            
        }
       
        
   
    }
    console.log(matriz);
}

function comprobar() {

    const imagen1=document.getElementById(e1)
    const imagen2=document.getElementById(e2)

    if (matriz[parseInt(e1)]!=matriz[parseInt(e2)]) {
        imagen1.src="./logo.png"
        imagen2.src="./logo.png"
    }else{
        contador.innerText= (parseInt(contador.innerText)+1).toString()
        imagen1.style.pointerEvents="none"
        imagen2.style.pointerEvents="none"
        if (contador.innerText==(numero_de_cartas/2).toString()) {
            alert("Has Ganado 🥳🥳")
        }
    }
    e1="x"
    e2="x"
    tabla.style.pointerEvents="auto"
    tabla.style.cursor="pointer"
}

function click(elemento) {
elemento.src="./imagenes/"+matriz[parseInt(elemento.id)]+".png"

    if (e1 =="x") {
        e1=elemento.id
    } 
    
    else if(e2=="x"){
        e2=elemento.id    
        tabla.style.pointerEvents="none"
        tabla.style.cursor="progress"
        setTimeout(comprobar,500)
       
    }
    

}





document.addEventListener("load",cargar())