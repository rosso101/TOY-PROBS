 //the fixed speed limits that determines the dimerit point being given.
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmOverLimit = 1;
 //the funtion to calculate the dimerit points
    if (speed <= speedLimit) {
        console.log("Ok");
      } else {
        const kmOverLimit = speed - speedLimit;
        const demeritPoints = Math.floor(kmOverLimit / kmPerDemeritPoint);
    
        if (demeritPoints >= 12) {
          console.log("License suspended");
        } else {
          console.log(`Points: ${demeritPoints}`);
        }
      }
    }
     
  // Example usage:
const carSpeed = 90;
calculateDemeritPoints(carSpeed);