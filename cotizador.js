//constructor
function Seguro(nombre , apellido , fechaNacimiento , fechaVigencia , email , vigenciaCobertura , cuit, actividad, intinere, tipoSeguro) 
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento; fechaNacimiento;
    this.fechaVigencia= fechaVigencia;
    this.email= email;
    this.vigenciaCobertura = vigenciaCobertura;
    this.cuit = cuit;
    this.actividad = actividad;
    this.intinere= intinere;
    this.tipoSeguro= tipoSeguro; 
}
//cotizarSeguro
Seguro.prototype.cotizarSeguro = function () {
    

    let cantidad;
    const base = 50;

    switch (this.vigenciaCobertura) {
        case "1":
            cantidad = base * 1;
            break;
        case "2":
            cantidad = base * 30;
            break;
        case "3":
            cantidad = base * 365;
            break;
    }


   if (this.tipoSeguro === 'basico') {
       cantidad *= 1.30;
   }    
   if (this.tipoSeguro === 'Mediano') {
    cantidad *= 1.40;
}
   else {
       cantidad *= 1.50;
   }
    return cantidad;
}

//parte visual HTML
function Interfaz(){}

//Mensaje en HTml
Interfaz.prototype.mostarMensaje = function(mensaje, tipo) {
  const div = document.createElement("div");

  if (tipo === 'error') {
    div.classList.add('mensaje', 'error');
  } else {
    div.classList.add("mensaje", "correcto");
  }

  div.innerHTML = `${mensaje}`;
  formulario.insertBefore(div, document.querySelector(".form-group"));

  setTimeout(function() {
      document.querySelector('.mensaje').remove();
  }, 2000);
};

//imprime resultado de cotización
Interfaz.prototype.mostrarResultado = function (seguro, total) {
    const resultado = document.getElementById('resultado');
    let tipoSeguro;

    switch (seguro.tipoSeguro) {
        case '1':
            tipoSeguro = 'Básico';            
            break;
        case '2':
            tipoSeguro = 'Mediano';
            break;
        case '3':
            tipoSeguro = 'Premium';
            break;    
    }

    //crear un div
    const div = document.createElement('div');
    //insertar la información
    div.innerHTML = `
       <p class="header">Cotización:</p>
       <p> Precio por vigencia: ${vigenciaCobertura}</p>
       <p> Precio del Seguro:  ${actividad}</p>
       <p> Tipo: ${tipoSeguro}</p>
       <p> Total: $ ${total}</p>   
    `;
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    
    setTimeout(function(){
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 500);   
    
}

//capturar datops del formulario
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    //leer la  seleccionada
    const vigenciaCobertura = document.getElementById('vigenciaCobertura');
    const vigenciaCoberturaSeleccionada = vigenciaCobertura.options[vigenciaCobertura.selectedIndex].value;


    //leer dato del radio Button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //crear instancia de interfaz
    const interfaz = new Interfaz();
    //revisamos que los campos no estén vacíos

    if ( vigenciaCobertura === '' || actividad === '' || tipoSeguro === '' ) {
        //interfaz imprimiendo error
        interfaz.mostarMensaje('Faltan Datos, revisa e intenta de nuevo', 'error');
    } else {
        //limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }

        const seguro = new Seguro(vigenciaCobertura, tipoSeguro);
        //Cotizar el seguro
        const cantidad = seguro.cotizarSeguro(seguro);
        //mostrar resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostarMensaje('Cotizando', 'correcto');

    }

});




