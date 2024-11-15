const schoolManagement = require("./TanChunChong_Assignment1.js");

// Adding instructors
schoolManagement.addInstructor("Alice Johnson", "Mathematics");
schoolManagement.addInstructor("Bob Smith", "Science");
console.log("")

// Adding students
schoolManagement.addStudent("John Doe", "Grade 10");
schoolManagement.addStudent("Jane Roe", "Grade 12");
console.log("")

// Retrieving and displaying an instructor from 1
const instructorAtIndex1 = schoolManagement.getInstructorAtIndex(1);
console.log("Instructor at Index 1:", instructorAtIndex1);
console.log("")

// Retrieving and displaying a student from 0
const studentAtIndex0 = schoolManagement.getStudentAtIndex(0);
console.log("Student at Index 0:", studentAtIndex0);
console.log("")

// Displaying the total count of instructors and students
const totalCount = schoolManagement.getTotalCount();
console.log("Total Count:", totalCount);
console.log("")