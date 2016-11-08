space-2d
========

this is a browser-usable fork of @wwwtyro/space-2d.

---

Procedural generation of 2D space scenes. View the _original_ demo [here](https://wwwtyro.github.io/space-2d).

---

modified demo [here](https://thewisenerd.github.io/space-2d).

---

usage
-----

generic template.

```javascript
  <canvas id='render-canvas'></canvas>
  <script src="bundle.js"></script>
  <script>
    var canvas = document.getElementById('render-canvas');
    canvas.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    canvas.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    var props = {
      renderPointStars: true,
      renderStars: true,
      renderSun: true,
      renderNebulae: true,
      shortScale: true,
      advanced: {
        stars: {
          brightness: 0.075,
          density: 0.05,
        },
        nebula: {
          densityTo: 0.2,
          falloffFrom: 5,
          falloffTo: 7,
        }
      }
    };

    var space2d = Space2D.init(canvas, props);

  </script>
```

options
-------

the following options are supported as of now.

```javascript

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
```

---

for more details: [here](http://wwwtyro.net/2016/10/22/2D-space-scene-procgen.html)
