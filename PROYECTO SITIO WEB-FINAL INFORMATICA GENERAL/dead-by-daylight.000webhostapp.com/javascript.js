/*Si se hace click a un elemento con la clase "dropdown",
los hijos de ul dentro de ese elemento realizan la funcion slideToggle*/
$(".dropdown").click(function(){
    $(this).children("ul").slideToggle();
})

/*Se crea un array declarando cada Slide Show que se quiera realizar
dentro de la misma pagina. */
var slideIndex = [1,1,1,1];
var slideId = ["slide1", "slide2", "slide3", "slide4"];

/*Ejecuta la funcion mostrarSlides recorriendo el array slideIndex, 
 asignandole el valor n y j, n haciendo referencia a donde se mueve el slider
 y j, a la posicion del array del slide que se quiere cambiar*/
function moverSlides(n, j){
    mostrarSlides(slideIndex[j] += n, j);
}


function mostrarSlides(n, j){
    var slides = document.getElementsByClassName(slideId[j]); /*Le asigna a slides el array de imagenes del slide seleccionado*/
    if(n > slides.length) { /*Comprueba que el indice de la imagen no este fuera del array*/
        slideIndex[j] = 1; /*Si lo esta, vuelve a la primera imagen*/
    }

    if(n < 1){ /*Comprueba que el indice de la imagen no este fuera del array*/
        slideIndex[j] = slides.length; /*Si lo esta, vuelve a la ultima imagen*/
    }

    for(var i = 0; i < slides.length; i++){ /*Recorre las imagenes*/
        slides[i].style.display = "none"; /*Y las oculta*/
    }

    slides[slideIndex[j]-1].style.display = "block"; /*Muestra la imagen especificada en el indice*/
}

mostrarSlides(1, 0);
mostrarSlides(1, 1);
mostrarSlides(1, 2);
mostrarSlides(1, 3);

