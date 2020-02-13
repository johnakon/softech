/* this extends the cart class


*/

const  Cart = require('./cart')

class CartProxy extends Cart{
    constructor(name, address, paymentMethod, status,minimumPrice ){
        super(name, address, paymentMethod, status)
        this.minimumPrice = minimumPrice
    }
    addcartItem(item) {
        // adding it here proxy
        if(item.getUnitPrice() >= this.minimumPrice){
          super.addcartItem(item);
        }
      }
}


module.exports = CartProxy;