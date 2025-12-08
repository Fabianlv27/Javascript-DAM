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

const cont=document.getElementById("cont");
const flags_container=document.getElementById("flags_container")
const a_selected=document.getElementById("a_selected")
const a_selector=document.getElementById("a_selector")

let a_selected_index

function cargar_banderas(){

    for (let i = 0; i < cautonomas.length; i++) {
        const img=document.createElement("img")
        img.src="./banderas/"+cautonomas[i]+".gif"
        img.id="f_"+i
        flags_container.appendChild(img)
        img.addEventListener('click',()=>{click_bandera(i)})
        
    }
    a_selected_index="0"
    click_bandera(0)

}

function click_bandera(i){
    //esto retorna un diccionario con clave valor de los hijos del elemento y la clave esta en string por eso luego lo metemos como string luego
console.log(flags_container.children)

flags_container.children[a_selected_index].classList.remove("yellow")
a_selected_index=i.toString()
flags_container.children[a_selected_index].classList.add("yellow")
a_selected.innerText=cautonomas[a_selected_index]

cambio_select()

}

function cambio_select(){
    a_selector.innerHTML=""
    for (let i = 0; i < provincias[parseInt(a_selected_index) ].length; i++) {
        const option=document.createElement("option")
        option.value=i
        option.text=provincias[parseInt(a_selected_index)][i]
        a_selector.appendChild(option)
    }
}

window.addEventListener("load",cargar_banderas())