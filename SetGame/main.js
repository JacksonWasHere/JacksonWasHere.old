var cardWidth = 5
var cardHeight = 7
var cardSize = 20

function setup() {
  createCanvas(cardWidth * 5 * cardSize,cardHeight * 3 * cardSize)
}

function draw() {
  drawCard(0,0,0,0,{
    width:cardWidth*cardSize,
    height:cardHeight*cardSize,
    radius:10
  })
}
