import processing.serial.*;

Serial myPort; // serial port variable
color c; // color variable


void setup() {
  size(400, 400); // set the size of the window
  println(Serial.list()); //see list of available serial ports
  myPort = new Serial(this, Serial.list()[1], 9600); //connect to port found in Arduino sketch

  myPort.bufferUntil('\n'); //buffer until a new line character received
  noStroke(); // remove stroke from shapes
  c = color(255, 0, 0); // set default color to red
}

void draw() {
  background(50);

  // draw a circle to the window
  fill(c);
  ellipse(width/2, height/2, 300, 300);
}

void serialEvent(Serial myPort) {
  // read from the serial port until a new line
  String buttonInput = myPort.readStringUntil('\n');

  if (buttonInput != null) { // see if input is empty
    buttonInput = trim(buttonInput); // remove white space
    println(buttonInput);  // write input to console

    if (buttonInput.equals("pressed")) {
      // set the color to green
      c = color(0, 255, 0);
    } else if (buttonInput.equals("not pressed")) {
      // set the color to red
      c = color(255, 0, 0);
    }
  }
}
