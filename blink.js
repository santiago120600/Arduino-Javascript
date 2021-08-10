var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(10);
  led.blink(100);
});
