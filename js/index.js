window.sr = ScrollReveal();
  sr.reveal('#intro', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

window.sr = ScrollReveal();
  sr.reveal('#about-me', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

window.sr = ScrollReveal();
  sr.reveal('#skills', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

window.sr = ScrollReveal();
  sr.reveal('#images', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });  
  
window.sr = ScrollReveal();
  sr.reveal('#images-basics', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });  
  
window.sr = ScrollReveal();
  sr.reveal('#images-languages', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });  
  
window.sr = ScrollReveal();
  sr.reveal('#images-DB', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });  

window.sr = ScrollReveal();
  sr.reveal('#projects', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });  
  
window.sr = ScrollReveal();
  sr.reveal('#menu_lateral_der', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  });  
  
window.sr = ScrollReveal();
  sr.reveal('#menu_lateral_izq', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
  });

// Clipboard (email)
function copyToClipboard(text) {
  var el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  // Modal message
  Swal.fire({
    title: '¡Copied!',
    icon: 'success',
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,

    showClass: {
      popup: `
        animate__animated
        animate__fadeInRight
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__bounceOutRight
      `
    }
  })
}
