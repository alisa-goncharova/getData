const puppeteer = require('puppeteer');
let linksData = require('./links');

let input = 'Some by Mi';

linksData.links.forEach((el, index) => {

    let scrape = async () => {

        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();

        await page.goto(linksData.links[index].link);
        await page.setViewport({ width: 1000, height: 500}); //размер страницы
        await page.waitFor(500);

        await page.evaluate((selector, val) => {

            document.querySelector(selector).value = val;

        }, linksData.links[index].attrSearch, input);

        await page.click(linksData.links[index].btnSearch);

        await page.waitFor(500);

        const result = await page.evaluate((title, price) => {

            let Title = document.querySelector(title).innerText;
            let Price = document.querySelector(price).innerText;

            return {
                Title, Price
            }

        }, linksData.links[index].title, linksData.links[index].price);

        await browser.close();

        return result;
    }

    scrape().then((value) => {
        console.log(value);
    });

});
