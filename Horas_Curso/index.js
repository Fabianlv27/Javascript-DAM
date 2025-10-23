const formulario = document.getElementById("horas/dia")
const horario = document.getElementById("horario")
const dias_semana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

function cargar() {
    for (let i = 1; i <= 8; i++) {
        const r = document.createElement("input")
        r.type = "radio"
        r.value = i
        r.name = "hora"
        if (i == 1) {
            r.checked = true
        }
        formulario.appendChild(r)
        const label = document.createElement("label")
        label.innerText = i.toString() + " Hora" + (i != 1 ? "s" : "")
        formulario.appendChild(label)
    }
}


function SetHorario() {
    let horas_totales = parseInt(document.getElementById("horas_totales").value)

    let fecha = new Date(document.getElementById("date").value)
    console.log(fecha.getDay());
    let horas = parseInt(document.querySelector('input[name="hora"]:checked').value) 

    if (!horas) {
        return
    }

    console.log(horas);

    horario.innerHTML = "<tr><td>Horas/dia</td><td> ∑ Horas</td> <td>Dia</td> <td>Fecha</td></tr>"

    let cadena = ""
    let suma_horas=0
    while (horas_totales > 0) {
        if (fecha.getDay() != 0 && fecha.getDay() != 6) {
            if (horas > horas_totales) {
                horas = horas_totales
            }

            horas_totales -= horas
            suma_horas += horas

            cadena += '<tr>'
            cadena += '<td>' + horas.toString() + '</td>' + '<td>' + (suma_horas).toString() + '</td>' + '<td>' + dias_semana[fecha.getDay()] + '</td>' + '<td>' + fecha.toISOString().split('T')[0].toString() + '</td>'
            cadena += '</tr>'

          
        }
          fecha.setDate(fecha.getDate() + 1);
    }

    console.log(cadena);
    horario.innerHTML += cadena

}

window.addEventListener("load", () => { cargar() })
