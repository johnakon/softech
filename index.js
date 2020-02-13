const laptop = require("./models/laptop");
// const Cart = require("./models/cart");
//const Cartitem = require('./models/cartItem');
const LaptopAdapter = require("./models/laptopAdapter");
//import cartproxy
const CartProxy = require('./models/cartProxy')

const laptop1 = new laptop("HP", 15.6, 8, 2000, 2000);
const laptop2 = new laptop("Dell", 15.6, 8, 30, 2019);

// const minimumPrice = 100;

//console.log(laptop1.printableString());

// affected by proxy
// const cart = new Cart("David", "Gayaza", "visa", "pending");
const cart = new CartProxy("David", "Gayaza", "visa", "pending", 400);


// const cartitem1 = new Cartitem(laptop1.getDescription(), 1, laptop1.adjPrice());
// const cartitem2 = new Cartitem(laptop2.getDescription(), 3, laptop2.adjPrice());

const cartitem1 = new LaptopAdapter(laptop1, 2);
const cartitem2 = new LaptopAdapter(laptop2, 3);

// if (cartitem1.getUnitPrice() >= minimumPrice) {
//   cart.addcartItem(cartitem1);
// }
//wud lead to duplication

cart.addcartItem(cartitem1);

cart.addcartItem(cartitem2);
console.log(cart.printableString());

module.exports = laptop1;
