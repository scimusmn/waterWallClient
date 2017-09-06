obtain(['ws'], ({ Server })=> {
  if (!window.wsServer) {
    window.wsServer = new Server({ port: 8080 });
    var webSock = null;

    wsServer.broadcast = function(data) {
      wsServer.clients.forEach(function each(client) {
        client.send(data);
      });
    };

    var orderedClients = [];

    var listeners = {};

    wsServer.addListener = (evt, cb)=> {
      listeners[evt] = cb;
    };

    wsServer.send = (_id, obj)=> {
      orderedClients[_id].send(JSON.stringify(obj));
    };

    wsServer.on('connection', function(ws) {
      ws.on('message', function(message) {
        var data = JSON.parse(evt.data);
        _this.onMessage(data);
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            if (key == '_id') {
              ws._id = data._id;
              orderedClients[data._id] = ws;
            } else if (key == 'timeSync') {
              ws.send(JSON.stringify({ serverTime: Date.now() }));
            } else if (key in listeners) listeners[key](data[key]);
          }
        }
      });

      ws.on('close', function() {
      });

      ws.on('error', function(error) {
      });
    });
  }

  exports.wss = wsServer;

  provide(exports);
});
