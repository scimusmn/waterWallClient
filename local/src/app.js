'use strict';

obtain(['./src/wallControl.js'], ({ valves })=> {
  exports.app = {};

  /*var test = [[1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
              [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
              [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
              [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
              [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
              [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
              [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
              [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
              [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
              [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
              [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
              [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],

              /////////////////////////////////////
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
              [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
              [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
              [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
              [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];*/

  var test = [[1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 0],
              [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 2, 0, 0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

              //////////////////////////////////////
              [1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
              [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
              [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
              [1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
              [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
              [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
              [1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

  ];

  var count = 0;

  valves.pixels.width =1;

  exports.app.start = ()=> {
    console.log('started');

    document.onkeyup = (e)=> {
      var electron = require('electron');
      if (e.which == 27) electron.remote.process.exit();
    };

    setInterval(()=> {
      valves.drawRaster(test, Date.now() + 50);
    }, (test.length + 1) * valves.pixel.height);

  };

  provide(exports);
});
