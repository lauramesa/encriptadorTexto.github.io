function validarTexto(textoEntrada){
    let hayTexto = textoEntrada;
    if(hayTexto.trim() == ""){
        return false;
    } else{
        return true;
    }
}

function validarCaracteresEspeciales(textoEntrada){
    const caracteres = /[áíúéóäïüëöàìùèòñ]/g;
    if(textoEntrada.match(caracteres)){
        return false;
    } else{
        return true;
    }
}

function validarMayusculas(textoEntrada){
    if(textoEntrada != textoEntrada.toLowerCase()){
        mostrarMensaje("no se permiten letras mayusculas");
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
    const resultado = document.querySelector('.textResult');
    var x = mensaje;
    return resultado.textContent = x;
}

function mostrar(){
    var textoEntrada = document.querySelector('.incoming__text').value;

    validarTexto(textoEntrada);
    validarCaracteresEspeciales(textoEntrada);
    validarMayusculas(textoEntrada);
    encriptar(textoEntrada);
}