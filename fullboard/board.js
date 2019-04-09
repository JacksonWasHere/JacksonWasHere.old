function Board(size,text) {
  this.size = size;
  this.gameBoard = [];
  this.drawSize = 300/this.size;
  this.placed = false;
  this.ballLoc = [0,0]

  this.map = {
    "▓":0,
    " ":1,
    "*":2,
    "-":3,
    "|":4,
    "L":5,
  };

  for (var i = 0; i < this.size; i++) {
    this.gameBoard.push([])
    for (var j = 0; j < this.size; j++) {
      var curChar = text[this.size*j + i];
      this.gameBoard[i][j] = this.map[curChar];
    }
  }

  this.makeMove = function(x,y) {
    if (!this.placed) {
      this.gameBoard[x][y] = 2;
      this.placed = true;
      this.ballLoc = [x,y];
    } else {
      var xdir = 0;
      var ydir = 0;



      if (x > this.ballLoc[0]) {
        xdir = 1;
      } else if (x < this.ballLoc[0]) {
        xdir = -1;
      } else if (y > this.ballLoc[1]) {
        ydir = 1;
      } else if (y < this.ballLoc[1]){
        ydir = -1;
      }
      this.gameBoard[this.ballLoc[0]][this.ballLoc[1]] = 1;
      while (this.gameBoard[this.ballLoc[0]][this.ballLoc[1]] == 1) {
        this.gameBoard[this.ballLoc[0]][this.ballLoc[1]] = 3;
        this.ballLoc[0] += xdir
        this.ballLoc[1] += ydir
      }

      this.ballLoc[0] -= xdir
      this.ballLoc[1] -= ydir

      this.gameBoard[this.ballLoc[0]][this.ballLoc[1]] = 2;
    }
  }

  this.getState = function(){
    var state = 0;

    for (var i = 0; i < this.gameBoard.length; i++) {
      for (var j = 0; j < this.gameBoard[i].length; j++) {
        if(this.gameBoard[i][j] == 1){
          state = 1;
        }
      }
    }

    if (state != 0) {
      var x = 1
      var y = 0
      var prev = state
      state = 2
      console.log(this.gameBoard,x,y);
      for (var i = 0; i < 4; i++) {
        if (this.gameBoard[this.ballLoc[0]+x][this.ballLoc[1]+y]==1) {
          state = prev
        }
        var temp = x
        x = y
        y = -temp
      }
    }

    return state;
  }

  this.draw = function() {
    for (var i = 0; i < this.gameBoard.length; i++) {
      for (var j = 0; j < this.gameBoard.length; j++) {
        fill(255)
        rect(i*this.drawSize,j*this.drawSize,this.drawSize,this.drawSize)
        if (this.gameBoard[i][j] == 0) {
          fill(0)
          ellipse(i*this.drawSize+this.drawSize/2,j*this.drawSize+this.drawSize/2,this.drawSize,this.drawSize)
        } else if (this.gameBoard[i][j] == 2) {
          fill(0,80,150)
          rect(i*this.drawSize,j*this.drawSize,this.drawSize,this.drawSize)
        } else if (this.gameBoard[i][j] == 3) {
          fill(0,220,250)
          rect(i*this.drawSize,j*this.drawSize,this.drawSize,this.drawSize)
        }
      }
    }
  }
}
