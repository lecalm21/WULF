/*
const {Builder, By, Key, until} = require('selenium-webdriver');
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

"use strict";
var webdriver = require("selenium-webdriver"),
    SeleniumServer = require("selenium-webdriver/remote").SeleniumServer;

var cbtHub = "http://hub.CrossBrowserTesting:80/wd/hub";

var username ='YOUR_USERNAME'; //replace with your email address
var authkey = 'YOUR_AUTHKEY'; //replace with your authkey

var caps = {
    name : 'Basic Test Example',
    build : '1.0',
    version : '70',
    platform : 'Windows 10',
    screen_resolution : '1366x768',
    record_video : 'true',
    record_network : 'false',
    browserName : 'Chrome',
    username : username,
    password : authkey
};


async function basicExample(){
    try{
        var driver = new webdriver.Builder()
            .usingServer(cbtHub)
            .withCapabilities(caps)
            .build();


        await driver.get('http://crossbrowsertesting.github.io/selenium_example_page.html');

        await driver.getTitle().then(function(title) {
            console.log("The title is: " + title)
        });

        driver.quit();
    }

    catch(err){
        handleFailure(err, driver)
    }

}

basicExample();

function handleFailure(err, driver) {
    console.error('Something went wrong!\n', err.stack, '\n');
    driver.quit();
}
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
