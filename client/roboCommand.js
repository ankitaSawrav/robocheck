
const positionDirection = {
    NORTH: {
        LEFT: "WEST",
        RIGHT: "EAST"
    },
    SOUTH: {
        LEFT: "EAST",
        RIGHT: "WEST"
    },
    EAST: {
        LEFT: "NORTH",
        RIGHT: "SOUTH"
    },
    WEST: {
        LEFT: "SOUTH",
        RIGHT: "NORTH"
    }
}


function roboCommand(userInputRobo,roboPosition) { 
   
    // const userInput =  document.getElementById('input-textbox').value
    // console.log(userInput, "userInput")
    // const userInputRobo = document.getElementById('input-textbox').value

    console.log(userInputRobo, "robo position")
    const userInputArray = userInputRobo.split(' ')
    console.log(userInputArray[0].toUpperCase())
    // if((userInputArray[0].toUpperCase() === "MOVE")||(userInputArray[0].toUpperCase() === "LEFT)"||(userInputArray[0].toUpperCase() === "RIGHT") && (isEmpty = Object.keys(roboPosition).length === 0))){
    //         console.log("Robo position not set up")
    // }

    if (userInputArray[0].toUpperCase() === "PLACE") {
        roboPosition = Place(userInputArray, roboPosition)
    }
    if (userInputArray[0].toUpperCase() === "LEFT" && (isEmpty = Object.keys(roboPosition).length !== 0)) {
        roboPosition = turnLeft(roboPosition)
    }

    if (userInputArray[0].toUpperCase() === "RIGHT" && (isEmpty = Object.keys(roboPosition).length !== 0)) {

        roboPosition = turnRight(roboPosition)
    }

    if (userInputArray[0].toUpperCase() === "MOVE" && (isEmpty = Object.keys(roboPosition).length !== 0)) {
        roboPosition = move(roboPosition)

    }
    // if(userInputArray[0].toUpperCase() === "REPORT"){
    //     const pEl = document.getElementById("report-contr")
    //     pEl.textContent = "robo position "+ roboPosition['X']+"," + roboPosition.Y + ","+roboPosition.Facing
    // }
    return roboPosition
}
function Place(userInputArray, roboPosition) {
    const userInputFacingArray = userInputArray[1].split(",")

    const x = userInputFacingArray[0]
    const y = userInputFacingArray[1]
    const facing = userInputFacingArray[2].toUpperCase()
    console.log(x, y, facing, "robo details")
    roboPosition = {
        X: x,
        Y: y,
        Facing: facing
    }
    console.log(roboPosition, "roboPosition")
    return roboPosition
}
 function move(roboPosition) {
    if (roboPosition["Facing"] == "EAST" && roboPosition.X < 5) {
        
        let newvalueX = Number(roboPosition.X) + 1
      
        roboPosition = {
            ...roboPosition,
            X: newvalueX.toString()
        }
        console.log(roboPosition)
    }
    if (roboPosition["Facing"] == "WEST" && roboPosition.X > 0) {
        
        let newvalueX = Number(roboPosition.X) - 1
       
        roboPosition = {
            ...roboPosition,
            X: newvalueX.toString()
        }
        console.log(roboPosition)
    }
    if (roboPosition["Facing"] == "NORTH" && roboPosition.Y < 5) {
        console.log(" in North ")
        let newvalueY = Number(roboPosition.Y) + 1
        console.log(newvalueY)
        roboPosition = {
            ...roboPosition,
            Y: newvalueY.toString()
        }
        console.log(roboPosition)
    }
    if (roboPosition["Facing"] == "SOUTH" && roboPosition.Y > 0) {
        console.log(" in South ")
        let newValueY = Number(roboPosition.Y) - 1
        console.log(newValueY)
        roboPosition = {
            ...roboPosition,
            Y: newValueY.toString()
        }
        console.log(roboPosition)
    }
    return roboPosition
}

function turnRight(roboPosition) {
    const movement = "RIGHT"
    roboOldFacing = roboPosition["Facing"]
    // console.log(roboOldFacing, "roboOldFacing")

    // console.log(positionDirection[roboPosition["Facing"]][movement], "positionDirection[roboOldFacing][movement]")
    let newfacing = positionDirection[roboOldFacing][movement]
    console.log(newfacing, "newfacing")
    roboPosition = {
        ...roboPosition,
        Facing: newfacing
    }
    console.log(roboPosition, "Roboposition")
    return roboPosition
}

function turnLeft(roboPosition) {
    const movement = "LEFT"
    console.log(movement, "robo details")
    roboOldFacing = roboPosition["Facing"]
    console.log(roboOldFacing, "roboOldFacing")
    console.log(positionDirection[roboOldFacing][movement], "positionDirection[roboOldFacing][movement]")
    let newfacing = positionDirection[roboOldFacing][movement]
    console.log(newfacing, "newfacing")
    roboPosition = {
        ...roboPosition,
        Facing: newfacing
    }
    console.log(roboPosition, "Roboposition")
    return roboPosition
}
module.exports =  roboCommand
