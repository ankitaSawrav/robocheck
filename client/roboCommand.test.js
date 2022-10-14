

const roboCommand = require('./roboCommand')


test("check when the place command is given and turn 'left' command is given,the robo position is set", () => {
    const result = roboCommand("place 0,0,north",{})
    expect(result).toEqual({ X: '0', Y: '0', Facing: 'NORTH' } );
}); 
test("to check the position resets to new position after the another place command", ()=>{
     const result = roboCommand("place 0,0,north",{})
     const result1 = roboCommand("place 1,1,East",result)
    
     expect(result1).toEqual({ X: '1', Y: '1', Facing: 'EAST' } ); 
})

test("check the robo position is set to new position,when turn 'right' command is given after the place command,",()=>{
    const result = roboCommand("left",{})
    expect(result).toEqual({});
})
// test("check when the place command is given and turn 'Move' command is given,the robo position is set",()=>{
//     const result = roboCommand("right",{})
//     expect(result).toEqual({});
// })

// test('check robo moves after place', () => {
//     const result = roboCommand("move",{ X: '0', Y: '0', Facing: 'NORTH' })
//     expect(result).toEqual({ X: '0', Y: '1', Facing: 'NORTH' } );
// });
// // 
// test('check robo moves multiple position on multiple move commands after place', () => {
//     const result = roboCommand("move",{ X: '0', Y: '0', Facing: 'NORTH' })
//     const result1 = roboCommand("move",result)

//     expect(result1).toEqual({ X: '0', Y: '2', Facing: 'NORTH' } );
// }); 





// test ('check robo turns to the left when left command is given after Place Command',() =>{
//     const result1 = roboCommand("place 0,0,north",{})
//     const result = roboCommand("left",{ X: '0', Y: '0', Facing: 'NORTH' })

//     expect(result1).toEqual({ X: '0', Y: '0', Facing: 'NORTH' } );
//     expect(result).toEqual({ X: '0', Y: '0', Facing: 'WEST' } );
// })
