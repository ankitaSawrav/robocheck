
const { default: test } = require('node:test');
const roboCommand = require('./roboCommand')


test("check when the place command is given and turn 'left' command is given,the robo position is set", () => {
    const result = roboCommand("place 0,0,north",{})
    expect(result).toEqual({ X: 0, Y: 0, Facing: 'NORTH' } );
}); 
test("to check the position resets to new position after the another place command", ()=>{
     const result = roboCommand("place 0,0,north",{})
     const result1 = roboCommand("place 1,1,East",result)
    
     expect(result1).toEqual({ X: 1, Y: 1, Facing: 'EAST' } ); 
})

test("check the robo position is set to new position,when turn 'right' command is given after the place command,",()=>{
    const result = roboCommand("left",{})
    expect(result).toEqual({});
})
test("check when the place command is given and turn 'Move' command is given,the robo position is set",()=>{
    const result = roboCommand("right",{})
    expect(result).toEqual({});
})

test('check robo moves after place', () => {
    const result = roboCommand("move",{ X: 0, Y: 0, Facing: 'NORTH' })
    expect(result).toEqual({ X: 0, Y: 1, Facing: 'NORTH' } );
});

test('check robo moves multiple position on multiple move commands after place', () => {
    const result = roboCommand("move",{ X: 0, Y: 0, Facing: 'NORTH' })
    const result1 = roboCommand("move",result)

    expect(result1).toEqual({ X: 0, Y: 2, Facing: 'NORTH' } );
}); 




test ('check robo turns to the left when left command is given after Place Command',() =>{
    const result1 = roboCommand("place 0,0,north",{})
    const result = roboCommand("left",{ X: 0, Y: 0, Facing: 'NORTH' })

    expect(result1).toEqual({ X: 0, Y: 0, Facing: 'NORTH' } );
    expect(result).toEqual({ X: 0, Y: 0, Facing: 'WEST' } );
})

test("to check if the robo postion doesnt change,if current position is (0,0,west) and user enters move command", () =>{
    const result = roboCommand("place 0,0,west",{})
    const result2 = roboCommand("move",result)
    expect(result2).toEqual({X: 0, Y: 0, Facing: 'WEST'})
})

test("to check if the robo moves moves along horizontally ,if current position is (0,0,EAST) and user enters move command", () =>{
    const result = roboCommand("place 0,0,EAST",{})
    const result2 = roboCommand("move",result)
    expect(result2).toEqual({X: 1, Y: 0, Facing: 'EAST'})
})

test("to check if the robo doesnt move along horizontally ,if current position is (4,0,EAST)i.e at end of table and user enters move command", () =>{
    const result = roboCommand("place 4,0,EAST",{})
    const result2 = roboCommand("move",result)
    expect(result2).toEqual({X: 4, Y: 0, Facing: 'EAST'})
})


test("to check if the robo doesnt move vertically ,if current position is (4,0,EAST)i.e at top of table and user enters move command", () =>{
    const result = roboCommand("place 0,4,North",{})
    const result2 = roboCommand("move",result)
    expect(result2).toEqual({X: 0, Y: 4, Facing: 'NORTH'})
})

test("to check if the robo doesnt move vertically ,if current position is (4,0,EAST)i.e at bottom of table and user enters move command", () =>{
    const result = roboCommand("place 0,0,South",{})
    const result2 = roboCommand("move",result)
    expect(result2).toEqual({X: 0, Y: 0, Facing: 'SOUTH'})
})

test("to check if the robo X-position decreases as it moves from east to WEST ,if current position is (4,0,WEST)i.e at end of table and user enters move command", () =>{
    const result = roboCommand("place 4,0,WEST",{})
    const result2 = roboCommand("move",result)
    expect(result2).toEqual({X: 3, Y: 0, Facing: 'WEST'})
})

test("to check if the robo Y-positionvlue  decreases as it moves from north to South ,if current position is (0,4,SOUTH)i.e at end of table and user enters move command", () =>{
    const result = roboCommand("place 0,4,SOUTH",{})
    const result2 = roboCommand("move",result)
    expect(result2).toEqual({X: 0, Y: 3, Facing: 'SOUTH'})
})

test("to check if user enters the table position outside ", () =>{
    const result = roboCommand("place 5,0,SOUTH",{})
    const result2 = roboCommand("move",result)
    expect(result2).toEqual({})
})

test("to check if user enters any invalid robo facing",() => {
    const result = roboCommand("place 5,0,kjdskjfhsd",{})
    expect(result).toEqual({})
})

