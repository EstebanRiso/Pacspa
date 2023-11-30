
let iteracion=1;
let total=0;


function agregarFila() {
    // Obtener la tabla por su ID
    iteracion++;
    const tabla = document.getElementById("tablaModificar");


    // Crear una nueva fila y sus celdas
    const nuevaFila = document.createElement("tr");
    const nuevaCelda1 = document.createElement("td");
    const nuevaCelda2 = document.createElement("td");
    const nuevaCelda3 = document.createElement("td");
    const nuevaCelda4 = document.createElement("td");
  
    // Crear inputs de texto y número
    const inputTexto = document.createElement("input");
    inputTexto.type = "text";
  
    const inputNumero1 = document.createElement("input");
    inputNumero1.type = "number";
    inputNumero1.oninput = sumarValores;

    const inputNumero2 = document.createElement("input");
    inputNumero2.type = "number";
    inputNumero2.oninput = sumarValores;

    const select = document.createElement("select");
        select.name = "metrica";
        select.id = "cars";

        var option1 = document.createElement("option");
        option1.value = "m3";
        option1.innerHTML = "m&#179;";
        select.appendChild(option1);

        var option2 = document.createElement("option");
        option2.value = "m2";
        option2.innerHTML = "m&#178;";
        select.appendChild(option2);

        var option3 = document.createElement("option");
        option3.value = "m.l.";
        option3.innerHTML = "m.l.";
        select.appendChild(option3);
    
    if(iteracion%2==0){
        inputTexto.className="parFila"
        inputNumero1.className="parFila"
        inputNumero2.className="parFila"
        select.className="parFila"
    }else{
        inputTexto.className="inparFila"
        inputNumero1.className="inparFila"
        inputNumero2.className="inparFila"
        select.className="inparFila"
    }

    // Agregar los inputs a las celdas
    nuevaCelda1.appendChild(inputTexto);
    nuevaCelda2.appendChild(inputNumero1);
    nuevaCelda3.appendChild(inputNumero2);
    nuevaCelda4.appendChild(select);
  
    // Agregar las celdas a la fila
    nuevaFila.appendChild(nuevaCelda1);
    nuevaFila.appendChild(nuevaCelda2);
    nuevaFila.appendChild(nuevaCelda3);
    nuevaFila.appendChild(nuevaCelda4);
  
    // Agregar la fila a la tabla
    tabla.appendChild(nuevaFila);
}

function eliminarUltimaFila() {
    const tabla = document.getElementById("tablaModificar");
    const filas = tabla.getElementsByTagName("tr");
    const ultimaFila = filas[filas.length - 1];

    if (filas.length > 1) { // Asegurarse de que haya más de una fila antes de eliminar
        tabla.removeChild(ultimaFila);
        iteracion--;
    }
}



function sumarValores() {
    total = 0; // Reiniciar el total
    var acumulacion=0;
    var valor=0;
  
    // Obtener todos los inputs numéricos de la tabla
    const inputsNumericos = document.querySelectorAll("input[type='number']");
    // Sumar los valores de los inputs numéricos
    inputsNumericos.forEach((input,index) => {
        
        if((index+1)%2!=0){
            valor = parseFloat(input.value) || 0; 
            total += valor*acumulacion;
        }
        else{
            acumulacion= parseFloat(input.value) || 0;
        } 
        
    });
  
    // Mostrar el total en el elemento con ID "total"
    const valorTotalElemento = document.getElementById("valorTotal");
    valorTotalElemento.textContent = total;
}



function rutverificacion(rut){
    const rutSinVerificador = rut.slice(0, -1);
    const verificador = rut.slice(-1).toUpperCase();

    return rutSinVerificador.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "-" + verificador;
}



function autocompletarYLimpiarRut() {
    const rutInput = document.getElementById("rut");
    let rutValue = rutInput.value.replace(/[^\dkK0-9]/g, ''); // Eliminar todos los caracteres no numéricos ni 'k'

    if (rutValue.length > 1) {
        // Eliminar ceros a la izquierda (si existen)
        rutValue = rutValue.replace(/^0+/, '');

        if (rutValue.slice(-1).toUpperCase() === 'K' && rutValue.length > 2 && !/\d/.test(rutValue.slice(0, -1))) {
            rutValue = rutValue.slice(0, -1);
        }

        if (rutValue.length > 2) {
            rutInput.value = rutverificacion(rutValue); // Formatear el RUT con puntos y guión
        } else {
            rutInput.value = rutValue; // Mantener el valor sin formato si el RUT tiene menos de tres caracteres
        }
    } else {
        rutInput.value = rutValue; // Mantener el valor sin formato si el RUT tiene menos de dos caracteres
    }
}



async function activarModal(){

    window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    
      await delay(200)
      console.log("espere un momentito")

    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    const correos=document.getElementById('correos')
    const nombre_correos=document.getElementById('correo')
    correos.textContent=nombre_correos.value
}

function desactivarModal(){
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function(event) {

    const modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


function contiene(){

    const inputNumero = document.getElementById('NumeroPresupuesto');
      const numero = inputNumero.value.trim();

      if (numero === '') {
        inputNumero.style.border='1px solid black'
      } else {
        inputNumero.style.border = 'none'
      }

}



function agregarCorreo(){

}

function quitarCorreo(){

}


function agregarNombre(){

}

function quitarNombre(){

}

function agregarRuts(){
    
}

function quitarRuts(){
    
}


function agregarDirecciones(){
    
}

function quitarDirecciones(){
    
}

