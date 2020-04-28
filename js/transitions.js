import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition {
  in({from,to,done}) {
    const tl = new TimelineLite();
    tl.fromTo(to, 0.5, {left: '-100%',top: '50%'},{left:0})
    .fromTo(to, 0.5, {height: '2vh'}, {height: '100vh', top: 0, onComplete: function() {
      from.remove();
      done();
    }})
  }

  out({from,done}) {
    done();
  }
}

export default Fade