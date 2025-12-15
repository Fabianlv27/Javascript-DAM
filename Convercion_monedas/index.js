const monedas=["DOLAR","EURO","YEN","LIBRA"]
const conversion=[1,0.86,7.13,0.75]
const ContEquivalencias=document.getElementById("Equivalencias")
const tabla_monedas=document.getElementById("tabla_monedas")
const inicial_html=tabla_monedas.innerHTML

function Cambio(j) {
    console.log("object");
    conversion[j]=parseFloat(document.getElementById("M"+j).value) 
    tabla_monedas.innerHTML=inicial_html
    cargar()
}

function cargar() {

let cadena=''   

   monedas.forEach((m,i) => {
console.log(i);
    cadena+='<tr> <td> '+m+'</td>'
   

    for (let j = 0; j < 4; j++) {
         cadena+='<td>'
        cadena+="<input type='number' "+(i==0?"id='M"+j+"' ":" ") +(i==0?" onchange='Cambio("+j+")' ":" ")+((i!=0 || i==j) ?"disabled ":" ")+(i==j ?"class='amarillo'":"")+"value='"+(conversion[j]/conversion[i]).toFixed(6)+"' >"
         cadena+='</td>'
    }
    cadena+='</tr>'
    console.log(tabla_monedas);
   
}); 
 tabla_monedas.innerHTML+=cadena
    llenarSelect()
}


function llenarSelect() {
    const selects=document.getElementsByClassName("cantidad")
console.log(Array.from(selects));
    Array.from(selects).forEach((e,i) => {
        e.addEventListener('change',()=>sumar(e.value,"E"+i))
        for (let i = -2; i <=2 ; i++) {
            const option=document.createElement("option")
            option.value=i
            option.text=i
            e.appendChild(option)
        }
    });
    
}

function sumar(value,id){
    const elemento=document.getElementById(id)
    elemento.value=parseFloat(elemento.value)+ parseInt(value)
    Cequivalencia(elemento)
}

function Cequivalencia(elemento) {
    
    valor=parseFloat(elemento.value)
    id_origen=parseInt(elemento.id[1]) ;
console.log(elemento.value,id_origen);

    const moneditas=ContEquivalencias.getElementsByTagName("input")

    for (let i = 0; i < moneditas.length; i++) {
         moneditas[i].value=(conversion[i]/conversion[id_origen])*valor.toFixed(6)
         moneditas[i].className=""

    }
    elemento.className="celeste"
    console.log(moneditas);

}




window.addEventListener("load",()=>{cargar()})