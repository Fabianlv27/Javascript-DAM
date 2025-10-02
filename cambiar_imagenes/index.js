const banderas=["cee","ingla","japon","spain","usa"]
let index=0
function Cambiar(obj) {
    const n=parseInt(obj.innerHTML) 
     document.getElementById("flag").src=`./images/gif/${banderas[n-1]}.gif`
}

function Mover(n) {
    console.log(n);
    
    if (index + parseInt(n)>4) {
        index=0
    }else if(index + parseInt(n)<0){
        index=4
    }else{
      index+=parseInt(n)    
    }
   
     document.getElementById("flag").src=`./images/gif/${banderas[index]}.gif`
}