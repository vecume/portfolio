


const elCursor = document.querySelector('.cursor');
const elAbout = document.querySelector('.about-main');
const elVideo = document.querySelector('#myVideo')
function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}


function pageTransition() {
  var tl = gsap.timeline();
  tl.set('.loading-screen', { transformOrigin: "bottom left"});
  tl.to('.loading-screen', { duration: .5, scaleY: 1});
  tl.to('.loading-screen', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "top left", ease: "power1.out", delay: 0.5});
}

// Function to animate the content of each page
function contentAnimation() {
  var tl = gsap.timeline();
  tl.from('ul.social__menu li', { duration: 0.4, opacity: 0, translateX: 10,  delay:0.7, stagger: 0.1});
  tl.from('.logo', { duration: 0.3, opacity: 0,  translateY: -10});
  tl.from('ul#hexGrid li', { duration: 0.5, opacity: 0, scale: 0, stagger: 0.1});

}

barba.init({
  sync:true,

  transitions: [{
  
    async leave(data) {
      const done = this.async();
      pageTransition();
      await delay(500);
      done();
      try {
        document.body.style.overflowY = 'scroll';
      } catch (error) {
        console.log(error);
      }
    },

    async enter(data) {
      contentAnimation();
    },

    async once(data) {
      contentAnimation();
      
    }

  }]
});





window.addEventListener('mousemove', (e) => {
  if (window.innerWidth > 600) {
    elCursor.style.top = e.pageY + 'px';
    elCursor.style.left = e.pageX + 'px';
  }
});



setInterval(() => {
  var elsLink = document.querySelectorAll('a');
  elsLink.forEach(link => {
    if (window.innerWidth > 600) {
      link.addEventListener('mouseover', () => {
        elCursor.classList.add('link-grow');
        console.log('in');
      });
      link.addEventListener('mouseleave', () => {
        elCursor.classList.remove('link-grow');
        console.log('out');
      });
    }
  });
},3000);

