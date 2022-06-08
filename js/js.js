
// DOM 
document.getElementById("precio").style.width=("550px")
document.getElementById("precio").style.height=("300px")
document.getElementById("precio").style.backgroundColor=("#ffbd33")
document.getElementById("precio").style.borderRadius=("20px 5px")
document.getElementById("precio").style.textAlign=("center")
document.getElementById("precio").style.padding=("30px")
document.getElementById("precio").style.boxSizing=("border-box")

document.getElementById("num").style.float=("right")
document.getElementById("num").style.width=("100px")
document.getElementById("num").style.marginRight=("100px")

document.getElementById("iva").style.float=("right")
document.getElementById("iva").style.width=("100px")
document.getElementById("iva").style.marginRight=("100px")

document.getElementById("total").style.float=("right")
document.getElementById("total").style.width=("100px")
document.getElementById("total").style.marginRight=("100px")

document.getElementById("siniva").style.float=("right")
document.getElementById("siniva").style.width=("100px")
document.getElementById("siniva").style.marginRight=("100px")

document.getElementById("boton").style.width=("100px")
document.getElementById("boton").style.height=("40px")
document.getElementById("boton").style.padding=("5px")
document.getElementById("boton").style.fontSize=("13px")
document.getElementById("boton").style.fontWeight=("bold")

// funcion calcular iva

function iva() {

    let impuesto = 21 ;
    let precio= document.getElementById("num").value;
    let iva = (impuesto * precio )/100; 

    document.getElementById("iva").value = iva ;
    document.getElementById("total").value = iva + parseInt(precio);
    document.getElementById("siniva").value = parseInt(precio);
}



