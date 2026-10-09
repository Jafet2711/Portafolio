
const formulario = document.getElementById("form-contacto");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  const destino = "jurenamcr@gmail.com";

  const asunto = encodeURIComponent(
    "Contacto desde portafolio - " + nombre
  );

  const cuerpo = encodeURIComponent(
    `Nombre: ${nombre}\n` +
    `Correo: ${correo}\n\n` +
    `Mensaje:\n${mensaje}`
  );

  window.location.href =
    `mailto:${destino}?subject=${asunto}&body=${cuerpo}`;
});




const botonAbrir = document.getElementById("abrir-video");
const botonCerrar = document.getElementById("cerrar-video");
const modalVideo = document.getElementById("video-modal");
const youtubeVideo = document.getElementById("youtube-video");

let elementoAnterior = null;

function abrirVideo() {
    elementoAnterior = document.activeElement;

    youtubeVideo.src = youtubeVideo.dataset.src;

    modalVideo.classList.add("activo");
    modalVideo.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
    botonCerrar.focus();
}

function cerrarVideo() {
    modalVideo.classList.remove("activo");
    modalVideo.setAttribute("aria-hidden", "true");

    // Detiene el video al cerrar la ventana
    youtubeVideo.removeAttribute("src");

    document.body.style.overflow = "";
    elementoAnterior?.focus();
}

// ABRIR VIDEO
botonAbrir.addEventListener("click", abrirVideo);

// CERRAR CON LA X
botonCerrar.addEventListener("click", cerrarVideo);

// CERRAR AL HACER CLIC FUERA DEL VIDEO
modalVideo.addEventListener("click", function(evento) {
    if (evento.target === modalVideo) {
        cerrarVideo();
    }
});

// CERRAR CON ESCAPE
document.addEventListener("keydown", function(evento) {
    if (evento.key === "Escape" &&
        modalVideo.classList.contains("activo")) {
        cerrarVideo();
    }
});

