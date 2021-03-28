document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    navegacionFija();
});


//Intersection Observer
function navegacionFija(){
    const barra = document.querySelector('.header');

    // Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        console.log(entries);
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });

    // Elemento a observar
    observer.observe(document.querySelector('.festivalInfo'));
}

//Efecto smooth focus al dar click en las opciones del nav
function scrollNav(){
    const enlaces = document.querySelectorAll(".navegacion-principal a");
    enlaces.forEach(function(enlace){
        enlace.addEventListener("click", function(e){
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}
document.addEventListener("DOMContentLoaded", function(){
    crearGaleria();
});
// Crea la galeria al cargar el documento
function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");
    
    for(let i = 1; i<= 12; i++){
        const nodo = document.createElement("li");
        const img = document.createElement("img");
        img.src = `build/img/thumb/${i}.webp`;
        img.dataset.imagenId = i;
        img.onclick = mostrarImagen;  
        nodo.appendChild(img);
        galeria.appendChild(nodo);
    }
}

// Muestra en grande una imagen despues de dar click
function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);
    console.log(id);

    const img = document.createElement("img");
    img.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement("div");
    overlay.appendChild(img);
    overlay.classList.add("overlay");

    //Boton para cerrar la imagen
    const cerrarImagen = document.createElement("p");
    cerrarImagen.textContent = "X";
    cerrarImagen.classList.add("btn-cerrar");
    cerrarImagen.onclick = function(){
        overlay.remove();
        body.classList.remove("fijar-body");
    }
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove("fijar-body");
    }
    overlay.appendChild(cerrarImagen);

    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");
}