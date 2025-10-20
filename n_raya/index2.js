let n =4
let filas=(n*2)+2
let tb= new Array(filas)
for (let i = 0; i < filas; i++) tb[i]=new Array(n)


function cargar() {
const opciones=document.getElementById("opciones")
for (let i = 3; i <= 10; i++) {
    const op=document.createElement("option")
    op.value=i.toString()
    op.text=i.toString()
    opciones.appendChild(op)
} 
opciones.addEventListener("change",()=>{cambio()})
}

function cambio() {
 n =parseInt(document.getElementById("opciones").value)
 filas=(n*2)+2
 tb= new Array(filas)

    for (let i = 0; i < filas; i++)tb[i]= new Array(n)
        let c=0

    for (let i = 0; i <n; i++) {
       for (let j = 0; j < n; j++) {
            tb[c][j]=(i*n)+(j+1)
            tb[c+n][j]=(j*n)+(i+1)
         
       }
       c++
    }
 c=(n*2)
    for (let i = 0; i < n; i++) {
         tb[c][i]=(i*n)+(i+1)//diagonal principal
        tb[c+1][i]=(i*n)+(n-i)//diagonal inversa
    }
    document.getElementById("marco").innerHTML=dime()
}


function dime() {
    let cadena="<table align='center' border=1>"
    for (let i = 0; i < tb.length; i++) {
       cadena+="<tr>"
       for (let j = 0; j < tb[i].length; j++) {
      cadena +="<td>"+tb[i][j]+"</td>";
        
       }
       cadena +="</tr>"
        
    }
    cadena +="</table>"
    return cadena
}

window.addEventListener("load",()=>{cargar})