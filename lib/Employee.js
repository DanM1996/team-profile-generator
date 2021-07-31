class Employee{
    constructor(name, id, email){
       this.name = name;
       this.id = id;
       this.email = email; 
    }

    // returns the value of name entered
    getName() {
        return this.name;
    }

    // returns the value of ID entered
    getID() {
        return this.id;
    }

    // returns the value of email entered
    getEmail() {
        return this.email;
    }

    // returns role as employee
    getRole() {
        return 'Employee'
    }  
};

// exports all the data here under Employee
module.exports = Employee;