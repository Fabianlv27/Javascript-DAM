let cadena
let año
let mes
let dia

function Cargar() {
    let hoy = new Date()
     año = hoy.getFullYear()
     mes = hoy.getMonth()
     dia = hoy.getDate()

    cadena = año + "-" + (mes < 10 ? "0" + mes : mes) + "-" + (dia < 10 ? "0" + dia : dia)
    console.log(cadena);
    document.getElementById("fecha").value = cadena
    Calcular()

}
function is_bisiesto(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true
    }
    return false
}

function CalcularDias() {
    let dias
    console.log(mes);
    switch (parseInt(mes) ) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 10:
        case 12:
            dias = 31;
            break;
        case 4:
        case 6:
        case 8:
        case 9:
        case 11:
            dias = 30;
            break;
        case 2:
            if (is_bisiesto(parseInt(año))) {
                dias = 29;
            } else {
                dias = 28;
            }
            break;
        default:
            dias = "Mes inválido";
            break;
    }
    return dias
}


function Calcular() {
    const tabla = document.getElementById("calendario")
    const dias= CalcularDias()
    console.log(dias);

    for (let i = 1; i <= dias; i++) {

        if (i%7==0) {

            let new_tr=document.createElement("tr")
            tabla.appendChild(new_tr)
        }
      let new_td= document.createElement("td")
      if (i>=dia) {
        new_td.innerText=i.toString()
      }else{
        new_td.innerText=" "

      }
      if(i%7==0){
        tabla.appendChild(new_td)
      }
    }
}




window.onload = () => { Cargar(); }

