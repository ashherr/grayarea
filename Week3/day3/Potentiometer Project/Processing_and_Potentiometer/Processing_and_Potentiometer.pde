import processing.serial.*;

Serial myPort; // serial port variable
float x = 0; // x-position of the circle


void setup() {
  size(400, 400); // set the size of the window
  noStroke(); // remove stroke from shapes
  println(Serial.list()); //see list of available serial ports
  myPort = new Serial(this, Serial.list()[1], 9600); //connect to port found in Arduino sketch

  myPort.bufferUntil('\n'); //buffer until a new line character received
}

void draw() {
  background(50); // set background to a dark gray

  // draw a circle to the window
  fill(120, 20, 200);
  ellipse(x, height/2, 200, 200);
}

void serialEvent(Serial myPort) {
  // read from the serial port until a new line
  String potInput = myPort.readStringUntil('\n'); // read until new line

  if (potInput != null) { // check to see if serial port is empty
    potInput = trim(potInput); // trim any special characters or whitespace
    
    // convert the string to a number and
    // set its value from 0 to the width of the window
    x = map(float(potInput), 0, 1023, 0, width);
    
    //println(x); // write the number to the console
  }
}
