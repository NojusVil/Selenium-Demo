import { Builder, By, Key } from "selenium-webdriver";
import { should } from "chai"; // Import should from chai (named export)

// Initialize should assertions
should();

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();

  // go to website
  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  // add a to do
  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Learn Selenium", Key.RETURN);

  // get element from list and store it
  let todoText = await driver
    .findElement(By.xpath("//li[last()]"))
    .getText()
    .then(function (value) {
      return value;
    });

  // assert with chai
  todoText.should.equal("Learn Selenium");

  // close browser
  await driver.quit();
}
example();
