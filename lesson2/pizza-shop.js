const EventEmitter = require("node:events");


class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.orderNumber = 0
    }
    order(){
        this.orderNumber++
        this.emit("order", "large", "straw")
    }
    displayOrderNumber(){
        console.log(`current order number : ${this.orderNumber}`)
    }
}

module.exports = PizzaShop