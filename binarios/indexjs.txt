//que siempre retorne 8 digitos

function Calcular() {
    let number=parseInt(document.getElementById("num").value) 
    const base=parseInt(document.getElementById("bases").value) 
    const cadenaHexadecimal="0123456789ABCDEF"

    let cociente=base
    let resultado=""

    while (cociente>=base) {

        cociente=parseInt(number/base) 
        console.log(cociente);
        resultado+=cadenaHexadecimal[number%base]
        number=cociente
    }
  
//pone el resultado al revez  

    resultado=cadenaHexadecimal[cociente]+resultado.split("").reverse().join("")

    document.getElementById("resultado").innerHTML=resultado


}
//hacer tabla de multiplicar de 1 al 10
//las dos cajas sean select