# BusInCarPark

The application should be able to read in any one of the following commands:
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT

Here is some example input and output:
a)
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH
b)
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST
c)
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
