import { By, until } from "selenium-webdriver";

export const checkInputTitle = async (driver) => {
  const titleInput = await driver.wait(
    until.elementLocated(By.css("input[type='text']")),
    10000
  );
  await driver.sleep(20000);
  const titleValue = await titleInput.getAttribute("value");
  console.log("Todo Title: " + titleValue);
};

export const checkSelectTypetodo = async (driver) => {
  const selected = await driver.wait(
    until.elementLocated(By.id("selectTodo")),
    10000
  );
  await driver.sleep(20000);
  const selectedValue = await selected.getAttribute("value");
  console.log("Todo type selected: " + selectedValue);
};

export const checkDescriptionTodo = async (driver) => {
  const description = await driver.wait(
    until.elementLocated(By.id("desc")),
    10000
  );
  await driver.sleep(20000);
  const descriptionValue = await description.getAttribute("value");
  console.log("Todo description: " + descriptionValue);
};
