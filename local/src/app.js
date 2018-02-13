'use strict';

var appData = '../ForBoot/appData';

var fs = require('fs');

if (fs.existsSync('/boot/appData/config.js')) {
  console.log('on pi');
  appData = '/boot/appData';
}

var obtains = [
  './src/wallControl.js',
  'µ/commandClient.js',
  '../piFig/src/utils.js',
  `${appData}/config.js`,
];

obtain(obtains, ({ valves }, { MuseControl }, utils, { config })=> {
  exports.app = {};

  var control = new MuseControl('172.17.69.76');

  //console.log(utils.getIpAddress());

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

  var count = 0;

  window.onbeforeunload = ()=> {
    valves.allOff();
  };

  exports.app.start = ()=> {
    control.addListener('drawRow', (pack)=> {
      valves.rasterRow(pack.data, pack.stamp - control.timeOffset);
    });

    control.addListener('drawRaster', (pack)=> {
      valves.drawRaster(pack.data, pack.stamp - control.timeOffset);
    });

    control.addListener('pixelWidth', (wid)=> {
      valves.pixel.width = wid;
    });

    control.addListener('pixelHeight', (hgt)=> {
      valves.pixel.height = hgt;
      console.log('Pixel height set to ' + valves.pixel.height);
    });

    control.connect();

    valves.pixel.height = 60;

    let defaultDraw = setInterval(()=> {
      valves.drawRaster(test, Date.now() + 50);
    }, (test.length + 10) * valves.pixel.height);

    control.onConnect = ()=> {
      console.log('connected to server');
      clearInterval(defaultDraw);
      control.send({ _id: config._id, ip: utils.getIpAddress() });
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
