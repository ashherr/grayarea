import processing.serial.*;

// Variables goes here
Serial myPort; // serial port variable
int xReading = 0; // reading of x-axis of the accelerometer
int yReading = 0; // reading of y-axis of the accelerometer
int zReading = 0; // reading of z-axis of the accelerometer

// TODO #1: Write ranges here from Arduino calibration
// uncomment out the following lines, and replace #s below

// example solution: uses my calibrated Arduino's approx. ranges
// you will want to use your own from your calibrated Arduino
int xMin = 150;
int xMax = 800;
int yMin = 300;
int yMax = 800;
int zMin = 300;
int zMax = 800;

// TODO #3: probably find some way to persist your reading data to make it accessible in draw,
// eg add more variables here

// example solution: names new variables to indicate that they are mapped (not raw) values
float mappedX = 0;
float mappedY = 0;
float mappedZ = 0;


void setup() {
  size(600, 600); //set size of your sketch

  // TODO #0: connect to the port that matches your Arduino port
  // you can also specify the name of the port in text instead of using Serial.list()[index]
  println(Serial.list()); //see list of available serial ports
  myPort = new Serial(this, Serial.list()[1], 9600); // connect to port found in Arduino sketch
  myPort.bufferUntil('\n'); //buffer until a new line character received
}

// TODO #4: draw something here, using your mapped data
void draw() {

  // example solution: resets background to black every frame
  // and draws a magenta circle that changes size with mappedZ
  background(0);
  fill(255,0,255);
  ellipse(mappedX, mappedY, mappedZ, mappedZ);
}

// TODO #2: `map` raw input here, using your range variables above
void serialEvent(Serial myPort) {
  
  // read from the serial port until a new line
  String accelInput = myPort.readStringUntil('\n');

  if (accelInput != null) { // check to see if serial port is empty
    accelInput = trim(accelInput); // trim any special characters or whitespace
    String axis = accelInput.substring(0, 1); // take first character from the accelerometer output

    // example solution: sets mappedX, mappedY, and mappedZ using accelInput
    if (axis.equals("x")) { // check if this is an x-axis reading
      xReading = int(accelInput.substring(2));
      println("x:" + xReading); // write the reading to the console
      mappedX = map(xReading, xMin, xMax, 0, width);
    } else if (axis.equals("y")) { // check if this is a y-axis reading
      yReading = int(accelInput.substring(2));
      println("y:" + yReading); // write the reading to the console
      mappedY = map(yReading, yMin, yMax, 0, height);
    } else if (axis.equals("z")) {  // must be a z-axis reading
      zReading = int(accelInput.substring(2));
      println("z:" + zReading); // write the reading to the console
      mappedZ = map(zReading, zMin, zMax, 0, 400);
    }
  }
}
