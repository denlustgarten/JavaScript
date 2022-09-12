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

    countBasketPrice() {
        let totalPrice = 0
        for (let product of Object.values(this.products)) {
            totalPrice += product.price * product.amount;
        }
        return totalPrice; // 650
    }
}

console.log("Стоимость корзины:", basket.countBasketPrice());