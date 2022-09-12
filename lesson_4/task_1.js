/**
 * 
 * @param {Number} number 
 * @returns
 */
function convert_number(number) {
    let number_pars = {};
    if (number > 999) {
        console.log("Введенное число превышает 999.");
        return {};
    }
    number_pars.units = number % 10;
    number_pars.dozens = Math.floor(number / 10) % 10;
    number_pars.hundreds = Math.floor(number / 100);
    return number_pars;
}

console.log(convert_number(763));
console.log(convert_number(2));
console.log(convert_number(13));
console.log(convert_number(1111));
