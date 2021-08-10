const five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var servo = new five.Servo({
    id: "MyServo",     // User defined id
    pin: 10,           // Which pin is it attached to?
    type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
    range: [0,180],    // Default: 0-180
    fps: 100,          // Used to calculate rate of movement between positions
    invert: false,     // Invert all specified positions
    startAt: 90,       // Immediately move to a degree
    center: true,      // overrides startAt if true and moves the servo to the center of the range
  });
    // Set horn to 0degrees
    servo.min();
    // Set the horn to 90degrees
    //servo.to(90);

    // Angle change takes 500ms to complete
    //servo.to(90, 500);

    // Angle change takes 500ms to complete over 10 steps
    servo.to(90, 500, 10);
});
