


function roboCommand(userInputRobo,roboPosition) { 
   
    // const userInput =  document.getElementById('input-textbox').value
    // console.log(userInput, "userInput")
    // const userInputRobo = document.getElementById('input-textbox').value

    console.log(userInputRobo, "robo position")
    const userInputArray = userInputRobo.split(' ')
    console.log(userInputArray[0].toUpperCase())


    if (userInputArray[0].toUpperCase() === "PLACE") {
        roboPosition = Place(userInputArray, roboPosition)
    }
    if (userInputArray[0].toUpperCase() === "LEFT") {
        roboPosition = turnLeft(roboPosition)
    }

    if (userInputArray[0].toUpperCase() === "RIGHT") {

        roboPosition = turnRight(roboPosition)
    }

    if (userInputArray[0].toUpperCase() === "MOVE") {
        roboPosition = Move(roboPosition)

    }
    // if(userInputArray[0].toUpperCase() === "REPORT"){
    //     const pEl = document.createElement("p")
    //     pEl.textContent = roboPosition
    //     body.appendChild(pEl)
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

function Move(roboPosition) {
    if (roboPosition["Facing"] == "EAST" && roboPosition.X < 5) {
        
        let newvalueX = Number(roboPosition.X) + 1
      
        roboPosition = {
            ...roboPosition,
            X: newvalueX
        }
        console.log(roboPosition)
    }
    if (roboPosition["Facing"] == "WEST" && roboPosition.X > 0) {
        
        let newvalueX = Number(roboPosition.X) - 1
       
        roboPosition = {
            ...roboPosition,
            X: newvalueX
        }
        console.log(roboPosition)
    }
    if (roboPosition["Facing"] == "NORTH" && roboPosition.Y < 5) {
        console.log(" in North ")
        let newvalueY = Number(roboPosition.Y) + 1
        console.log(newvalueY)
        roboPosition = {
            ...roboPosition,
            Y: newvalueY
        }
        console.log(roboPosition)
    }
    if (roboPosition["Facing"] == "SOUTH" && roboPosition.Y > 0) {
        console.log(" in South ")
        let newValueY = Number(roboPosition.Y) - 1
        console.log(newValueY)
        roboPosition = {
            ...roboPosition,
            Y: newValueY
        }
        console.log(roboPosition)
    }
    return roboPosition
}

function turnRight(roboPosition) {
    const movement = "RIGHT"
    roboOldFacing = roboPosition["Facing"]
    console.log(roboOldFacing, "roboOldFacing")

    console.log(positionDirection[roboPosition["Facing"]][movement], "positionDirection[roboOldFacing][movement]")
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