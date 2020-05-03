barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0
      });
    }
  }]
});
const elCursor = document.querySelector('.cursor');

const elAbout = document.querySelector('.about-main');

// try {
//   elAbout.parentElement.style.overflowY = 'scroll';
// } catch (error) {
//   console.log(error);
// }

const elsLink = document.querySelectorAll('a');
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