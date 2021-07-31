const Employee = require('./Employee');

// makes intern class a child of employee class
class Intern extends Employee {
    constructor (name, id, email, school) {
        // calling preset data from Employee
        super (name, id, email);

        this.school = school; 
    }
    getSchool () {
        return this.school;
    }

     // overrides role as Intern
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 