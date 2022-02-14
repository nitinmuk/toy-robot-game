# Robot Toy Game
[![](https://img.shields.io/badge/License-MIT-green)](#license)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


## Table of Contents
* [Description](#description)
* [Execution](#execution)
* [Tests](#tests)
* [Technologies](#technologies)
* [License](#license)
* [Questions](#questions)

## Description
- It is a robot toy game simulation command line application which can be used to place a toy on a square dashboard and then move it around without making it fall as any fall action will be ignored.
- Any invalid action will be ignored.
- Valid actions are: PLACE, MOVE, LEFT & RIGHT as described below.
- PLACE x,y,orientation will put the robot on square table as long as x & y are valid numbers and orientation is valid.
- Valid value for orientation are EAST, WEST, NORTH & SOUTH
- Value range for x & y is configurable in config module. Default value range is 0-5.
- MOVE will move the toy robot one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- REPORT will announce the X,Y and orientation of the robot(NORTH, SOUTH, EAST, WEST).
- A robot that is not on the table will choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.

- Example Input and Output:

```plain
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH
```

```plain
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST
```

```plain
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
```
- Press ctrl+c to exit the running application.

## Execution
Please clone/fork repository and run:
 - npm install 
 - npm start

## Tests
Basic test cases has been implemented for this application and run following to execute test cases:
- npm test

## Technologies
* Node (developed and tested using node version 16.13.2)
* bunyan
* Jest
* Sinon

## License
This application is covered by [MIT](./LICENSE) license

## Questions
* Please raise a request at [github](https://github.com/nitinmuk)
* For any private question/enquiry, please reach out to my email: nitinmukes@gmail.com