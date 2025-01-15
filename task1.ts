interface Product {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = (product: Product) => {
  if (product.isInstallment === false) {
    return product.price;
  }
  product.price -= product.price * (product.discount / 100);
  return product.price / product.months;
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: false,
  months: 12,
});

console.log(price);
