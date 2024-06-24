/*
EJERCICIO Nº3: Construye una página web 4_colores.html con las siguientes características (total 5 puntos):
_Crea 4 divs que tengan algo y ancho de 200px y de colores azul, rojo, verde y amarillo (insertar estilos
con atributo style). Cada uno de los divs debe tener un identificador único (1 punto).
_Dentro del script agrega el evento para que al hacer click a cada uno de los divs, este cambie de
color al color negro. Utiliza addEvenListener para agregar el evento (1 punto).-
*/


//Función para cambiar el color de un elemento por su id a 'black'.-
function CambiarColorABlack(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.style.backgroundColor = 'black';
    } else {
        console.error('No se encontró ningún elemento con el id: ' + id);
    }
}

//Agregar evento click a cada div para cambiar el color a negro.-
document.getElementById('colorOne').addEventListener('click', function() {
    CambiarColorABlack('colorOne');
});

document.getElementById('colorTwo').addEventListener('click', function() {
    CambiarColorABlack('colorTwo');
});

document.getElementById('colorThree').addEventListener('click', function() {
    CambiarColorABlack('colorThree');
    colorThree.style.width = "200px";
    colorThree.style.height = "200px";
    colorOne.style.border = "2px solid black";
});

document.getElementById('colorFour').addEventListener('click', function() {
    CambiarColorABlack('colorFour');
    colorFour.style.width = "200px";
    colorFour.style.height = "200px";
    colorFour.style.border = "2px solid black";
});


//Condicions para cambiar el color al presionar una tecla específica.-
document.addEventListener('keydown', function(event) {
switch (event.key.toLowerCase()) {}//Evitar key sensitive de las teclas marcadas.-
    if (event.key === 'a') {
    } else if (event.key === 's') {

    } else if (event.key === 'd') {

    }
});

//Variable global para almacenar el color actual.
let colorActual = '';

//Función para cambiar el color del div "key".
function cambiarColor(color) {
    const keyDiv = document.getElementById('key');
    keyDiv.style.backgroundColor = color;
    keyDiv.style.border = '2px solid black'
}

// Función para manejar eventos de teclado
document.addEventListener('keydown', function(event) {
    const letra = event.key.toLowerCase(); //Teclas en minúscula.-

    if (letra === 'a' || letra === 'A') {
        colorActual = 'pink';
        cambiarColor(colorActual);
    } else if (letra === 's' || letra === 'S') {
        colorActual = 'orange';
        cambiarColor(colorActual);
    } else if (letra === 'd' || letra === 'D') {
        colorActual = 'lightblue';
        cambiarColor(colorActual);
    } else {
        //no hacer nada.-
    }
});

//Creación de la función que accione al marcar las teclas señaladas.
document.addEventListener('keydown', function(event) {
    let letra = event.key.toLowerCase(); //Eliminar key sensitive.-

    if (letra === 'q') {
        crearNuevoDiv('purple');
    } else if (letra === 'w') {
        crearNuevoDiv('gray');
    } else if (letra === 'e') {
        crearNuevoDiv('brown');
    }
});

function crearNuevoDiv(color) {
    let keyTwo = document.getElementById('keyTwo');
    let nuevoDiv = document.createElement('div'); //Creación del nuevo div.-

    //Estilos de los nuevos div`s.
    nuevoDiv.textContent = 'NUEVO DIV';
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.border = '2px solid black';
    nuevoDiv.style.backgroundColor = color;
    keyTwo.appendChild(nuevoDiv);
}

