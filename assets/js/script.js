/*EJERCICIO Nº 3 PINTAR: Se tiene como base el siguiente ejercicio que cambia el color de fondo de un
elemento de HTML al hacerle click (3 puntos).
_El código debe estar en dos archivos: pintar.html y script.js. El script debe estar dentro de la
carpeta assets (1 punto).
_Modifica la función para que reciba el elemento clickeado de forma de no tener que seleccionarlo
nuevamente dentro de la función (1 punto).
_Modifica el código anterior para poder pasarle un color como argumento a la función pintar. El
color debe ser verde (green) por defecto, al hacer click en el párrafo se debe pasar amarillo como
color (1 punto).-

<div id="ele1"> hello </div>

<script>
function pintar() {
    ele.style.bacgroundColor = 'yellow
}
const ele = document.getElementById("ele1")
ele.addEvenListener("click", pintar);
</script>
*/

//Función pintar que permite que al clikear el texto tenga un background color 'yellow'.-
// Función para cambiar el color de fondo de un elemento al ser clickeado
function pintar(elemento) {
    elemento.style.backgroundColor = 'yellow';
}

// Obtener el elemento por su id
const ele = document.getElementById('ele1');

// Función para configurar el color por defecto y el evento de clic.-
function colorDefault(color = 'green', callback) {
    ele.style.backgroundColor = color; //Color por defecto.-

    // AddEventListener para el clic, llamando al callback (pintar) con el elemento.-
    ele.addEventListener('click', function() {
        callback(ele);
    });
}

//ColorDefault pasando 'green' como color por defecto y la función pintar como callback.-
colorDefault('green', pintar);


/* IMPORTANTE: ESTIMADO DIEGO, JUNTO CON SALUDAR, LE DEBO SEÑALAR QUE NO ME QUEDAN CLAROS
LOS REQUERIMIENTOS DE ESTA PREGUNTA, DADO QUE AL UTILIZAR SOLO UN DIV CON IDENTIFICADOR ÚNICO,
NO SÉ SI DEBO CREAR UN DIV PARA DECLARAR UNA FUNCIÓN QUE MANTENTA EL TEXTO EN BLANCO Y AL
CLICKEAR QUEDE EN AMARILLO Y LUEGO OTRO DIV QUE MANTENGA EL BACKGROUND COLOR DEFAULT EN VERDE
Y QUE AL CLICKEAR LO PASE A AMARILLO.
LAMENTABLEMENTE, LOS REQUERIMIENTOS NO ME QUEDAN CLAROS, Y FINALMENTE TERMINÉ REALIZANDO EL
EJERCICIO DE ESTA FORMA POR LO ANTERIORMENTE EXPUESTO */

// Obtener el elemento por su id
/*const ele = document.getElementById("ele1");

// Definir la función pintar para cambiar el color de fondo a amarillo al hacer clic
function pintar() {
    ele.style.backgroundColor = 'yellow';
}

// Agregar event listener al elemento para llamar a la función pintar al hacer clic
ele.addEventListener("click", pintar);*/

//FUNCIÓN ENTREGADA: AL HACER CLICK CAMBIA A COLOR AMARILLO.-
/*const ele = document.getElementById("ele1");

// Definir la función pintar para cambiar el color de fondo a amarillo al hacer clic
function pintar() {
    ele.style.backgroundColor = 'yellow';
}

// Agregar event listener al elemento para llamar a la función pintar al hacer clic
ele.addEventListener("click", pintar);*/

//1º REQUERIMIENTO: función que recibe el elemento clickeado sin tener que invocarlo nuevamente.- 
/*const ele = document.getElementById("ele1");

//Definición de la función.-
function pintar(event) {
    const elementoClickeado = event.target;
    elementoClickeado.style.backgroundColor = 'yellow';
}
//AddEventListener para cambiar de color al hacer click en el elemento.-
ele.addEventListener("click", pintar);*/


//3º REQUERIMIENTO: Declaración de función que recibe dos parámetros, llamando al evento de la función previa y declarando green como 
//color por defecto.-
/*const ele = document.getElementById("ele1");

// Definir la función pintar para cambiar el color de fondo
function pintar(event, color = 'green') {
    const elementoClickeado = event.target;
    elementoClickeado.style.backgroundColor = color;
}

// Agregar event listener al elemento para llamar a la función pintar al hacer clic
ele.addEventListener('click', function(event) {
    pintar(event, 'yellow'); // Pasa 'yellow' como color al hacer clic
}); */



