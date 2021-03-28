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