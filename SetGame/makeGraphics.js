function drawCard(number, shape, color, shade, options) {
  var colors = [[255,0,0],[0,255,0],[0,0,255]]
  var width;
  var height;
  var raduius;
  if (options) {
    width = options.width;
    height = options.height;
    radius = options.radius;
  } else {
    width = 100;
    height = 200;
    radius = 10;
  }
  fill(255)
  stroke(20,120,180)
  strokeWeight(5);
  rect(0, 0, width, height,radius);

  noStroke();
  fill(colors[color][0],colors[color][1],colors[color][2]);
  var x = width/2;
  var y = height/(1+number);
  for (var i = 0; i < number; i++) {
    rect(x - width/4,y - height/12,width/2,height/6)
    y += height/(1+number);
  }
}

function drawBoard() {

}
