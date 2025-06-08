console.log("Pastor Caps está al 100");

//  Muestra alerta de bienvenida solo 1 vez
window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('visitada')) {
    alert("🔥 Bienvenido a Pastor Caps: Donde cada gorra es una amenaza estética.");
    localStorage.setItem('visitada', 'true');
  }
});

// Reproduce sonido de "clic" al hacer clic en enlaces del menú
document.querySelectorAll('.menu-dinamico a').forEach(link => {
  link.addEventListener('click', () => {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_b19f157b49.mp3?filename=click-124467.mp3');
    audio.play();
  });
});

// Cambio automático al modo oscuro profundo a las 7pm
const hora = new Date().getHours();
if (hora >= 19 || hora < 6) {
  document.body.style.background = 'linear-gradient(to bottom right, #000000, #110000)';
  console.log("Modo nocturno activado: más oscuro que el alma del Pastor.");
}

// Hover en gorras: Mostrar mensaje contextual
document.querySelectorAll('.producto img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    console.log(" Esta gorra impone más que el director del colegio.");
  });
});

// Muestra mensaje especial en pantallas pequeñas
if (window.innerWidth < 500) {
  console.log("Bienvenido desde el celular. Aquí también mandamos con estilo.");
}

// Efecto de resplandor intermitente en títulos
setInterval(() => {
  document.querySelectorAll('.contenido-producto h1').forEach(h => {
    h.style.textShadow = '0 0 20px #fff';
    setTimeout(() => h.style.textShadow = 'none', 500);
  });
}, 3000);
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');

  
  setTimeout(() => {
    preloader.classList.add('oculto');
  }, 1500); 
});

