"use strict";

import Scene from './scene';
import * as random from './random';

var merge = require('deepmerge');


module.exports = {
  init: function(canvas, props) {
    let scene = new Scene(canvas);

    props.seed = random.generateRandomSeed();

    let defaultProps = {
      renderPointStars: true,
      renderStars: true,
      renderSun: true,
      renderNebulae: true,
      shortScale: true,
      advanced: {
        stars: {
          brightness: 0.125,
          density: 0.05,
        },
        nebula: {
          densityFrom: 0,
          densityTo: 0.2,
          falloffFrom: 3,
          falloffTo: 5,
        },
        sun: {
          coreRadiusFrom: 0,
          coreRadiusTo: 0.025,
        }
      }
    };

    let renderProps = merge(defaultProps, props);

    scene.render(renderProps);
  }

};
