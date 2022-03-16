let links = [
    {
        link: 'https://allcosmetics.by/',
        attrSearch: '#search > input',
        btnSearch: '#search > button',
        title: '#products > div:nth-child(1) > div > div > div.product-card__title',
        price: '#products > div:nth-child(1) > div > div > p',

    },
    {
        link: 'https://korealab.by/',
        attrSearch: '#story',
        btnSearch: '#sb-search > span',
        title: '#content > div.product-grid.row > div:nth-child(3) > div > div.product-about > div.name > a',
        price: '#content > div.product-grid.row > div:nth-child(3) > div > div.product-about > div.price'
    },
    // {
    //     link: 'https://skinfood.by/',
    //     attrSearch: '#header > div.header__sticky > div.container > div > div.header__main > div.header-panel > form > div > input[type=text]',
    //     btnSearch: '#header > div.header__sticky > div.container > div > div.header__main > div.header-panel > form > div > button:nth-child(3)',
    //     title: '#app > main > div > div.content > div > div:nth-child(1) > div > a > span.product__title.product__title--name',
    //     price: '#app > main > div > div.content > div > div:nth-child(1) > div > a > span.product__price-block > span'
    // },
];


module.exports.links = links;
