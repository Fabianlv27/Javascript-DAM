//que siempre retorne 8 digitos

function Verificador(number, base) {
    let valido = true
    let c_valido
    switch (base) {
        case 2:
             c_valido='01'
            for (let i = 0; i < number.length; i++) {
                if (!c_valido.includes(number[i])) {
                    valido = false
                    return
                }

            }
            break;
        case 8:
            c_valido='01234567'
            for (let i = 0; i < number.length; i++) {
                if (!c_valido.includes(number[i])) {
                    valido = false
                    return
                }

            }
            break;
        case 16:
            const cadenaHexadecimal = "123456789ABCDEF"
            for (let i = 0; i < number.length; i++) {
                if (!cadenaHexadecimal.includes(number[i])) {
                    valido = false
                    return
                } else {
                    number = cadenaHexadecimal[i] + number.slice(i)
                }

            }
            break;


        default:
            break;
    }
    return valido
}

function Calcular() {
    let number = document.getElementById("num").value
    const base = parseInt(document.getElementById("bases").value)
    console.log(number);
    console.log(base);

    const valido = Verificador(number, base)
    if (!valido) {
        document.getElementById("resultado").innerHTML = "Numero invalido"
        return
    }
    let acumulador=0
    let exp=0
    for (let i = number.length-1; i >= 0; i--) {
        console.log(parseInt(number[i]));
        console.log( Math.pow(base,exp));
        acumulador += parseInt(number[i]) * Math.pow(base,exp)
        exp++
    }

    console.log(acumulador);

    document.getElementById("resultado").innerHTML = acumulador.toString()









}
//hacer tabla de multiplicar de 1 al 10