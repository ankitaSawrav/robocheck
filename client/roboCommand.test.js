const roboCommand = require('./roboCommand')


test('check when the place command is given the robo position is set', () => {
    const result = roboCommand("place 0,0,north",{})
    expect(result).toEqual({ X: '0', Y: '0', Facing: 'NORTH' } );
}); 

test('check move after place', () => {
    const result = roboCommand("move",{ X: '0', Y: '0', Facing: 'NORTH' })
    expect(result).toEqual({ X: '0', Y: '1', Facing: 'NORTH' } );
}); 

test ('check robo turns to the left when left command is given after move',() =>{
    const result1 = roboCommand("place 0,0,north",{})
    const result = roboCommand("left",{ X: '0', Y: '0', Facing: 'NORTH' })

    expect(result1).toEqual({ X: '0', Y: '0', Facing: 'NORTH' } );
    expect(result).toEqual({ X: '0', Y: '0', Facing: 'WEST' } );
})
