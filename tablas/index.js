const cont=document.getElementById("cont")

let tablaHTML=''

for (let index = 2; index <= 10; index++) {
    
    tablaHTML+=`

        <table>
            <caption>tabla del ${index}</caption>
        `

    for (let j = 1; j < 10; j++) {
        tablaHTML+=`
            <tr class="fila">
                <td>
                    ${index} x ${j}
                </td>
                <td>
                     ${index*j}
                </td>
            </tr>
        `
        
    }

  tablaHTML+=`</table>`

  cont.innerHTML=tablaHTML
    
}

//con un año y mes el calendario

//forulario input date que ponga en una caja el horoscopo que pertenece. dar el zodiaco con imagenes
