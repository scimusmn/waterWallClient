obtain(['fs', 'rpio'], (fs, rpio)=> {
  //exports.valves = {};

  var outs = [2, 3, 4, 17, 18, 27, 22, 23, 24, 10, 9, 25, 11, 8, 7, 0, 1, 5, 6, 12, 13, 19, 16, 26];

  var valves = function() {
    var _this = this;

    this.timeOffset = 0;
    this.pixel = { width: 2, height: 100 };

    rpio.init({ mapping: 'gpio' });

    for (var i = 0; i < outs.length; i++) {
      let num = outs[i];
      outs[i] = { pin: num, state: rpio.LOW, scheduled: 0 };
      rpio.open(outs[i].pin, rpio.OUTPUT, rpio.LOW);
    }

    _this.allOff = ()=> {
      for (var i = 0; i < outs.length; i++) {
        rpio.write(outs[i].pin, rpio.LOW);
      }
    };

    _this.set = (num, length, stamp)=> {
      let out = outs[num];
      let delay = Math.max(0, stamp - Date.now());
      if (stamp > out.scheduled) {
        if (stamp > out.scheduled) out.scheduled = stamp + length - 5;
        setTimeout(()=> {
          out.state = rpio.HIGH;
          rpio.write(out.pin, rpio.HIGH);
          setTimeout(()=> {
            out.state = rpio.LOW;
            rpio.write(out.pin, rpio.LOW);
          }, length - 5);
        }, delay);
      }
    };

    _this.rasterRow = (data, stamp)=> {
      if (data.length == outs.length / _this.pixel.width) {
        for (var i = 0; i < data.length; i++) {
          if (data[i]) {
            for (var j = 0; j < _this.pixel.width; j++) {
              _this.set(_this.pixel.width * i + j, _this.pixel.height, stamp);
            }
          }
        }
      }
    };

    _this.drawRaster = (data, stamp)=> {
      for (var i = data.length - 1; i >= 0; i--) {
        _this.rasterRow(data[i], stamp + (((data.length - 1) - i) * _this.pixel.height));
      }
    };

  };

  exports.valves = new valves();

  provide(exports);
});
