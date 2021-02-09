let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const selecCobertura = document.getElementById('selecCobertura')

selecCobertura.addEventListener('change', ()=>{
    console.log(selecCobertura.value)
 switch(selecCobertura.value) {
    case "all":
        mostrarProductos(stockProductos);
           break;
    case "A":
        mostrarProductos(stockProductos.filter((el)=> el.Cobertura == "A"));
         break;
    case "B":
       mostrarProductos(stockProductos.filter((el)=> el.Cobertura == "B"));
        break;
    case "C":
       mostrarProductos(stockProductos.filter((el)=> el.Cobertura == "C"));
        break;
    case "D":
       mostrarProductos(stockProductos.filter((el)=> el.Cobertura == "D"));
        break;
    case "E":
       mostrarProductos(stockProductos.filter((el)=> el.Cobertura == "E"));
        break;
    case "Todo Riesgo":
       mostrarProductos(stockProductos.filter((el)=> el.Cobertura == "Todo Riesgo"));
        break;    
   }

    if (selecCobertura.value == "all") {
        mostrarProductos(stockProductos)
    } else {
        mostrarProductos(stockProductos.filter((el)=> el.Cobertura == selecCobertura.value))
    }

})


mostrarProductos(stockProductos)

function mostrarProductos(array){
    contenedorProductos.innerHTML = ''
    array.forEach((productoNuevo)=>{
        let div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML += `
                    <img src=${productoNuevo.img} alt="">
                    <h3>${productoNuevo.nombre}</h3>
                    <p>${productoNuevo.desc}</p>
                    <p>Cobertura: ${productoNuevo.Cobertura}</p>
                    <p class="precioProducto">Precio: $${productoNuevo.precio}</p>
                    <button id="boton${productoNuevo.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
        
        let boton = document.getElementById(`boton${productoNuevo.id}`)
        
        boton.addEventListener('click', ()=>{
            agregarAlCarrito(productoNuevo.id)
         })
    })
}


function agregarAlCarrito(id) {
    let productoAgregar = stockProductos.filter((el) => el.id == id)[0]
    carritoDeCompras.push(productoAgregar)
    actualizarCarrito()
    

    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
        <p>${productoAgregar.nombre}</p>
        <p>Precio: $${productoAgregar.precio}</p>
        <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorCarrito.appendChild(div)
    let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    botonEliminar.addEventListener('click', ()=>{
        botonEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter((el) => el.id != productoAgregar.id)      
        actualizarCarrito()
    })
}

function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)
}

