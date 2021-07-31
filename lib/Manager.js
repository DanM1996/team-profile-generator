const Employee = require('./Employee');

// makes manager class a child of employee class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling preset data from Employee
        super (name, id, email);

        this.officeNumber = officeNumber; 
    }

     // overrides role as Manager
    getRole () {
        return "Manager";
    }
}

module.exports = Manager; 