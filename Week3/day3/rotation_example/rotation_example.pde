/* 
    things to try:
    - running the code as-is
    - commenting out push + pop lines
    - modifying the rotate function
    - using the translate function
*/

int seedNum;


void setup() {
  size(400, 400);
  colorMode(HSB);
  noStroke();

  seedNum = int(random(400));
}

void draw() {
  randomSeed(seedNum);
  random(360);
  background(255);
  fill(random(360), 255, 255, random(255));

  //push();
  rotate(millis()*0.001);
  rect(100, 100, 100, 100);
  //pop();
  
  //push();
  rotate(millis()*(0.001));
  rect(200, 200, 100, 100);
  //pop();
}
