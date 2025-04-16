import { By, until } from "selenium-webdriver";

class TodoCreatePage {
  constructor(driver) {
    this.driver = driver;
  }

  async fillForm({ title, type, description }) {
    await this.driver
      .wait(until.elementLocated(By.css("input[type='text']")), 5000)
      .sendKeys(title);
    await this.driver
      .wait(until.elementLocated(By.id("selectTodo")), 10000)
      .sendKeys(type);
    await this.driver
      .wait(until.elementLocated(By.id("desc")), 10000)
      .sendKeys(description);
  }

  async submitForm() {
    const submitButton = await this.driver.wait(
      until.elementLocated(By.id("btn-submit")),
      15000
    );
    console.log("Click Submit Succeed: " + submitButton.getText());
  }
}
export default TodoCreatePage;
