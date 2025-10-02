const signos = [
    { nombre: "aries", inicio: "03-21", fin: "04-19" },
    { nombre: "tauro", inicio: "04-20", fin: "05-20" },
    { nombre: "geminis", inicio: "05-21", fin: "06-20" },
    { nombre: "cancer", inicio: "06-21", fin: "07-22" },
    { nombre: "leo", inicio: "07-23", fin: "08-22" },
    { nombre: "virgo", inicio: "08-23", fin: "09-22" },
    { nombre: "libra", inicio: "09-23", fin: "10-22" },
    { nombre: "escorpio", inicio: "10-23", fin: "11-21" },
    { nombre: "sagitario", inicio: "11-22", fin: "12-21" },
    { nombre: "capricornio", inicio: "12-22", fin: "01-19" },
    { nombre: "acuario", inicio: "01-20", fin: "02-18" },
    { nombre: "piscis", inicio: "02-19", fin: "03-20" }
];

function Cargar() {
    let hoy=new Date()
    let año=hoy.getFullYear()
    let mes=hoy.getMonth()+1
    let dia=hoy.getDate()

    let cadena=año+"-"+(mes<10?"0"+mes:mes)+"-"+(dia<10?"0"+dia:dia)
    console.log(cadena);
    document.getElementById("fecha").value=cadena
    Cambio()

}

function Cambio() {
    const tZodiaco = document.getElementById("tZodiaco")
    const iZodiaco = document.getElementById("iZodiaco")
    const fecha = (document.getElementById("fecha").value).toString()
    console.log(fecha);

    for (const sg of signos) {
        console.log(sg.nombre);
        console.log(sg.inicio.split("-")[0] == fecha.split("-")[1]);
        console.log( parseInt(sg.inicio.split("-")[1])<= parseInt(fecha.split("-")[2]));
        

        if (sg.inicio.split("-")[0] == fecha.split("-")[1] && parseInt(sg.inicio.split("-")[1])<= parseInt(fecha.split("-")[2]) ) {

            tZodiaco.innerHTML = sg.nombre
            iZodiaco.src = "./signos/" + sg.nombre + ".png"
            break
        } else if (sg.fin.split("-")[0] == fecha.split("-")[1] && parseInt(sg.fin.split("-")[1]) >= parseInt(fecha.split("-")[2]))  {

            tZodiaco.innerHTML = sg.nombre
            iZodiaco.src = "./signos/" + sg.nombre + ".png"
            break
        }

    }
}
window.onload=()=>{Cargar();}

//mostar en un formulario cada uno d elos dias del mes del año e n el que estamos y al lado el da de la semanaa tanto texto como numero
