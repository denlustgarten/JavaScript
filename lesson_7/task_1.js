const catalog = {
    cart: [],
    products: [
        {
            id: 1,
            productName: "keyboard",
            price: 1500,
        },
        {
            id: 2,
            productName: "mouse",
            price: 2200,
        },
        {
            id: 3,
            productName: "videoСard",
            price: 3000,
        },
        {
            id: 4,
            productName: "monitor",
            price: 15000,
        },
    ],

    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.showCatalog();
        this.addEventHandlers();
    },

    // обработка событий
    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        const productToAdd = this.products.find((product) => product.id === id_product);
        console.log(id_product);
        console.log(productToAdd);
        this.cart.addToBasket(productToAdd);
    },

    showCatalog() {
        const ol = document.createElement('ol');

        if (this.products.length != 0) {
            for (let product of Object.values(this.products)) {
                const li_product = document.createElement('li');
                li_product.innerHTML = this.getItemInfo(product);
                ol.appendChild(li_product);
            }
            document.querySelector('.catalog').appendChild(ol);
        }
        else {
            document.querySelector('.catalog').innerHTML = `<div>Корзина пуста</div>`;
        }
    },

    getItemInfo(item) {
        return `<div class="product">
                <h3>${item.productName}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart" data-id_product="${item.id}">В корзину</button>
            </div>`;
    },
};


const cart = {
    goods: [],

    init(cartBlockClass, clrCartButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);
        this.addEventHandlers();
        this.showCart();
    },

    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.cleanCart.bind(this));
        this.cartBlock.addEventListener('click', event => this.productNumberChange(event));
    },


    cleanCart() {
        this.goods = [];
        this.showCart();
    },

    productNumberChange(event) {
        // if (!event.target.classList.contains('product_number_add') &&
        //     !event.target.classList.contains('product_number_del')) return;
        const id_product = +event.target.dataset.id_product;
        const productToAdd = this.goods.find((product) => product.id === id_product);
        console.log(id_product);
        console.log("add:", productToAdd);

        if (event.target.classList.contains('product_number_add')) {
            console.log("find_add");
            this.addToBasket(productToAdd);
        }
        else if (event.target.classList.contains('product_number_del')) {
            console.log("find_del");
            this.delToBasket(productToAdd);
        }
    },

    showCart() {
        if (this.goods.length > 0) {
            this.cartBlock.innerHTML = '';
            this.goods.forEach(item => {
                if (item.quantity > 0) {
                    this.cartBlock.insertAdjacentHTML('beforeend', this.getItemInfo(item));
                }
            });
        }
        else {
            this.cartBlock.innerHTML = '';
        }
        document.querySelector('.cart').insertAdjacentHTML('beforeend', `<div class="cart_price"><i>В корзине товаров на сумму ${this.countBasketPrice()} рублей.</i></div>`);
        document.querySelector('.cart_price')
        // document.querySelector('.cart').insertAdjacentHTML('beforeend', `<div><i>В корзине товаров на сумму ${this.countBasketPrice()}</div>`);
    },

    addToBasket(product) {
        console.log("in_add");
        if (product) {
            const findInBasket = this.goods.find((item) => product.id === item.id);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({ ...product, quantity: 1 });
            }
            this.showCart();
        } else {
            alert('Ошибка добавления!');
        }
    },

    delToBasket(product) {
        if (product) {
            const findInBasket = this.goods.find((item) => product.id === item.id);
            if (findInBasket.quantity > 0) {
                findInBasket.quantity--;
            }
            this.showCart();
        } else {
            alert('Ошибка удаления!');
        }
    },

    getItemInfo(item) {
        return `<div>
                <h3>${item.productName}</h3>
                <p>${item.price} руб.</p>
                <p>${item.quantity} шт.</p>
                <button class="product_number_add" data-id_product="${item.id}">+</button>
                <button class="product_number_del" data-id_product="${item.id}">-</button>
            </div>`;
    },

    countBasketPrice() {
        let totalPrice = 0
        for (let product of Object.values(this.goods)) {
            console.log("product:", product);
            totalPrice += product.price * product.quantity;
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

// basket.showBasket();
catalog.init('catalog', cart);
cart.init('cart', 'clr-cart');