/*
  Button and Processing

  Sends a message to a Processing sketch when the button is pressed.

  The circuit:
  - pushbutton attached to pin 2 from +5V
  - 10K resistor attached to pin 2 from ground

  created 2005
  by DojoDave <http://www.0j0.org>
  modified 30 Aug 2011
  by Tom Igoe
  modified again 6 September 2018

  This example code is in the public domain, and formed the basis of the project.

  http://www.arduino.cc/en/Tutorial/Button
*/

// constants won't change. They're used here to set pin numbers:
const int buttonPin = 2;     // the number of the pushbutton pin

// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);

  // set up the serial connection
  Serial.begin(9600);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // Send this to Processing
    Serial.println("pressed");
  } else {
    // Send this to Processing
    Serial.println("not pressed");
  }
}
