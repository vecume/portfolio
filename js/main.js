const elsHexagons = document.querySelectorAll('.hex');
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

const elLogo = document.querySelector('.logo')
const elLayer = document.querySelector('.layer');



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