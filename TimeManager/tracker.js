function tracker(label,x,y) {
  this.label=label
  this.x=x
  this.y=y
  this.startTime=0
  this.currentTime=0
  this.running=false
  this.seconds=floor(this.currentTime/1000)%60
  this.minutes=floor(this.seconds/60)%60
  this.hours=floor(this.minutes/60)
  this.contTime=0
  this.updateTime=function(){
    if (this.running) {
      this.currentTime=millis()-this.startTime+this.contTime
      this.seconds=floor(this.currentTime/1000)%60
      this.minutes=floor(this.seconds/60)%60
      this.hours=floor(this.minutes/60)
    }
    noStroke()
    fill(130,130,250)
    rect(this.x+2.5,this.y+2.5,145,145,10)
    fill(0)
    textAlign(CENTER)
    textSize(32)
    text(this.format(this.hours)+":"+this.format(this.minutes)+":"+this.format(this.seconds),this.x+75,this.y+50)
    textSize(20)
    text(label,this.x+75,this.y+100)
  }
  this.start=function(){
    this.running=true
    this.startTime=millis()
  }
  this.stop=function(){
    this.running=false
    this.contTime=this.currentTime
  }
  this.switch=function(){
    if (this.running) {
      this.stop()
    } else {
      this.start()
    }
  }
  this.reset=function(){
    this.stop()
    this.startTime=0
    this.currentTime=0
    this.contTime=0
    this.seconds=floor(this.currentTime/1000)%60
    this.minutes=floor(this.seconds/60)%60
    this.hours=floor(this.minutes/60)
  }
  this.tapped=function(x,y) {
    return x>this.x-2.5 && x<this.x+145 && y>this.y-2.5 && y<this.y+145
  }
  this.format=function(num){
    return (num<10?("0"+num):num)
  }
}
