const puppeteer = require('puppeteer');

async function getPic() {

    const browser = await puppeteer.launch({headless: true}); //запускаем экземпляр браузера
    const page = await browser.newPage(); //создаем новую страницу
    await page.goto('https://google.com'); //переходим по ссылке
    await page.setViewport({ width: 1000, height: 500}); //размер страницы
    await page.screenshot({ path: 'google.png'}); //делаем скрин

    await browser.close(); //закрываем бразуер
}

getPic();

