const btn__reset = document.querySelector('.reset');
btn__reset.addEventListener('click', resetear);

function resetear(){
    var textArea = document.querySelector('.incoming__text');
    var parrafo = document.querySelector('.textResult');

    textArea.value = "";
    parrafo.innerHTML = "Ningun Mensaje fue encontrado..."
}