'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 1000, img: "../img/Notebook.jpg"},
    {id: 2, title: 'Mouse', price: 100, img: "../img/Mouse.jpg"},
    {id: 3, title: 'Keyboard', price: 250, img: "../img/Keyboard.jpg"},
    {id: 4, title: 'Gamepad', price: 150, img: "../img/Gamepad.jpg"},
];

const renderProduct = (title, price, img) => {
    return `<div class="product-item">
                <img src="${img}", width =200px, height=150px>
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Добавить</button>
            </div>`
}

const renderProducts = (list) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price, item.img);
    });

    console.log(productList);
    document.querySelector('.products').innerHTML = productList.join('');
}

renderProducts(products);
