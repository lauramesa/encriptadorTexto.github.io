function encriptar(){
    var texto = document.querySelector('.incoming__text').value;

    if(validarTexto(texto) == true){
        notificacionErr();
        return mostrarMensaje("No has ingresado ningun texto!");
    }else if(validarCaracteresEspeciales(texto) == true){
        notificacionErr();
        return mostrarMensaje("No se permiten caracteres especiales tales como las tildes");
    }else if(validarMayusculas(texto) == true){
        notificacionErr();
        return mostrarMensaje("No se permiten letras en mayuscula");
    }
    else{
        notificacion();
        mostrar();
        generarEncriptacion(texto);
    }
}

function validarTexto(textoEntrada){
    let hayTexto = textoEntrada;
    if(hayTexto.trim() === ""){
        return true;
    } else{
        return false;
    }
}

function validarCaracteresEspeciales(textoEntrada){
    let text  = textoEntrada;
    let caracteres = /[áàâäãåąæāªèéëėęēïíìīîįüúūùûôöòóºōœõøñ]/g;
    let hayCaracter = text.match(caracteres);
    if(hayCaracter){
        return true;
    }else{
        return false;
    }
}

function validarMayusculas(textoEntrada){
    let hayMayusculas = textoEntrada;
    if(hayMayusculas != hayMayusculas.toLowerCase()){
        return true;
    }
}

function generarEncriptacion(textoEntrada){
    var entrada = textoEntrada;
    var reemplazoVocales = "";

    for(let i=0; i<entrada.length; i++){
        switch(entrada[i]){
            case "e": reemplazoVocales+="enter";
                break;
            case "i": reemplazoVocales+="imes";
                break;
            case "a": reemplazoVocales+="ai";
                break;
            case "o": reemplazoVocales+="ober"
                break;
            case "u": reemplazoVocales+="ufat"
                break;
            default: reemplazoVocales += entrada[i];
        }
    }
    return mostrarMensaje(reemplazoVocales);
}

function mostrarMensaje(mensaje){
    let resultado = document.querySelector('.textResult');
    var x = mensaje;
    return resultado.textContent = x;
}

const encri = document.getElementById("1");
encri.addEventListener("click", identificarBoton);

var fondo = document.querySelector('.show_background');
var accion = document.querySelector('.show__action');
var mensaje = document.querySelector('.show');

function mostrar() {
  fondo.style.display = "block";
  mensaje.style.display = "block";
  accion.innerHTML = "El Texto se ha generado correctamente"
}

function identificarBoton(event) {
  return event.target.id;
}