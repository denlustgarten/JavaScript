const basket = [
    ["keyboard", 4, 1500],
    ["mouse", 2, 2200],
    ["video_card", 13, 3000],
    ["monitor", 4, 15000],
    ["router", 10, 3440],
    ["hdd", 2, 5000]
]

/**
 * 
 * @param {Array} basket 
 * @returns 
 */
function countBasketPrice(basket) {
    let sum = 0;
    for (const product of Object.values(basket)) {
        sum += product[1] * product[2];
        console.log(product)
    }
    return sum; // 650
}

console.log("Сумма корзины:", countBasketPrice(basket));