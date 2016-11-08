"use strict";

import Scene from './scene';
import * as random from './random';

let canvas = document.getElementById('render-canvas');
canvas.width = window.innerWidth - (300 + 16 + 16 + 16);;
canvas.height = window.innerHeight - (16 + 16);

let scene = new Scene(canvas);

let props = {
  renderPointStars: true,
  renderStars: true,
  renderSun: true,
  renderNebulae: true,
  shortScale: false,
  seed: random.generateRandomSeed()
};

scene.render(props);
