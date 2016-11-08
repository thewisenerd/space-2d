"use strict";

import Scene from './scene';
import * as random from './random';

module.exports = {
  init: function(canvas, props) {
    let scene = new Scene(canvas);

    props.seed = random.generateRandomSeed();

    scene.render(props);
  }

};
