let unidades=["Celsius","Fahrenheit","Kelvin"]
const convercion_text=document.getElementById("convercion_text")


function Llenar_inputs() {
     const field=document.getElementById("opciones_fieldset")

    for (let i = 0; i < unidades.length; i++) {
        for (let j = 0; j < unidades.length; j++) {
            if (j!=i) {
                const label=document.createElement("label")
                const radius=document.createElement("input")
                label.innerText=unidades[i][0]+" a "+unidades[j][0]+" "
                radius.type="radio"
                radius.name="temp_rads"
                radius.value=unidades[i]+"_"+unidades[j]
                radius.onclick=CalcularCambio
                if (i==1 && j==0) {
                    radius.checked=true
                }
                field.appendChild(radius)
                field.appendChild(label)
                
            }
            
        }
        
    }    
}

function Cargar() {
   Llenar_inputs()
document.getElementById("valor").addEventListener("change",CalcularCambio)
CalcularCambio()

}

function CalcularCambio(){
    let id=document.querySelector("input[name=temp_rads]:checked")?.value

        const clave=id.split("_")[0][0]+id.split("_")[1][0]
        const valor=document.getElementById("valor").value
        let resultado

        switch (clave) {
            case "FC":
                resultado= (valor - 32)/1.8
                break;
            case "CK":
               resultado= valor + 273.15
               break
            case "FK":
                resultado=(5 / 9 * (valor - 32)) + 273.15
                break
            case "CF":
               resultado= (valor*1.8 )+32
               break
            case "KC":
            resultado=valor-273.15
            break
            case "KF":
                resultado=1.8*(valor-273.15)+12
            default:
                break;
        }
        convercion_text.innerText=valor+ id.split("_")[0] +" = "+resultado+" "+ id.split("_")[1]

}



window.addEventListener("load",Cargar)