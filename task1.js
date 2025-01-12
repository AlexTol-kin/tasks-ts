"use strict";
const totalPrice = (product) => {
    product.price -= product.price * (product.discount / 100);
    if (product.isInstallment) {
        return product.price / product.months;
    }
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price);
