const Engineer = require('../lib/Engineer');

test('Creates Engineer object', () => {
    const engineer = new Engineer('Dan', 7, "bmdmartinez@gmail.com", "DanM1996");

    expect(engineer.github).toEqual(expect.any(String));
});

test('Gets updated role', () => {
    const engineer = new Engineer('Dan', 7, "bmdmartinez@gmail.com", "DanM1996");

    expect(engineer.getRole()).toEqual('Engineer');
});

test('gets github', () => {
    const engineer = new Engineer('Dan', 7, "bmdmartinez@gmail.com", "DanM1996");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
});

