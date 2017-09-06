'use strict';

obtain(['./src/wallControl.js', './src/commandInterface.js'], ({ valves }, { MuseControl })=> {
  exports.app = {};

  var control = new MuseControl('172.17.68.120');

  var _ = 1;

  var test = [[_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [_, _, 0, 0, _, _, 0, 0, _, _, 0, 0],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],
              [0, 0, _, _, 0, 0, _, _, 0, 0, _, 1],

              /////////////////////////////////////
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [0, 0, 0, 0, _, _, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, _, _, 0, 0, 0, 0],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],
              [_, _, _, _, 0, 0, 0, 0, _, _, _, _],

              /////////////////////////////////////
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, _, _, 0, _, _, 0, 0, 0, 0, 0, 0],
              [_, _, _, _, _, _, _, 0, 0, 0, 0, 0],
              [_, _, _, _, _, _, _, 0, 0, 0, 0, 0],
              [0, _, _, _, _, _, 0, 0, 0, 0, 0, 0],
              [0, 0, _, _, _, 0, 0, _, 0, _, 0, 0],
              [0, 0, 0, _, 0, 0, _, _, _, _, _, 0],
              [0, 0, 0, 0, 0, 0, _, _, _, _, _, 0],
              [0, 0, 0, 0, 0, 0, 0, _, _, _, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, _, 0, 0, 0],

              /////////////////////////////////////
              [_, _, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, _, _, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, _, _, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, _, _, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, _, _, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, _, _, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, _, _, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, _, _, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, _, _],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, _, _, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, _, _, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, _, _, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, _, _, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, _, _, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, _, _, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, _, _, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, _, _, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, _, _, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [_, _, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

              /////////////////////////////////////
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, _, _, 0, 0, 0, 0, _, _, 0, 0],
              [0, 0, _, _, 0, 0, 0, 0, _, _, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, _, 0, 0, 0, 0, 0, 0, 0, 0, _, 0],
              [0, _, _, 0, 0, 0, 0, 0, 0, _, _, 0],
              [0, 0, _, _, _, _, _, _, _, _, 0, 0],
              [0, 0, 0, _, _, _, _, _, _, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  /*var test = [[_, 0, 0, 0, _, 0, 0, _, _, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 0],
              [_, 0, 0, 0, _, 0, _, 0, 0, _, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [_, 0, 0, 0, _, 0, _, 0, 0, _, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [_, 0, 0, 0, _, 0, _, 0, 0, _, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [_, 0, _, 0, _, 0, _, 0, 0, _, 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [_, _, 0, _, _, 0, _, 0, 0, _, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2],
              [_, 0, 0, 0, _, 0, 0, _, _, 0, 0, 2, 0, 0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

              //////////////////////////////////////
              [_, 0, 0, _, 0, _, _, _, _, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, 0, _, _, 0],
              [_, 0, 0, _, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 1],
              [_, 0, 0, _, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 1],
              [_, _, _, _, 0, _, _, _, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 1],
              [_, 0, 0, _, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 1],
              [_, 0, 0, _, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 0, 0, _, 0, 0, 1],
              [_, 0, 0, _, 0, _, _, _, _, 0, _, _, _, _, 0, _, _, _, _, 0, 0, _, _, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

  ];*/

  var count = 0;

  window.onbeforeunload = ()=> {
    valves.allOff();
  };

  exports.app.start = ()=> {
    control.addListener('drawRow', (pack)=> {
      valves.rasterRow(pack.data, pack.stamp - control.timeOffset);
    });

    control.addListener('pixelWidth', (wid)=> {
      valves.pixel.width = wid;
    });

    control.addListener('pixelHeight', (hgt)=> {
      valves.pixel.height = hgt;
    });

    control.connect();

    let defaultDraw = setInterval(()=> {
      valves.drawRaster(test, Date.now() + 50);
    }, (test.length + 10) * valves.pixel.height);

    control.onConnect = ()=> {
      clearInterval(defaultDraw);
      control.send({ _id: 0 });
    };

    console.log('started');

    document.onkeyup = (e)=> {
      var electron = require('electron');
      if (e.which == 27) {
        valves.allOff();
        electron.remote.process.exit();
      }
    };

  };

  provide(exports);
});
