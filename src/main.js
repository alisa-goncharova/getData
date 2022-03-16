const puppeteer = require('puppeteer');
let linksData = require('./links');

let input = 'Some by Mi';

linksData.links.forEach((el, index) => {

    let scrape = async () => {

        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();

        await page.goto(linksData.links[index].link);
        await page.waitFor(500);

        await page.evaluate((selector, val) => {

            document.querySelector(selector).value = val;

        }, linksData.links[index].attrSearch, input);

        await page.click(linksData.links[index].btnSearch);

        await page.waitFor(500);

        const result = await page.evaluate(() => {

            let title = document.querySelector('#products > div:nth-child(1) > div > div > div.product-card__title').innerText;
            let price = document.querySelector('#products > div:nth-child(1) > div > div > p').innerText;

            return {
                title, price
            }

        })

        await browser.close();

        return result;
    }

    scrape().then((value) => {
        console.log(value);
    });

});
