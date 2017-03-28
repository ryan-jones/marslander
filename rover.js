var myRover = {
  position      : [0,0],
  direction     : "N",
  commands      : ["l", "r", "f", "b"],
  planetGridX   : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

};



var roverTwo = {
  position: [5,5],
  direction: "S",
  commands      : ["l", "r", "f", "b"],
  planetGridX   : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],


};




//******************* VARIABLES AREA *****************************************

var commandInput;
var count = 0;
var finalCommand;



//Measuring our planet
var counterGridX = myRover.planetGridX.length;
var newDirectionStr = "New Rover Direction: ";



//**************** START OF FUNCTIONS AREA ***********************************


/*var myArray = new Array(10); //creates two-dimension 10x10 grid

for(var i =0; i < 10; i++){
 myArray[i] = new Array(10);
}

var start = 1;

for (var i = 0; i < 10; i++){
 for (var j = 0; j < 10; j++){
   myArray[i][j] = start;
   start = start + 1;   //incrementally provides a numerical value to each grid point

 } //end var j
} // end var i


for (var i = 0; i <10; i++){
 for (var j = 0; j < 10; j++){
   if(myArray[i][j] < 10){
     document.write("0"+myArray[i][j] + "&emsp;" + "&emsp;"); //display "01-09" onto the screen
   } else {
   document.write(myArray[i][j] + "&emsp;" + "&emsp;");  //display all values between 11-100
 }//end if
 }
 document.write("<br/>");
 document.write("<br/>"); // adds a break in the html
}   */






//Changing the direction depending on the finalCommand
function getDirection() {

  if (finalCommand === "l"){
    switch (myRover.direction){ //, roverTwo.direction) {
      case "N":

        myRover.direction = "W";
        //roverTwo.direction = "W";
        console.log(newDirectionStr + myRover.direction + ", " + newDirectionStr + roverTwo.direction);
        break;

      case "W":

        myRover.direction = "S";
        //roverTwo.direction = "S";
        console.log(newDirectionStr + myRover.direction + ", " + newDirectionStr + roverTwo.direction);
        break;

      case "S":

        myRover.direction = "E";
        //roverTwo.direction = "E";
        console.log(newDirectionStr + myRover.direction + ", " + newDirectionStr + roverTwo.direction);
        break;

      case "E":

        myRover.direction = "N";
        //roverTwo.direction = "N";
        console.log(newDirectionStr + myRover.direction + ", " + newDirectionStr + roverTwo.direction);
        break;
    } //end switch (myRover.direction)


 //Second Rover for func getDirection()**************************
    switch (roverTwo.direction) {
      case "N":

        roverTwo.direction = "W";
        return roverTwo.direction;


      case "W":

        roverTwo.direction = "S";
        return roverTwo.direction;


      case "S":

        roverTwo.direction = "E";
        return roverTwo.direction;


      case "E":

        roverTwo.direction = "N";
        return roverTwo.direction;

     } //end switch (roverTwo.direction)  */

  } // end if === "l"


  if (finalCommand === "r") {
    switch (myRover.direction) {
      case "N":

        myRover.direction = "E";
        console.log(newDirectionStr + myRover.direction + ", " + newDirectionStr + roverTwo.direction);
        break;

      case "E":

        myRover.direction = "S";
        console.log(newDirectionStr + myRover.direction + ", " + newDirectionStr + roverTwo.direction);
        break;

      case "S":

        myRover.direction = "W";
        console.log(newDirectionStr + myRover.direction + ", " + newDirectionStr + roverTwo.direction);
        break;

      case "W":

        myRover.direction = "N";
        console.log(newDirectionStr + myRover.direction + ", " + newDirectionStr + roverTwo.direction);
        break;
    } //end switch (myRover.direction)


    //***********roverTwo "r"************

     switch (roverTwo.direction) {
      case "N":

        roverTwo.direction = "E";
        return roverTwo.direction;


      case "E":

        roverTwo.direction = "S";
        return roverTwo.direction;

      case "S":

        roverTwo.direction = "W";
        return roverTwo.direction;

      case "W":

        roverTwo.direction = "N";
        return roverTwo.direction;
      } //end switch (roverTwo.direction)
  } //end if === "r"

  return myRover.direction;

} //end getDirection()




