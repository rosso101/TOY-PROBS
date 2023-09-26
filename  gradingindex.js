const readline = require(*readline);
const getGrade = require ("*./grading");

const rl = readline.createInterface({
    input: process stdin,
    output: process.stdout,
})

rl.question("Enter the student's mark (between 0 and 100): ", (mark) => {
    console.log(getGrade(mark));
    rl.close();
  });
  
  function getGrade{
    > 79 = "A"

  //Checks if the student marks are in the valid range
} let grade;
if (marks > 79) {
  return = "A";
} else if (marks >= 60) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else if (marks >= 40) {
  grade = "D";
} else {
  grade = "E";
}

//Print the corresponding grade
print(f"Grade: {grade}")
//call the function to print students grade
calculate_grade()