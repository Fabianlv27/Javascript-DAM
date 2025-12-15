let provincias=[
["Almería","Cádiz","Córdoba","Granada"," Huelva","Jaén","Málaga","Sevilla"],
["Huesca","Teruel","Zaragoza"],
["El Hierro","Fuerteventura","Gran Canaria","La Gomera","La Palma","Lanzarote","Tenerife"],
["Cantabria/Santander"],
["Avila","Burgos","León","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"],
["Albacete","Ciudad Real","Cuenca","Guadalajara","Toledo"],
["Barcelona","Girona","Lleida","Tarragona"],
["Ceuta y Melilla"],
["Madrid"],
["Navarra/Pamplona"],
["Alicante","Castellón","Valencia"],
["Badajoz","Cáceres"],
["La Coruña","Lugo","Orense","Pontevedra"],
["Formentera","Ibiza","Mallorca","Menorca"],
["La Rioja/Logroño"],
["Alava","Guipúzcoa","Vizcaya"],
["Asturias/Oviedo"],
["Murcia"]];

let cautonomas=["Andalucía",
"Aragón",
"Canarias",
"Cantabria",
"Castilla y León",
"Castilla la Mancha",
"Cataluña",
"Ceuta",
"Comunidad de Madrid",
"Comunidad de Navarra",
"Comunidad Valenciana",
"Extremadura",
"Galicia",
"Islas Baleares",
"La Rioja",
"Pais Vasco",
"Principado de Asturias",
"Region de Murcia"];

const marco1990=document.getElementById("marco1990")

function cambio(origen) {
    console.log("object");

    addClass(origen,"focus")
    imagen_selected=origen
}

function addClass(el,className) {
    if (el.classList) {
        el.classList.add(className)
    }
    else if (!hasClass(el,className)) el.className +=" "+className
    
}

function removeClass(el,className) {
    if(el.classList){
         el.classList.remove(className)
    }
       
    else if(hasClass(el,className)){
        var reg=new RegExp('(\\s|^)'+className+'(\\s|$)')
        el.className=el.className.replace(reg,'')
    }
}


function cargar() {
    
    cautonomas.forEach(e => {
        const imagen=document.createElement("img")
        imagen.src="./banderas/"+e+".gif"
        imagen.className="bandera"
        imagen.onmouseenter=()=>{cambio(imagen)}

        imagen.onmouseleave=()=>{    removeClass(imagen,"focus")}
        marco1990.appendChild(imagen)
    });
}
// Función para generar números random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

cargar();
