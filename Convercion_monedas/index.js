const monedas=["DOLAR","EURO","YEN","LIBRA"]
const conversion=[1,0.86,7.13,0.75]

const tabla_monedas=document.getElementById("tabla_monedas")

function cargar() {
let cadena=''   

   monedas.forEach((m,i) => {
console.log(i);
    cadena+='<tr> <td> '+m+'</td>'
   

    for (let j = 0; j < 4; j++) {
         cadena+='<td>'
        cadena+="<input type='number' "+((i!=0 || i==j) ?"disabled ":" ")+(i==j ?"class='amarillo'":"")+"value='"+(conversion[j]/conversion[i]).toFixed(6)+"' >"
         cadena+='</td>'
    }
    cadena+='</tr>'
    console.log(tabla_monedas);
   
}); 
 tabla_monedas.innerHTML+=cadena
}

window.addEventListener("load",()=>{cargar()})