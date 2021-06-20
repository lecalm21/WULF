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
test("calculate correct cO2 from kilometers with bike and consumption of a car per 100km", () => {
  expect(testCo2Calculator.calc(153, 8)).toBe(305.2);
});



test("calculate kg of chicken you save by riding a bike", () => {
  expect(testCo2Calculator.chicken(3.5)).toBe(1);
});
test("calculate kg of chicken you save by riding a bike", () => {
  expect(testCo2Calculator.chicken(7)).toBe(2);
});
test("calculate kg of chicken you save by riding a bike", () => {
  expect(testCo2Calculator.chicken(10.5)).toBe(3);
});
test("calculate kg of chicken you save by riding a bike", () => {
  expect(testCo2Calculator.chicken(199.5)).toBe(57);
});

