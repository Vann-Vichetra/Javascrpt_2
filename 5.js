const products = [
    { name: 'Apple', price: 1.2, quantity: 10 },
    { name: 'Banana', price: 0.8, quantity: 0 },
    { name: 'Cherry', price: 2.5, quantity: 20 },
    { name: 'Svay', price: 1.3, quantity: 0 },
    { name: 'Svay apple', price: 2.5, quantity: 20 }
];

function filtoutProducts (products) {
    return products.filter(products => products.quantity>0)
}
const outstork = filtoutProducts(products);
console.log(outstork);

