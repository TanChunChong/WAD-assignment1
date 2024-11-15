# School Management Module

## Overview

The `TanChunChong_Assignment1.js` module provides basic functionalities for managing a school’s instructors and students. This module allows adding, retrieving, and counting instructors and students.

## Features

The module includes the following functions:

1. **addInstructor(name, subject)** - Adds an instructor with their name and subject.
2. **getInstructorAtIndex(index)** - Retrieves an instructor by their index.
3. **addStudent(name, grade)** - Adds a student with their name and grade.
4. **getStudentAtIndex(index)** - Retrieves a student by their index.
5. **getTotalCount()** - Returns the total number of instructors and students.

## Installation

1. Clone or download this repository.
2. Navigate to the project directory.
3. Ensure Node.js is installed on your system (https://nodejs.org/en/download/prebuilt-installer). *Ensure that the LTS (Long-Term support) version is installed.

## Usage

1. Add the module file `TanChunChong_Module1.js` to your project directory.
2. Create a file named `app.js` and use the following example code to test the module:

    ```javascript
    const schoolManagement = require("./TanChunChong_Module1.js");

    // Adding instructors
    schoolManagement.addInstructor("Alice Johnson", "Mathematics");
    schoolManagement.addInstructor("Bob Smith", "Science");

    // Adding students
    schoolManagement.addStudent("John Doe", "Grade 10");
    schoolManagement.addStudent("Jane Roe", "Grade 12");

    // Retrieve and display an instructor at 1
    const instructorAtIndex1 = schoolManagement.getInstructorAtIndex(1);
    console.log("Instructor at Index 1:", instructorAtIndex1);

    // Retrieve and display a student starting from 0
    const studentAtIndex0 = schoolManagement.getStudentAtIndex(0);
    console.log("Student at Index 0:", studentAtIndex0);

    // Display the total count of instructors and students
    const totalCount = schoolManagement.getTotalCount();
    console.log("Total Count:", totalCount);
    ```

3. Run the `app.js` file in your terminal:

    ```
    node app.js
    ```

This will display the added instructors and students, along with the total count.

## Testing

To verify the module works as expected:

1. Run `node app.js` to ensure no errors occur.
2. The following output should be expected:
   - **Instructor at  1** should display `Bob Smith`.
   - **Student at 0** should display `John Doe`.
   - **Total Count** should show the count of both instructors and students.

## References

Most of the codes, if not all, were from lab 2.
   - https://github.com/wilsontancher/wad2024S2/blob/main/Lab2%20-%20Node%20JS/app.js
   - https://github.com/wilsontancher/wad2024S2/blob/main/Lab2%20-%20Node%20JS/courseController.js