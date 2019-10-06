//documento usado unicmanete para la creacion de graficas

//PESTAÑAS

// Dadas la division que contiene todas las pestañas y la de la pestaña que se
// quiere mostrar, la funcion oculta todas las pestañas a excepcion de esa.
function cambiarPestanna(pestannas,pestanna) {

    // Obtiene los elementos con los identificadores pasados.
    pestanna = document.getElementById(pestanna.id);
    listaPestannas = document.getElementById(pestannas.id);

    // Obtiene las divisiones que tienen el contenido de las pestañas.
    cpestanna = document.getElementById('c'+pestanna.id);
    listacPestannas = document.getElementById('contenido'+pestannas.id);

    i=0;
    // Recorre la lista ocultando todas las pestañas y restaurando el fondo
    // y el padding de las pestañas.
    while (typeof listacPestannas.getElementsByTagName('div')[i] != 'undefined'){
        $(document).ready(function(){
            $(listacPestannas.getElementsByTagName('div')[i]).css('display','none');
            $(listaPestannas.getElementsByTagName('li')[i]).css('background','');
            $(listaPestannas.getElementsByTagName('li')[i]).css('padding-bottom','');
        });
        i += 1;
    }

    $(document).ready(function(){
        // Muestra el contenido de la pestaña pasada como parametro a la funcion,
        // cambia el color de la pestaña y aumenta el padding para que tape el
        // borde superior del contenido que esta juesto debajo y se vea de este
        // modo que esta seleccionada.
        $(cpestanna).css('display','');
        $(pestanna).css('background',' #000000');
        $(pestanna).css('padding-bottom','2px');
    });

}

//GRAFICA VELOCIDAD

let contador
let velocidad
let aceleracion
let hoy = new Date();

let hoyString = hoy.toISOString().substr(11,8);



console.log(hoyString)

console.log(typeof hoyString)



$(document).ready(function () {
    setInterval(actualizar, 6000);
})

function actualizar() {
    $("#contador").load("leer_variable.html #contador1");
    $("#velocidad").load("leer_variable.html #velocidad2");
    $("#aceleracion").load("leer_variable.html #aceleracion3");

    contador = parseInt(document.getElementById("contador1").innerHTML)
    velocidad = parseInt(document.getElementById("velocidad2").innerHTML)
    aceleracion = parseInt(document.getElementById("aceleracion3").innerHTML)
    console.log("contador: " + contador)
    chart.data.datasets[0].data.push(contador)


    hoy = new Date();

    hoyString = hoy.toISOString().substr(11,8);

    chart.data.labels.push(hoyString)
    chart.update();

}


let miCanvas = document.getElementById("miGrafica").getContext("2d")

let chart = new Chart(miCanvas, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Grafica del tranvia",
                backgroundColor: "rgb(255,0,0,0)",
                borderColor: "rgb(0,250,0)",
                borderWidth: 2.5,
                data: []
            }
        ]
    }

})


/*setInterval(() => {
	console.log(contador)
	chart.data.datasets[0].data[0] = contador
	console.log(chart.data.datasets[0].data[0])},1201)
alert(contador, velocidad, aceleracion)*/




