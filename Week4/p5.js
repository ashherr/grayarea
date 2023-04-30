function setup() {
    createCanvas(windowWidth, windowHeight);
    background (random(0,255));
  }
  function draw() {
    rect (random(width),random(height), random(0,200) , random(0,200), random(0,300));
    fill( random(width), random(height), random(0,255),  random(0,100)  );
    
  }