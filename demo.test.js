const { Builder, By, Key, until } = require("selenium-webdriver");

describe("Home Page", () => {
  let driver;

  beforeAll(async () => {
    // Initialize the Selenium WebDriver
    driver = await new Builder().forBrowser("chrome").build();
    // Maximize the browser window
    await driver.manage().window().maximize();
  });

  afterAll(async () => {
    // Quit the WebDriver after all tests are done
    await driver.quit();
  });

  it("should open homepage and check the title is 'Home'", async () => {
    // Navigate to the home page
    await driver.get("http://localhost:3000");
    // Get the page title
    const title = await driver.getTitle();
    // Check if the title is as expected
    expect(title).toBe("Home");

    // Introduce a delay for observation
    await driver.sleep(2000);
  });
});

describe("Contact Page", () => {
  let driver;

  beforeAll(async () => {
    // Initialize a new WebDriver instance
    driver = await new Builder().forBrowser("chrome").build();
    // Maximize the browser window
    await driver.manage().window().maximize();
  });

  afterAll(async () => {
    // Quit the WebDriver after all tests are done
    await driver.quit();
  });

  it("should open contact page and check the title is 'Contact Us'", async () => {
    // Navigate to the contact page
    await driver.get("http://localhost:3000/contact");
    // Get the page title
    const title = await driver.getTitle();
    // Check if the title is as expected
    expect(title).toBe("Contact Us");

    // Introduce a delay for observation
    await driver.sleep(2000);
  });

  it("Submit the contact form with an email and check the message", async () => {
    // Navigate to the contact page
    await driver.get("http://localhost:3000/contact");

    // Find the email input element by its ID
    let emailInput = await driver.findElement(By.id("formInput"));

    // Enter the email address
    await emailInput.sendKeys("example@email.com");

    // Find and click the submit button
    let submitButton = await driver.findElement(By.id("formSubmit"));
    await submitButton.click();

    // Introduce a delay for observation
    await driver.sleep(2000);

    // Wait for the message element to appear
    let messageElement = await driver.findElement(By.id("formMessage"));

    // Get the text of the message element
    let messageText = await messageElement.getText();

    // Check if the message contains the expected text
    expect(messageText).toContain("More info coming to example@email.com");
  });
});
