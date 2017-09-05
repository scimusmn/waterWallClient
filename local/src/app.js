'use strict';

obtain(['./src/wallControl.js'], ({ valves })=> {
  exports.app = {};

  var test = [[1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
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
  ];

  var count = 0;

  exports.app.start = ()=> {
    console.log('started');

    document.onkeyup = (e)=> {
      var electron = require('electron');
      if (e.which == 27) electron.remote.process.exit();
    };

    setInterval(()=> {
      valves.drawRaster(test, Date.now()+50);
    }, (test.length + 1) * valves.pixel.height);

  };

  provide(exports);
});
