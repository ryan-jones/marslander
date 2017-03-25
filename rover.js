
var myArray = new Array(10);

for(var i =0; i < 10; i++){
 myArray[i] = new Array(10);
}

var start = 1;

for (var i = 0; i < 10; i++){
 for (var j = 0; j < 10; j++){
   myArray[i][j] = start;
   start = start + 1;

 } //end var j
} // end var i

for (var i = 0; i <10; i++){
 for (var j = 0; j < 10; j++){
   if(myArray[i][j] < 10){
     document.write("0"+myArray[i][j] + "&emsp;" + "&emsp;");
   } else {
   document.write(myArray[i][j] + "&emsp;" + "&emsp;");
 }//end if
 }
 document.write("<br/>");
 document.write("<br/>");
}



var rover = {
  position: [0,0],
  direction: 'N',
}

function myRover(rover){

  console.log("Initial Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]" + " Facing: " + rover.direction)
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  }
}


function goBackward(rover){
  switch(rover.direction) {
    case 'N':
     rover.position[0]--
     break;
    case 'E':
     rover.position[1]--
     break;
    case 'S':
     rover.position[0]++
     break;
    case 'W':
     rover.position[1]++
     break;
  } //end switch
} //end goBackward(rover)


function turnLeft(rover){
  switch(rover.direction){
    case 'N':
    rover.direction = "W"
     break;
    case 'E':
    rover.direction = "N"
     break;
     case 'S':
     rover.direction = "E"
     break;
    case 'W':
    rover.direction = "S"
    break;
  } //end switch
} //end turnLeft


function turnRight(rover){
  switch(rover.direction) {
    case 'N':
    rover.direction = "E"
    break;
    case 'E':
     rover.direction = "S"
     break;
    case 'S':
     rover.direction = "W"
     break;
    case 'W':
     rover.direction = "N"
     break;
  } //end switch
} //end turnRight


function r() {
  turnRight(rover);
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]" + " Facing: " + rover.direction);

} //end r()

function l(){
  turnLeft(rover);
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]" + " Facing: " + rover.direction);

} //end l()

function f() {
  goForward(rover);
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]" + " Facing: " + rover.direction);

} //end f()

function b() {
  goBackward(rover);
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]" + " Facing: " + rover.direction);

} //end b()


var movement = ["f", "b", "b", "f", "f", "f", "f", "l", "f", "r", "b", "r", "f", "f", "l", "l", "b", "b"];


function complexMov(rover) {

  for (i = 0; i <= movement.length; i++){

    if (i === "f"){
      goForward(rover);
      return rover.position;

    } else if (i === "b"){
      goBackward(rover);
      return rover.position;

    } else if (i === "l"){
      turnLeft(rover);
      return rover.direction;

    } else if (i === "r") {
      turnRight(rover);
      return rover.direction;
    } //end if

  } //end for var i

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]" + " Facing: " + rover.direction);
} //end complexMov(rover)


myRover(rover);
b();
l();
f();
r();
myRover(rover);
complexMov(rover);
