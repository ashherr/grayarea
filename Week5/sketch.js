let video;
let prevFrame;
let threshold = 30;
let synth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  prevFrame = createImage(width, height);
  prevFrame.copy(video, 0, 0, width, height, 0, 0, width, height);
  prevFrame.filter(GRAY);

  synth = new Tone.PolySynth(Tone.Synth).toDestination();
  Tone.Transport.start();
}

function draw() {
  background(0);
  video.loadPixels();
  prevFrame.loadPixels();

  let movement = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;

      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      let gray = (r + g + b) / 3;
      let prevGray = prevFrame.pixels[index];

      if (Math.abs(gray - prevGray) > threshold) {
        movement++;
      }
    }
  }

  let movementRatio = movement / (width * height);
  let backgroundColor = map(movementRatio, 0, 0.1, 0, 255);
  background(backgroundColor, 50, 50);


  let frequency = map(movementRatio, 0, 0.1, 300, 1000);
  
  if (movementRatio > 0.005) {
    synth.triggerAttackRelease(frequency, '8n');
  }

  prevFrame.copy(video, 0, 0, width, height, 0, 0, width, height);
  prevFrame.filter(GRAY);

  // Draw Lissajous curve visualizer
  push();
  translate(width / 2, height / 2);
  let t = frameCount * 0.01;
  let a = map(movementRatio, 0, 0.1, 1, 5);
  let b = map(movementRatio, 0, 0.1, 1, 5);
  let A = width / 4;
  let B = height / 4;
  let delta = map(movementRatio, 0, 0.1, 0, PI);
  stroke(255);
  noFill();
  beginShape();
  for (let i = 0; i < TWO_PI; i += 0.01) {
    let x = A * -sin(2 * a * i + delta);
    let y = B * sin(2 * b * i);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();



}
