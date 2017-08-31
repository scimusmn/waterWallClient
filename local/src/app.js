'use strict';

obtain(['rpio'], (hw)=> {
  exports.app = {};

  var outs = [2, 3, 4, 17, 18, 27, 22, 23, 24, 10, 9, 25, 11, 8, 7, 0, 1, 5, 6, 12, 13, 19, 16, 26];

  rpio.init({ mapping: 'gpio' });

  var count = 0;

  var activateNext = ()=> {
    rpio.write(outs[count], rpio.LOW);
    count = (count + 1) % outs.length;
    rpio.write(outs[count], rpio.HIGH);
  };

  exports.app.start = ()=> {
    console.log('started');

    for (var i = 0; i < outs.length; i++) {
      rpio.open(outs[i], rpio.OUTPUT, rpio.LOW);
    }

    setInterval(activateNext, 500);

    document.onkeypress = (e)=> {
      if (e.key == ' ') console.log('Space pressed');
    };

  };

  provide(exports);
});
