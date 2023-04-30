int sensorValue = 0;
int ledPin = 5;


void setup()
{
  pinMode(A0, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop()
{
  // read and map the value from the sensor
  sensorValue = map(analogRead(A0), 0, 1023, 0, 255);
  analogWrite(ledPin, sensorValue);
}
