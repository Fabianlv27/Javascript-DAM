
const cadena = "TRWAGMYFPDXBNJZSQVHLCKE"
const letraNie="XYZ"

function CalcularLetra() {
    
    let digitos = document.getElementById("digito").value
    const letra=document.getElementById('letra')

    if (!letraNie.includes(digitos[0]) ) {
        console.log("DNI");

        if (digitos.length!==8) {
            letra.innerHTML="Numero invalido"
        }
        letra.innerHTML = cadena[parseInt(digitos) % 23] + " (DNI)"

    } else {
        console.log("NIE");

        if (digitos.length==8) {
           
            digitos=letraNie.indexOf(digitos[0]) +digitos.slice(1) //Puedo usar substring()
            console.log(digitos);
            letra.innerHTML = cadena[parseInt(digitos)% 23] +" (NIE)"

        }else{
            letra.innerHTML="Numero invalido"
        }

    }

}

//validar formulario en: caja de numero entero text,select:binario,octal,hexadecimal.