console.log("hello")

const userInput =  document.getElementById('input-textbox')
console.log(userInput,"here")
userInput.addEventListener('change', updateValue);

function updateValue(e) {
  const roboPosition = e.target.value.toUpperCase()
//   const roboPositionUppercase = roboPosition.toUpperCase()
  console.log(roboPositionUppercase,"roboPositionUppercase")
  console.log(roboPosition,"robo position")
  const roboPositionArray = roboPosition.split(' ')
  console.log(roboPositionArray)
   
}
