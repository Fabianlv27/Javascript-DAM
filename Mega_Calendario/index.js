let cadena
let año
let mes
let dia
let semana

function Manejador_de_fechas(date) {
    console.log(date);
    año = date.getFullYear()
    mes = date.getMonth()
    dia = date.getDate()
    semana = date.getDay()
    semana= semana==0?7:semana
}

function Cargar() {
  const year=document.getElementById("fecha").value
   const date=new Date(year,0,1)
   Manejador_de_fechas(date)
   
  for (let i = 0; i <= 11; i++) {
    Calcular(year,i,1)
  }
    

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
    switch (parseInt(mes)) {
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

function Calcular(a,m,d) {

    const tabla = document.getElementById("calendario"+m.toString())
    
    console.log(a,m,d);
    const date=new Date(a,parseInt(m),d)
    console.log(date);
    Manejador_de_fechas(date)
    const dias = CalcularDias()
    console.log(dias);
    tabla.innerHTML=`<tr id="sem">
                <td>l</td>
                <td>m</td>
                <td>x</td>
                <td>j</td>
                <td>v</td>
                <td>s</td>
                <td>d</td>
            </tr>`
    //

    let espacios=0
    
    for (let i = 0; i < semana-1; i++) {

        let new_td = document.createElement("td")
        new_td.innerText = " "
        tabla.appendChild(new_td)
        espacios++
        
        if (i % 7 == 0 && i!=0) {

            let new_tr = document.createElement("tr")
            tabla.appendChild(new_tr)
        }
    }

    let fila = 0

    for (let i = dia; i <= dias; i++) {

        let new_td = document.createElement("td")
            new_td.innerText = i.toString()
            tabla.appendChild(new_td)

        if (i % ((dia+(7-semana))+(7*fila)) == 0) {

            let new_tr = document.createElement("tr")
            tabla.appendChild(new_tr)
            fila++
        }
        //agregar dia+(7-semana)
    }
}




window.onload = () => { Cargar(); }