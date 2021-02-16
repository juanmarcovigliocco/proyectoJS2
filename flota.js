const botonAgregar = $('form button')
let contadorClientes = 0;

let clientesLocal = JSON.parse(localStorage.getItem('clientes'))

if (clientesLocal) {
    clientesLocal.forEach((el)=>{
        agregarClientes(el)
    })
}


botonAgregar.click(function(event) {
    event.preventDefault()
    let inputAgregar = $('.inputIngreso').val()
    agregarClientes(inputAgregar)
})


function agregarClientes(valor) {
    if (valor != '') {    

         let ol = document.createElement('ol')
         ol.classList.add('clientes')
         ol.innerHTML = `
         <p>${valor}</p><button class="boton">Completado</button><button class="boton boton-eliminar">Eliminar</button>
        `
        contadorClientes++

        $('.listaClientes').append(`
        <ol class="clientes"><p>${valor}</p><button id="completado${contadorClientes}" class="boton boton-completado">Cotizado</button><button id="eliminar${contadorClientes}" class="boton boton-eliminar">Eliminar</button></ol>
        `)

        $(`#completado${contadorClientes}`).click(function(){
            $(this).parent().toggleClass('clientes-completada')
        })
        
        $(`#eliminar${contadorClientes}`).click(function(){
            $(this).parent().remove()
            actualizarLocal()
        })
    }
    actualizarLocal()
}


function actualizarLocal() {
    let localSet = []

    $('ol').each(function(){
        localSet.push($(this).children()[0].innerText)
    })

    localStorage.setItem('clientes', JSON.stringify(localSet))
}