//Make the Rover move depending on the direction and if it is Forwards or Backwards
function moveRover() {

  if (myRover.position === roverTwo.position){
    console.log("The rovers are going to crash!");
  } else {

  if (finalCommand === "f") {
    switch(myRover.direction) {

      case 'N':
        myRover.position[0]++;
        break;

      case 'E':
        myRover.position[1]++;
        break;

      case 'S':
        myRover.position[0]--;
        break;

      case 'W':
        myRover.position[1]--;
        break;
    } //end switch(myRover.direction)

    switch(roverTwo.direction) {
      case 'N':
        roverTwo.position[0]++;
        break;
      case 'E':
        roverTwo.position[1]++;
        break;
      case 'S':
        roverTwo.position[0]--;
        break;
      case 'W':
        roverTwo.position[1]--;
        break;
     }//end switch(roverTwo.direction)

  } //end if (finalCommand ==="f")

  if (finalCommand === "b") {
    switch(myRover.direction) {

      case 'N':
        myRover.position[0]--;
        break;

      case 'E':
        myRover.position[1]--;
        break;

      case 'S':
        myRover.position[0]++;
        break;

      case 'W':
        myRover.position[1]++;
        break;

    } //end switch(myRover.direction)
    switch(roverTwo.direction) {
      case 'N':
        roverTwo.position[0]--;
        break;

      case 'E':
        roverTwo.position[1]--;
        break;

      case 'S':
        roverTwo.position[0]++;
        break;

      case 'W':
        roverTwo.position[1]++;
        break;
    } //end switch(roverTwo.direction)
  } //ends if rover 1 and 2 =!
  } //end if (finalCommand ==="b")

//**************************   Obstacles ***********************************
  if (myRover.position[1] === 4) {
    if (myRover.position[0] === 1 || myRover.position[0] === 7){
    console.log("Rover One just hit a rock at [" + myRover.position[0] + ",  "+ myRover.position[1] + "]!");
  }

  } else if (myRover.position[0] === 9 ) {
     if (myRover.position[1] === 2 || myRover.position[1] === 7){
    console.log("Rover One\'s camera recorded signs of something moving before going dark at [" + myRover.position[0] + ", " + myRover.position[1] + "]!");

     }

  } else if (myRover.position[1]=== 7){
     if (myRover.position[0] === 3 || myRover.position[0]){
    console.log("Rover One: No sunlight here! The solar-powered battery is dead at [" + myRover.position[0] + ",  " + myRover.position[1] + "]!");
     }

  } else if (myRover.position[0] === 1 ){
     if (myRover.position[1] === 4 || myRover.position[1] === 9){
    console.log("Rover One got stuck in a ditch at [" + myRover.position[0] + ",  "+ myRover.position[1] + "]");
     }

  } else {
  return myRover.position;
  }

//********************************** Rover Two **********
 if (roverTwo.position[1] === 4) {
    if (roverTwo.position[0] === 1 || roverTwo.position[0] === 7){
    console.log("Rover Two just hit a rock at [" + roverTwo.position[0] + ",  "+ roverTwo.position[1] + "]!");
    }

  } else if (roverTwo.position[0] === 9 ) {
     if (roverTwo.position[1] === 2 || roverTwo.position[1] === 7){
    console.log("Rover Two\'s camera recorded signs of something moving before going dark at [" + myRover.position[0] + ", " + myRover.position[1] + "]!");
     }

  } else if (roverTwo.position[1]=== 7){
     if (roverTwo.position[0] === 3 || roverTwo.position[0]){
    console.log("Rover Two: No sunlight here! The solar-powered battery is dead at [" + roverTwo.position[0] + ",  " + roverTwo.position[1] + "]!");
     }

  } else if (roverTwo.position[0] === 1 ){
     if (roverTwo.position[1] === 4 || roverTwo.position[1] === 9){
    console.log("Rover Two got stuck in a ditch at [" + roverTwo.position[0] + ",  "+ roverTwo.position[1] + "]");
     }

  } else {
  return roverTwo.position;
}

} //end moveRover()



