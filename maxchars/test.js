const maxchars = require('./maxchars')

test('Input is Ebbrima', () => {
    expect(maxchars("Ebbrima")).toEqual('b');
});

