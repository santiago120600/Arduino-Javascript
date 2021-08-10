const five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  const potentiometer = new five.Sensor("A3");

  var servo = new five.Servo({
    id: "myservo",
    pin: 10,     
    type: "standard", 
    range: [0,180],  
    fps: 100,       
    invert: false, 
    startat: 90,  
    center: true,
  });

  potentiometer.on("change", () => {
    const {value} = potentiometer;
    angle = ( value / 1023 ) * 180;
    servo.to(angle);
  });


});

