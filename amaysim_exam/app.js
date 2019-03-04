// Shopping Cart Class
const shoppingCart = require('./shopping_cart.js');

const order1 = ['ult_small', 'ult_small', 'ult_small', 'ult_large'];
const cart1 = new shoppingCart(order1);
cart1.checkout();

const order2 = ['ult_small', 'ult_small', 'ult_large', 'ult_large', 'ult_large', 'ult_large'];
const cart2 = new shoppingCart(order2);
cart2.checkout();

const order3 = ['ult_small', 'ult_medium', 'ult_medium'];
const cart3 = new shoppingCart(order3);
cart3.checkout();

const order4 = ['ult_small', '1gb'];
const cart4 = new shoppingCart(order4, 'I<3AMAYSIM');
cart4.checkout();