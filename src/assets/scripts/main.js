/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import "@fortawesome/fontawesome-free/js/all";
import "cookieconsent";

import { getSlider } from 'simple-slider';
 
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#1d8a8a"
    },
    "button": {
      "background": "#62ffaa"
    }
  },
  "content": {
    "message": "Esta web utiliza cookies para asegurarle la mejor experiencia.",
    "dismiss": "Vale",
    "link": "Aprender más"
  }
});




getSlider({
  container: document.getElementById('myslider'),
  transitionTime:1,
  delay:3.5
});
