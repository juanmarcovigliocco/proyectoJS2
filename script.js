//llamar por ID
var cabecera = document.getElementById("logo");
console.log( cabecera.innerHTML );

var formulario = document.getElementById("formu");


//llamar por tag
var elementosp = document.getElementsByTagName("p");

// NODO
var buho = document.createElement("h2");
var contenido = document.createTextNode("Con nosotros conseguís los mejores precios");
buho.appendChild(contenido);
buho.setAttribute("align", "center");
document.getElementById("subtitulo").appendChild(buho);


var nombreGuardado = localStorage.getItem("nombrecompleto")

if(!nombreCompleto){
    var nombreCompleto= prompt("Ingrese su Nombre Completo")
    localStorage.setItem("nombrecompleto", nombreCompleto )
}

var DNI= prompt("Ingrese su DNI")

var Domicilio= prompt("Ingrese su domicilio")


while (DNI.lenght <7 || DNI.length >9){
    DNI= prompt("Ingrese su DNI")
}
console.log("Nombre Completo: "+nombreCompleto)
console.log("DNI: "+DNI)
console.log("Domicilio: "+Domicilio)

let interesAsegurable = prompt("Elija su interes asegurable " + "Auto, Camion, Moto");
let monto = prompt("Ingrese el monto de su poliza actual");


function funcionamientoCotizador() {

    if(interesAsegurable == "auto") {
        function calcularDescuento(seguro, monto) {
            let comision;
        
         
             switch (seguro) {
                case "Zurich":
                    descuento = 0.20;
                    break;
                case "Mapfre":
                    descuento = 0.16;
                    break;
                case "Allianz":
                    descuento = 0.14;
                    break;
                case "Berkley":
                    descuento = 0.15;
                    break;
                case "Rio Uruguay":
                    descuento = 0.25;
                    break;
                default:
                    return "No se puede calcular la comision";
            }
        
            return monto * descuento
        }
        var compañiaAelegir = prompt("Introduce cuanto pagas en tu poliza de seguros. Compañias a elegir Zurich, Mapfre, Allianz, Berkley o Rio Uruguay");
        console.log("El descuento de su poliza es de " + calcularDescuento(compañiaAelegir, monto));
        alert("El valor de su nueva va a ser de " + (monto - calcularDescuento(compañiaAelegir, monto))); 
        
            function Auto(marca, patente, anio, modelo, version) {
                this.marca = marca,
                this.patente = patente,
                this.anio = anio,
                this.modelo = modelo,
                this.version = version
            }

            let fiat = new Auto("fiat", "IFG 031", 2015, "147", "3pts diesel");
            console.log(fiat);

    } else if (interesAsegurable == "camion") {

        function calcularComisionCamion(seguro, monto) {
            let comision;
        
         
             switch (seguro) {
                case "Zurich":
                    descuento = 0.10;
                    break;
                case "Mapfre":
                    descuento = 0.09;
                    break;
                case "Allianz":
                    descuento = 0.05;
                    break;
                case "Berkley":
                    descuento = 0.07;
                    break;
                case "Rio Uruguay":
                    descuento = 0.13;
                    break;
                default:
                    return "No se puede calcular el descuento";
            }
        
            return monto * descuento
        }
        var compañiaAelegir = prompt("Introduce cuanto pagas en tu poliza de seguros.. Compañias a elegir Zurich, Mapfre, Allianz, Berkley o Rio Uruguay");
        console.log("El descuento de su poliza es de " + calcularDescuentoCamion(compañiaAelegir, monto));
        alert("El valor de su poliza actual es de " + (monto - calcularDescuentoCamion(compañiaAelegir, monto))); 
        
            function Camion(marca, patente, anio, modelo, version) {
                this.marca = marca,
                this.patente = patente,
                this.anio = anio,
                this.modelo = modelo,
                this.version = version
            }

            let volvo = new Camion("volvo", "HYM 999", 2009, "capture", "acoplado");
            console.log(volvo);

    } else if (interesAsegurable == "moto") {

        function calcularDescuentoMoto(seguro, monto) {
            let comision;
        
         
             switch (seguro) {
                case "Zurich":
                    descuento = 0.40;
                    break;
                case "Mapfre":
                    descuento = 0.36;
                    break;
                case "Allianz":
                    descuento = 0.24;
                    break;
                case "Berkley":
                    descuento = 0.25;
                    break;
                case "Rio Uruguay":
                    descuento = 0.29;
                    break;
                default:
                    return "No se puede calcular la comision";
            }
        
            return monto * descuento
        }
        var compañiaAelegir = prompt("Introduce cuanto pagas en tu poliza de seguros.. Compañias a elegir Zurich, Mapfre, Allianz, Berkley o Rio Uruguay");
        console.log("El descuento de su poliza es de " + calcularDescuentoMoto(compañiaAelegir, monto));
        alert("El valor de su poliza actual es de " + (monto - calcularDescuentoMoto(compañiaAelegir, monto))); 
        
            function Moto(marca, patente, anio, modelo, version) {
                this.marca = marca,
                this.patente = patente,
                this.anio = anio,
                this.modelo = modelo,
                this.version = version
            }
            let honda = new Moto("honda", "POO 360", 2019, "NightHawk", "CafeRacer");
            console.log(honda);
    } else {
        return "No ha ingresado bien los datos";
    }

}
 

funcionamientoCotizador();



//Valor de un seguro total 
if (monto>8000){
var promocion= prompt("Solo por hoy ofrecemos una nueva promocion. ¿Quiere saber cual podria ser el monto de su seguro total en cualquiera de las compañias mencionadas?")
if (promocion === "si"){
    const arrayProductosSeguros = [
        {nombre: "responsabilidad civil", precio: 1000},
        {nombre: "robo y hurto", precio: 500},
        {nombre: "parabrisa", precio: 800},
        {nombre: "luneta", precio: 700},
        {nombre: "cerradura", precio: 90},
        {nombre: "vidrios laterales", precio: 300},
        {nombre: "granizo", precio: 300},
        {nombre: "incendio", precio: 120},
        {nombre: "destruccion total", precio: 400},
        {nombre: "asistencia mecanica", precio: 200},
        {nombre: "grua", precio: 350},
        {nombre: "todo riesgo operativo", precio: 1500},
        
    ]

    console.log(arrayProductosSeguros);
    arrayProductosSeguros.forEach((el)=>{
        console.log(el.nombre);
        console.log(el.precio);
        
    })
    
    function sumar(array) {
        sumaTotal = 0
        for (let el of array) {
            sumaTotal += el.precio;
        }
        return sumaTotal
    }
    
    
    console.log("precio total del seguro con todo riesgo es: $"+ sumar(arrayProductosSeguros));
    alert("El precio de su seguro TODO RIESGO seria: $"+ sumar(arrayProductosSeguros));
}else{ 
    alert( "gracias buen dia")
}
}

// JSON
/* var unJSON = {
    "nombre": "juan",
    "edad": 28,
    "DNI" : "36985756",
    "Actividad": "Productor de Seguros",

};

console.log (unJSON["nombre"])
 */
