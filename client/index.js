
console.log("hello")

const userInput = document.getElementById('input-textbox')

console.log(userInput, "here")

// userInput.addEventListener('submit', handleOnSubmit);
let globalRoboPosition = {}                                     // stores current position of the Robot

function handleOnSubmit(e) {

    const userInputRobo = userInput.value
    userInput.value =""

    globalRoboPosition = roboCommand(userInputRobo,globalRoboPosition)   
}
