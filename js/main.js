import Highway from '@dogstudio/highway';
import Fade from './transitions';


const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});



const elsHexagons = document.querySelectorAll('.hex');
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

const elLogo = document.querySelector('.logo')
const elLayer = document.querySelector('.layer');



const elCursor = document.querySelector('.cursor');

const elsLink = document.querySelectorAll('a');
const elsNavItem = document.querySelectorAll('.menu__item')
window.addEventListener('mousemove', (e) => {
  elCursor.style.top = e.pageY + 'px';
  elCursor.style.left = e.pageX + 'px';
});

elsLink.forEach(link => {
  link.addEventListener('mouseover', (evt) => {
    elCursor.classList.add('link-grow');
  });
  link.addEventListener('mouseleave', () => {
    elCursor.classList.remove('link-grow');
  });
});