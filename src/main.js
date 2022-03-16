const puppeteer = require('puppeteer');
let linksData = require('./links');
// const { linksData } = require('./links');
//
// console.log(linksData);

global.likesData = linksData;

linksData.links.forEach((el, index) => {

    console.log(el);

    let scrape = async () => {

        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();

        await page.goto(linksData.links[index].link);
        await page.waitFor(1000);

        await page.evaluate(() => {

            document.querySelector('#search > input').value = 'Some by mi'
            //document.querySelector(linksData.links[index].attrSearch).value = 'Some by mi';

        });

        await page.click('#search > button');

        await page.waitFor(1000);

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
