function game(wid,hght,cSize,x,y) {
  this.width=wid
  this.height=hght
  this.cellSize=cSize
  console.log(this.cellSize);
  this.x=x
  this.y=y
  this.grid=[]
  this.buffer=1
  this.setup=function(){
    this.grid=[]
    for (var i = 0; i < this.width; i++) {
      this.grid[i]=[]
      for (var j = 0; j < this.height; j++) {
        this.grid[i][j]=this.width*i+j+1
      }
    }
    this.emptyX=wid-1
    this.emptyY=hght-1
  }
  this.inBounds=function(num,grid){
    return num > -1 && num < grid.length
  }
  this.move=function(xDir,yDir){
    var isValid=false
    if (this.inBounds(this.emptyX+xDir,this.grid) && this.inBounds(this.emptyY+yDir,this.grid[0])) {
      var temp=this.grid[this.emptyX][this.emptyY]
      this.grid[this.emptyX][this.emptyY]=this.grid[this.emptyX+xDir][this.emptyY+yDir]
      this.grid[this.emptyX+xDir][this.emptyY+yDir]=temp
      this.emptyX+=xDir
      this.emptyY+=yDir
      isValid=true
    }
    return isValid
  }
  this.isSolved=function(){
    for (var i = 0; i < this.width; i++) {
      for (var j = 0; j < this.height; j++) {
        if(this.grid[i][j]!=this.width*i+j+1){
          return false
        }
      }
    }
    return true
  }
  this.drawGame=function(){
    for (var i = 0; i < this.grid.length; i++) {
      for (var j = 0; j < this.grid[i].length; j++) {
        var curNum=this.grid[i][j]
        this.drawSquare(curNum,j*this.cellSize+j*this.buffer+this.x,i*this.cellSize+i*this.buffer+this.y)
      }
    }
  }
  this.drawSquare=function(num,x,y){
    if (num==this.width*this.height) {
      return
    }
    fill(85, 255, 76)
    rect(x,y,this.cellSize,this.cellSize,this.cellSize/5)
    textAlign(CENTER,CENTER)
    fill(0)
    textSize(this.cellSize/2)
    text(num,x+this.cellSize/2,y+this.cellSize/2)
  }
}


function conts() {
  this.up="W"
  this.left="A"
  this.down="S"
  this.right="D"
  this.scramble=" "
}


function solve(scram,time,penalty,moves) {
  this.scramble=scram
  this.time=time
  this.display=formatTime(this.time)
  this.moves=moves
  this.penalty=penalty
  if (this.penalty=="dnf") {
    this.display="dnf"
  } else if (this.penalty=="+2") {
    this.time+=2000
    this.display=this.time+"+"
  }
}
