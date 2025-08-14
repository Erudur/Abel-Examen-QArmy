module.exports = { googleSearch };

async function googleSearch(page) {
    await page.goto('https://www.google.com');
    await page.waitForSelector('//textarea[contains(@name,"q")]');
    await page.fill('//textarea[contains(@name,"q")]', 'Underc0de');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
}