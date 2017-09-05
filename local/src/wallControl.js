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

    _this.synchronize = ()=> {
      var data = { time: Date.now() };
      post('http://192.168.0.1/timeSync', data).then((resp)=> {
        this.timeOffset = (2 * resp.serverTime - (data.time + Date.now())) / 2;
      }, (error)=> {
        console.log('Could not sync with server');
        this.timeOffset = 0;
      });
    };

    _this.set = (num, length, stamp)=> {
      let out = outs[num];
      let delay = Math.max(0, stamp - Date.now());
      if (!out.state && stamp > out.scheduled) {
        if (stamp > out.scheduled) out.scheduled = stamp + length;
        setTimeout(()=> {
          out.state = rpio.HIGH;
          rpio.write(out.pin, rpio.HIGH);
          setTimeout(()=> {
            out.state = rpio.LOW;
            rpio.write(out.pin, rpio.LOW);
            if (num == 3) {
              console.log(Date.now() - stamp);
            }
          }, length - 1);
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
