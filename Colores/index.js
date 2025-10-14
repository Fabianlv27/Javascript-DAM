let cuadro=document.getElementById("cuadro")
const CValores=document.getElementById("CValores")
const colors=["r","g","b","o","a"]
const claves=document.getElementsByClassName("changer")
const SClaves=document.getElementsByClassName("SChanger")
console.log(claves);

function Change(isRange) {
    console.log("object");
    let color="rgba("
    let id=""
    colors.forEach(c => {
        console.log(c);
        if (isRange) {
            id=c
            
        }else{
            id="s"+c
        }
        console.log(id);
         const valor=document.getElementById(id).value
         console.log(valor);
        if (colors.indexOf(c)==colors.length-1) {
            color+=")"     
            cuadro.style.width=valor+"%"
          
        }else if(c=="o"){
            const decimal=parseInt(valor)/10
            color+=decimal;
        }
        else{
            console.log(c);
            color+=valor;
            color+=","
        }
        if (isRange) {
         document.getElementById("s"+c).value=valor   
        }else{
        document.getElementById(c).value=valor
        }
       
        


    });
    console.log(color);
    cuadro.style.backgroundColor=color
    CValores.innerText="Color: "
    CValores.innerText+=color
    
}


function rellenar(destino,li,ls) {
    console.log(destino);
    console.log(li,ls);
    for (let i=li; i <= ls; i++) {
        if (ls==100 && i%10!=0) {
            continue
        }
        let a=document.createElement("option")
        a.text=ls==10?i/10:i;
        a.value=i
        destino.appendChild(a)    
    }
}

function inicio() {

    console.log("csfde");
    for (let i = 0; i < claves.length; i++) {
        claves[i].addEventListener('change',()=>{Change(true)})
        
    } 
    for (let i = 0; i < SClaves.length; i++) {
        
        SClaves[i].addEventListener('change',()=>{Change(false)}) 
    } 
    colors.forEach(e => {
        const imp=document.getElementById(e)
        console.log(imp.min);
        rellenar(document.getElementById("s"+e),imp.min,imp.max)
    }); 
}
window.addEventListener('load',inicio)