function setup() {
  createCanvas(400, 400);
  colorMode(HSB,width,height,30);
}

function draw() {
  background(255);

  for (var x = random(width); x < width+10; x = x + 10) {
    line(x, height/2, x+100, height/2-75);
    stroke(x, 200, 255);
  }
}
