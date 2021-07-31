const Employee = require('../lib/Employee');

test('Creates Employee object', () => {
    const employee = new Employee('Dan', 7, "bmdmartinez@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("Get Employee name as an object", () => {
    const employee = new Employee('Dan', 7, "bmdmartinez@gmail.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

test("Get Employee ID as an object", () => {
    const employee = new Employee('Dan', 7, "bmdmartinez@gmail.com");

    expect(employee.getID()).toEqual(expect.any(Number));
})

test("Get Employee email as an object", () => {
    const employee = new Employee('Dan', 7, "bmdmartinez@gmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('get employee role', () => {
    const employee = new Employee('Dan', 7, "bmdmartinez@gmail.com");

    expect(employee.getRole()).toEqual('Employee');
});
