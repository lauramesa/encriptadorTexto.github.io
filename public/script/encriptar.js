function mostrar(){
    var texto = document.querySelector('.incoming__text').value;

    if(validarTexto(texto) == true){
        return mostrarMensaje("No has ingresado ningun texto!");
    }else if(validarCaracteresEspeciales(texto) == true){
        return mostrarMensaje("No se permiten caracteres especiales tales como las tildes");
    }else if(validarMayusculas(texto) == true){
        return mostrarMensaje("No se permiten letras en mayuscula");
    }
    else{
        encriptar(texto);
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
    let caracteres = /[áíúéóäïüëöàìùèòñ]/g;
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

function encriptar(textoEntrada){
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