function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width / 2, height / 2, 1, 1);
  myShape(width/3, height/3, 2);
  myShape(width * 2/3, height * 2/3, .5)

  for(let i = 0; i < 10; i++)
    myShape(i * 50 + 30, 50, .5, i)
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
}

function myShape(x, y, s, a) {
  // make this function more interesting
  var w, h
  w = 50;
  h = 50;

  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);
  rotate(a);
  fill("pink")
  ellipse(0, 0, w, h); // simple ellipse at the translated origin (0,0)
  arc(20, 8, 20, 10, PI + HALF_PI, HALF_PI) // right arm
  arc(-20, 8, 20, 10, HALF_PI, PI + HALF_PI) // left arm
  fill("red")
  ellipse(-10, 20, 10, 20) // left foot
  ellipse(10, 20, -10, 20) // right foot
  ellipse(-15, -5, 8, 3) // left blush
  ellipse(15, -5, 8, 3) // right blush
  fill(0)
  ellipse(-6, -6, 5, 15) // left eye
  ellipse(6, -6, 5, 15) // right eye
  fill(255)
  ellipse(6, -8, 4, 8) // right eye shine
  ellipse(-6, -8, 4, 8) // left eye shine
  noFill()
  arc(.5, 0, 4, 4, TWO_PI, PI) // mouth

  
  pop(); // dispose of the layer
}
