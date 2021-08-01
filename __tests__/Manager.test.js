const Manager = require('../lib/Manager');

test('Creates Manager object', () => {
    const manager = new Manager('Dan', 7, "bmdmartinez@gmail.com", 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Gets updated role', () => {
    const manager = new Manager('Dan', 7, "bmdmartinez@gmail.com", 1);

    expect(manager.getRole()).toEqual('Manager');
});