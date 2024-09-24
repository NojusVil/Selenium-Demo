const { Builder, By, Key } = require("selenium-webdriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Learn Selenium", Key.RETURN);

  await driver.quit();
}
example();
