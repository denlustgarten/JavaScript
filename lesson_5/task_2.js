const basket = {
    products: [
        {
            id: 1,
            productName: "keyboard",
            amount: 4,
            price: 1500,
        },
        {
            id: 2,
            productName: "mouse",
            amount: 2,
            price: 2200,
        },
        {
            id: 3,
            productName: "videoСard",
            amount: 13,
            price: 3000,
        },
        {
            id: 4,
            productName: "monitor",
            amount: 4,
            price: 15000,
        },
    ],

    showBasket() {
        const ol = document.createElement('ol');

        if (this.products.length != 0) {
            for (let product of Object.values(this.products)) {
                const li_product = document.createElement('li');
                li_product.textContent = `Название: ${product.productName}. Кол-во: ${product.amount}. Цена: ${product.price}`;
                ol.appendChild(li_product);
            }
            document.querySelector('.basket').appendChild(ol);
            document.body.insertAdjacentHTML('beforeend', `<div><i>В корзине: ${basket.countBasketItem()} товаров на сумму ${basket.countBasketPrice()} рублей.</i></div>`);
        }
        else {
            document.querySelector('.basket').innerHTML = `<div>Корзина пуста</div>`;
        }
    },

    countBasketPrice() {
        let totalPrice = 0
        for (let product of Object.values(this.products)) {
            totalPrice += product.price * product.amount;
        }
        return totalPrice;
    },

    countBasketItem() {
        let totalItem = 0
        for (let product of Object.values(this.products)) {
            totalItem += product.amount;
        }
        return totalItem;
    },
}

basket.showBasket();