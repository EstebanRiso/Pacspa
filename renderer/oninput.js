function onInputNombre(){
    // Obtén el elemento input
    var inputElement = document.getElementById("Nombre");
                                      
    // Obtén el valor del texto dentro del input
    var inputValue = inputElement.value;
  
    // Crea un elemento span oculto para medir el ancho del texto
    var hiddenSpan = document.createElement("span");
    hiddenSpan.style.visibility = "hidden";
    hiddenSpan.style.position = "absolute";
    hiddenSpan.style.whiteSpace = "nowrap";
    hiddenSpan.textContent = inputValue;
    document.body.appendChild(hiddenSpan);
  
    // Obtiene el ancho calculado del span oculto
    var width = hiddenSpan.offsetWidth;
  
    // Elimina el span oculto después de obtener el ancho
    document.body.removeChild(hiddenSpan);
  
    // Imprime el ancho del texto en la consola
    console.log("Ancho del texto:", width, "px");
}