

var testFilterFunction = require("../public/javascripts/probefahrt");


test("Display the right city", () => {
    expect(testFilterFunction.myFunction('Regensburg')).toBe('Regensburg');
});

test('_queryFilter() performs filtering', function() {
    var filter = tr.myFunction('Regensburg');
    var passedFilter = function(field) {
        return filter(field) !== 0;
    };
    assert.isTrue(passedFilter({name: 'Regensburg'}));
    assert.isFalse(passedFilter({name: 'Berlin'}));
});