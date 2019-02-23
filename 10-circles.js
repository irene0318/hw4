function setup() {
  createCanvas(400, 400);
}

var x = [10,30,40,50]; // new empty array
var y = [10,10,10,10]; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length+10; i = i + 10) {
    ellipse(x[i], y[i], 1 + (x.length - i));
  }

  x = x.slice(-110); // keep the last 50 x values
  y = y.slice(-110); // keep the last 50 y values
}
