let contenedor=document.getElementById("cont")

function inicio() {
    setTimeout(() => {
  GetHour()
        inicio()
    }, 500);

}
function GetHour() {
    const D= (new Date()).toLocaleTimeString()

    for (let i = 0; i <8; i++) {
      if (i!=2 && i!=5) {
        document.getElementById("d"+i).src="./img/"+D[i]+".png"
      }
        
    }


}