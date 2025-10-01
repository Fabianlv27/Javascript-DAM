function cargar() {
    let años=document.getElementById("año")
    let Smes=document.getElementById("meses")
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (let i = 2000; i <=2025; i++) {
        let nuevo = document.createElement("option")
        nuevo.text=i
        nuevo.value=i
        años.appendChild(nuevo)
    }    
    
    for (let i =0; i <meses.length; i++) {
        let nuevo = document.createElement("option")
        nuevo.text=meses[i]
        nuevo.value=i+1
        Smes.appendChild(nuevo)
    }

}

function is_bisiesto() {
    const year=parseInt(document.getElementById("año").value) 
    if ((year%4==0 && year%100 !=0)|| year%400==0) {
        return true
    }
    return false
}

function CalcularDias() {
    const mes=parseInt(document.getElementById("meses").value) 
    console.log(mes);
    let dias
 switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 10:
    case 12:
        dias = "31";
        break;
    case 4:
    case 6:
    case 8:
    case 9:
    case 11:
        dias = "30";
        break;
    case 2:
        if (is_bisiesto()) {
            dias = "29";
        } else {
            dias = "28";
        }
        break;
    default:
        dias = "Mes inválido";
        break;
}

    document.getElementById("dias").innerHTML="Dias: "+ dias

}
    window.onload=()=>{cargar();}
