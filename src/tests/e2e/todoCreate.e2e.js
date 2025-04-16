import { Builder } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome.js";
import TodoLlistPage from "../pages/todoListPage.js";
import TodoCreatePage from "../pages/todoCreatePage.js";

(async function testCreateTodo() {
  let driver;
  try {
    // Cấu hình Options
    console.log("Đang khởi tạo WebDriver...");
    const options = new Options();
    options.addArguments("--disable-dev-shm-usage");
    options.addArguments("--no-sandbox");
    // Khởi tạo WebDriver
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();
    console.log("WebDriver đã khởi tạo thành công!");
    await driver.get("http://localhost:3000");

    const listPage = new TodoLlistPage(driver);
    await listPage.moveToCreatePage();

    const createPage = new TodoCreatePage(driver);
    await createPage.fillForm({
      title: "Test E2E Selenium",
      type: "study",
      description: "Test thêm mới TODO",
    });
    await createPage.submitForm();
    await driver.get("http://localhost:3000");
    const count = await listPage.countTodo();
    console.log("Số TODO hiện có:", count);

    await driver.sleep(180000); // Thời gian Web được mở.
  } catch (error) {
    console.error("Lỗi xảy ra: ", error);
  } finally {
    // Đóng WebDriver
    if (driver) {
      await driver.quit();
      console.log("WebDriver đã đóng!");
    }
  }
})();
