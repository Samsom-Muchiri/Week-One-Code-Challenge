
//Challenge 2

function checkSpeed(carSpeed) {
    const speedLimit = 70;
    const demeritPoint = 5;
    const pointsThreshold = 12;
  
    if (carSpeed < speedLimit) {//check if speed is more than speed limmit
      return "Ok";
    } else {
      const excessSpeed = carSpeed - speedLimit;
      const demeritPoints = Math.floor(excessSpeed / demeritPoint);
  
      if (demeritPoints > pointsThreshold) {//if demeritPoints more than pointsThreshold 
        return "License suspended";
      } else {
        return "Points: " + demeritPoints;
      }
    }
  }

  const readlineSync = require('readline-sync');
  //enter the speed
  const speed = readlineSync.question('Please enter your speed: ');
  
  var carSpeed = parseInt(speed);
  checkSpeed(carSpeed)
  console.log(checkSpeed(carSpeed))

  
  