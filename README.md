Technology Used:
Node JS

Instructions:

1. Go to project directory.
2. Run node app.

Files:

1. catalogue.json -> Catalogue config file. Store prices.
2. promo.json -> Promos config file. Store different promos. For this exam, promos are categorized into 3: minus_1 (3 for 2 promo), all (every product is discounted), and add (additional product).
3. promo_codes.json -> Promo codes config file. Store promo codes and discounts.
4. app.js -> App entry point. Contains scenarios for testing.
5. shopping_cart.js -> Class for promos and total price

Sample output:

Items Added: 3 x Unlimited 1GB,1 x Unlimited 5GB 
Cart Items: 3 x Unlimited 1GB,1 x Unlimited 5GB 
Cart Total Price: $94.70

Items Added: 2 x Unlimited 1GB,4 x Unlimited 5GB 
Cart Items: 2 x Unlimited 1GB,4 x Unlimited 5GB 
Cart Total Price: $209.40

Items Added: 1 x Unlimited 1GB,2 x Unlimited 2GB 
Cart Items: 1 x Unlimited 1GB,2 x Unlimited 2GB,2 x 1 GB Data-pack 
Cart Total Price: $84.70

Items Added: 1 x Unlimited 1GB,1 x 1 GB Data-pack 
Cart Items: 1 x Unlimited 1GB,1 x 1 GB Data-pack 
Cart Total Price: $31.32
