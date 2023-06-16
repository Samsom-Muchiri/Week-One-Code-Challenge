function calculateGrade(marks) {
    if (marks >= 0 && marks <= 100) {
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
      return "Invalid marks! Marks should be between 0 and 100.";
    }
  }
  
  
  let marks = parseInt(78);//input your marks
  
  
  let grade = calculateGrade(marks);
  console.log("Your grade" + grade);
  