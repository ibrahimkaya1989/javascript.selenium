const { Builder, By, Key, until } = require('selenium-webdriver');

async function googleSearch() {
    // Create a WebDriver instance (in this case, using Chrome)
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to Google
        await driver.get('https://www.google.com');

        // Find the accept button
        const btnAccept = await driver.findElement(By.xpath("//button[2]"));

        // Click Accept button
        await btnAccept.click();

        // Find the search input element
        const searchBox = await driver.findElement(By.name('q'));

        // Type a search query
        await searchBox.sendKeys('Selenium with JavaScript', Key.RETURN);

        // Wait for the results page to load
        await driver.wait(until.titleContains('Selenium with JavaScript'), 2000);

        // Print the title of the search results page
        const pageTitle = await driver.getTitle();
        console.log('Search Results Page Title:', pageTitle);
    } finally {
        // Close the browser
        await driver.quit();
    }
}

// Run the Google search function
googleSearch();