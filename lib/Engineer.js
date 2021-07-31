const Employee = require('./Employee');

// makes engineer class a child of employee class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling preset data from Employee
        super (name, id, email);

        this.github = github; 
    }
    getGithub () {
        return this.github;
    }

     // overrides role as Engineer
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 