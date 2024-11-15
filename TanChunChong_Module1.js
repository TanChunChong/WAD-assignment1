module.exports = {
    // Dummy "database" to store the instructors
    instructors: [],

    // Dummy "database" to store the students
    students: [],

    // Adds a new instructor with a name and subject
    addInstructor(name, subject) {
        const instructor = { name, subject };
        this.instructors.push(instructor);
    },

    // Retrieves an instructor by their index in the instructors array
    getInstructorAtIndex(index) {
        return this.instructors[index];
    },

    // Adds a new student with a name and grade level
    addStudent(name, grade) {
        const student = { name, grade };
        this.students.push(student);
    },

    // Retrieves a student by their index in the students array
    getStudentAtIndex(index) {
        return this.students[index];
    },

    // Returns the total number of instructors and students in the system
    getTotalCount() {
        return {
            totalInstructors: this.instructors.length,
            totalStudents: this.students.length
        };
    }
};
