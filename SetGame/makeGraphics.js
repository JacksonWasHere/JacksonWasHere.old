function drawCard(number, shape, color, shade, options) {
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
    radius = 10
  }
  rect(0, 0, width, height)
}

function drawBoard() {

}
