const testimonios = document.querySelectorAll('.testimonial');
let index = 0;

function mostrarSiguienteTestimonio() {
    testimonios[index].classList.remove('active');
    index = (index + 1) % testimonios.length;
    testimonios[index].classList.add('active');
}

function mostrarTestimonioAutomaticamente() {
    mostrarSiguienteTestimonio();
}

setInterval(mostrarTestimonioAutomaticamente, 5000);


  function changeLanguage(lang) {
    document.documentElement.lang = lang;
    applyTranslations();
  }

