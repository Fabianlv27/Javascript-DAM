

function Calcular() {
    const n1 = parseFloat(document.getElementById("n1").value) 
    const n2 =parseFloat(document.getElementById("n2").value) 

    const operaciones = document.getElementById("operaciones")
    const resultado = document.getElementById("resultado")
    console.log(operaciones.value)
    var r
    switch (operaciones.value) {
        case "S":
            r = n1 + n2
            break;
        case "R":
            r = n1 - n2
            break;
        case "M":
            r = n1 * n2
            break;
        case "D":
            r = n1 / n2
            break;
        default:
            break;
    }
    
    console.log(r)
    resultado.innerHTML = "Resultado: " + r
}