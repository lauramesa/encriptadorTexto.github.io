function copiarTexto(){
    var elemento = document.querySelector('.textResult');
    var texto = elemento.innerText;
    
    // se crea un elemento temporal
    var textareaTemporal = document.createElement('textarea');
    textareaTemporal.value = texto;
    document.body.appendChild(textareaTemporal);
    
    // seleccionar el contenido del textarea
    textareaTemporal.select();
    textareaTemporal.setSelectionRange(0, 99999); // para dispositivos móviles
    document.execCommand('copy');
    
    // Eliminar el textarea temporal
    document.body.removeChild(textareaTemporal);
    
    // Cambiar el texto del botón
    var boton = document.querySelector('.copyText');
    boton.innerText = '¡Copiado!';
}
