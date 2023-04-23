var textoEntrada = document.querySelector('.incoming__text').value;

function desencriptar(textoEntrada){
    var entrada = textoEntrada;
    var reemplazoVocales = "";

    for(let i=0; i<entrada.length; i++){
        switch(entrada[i]){
            case "enter": reemplazoVocales+="e";
                break;
            case "imes": reemplazoVocales+="i";
                break;
            case "ai": reemplazoVocales+="a";
                break;
            case "ober": reemplazoVocales+="o"
                break;
            case "ufat": reemplazoVocales+="u"
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