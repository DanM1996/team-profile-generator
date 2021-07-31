const Manager = require('../lib/Manager');

test('Creates Manager object', () => {
    const manager = new Manager('Dan', 7, "bmdmartinez@gmail.com", "001");

    expect(manager.officeNumber).toEqual(expect.any(String));
});

test('Gets updated role', () => {
    const manager = new Manager('Dan', 7, "bmdmartinez@gmail.com", "001");

    expect(manager.getRole()).toEqual('Manager');
});