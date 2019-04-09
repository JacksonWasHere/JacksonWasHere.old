var resetButton
var addButton
var settings
var deleteButton
var timers=[]
var lab
var deleteMode=false
function setup(){
  createCanvas(600,600)
  background(120,250,120)
  //timers.push(new tracker("Test",0,0))
  addButton=createButton("New")
  addButton.mousePressed(addTimer)
  addButton.position(width+8,8)
  resetButton=createButton("Reset")
  resetButton.mousePressed(reset)
  resetButton.position(width+8,28)
  deleteButton=createButton("Delete Mode")
  deleteButton.mousePressed(function(){
    deleteMode = !deleteMode
    if (deleteMode) {
      deleteButton.html("Normal Mode")
    } else {
      deleteButton.html("Delete Mode")
    }
  })
  deleteButton.position(width+8,48)
}
function draw(){
  view()
  update()
}
var view=function(){
 background(120,250,120)
}
var settings=function(){

}
function reset() {
  for (var i = 0; i < timers.length; i++) {
    timers[i].reset()
  }
}
function update(){
  for (var i = 0; i < timers.length; i++) {
    timers[i].updateTime()
  }
}
function mousePressed() {
  if (deleteMode) {
    for (var i = 0; i < timers.length; i++) {
      if(timers[i].tapped(mouseX,mouseY)){
        if (confirm("Are you sure?")) {
          timers.splice(i,1)
        }
      }
    }
    for (var i = 0; i < timers.length; i++) {
      timers[i].x=(i)%4*150
      timers[i].y=floor((i)/4)*150
    }
  } else {
    var wasIn=false
    var newInd
    for (var i = 0; i < timers.length; i++) {
      if(timers[i].tapped(mouseX,mouseY)){
        timers[i].switch()
        wasIn=true
        newInd=i
      }
    }
    if (wasIn) {
      for (var i = 0; i < timers.length; i++) {
        if (i!=newInd) {
          timers[i].stop()
        }
      }
    }
  }
}
function addTimer() {
  if (timers.length>=16) {
    alert("Too many timers")
  } else {
    var person = prompt("Names of timer (30 character limit)", "");
    if (person.length>=30) {
      alert("Too long")
    } else {
      timers.push(new tracker(person,timers.length%4*150,floor(timers.length/4)*150))
    }
  }
}
