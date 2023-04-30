import processing.serial.*;

// Variables goes here
Serial myPort; // serial port variable
int xReading = 0; // reading of x-axis of the accelerometer
int yReading = 0; // reading of y-axis of the accelerometer
int zReading = 0; // reading of z-axis of the accelerometer

// TODO #1: Write ranges here from Arduino calibration
// uncomment out the following lines, and replace #s below
//int xMin = #;
//int xMax = #;
//int yMin = #;
//int yMax = #;
//int zMin = #;
//int zMax = #;

// TODO #3: probably find some way to persist your reading data to make it accessible in draw,
// eg add more variables here


void setup() {
  size(600, 600); //set size of your sketch

  // TODO #0: connect to the port that matches your Arduino port
  println(Serial.list()); //see list of available serial ports
  myPort = new Serial(this, Serial.list()[1], 9600); // connect to port found in Arduino sketch
  myPort.bufferUntil('\n'); //buffer until a new line character received
}

// TODO #4: draw something here, using your mapped data
void draw() {
  background(0);
}

// TODO #2: `map` raw input here, using your range variables above
void serialEvent(Serial myPort) {
  
  // read from the serial port until a new line
  String accelInput = myPort.readStringUntil('\n');

  if (accelInput != null) { // check to see if serial port is empty
    accelInput = trim(accelInput); // trim any special characters or whitespace
    String axis = accelInput.substring(0, 1); // take first character from the accelerometer output

    if (axis.equals("x")) { // check if this is an x-axis reading
      xReading = int(accelInput.substring(2));
      println("x:" + xReading); // write the reading to the console
    } else if (axis.equals("y")) { // check if this is a y-axis reading
      yReading = int(accelInput.substring(2));
      println("y:" + yReading); // write the reading to the console
    } else if (axis.equals("z")) {  // must be a z-axis reading
      zReading = int(accelInput.substring(2));
      println("z:" + zReading); // write the reading to the console
    }
  }
}
