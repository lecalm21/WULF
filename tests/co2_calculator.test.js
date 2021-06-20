var testCo2Calculator = require("../public/javascripts/co2Calculator")


test("calculate correct cO2 from kilometers with bike and consumption of a car per 100km", () => {
  expect(testCo2Calculator.calc(100, 8)).toBe(199.5);
});
test("calculate correct cO2 from kilometers with bike and consumption of a car per 100km", () => {
  expect(testCo2Calculator.calc(100, 13)).toBe(324.5);
});
test("calculate correct cO2 from kilometers with bike and consumption of a car per 100km", () => {
  expect(testCo2Calculator.calc(200, 8)).toBe(399);
});
