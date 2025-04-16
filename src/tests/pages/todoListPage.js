import { By, until } from "selenium-webdriver";

class TodoLlistPage {
  constructor(driver) {
    this.driver = driver;
  }

  async countTodo() {
    const items = await this.driver.wait(
      until.elementLocated(By.css("todo-item")),
      5000
    );
    return items.length;
  }

  async moveToCreatePage() {
    const submitButton = await this.driver.wait(
      until.elementLocated(By.className("btn-icon")),
      15000
    );
    await submitButton.click();
  }
}

export default TodoLlistPage;