//Making the planet "spherical"

function roundPlanet() {

  if (myRover.position[0] < 0) {

    myRover.position[0] = 9;

  } else if (myRover.position[0] > (counterGridX - 1)) {

    myRover.position[0] = 0;

  }

  if (myRover.position[1] < 0) {

    myRover.position[1] = 9;

  } else if (myRover.position[1] > (counterGridX - 1)) {

    myRover.position[1] = 0;

  }

 if (roverTwo.position[0] < 0) {

    roverTwo.position[0] = 9;

  } else if (roverTwo.position[0] > (counterGridX - 1)) {

    roverTwo.position[0] = 0;

  }

  if (roverTwo.position[1] < 0) {

    roverTwo.position[1] = 9;

  } else if (roverTwo.position[1] > (counterGridX - 1)) {

    roverTwo.position[1] = 0;

  }


} //end roundPlanet()




//***************** PROGRAM START *************************

//Giving the start position and direction

var startInformation = console.log("Start position for Rover One: " + "[" + myRover.position + "]" + "  Direction: [" + myRover.direction + "]   |   Start position for Rover Two: [" + roverTwo.position + "]   Direction: [" + roverTwo.direction + "]");

//Asking for the orders (commands)
  commandInput = prompt("Where should your rover go? The commands are: \n\nL: Left; \nR: Right; \nF: Forward; \nB: Backward;").toLowerCase();

//Returning the commandInput values
while (count < commandInput.length) {

//Verifying if the commandInput is one of the roverCommands ("l", "r", "f", "b")

 if (commandInput[count] === myRover.commands[0]){

   finalCommand = myRover.commands[0]; //storing the current commandInput inside a var

 } else if (commandInput[count] === myRover.commands[1]){

   finalCommand = myRover.commands[1];

 } else if (commandInput[count] === myRover.commands[2]){

   finalCommand = myRover.commands[2];

 } else if (commandInput[count] === myRover.commands[3]){

   finalCommand = myRover.commands[3];

 } else {

   //Message of error ("You used a wrong command!")
   console.log("Sorry, the letter " + "'" + commandInput[count] + "'" + " isn't an order.\n \nThe commands are: \n\nL: Left; \nR: Right; \nF: Forward; \nB: Backward; \n\nWaiting for new orders");

 break;
 }

    finalCommand = commandInput[count];  //???????????????????


    //Functions to get direction ("N", "E", "S", "W") in here
    if (finalCommand === "l" || finalCommand === "r") {
      getDirection();
    }

    //Functions to move the Rover
    if (finalCommand === "f" || finalCommand === "b") {
      moveRover();
    }

    //Function to make the planet spherical
    roundPlanet();

    //Inform the user about the Rover position in Mars
    if (commandInput[count] === "f" || commandInput[count] === "b") {
      console.log("New position for Rover One: " + "[" + myRover.position + "]" + "  Direction: [" + myRover.direction + "]   |   New position for Rover Two: [" + roverTwo.position + "]   Direction: [" + roverTwo.direction + "]");
    }

    count++;   // this is to change the var count so that the while loop goes into effect?




}

var countInverse = commandInput.length;    //point of this?

	while (countInverse > -1) {

    if(countInverse === 0) {
    console.log("Current position for Rover One: " + "[" + myRover.position + "]" + "  Direction: [" + myRover.direction + "]   |   Current position for Rover Two: [" + roverTwo.position + "]   Direction: [" + roverTwo.direction + "]");
    }
    countInverse--;
}




//****************** END OF THE PROGRAM **************************

//get the rover to "stop" at an Obstacle
// get both rovers to move and avoid hitting each other
// prompt the commandInput again so that the rover can be moved again
// have the position marked as a numbered point on the displayed grid


