# RoBocheck 
Robo check is a simple application. In this application, a toy robot is simulated moving on a 5x5 square tabletop.

## Approach :
  An Iterative incremental method is used to Build the application. Starting with the smallest unit where user enters the place command and the Robot is set on the table and then building an additional command at a time.
  
  Unit testing is done using Jest.

## Features
- User can place the Toy Robot on the table using : Place X,Y,Facing. where X,Y  are the robot position and facing can have NORTH, SOUTH, EAST or WEST.
- On the first Place command the robot is Positioned on the table. On subsequent place commands the Robot position  changes
- MOVE will move robot one unit forward in the direction it is currently facing.
- Once the robot reaches teh end of the table the Robot ignores and forward Move command.
- LEFT and RIGHT command will change the direction/Facing of the robot without changes in position.
- On REPORT command the Current position of the robot is displayed.

#Assumptions :
- The origin is (0,0) is considered to be the SOUTH WEST most corner.
- Place command is entered by the user in the format and should have all values : PLACE X,Y,Facing

##Technologies :
- Nodejs
- Jest
- JavaScript

## installation steps :
```
 ### Instructions for Npm installation:
    - Download the folder or git clone 
    $ npm install 
    $ npm start
    $ npm run start-dev


    - npm install -- save-dev jest 
```



test data Examples :
```
1) place 0,0,south 
   move 
   move 

   Output : 0,0,south

2)  Place 4,4,East 
    move 
    left
    move
    Output : 4,4,  

3)  PLACE 0,0,NORTH
    MOVE
    REPORT
    Output: 0,1,NORTH

4)  PLACE 0,0,NORTH
    LEFT
    REPORT
    Output: 0,0,WEST

5)  PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT
    Output: 3,3,NORTH