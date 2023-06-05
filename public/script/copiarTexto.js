const btn__copyText = document.querySelector('.copyText');
btn__copyText.addEventListener('click', copiarTexto);

function copiarTexto(){
    notificacion();
    mostrarAlerta();
    portapapeles();
    modificarBoton();
}

function portapapeles(){
    var elemento = document.querySelector('.textResult');
    var texto = elemento.innerText;
    
    var textareaTemporal = document.createElement('textarea');
    textareaTemporal.value = texto;
    document.body.appendChild(textareaTemporal);
    // seleccionar el contenido del textarea
    textareaTemporal.select();
    textareaTemporal.setSelectionRange(0, 99999); // para dispositivos móviles
    document.execCommand('copy');
    
    document.body.removeChild(textareaTemporal);
}

function modificarBoton(){
    var boton = document.querySelector('.copyText');
    boton.innerHTML = "¡Copiado!";
    setTimeout(function(){
        boton.innerHTML = "copiar"
    }, 1500);
}

const copiar = document.getElementById("3");
copiar.addEventListener("click", identificarBoton);

var fondo = document.querySelector('.show_background');
var accion = document.querySelector('.show__action');
var mensaje = document.querySelector('.show');

function mostrarAlerta() {
  fondo.style.display = "block";
  mensaje.style.display = "block";
  accion.innerHTML = "El Texto se ha copiado al portapapeles";
}

function identificarBoton(event) {
  return event.target.id;
}
