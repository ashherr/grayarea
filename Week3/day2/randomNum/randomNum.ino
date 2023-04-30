int randomNum = 8;

void setup() {
  Serial.begin(9600);
}

void loop() {
  // not seeded, so only semi-random
  randomNum = random(0, 255);
  Serial.println("randomNum:");
  Serial.println(randomNum);
  delay(10000);
}
