console.log("hello")
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


const userInput = document.getElementById('input-textbox')

console.log(userInput, "here")

// userInput.addEventListener('submit', handleOnSubmit);
let globalRoboPosition = {}                                     // stores current position of the Robot

function handleOnSubmit(e) {
    const userInputRobo = document.getElementById('input-textbox').value
    console.log(userInputRobo,"on handle submit")
    globalRoboPosition = roboCommand(userInputRobo,globalRoboPosition)
}
