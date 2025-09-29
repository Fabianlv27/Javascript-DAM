
function conversiones(quien,grado) {
    const Egc=document.getElementById("gc")
    const Egf=document.getElementById("gf")
    const Egk=document.getElementById("gk")

    var vgc=0,
    vgf=0,
    vgk=0


    switch (quien) {
        case "gc":
            vgc=parseFloat(grado.value)
            vgf=vgc+32
            vgk=vgc+273.15
            break;

        case "gf":
            vgc=((parseFloat(grado.value)/5)*9)+32
            vgf=parseFloat(grado.value)
            vgk=((5*(parseFloat(grado.value) - 32))/9)+273.15
            break;
        case "gk":
            vgc=parseFloat(grado.value) + 273.15
            vgf=((9*(parseFloat(grado.value)-273.15))/5)+32
            vgk=parseFloat(grado.value)
            break;

        default:
            break;
    }

    Egc.value=redondear(vgc,2) 
    Egf.value=redondear(vgf,2) 
    Egk.value=redondear(vgk,2) 
}


function cambio(origen, quien,tipo) {
    var valor

    if (tipo=="B") {
        valor=origen.innerHTML
    }else{valor=origen.value}

    var grado = document.getElementById(quien)
    grado.value = parseFloat(grado.value) + parseInt(valor)

    conversiones(quien,grado)
}


function Incremento(quien) {
    let vid=quien.id
    conversiones(vid,quien) // "quien" ahora es un elemento HTML al cual le extraemos el id
    // a diferencia de cuando usamos los botones era un string que contenia el id directamente
}

function redondear(numero,decimales){
    var n=Math.pow(10,decimales);
    var m=Math.round(n*numero)
    return m/n
}
//poner caja de texto , un boton (+5) cada vez que demos click que sume ese valor

//añadir un select un conjunto de opciones que tengan 10,5,0,-5,-10 ,incrementar segun el valor

//en un select poner la operacion a realizar +,-,*,/ , then otra caja de texto,
//que contenga otro numero y debajo poner una caja de texto no editable que va a contener el resultado de la operacion a realizar