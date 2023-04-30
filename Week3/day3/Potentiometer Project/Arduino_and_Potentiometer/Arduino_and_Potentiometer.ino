int sensorPin=0; // potentiometer pin
int val; // value of potentiometer reading


void setup(){
  Serial.begin(9600);
}

void loop(){
  val = analogRead(sensorPin); // read potentiometer
  Serial.println(val); // send value to serial port
  
  delay(10); // small delay to help with reading the sensor
}
