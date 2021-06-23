var testFilterFunction = require("../public/javascripts/probefahrt");


test("Display the right city", () => {
    expect(testFilterFunction.loopForSearch(["Regensburg", "München", "Berlin", "Hamburg"],'Regensburg')).toBe('Regensburg');
});
test("Display the right city", () => {
    expect(testFilterFunction.loopForSearch(["Regensburg", "München", "Berlin", "Hamburg"],'München')).toBe('München');
});
test("Display the right city", () => {
    expect(testFilterFunction.loopForSearch(["Regensburg", "München", "Berlin", "Hamburg"],'Berlin')).toBe('Berlin');
});
test("Display the right city", () => {
    expect(testFilterFunction.loopForSearch(["Regensburg", "München", "Berlin", "Hamburg"],'Hamburg')).toBe('Hamburg');
});
