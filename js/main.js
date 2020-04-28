const elsHexagons = document.querySelectorAll('.hex');
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

const elLogo = document.querySelector('.logo')
const elLayer = document.querySelector('.layer');
elsHexagons.forEach(hex => {
  hex.addEventListener('mouseover', (evt) => {
    if (elLayer.dataset.imgId != evt.target.dataset.imgId) {
      elLayer.animate([{
          transform: 'scale(1)'
        },
        {
          transform: 'scale(1.5)'
        }
      ], {
        duration: 15000,
        iterations: 1,
        fill: 'forwards',
        easing: 'ease'
      })
      elLayer.style = `background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../PortFolio/img/${evt.target.dataset.imgId}.jpg');`;
      elLayer.dataset.imgId = evt.target.dataset.imgId;

    }

  });
});


const elCursor = document.querySelector('.cursor');

const elsLink = document.querySelectorAll('a');

window.addEventListener('mousemove', (e) => {
  elCursor.style.top = e.pageY + 'px';
  elCursor.style.left = e.pageX + 'px';
});

elsLink.forEach(link => {
  link.addEventListener('mouseover', () => {
    elCursor.classList.add('link-grow');
  });
  link.addEventListener('mouseleave', () => {
    elCursor.classList.remove('link-grow');
  });
});