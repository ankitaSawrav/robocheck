console.log("hello")
const positionDirection = {
    NORTH : {
        LEFT: "west",
        RIGHT:"east"
    },
    SOUTH : {
        LEFT: "east" ,
        RIGHT: "west"
    },
    EAST : {
        LEFT: "north" ,
        RIGHT: "south"
    },
    WEST : {
        LEFT: "south" ,
        RIGHT:  "north"
    }
}

const userInput =  document.getElementById('input-textbox')
console.log(userInput,"here")
userInput.addEventListener('change', roboCommand);
let  roboPosition =  {}

function roboCommand(e) {
  const userInputRobo = e.target.value

  console.log(userInputRobo,"robo position")
  const userInputArray = userInputRobo.split(' ')
  console.log(userInputArray[0].toUpperCase())
  

 if(userInputArray[0].toUpperCase() === "PLACE" ){
    const userInputFacingArray = userInputArray[1].split(",")
  
    const x = userInputFacingArray[0]
    const y = userInputFacingArray[1]
    const facing = userInputFacingArray[2].toUpperCase()
    console.log(x,y,facing,"robo details")
    roboPosition = {
        X: x,
        Y :y,
        Facing:facing
    }  
    console.log(roboPosition, "roboPosition") 
 }
 if(userInputArray[0].toUpperCase() === "LEFT" ){
    console.log(roboPosition, "roboPosition") 
    const userInputFacingArray = userInputArray[0].split(",")
    const movement = userInputFacingArray[0].toUpperCase()
    console.log(movement,"robo details")
    roboOldFacing = roboPosition["Facing"]
    console.log(roboOldFacing,"roboOldFacing") 
    console.log(positionDirection[roboOldFacing][movement],"positionDirection[roboOldFacing][movement]")
    let newfacing = positionDirection[roboOldFacing][movement]
    console.log(newfacing,"newfacing")
    roboPosition = {...roboPosition,Facing:newfacing}
    console.log(roboPosition,"Roboposition")
 }
//  if(userInputArray[0].toUpperCase() === "RIGHT" ){
//     console.log(roboPosition, "roboPosition") 
//     const userInputFacingArray = userInputArray[0].split(",")
//     const movement = userInputFacingArray[0].toUpperCase()
//     console.log(movement,"robo details")
//     roboOldFacing = roboPosition["Facing"]
//     console.log(roboOldFacing,"roboOldFacing") 
//     console.log(positionDirection[roboPosition["Facing"]][movement],"positionDirection[roboOldFacing][movement]")
//     let newfacing = positionDirection[roboOldFacing][movement]
//     console.log(newfacing,"newfacing")
//     roboPosition = {...roboPosition,Facing:newfacing}
//     console.log(roboPosition,"Roboposition")
//  }



}
