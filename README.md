# Mars Helicopter Challenge #

You’re part of the team that explores Mars by sending remotely controlled helicopters to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the helicopter.

## Requirements ##
You are given a helicopter that has an initial starting point
The helicopter receives one instruction at a time as a single character ('f', 'b', 'l' or 'r')
When the helicopter moves, it's position is updated, you can read the new coordinates from

### Pseudo Code:

#### Object Oriented:
  
``` 
helicopter = Helicopter(x=0, y=0)
helicopter.move('f')
assert helicopter.y == 1
assert helicopter.x == 0
```

#### Functional:

```  
assert move_helicopter(starting_point=Position(0,0), move='f') == Position(0, 1)
```


## Rules
Write your tests first!
No red phases while refactoring.

## New Requirements ##
Multiple commands: Transmission of data from Earth to Mars is kinda slow, so we'd like to be able to send batches of commands.

Error Handling: Data transmissions over the deep space network sometimes introduce errors, so be prepared to handle invalid commands, starting positions, and so on.

Spherical Planet: As it turns out, Mars is (roughly) spherical, and if you go far enough in one direction, you get back to where you started. The first line of the input now contains the size of the grid.

Turning and moving: This helicopter has a fixed forward facing camera, so it turns out that it's important that it be able to turn. The input now includes the direction (N, S, E, W) the helicopter is facing in addition to it's starting position. Commands can now include L and R, for turn left and right 90° respectively. The other commands are now relative to the direction the helicopter is facing.

## Original Problem
https://code.google.com/archive/p/marsrovertechchallenge/