/*const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

test("testing if bmi is displayed correctly in ui", async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000');
    await driver.findElement(By.id('input_field_weight')).sendKeys('75');
    await driver.findElement(By.id('input_field_height')).sendKeys('170');
    driver.sleep(500);
    let resultFieldText =  await driver.findElement(By.id('bmi_result_value')).getText();
    driver.sleep(500);
    expect(resultFieldText).toBe("25.9");
  } finally {
    await driver.quit();
  }
});
*/
