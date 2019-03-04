class ShoppingCart {
	
	constructor (order, promo_code) {
		this.catalogue = require('./config/catalogue.json'); // catalogue constants
		this.promo = require('./config/promo.json'); // promo constants
		this.promo_codes = require('./config/promo_codes.json'); // promo codes constants

		this.order = order; // order added to cart
		this.promo_code = promo_code; // promo code used
		this.countOrder = this.order.reduce((count, val) => count.set(val, 1 + (count.get(val) || 0)), new Map()); // map unique product codes and count
	}

	checkPromos () {

		let discountedPriceTable = [];
		let products = [];
		let promoPrice = 0;
		let promoCount = 0;

		for (let order of this.countOrder) {
			
			products.push(order[1] + ' x ' + this.catalogue[order[0]]['product_name'])
			
			// Check Minus 1 Promo
			if (this.promo['minus_1'][order[0]]) {	
				
				promoPrice = this.catalogue[order[0]]['price']; 			
				order[1] >= this.promo['minus_1'][order[0]]['count'] ? promoCount = order[1] - parseInt(order[1]/this.promo['minus_1'][order[0]]['count']) : promoCount = order[1];
			}

			// Check All Promo
			else if (this.promo['all'][order[0]]) {

				promoCount = order[1];
				order[1] > this.promo['all'][order[0]]['count'] ? promoPrice = this.promo['all'][order[0]]['promo'] : promoPrice = this.catalogue[order[0]]['price'];
			}

			// Check Add Promo
			else if (this.promo['add'][order[0]]) {

				promoPrice = this.catalogue[order[0]]['price']; 
				promoCount = order[1];

				order[1] >= this.promo['add'][order[0]]['count'] ? products.push(parseInt(order[1]/this.promo['add'][order[0]]['count']) + ' x ' + this.catalogue[this.promo['add'][order[0]]['promo']]['product_name']) : false;
				
			}

			// No Promo
			else {
				promoPrice = this.catalogue[order[0]]['price'];
				promoCount = order[1];
			}

			discountedPriceTable.push({productCode: order[0], product: products, numberOfOrder: order[1], totalPrice: promoCount*promoPrice});
		}
		
		return discountedPriceTable;
	}

	checkout () {
		
		let ordersTable = [];

		let shoppingCart = new Object();
		let shoppingCartTotalPrice = 0;
		
		// Orders Table
		for (let order of this.countOrder) {
			ordersTable.push(order[1] + ' x ' + this.catalogue[order[0]]['product_name']);
		}
			
		const initialShoppingCart = this.checkPromos();
		
		// Get total Shopping Cart
		for (let initCart of initialShoppingCart) {
			shoppingCartTotalPrice += initCart['totalPrice'];
		}

		// Check Promo Code
		let discountedPrice = 0;
		this.promo_code ? discountedPrice = shoppingCartTotalPrice - (shoppingCartTotalPrice * this.promo_codes[this.promo_code]['discount']) : discountedPrice = shoppingCartTotalPrice;

		shoppingCart = {items_added: ordersTable, cart_total: '$'+discountedPrice.toFixed(2), cart_items: initialShoppingCart[0]['product']};
		
		console.log('\nItems Added: '+shoppingCart['items_added']);
		console.log('Cart Items: '+shoppingCart['cart_items']);
		console.log('Cart Total Price: '+shoppingCart['cart_total']);
	
		return shoppingCart;
	}
}

module.exports = ShoppingCart