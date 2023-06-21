
//Challenge 1

function calculateGrade(marks) {
  //test if marks is from 0 to 100
    if (marks >= 0 && marks <= 100) {
      //if marks are valid claculate the grade
      if (marks > 79) {
        return "Grade: A";
      } else if (marks >= 60 && marks <= 79) {
        return "Grade: B";
      } else if (marks >= 50 && marks <= 59) {
        return "Grade: C";
      } else if (marks >= 40 && marks <= 49) {
        return "Grade: D";
      } else {
        return "Grade: E";
      }
    } else {
      //if mark is not from 0 to 100
      return "Invalid marks! Marks should be between 0 and 100.";
    }
  }
  
  const readlineSync = require('readline-sync');
  //promt the user to enter their marks
  const mark = readlineSync.question('Please enter your marks: ');
  
  //make sure the marks enter are integer
  let marks = parseInt(mark);
  
  //parse the marks to the function
  let grade = calculateGrade(marks);
  //log the marks 
  console.log("Your grade" + grade);
  