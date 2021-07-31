const Intern = require('../lib/Intern');

test('Creates Intern object', () => {
    const intern = new Intern('Dan', 7, "bmdmartinez@gmail.com", "Washington Hills");

    expect(intern.school).toEqual(expect.any(String));
});

test('Gets updated role', () => {
    const intern = new Intern('Dan', 7, "bmdmartinez@gmail.com", "Washington Hills");

    expect(intern.getRole()).toEqual('Intern');
});

test('gets school of Intern', () => {
    const intern = new Intern('Dan', 7, "bmdmartinez@gmail.com", "Washington Hills");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
});