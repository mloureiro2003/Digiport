let prompt = require("prompt-sync")();

// --------------------------
// 1. Discount Function
// --------------------------
// Create a function `discount10(price)` that receives a price
// and returns the price after applying a 10% discount.

function discount10(price) {
  return (price * 0.9)
}
// --------------------------
// 2. Introduction to Classes
// --------------------------
// Create a class Product with:
// - properties: name, price
// - method: describe() returning a string like "Product: Rice, Price: $12"
// Test by creating a few products (e.g., Rice, Beans, Milk)

class Product {
  constructor(name, price) {
    this.name = name 
    this.price = price
  }

  describe() {
    console.log(`Product: ${this.name}, Price: ${this.price}`)
  }
}

// --------------------------
// 3. Cart Class + Methods
// --------------------------
// Create a class Cart with:
// - property: products (array)
// - method: add(product) to add a Product
// - method: total() to return the sum of all product prices
// - method: showProducts() to return a string listing all products
// - method: applyDiscount() that applies the `discount10` function
//   to all products' prices using the function you created above

class Cart {
  constructor(){
    this.products = []
  }

  add(string, number) {
    this.products.push(new Product(string, number))
  }

  total() {
    let total = 0
    for (let product of this.products){
      total += product.price
    }
    console.log(`Total: $${total}`)
    return total
  }

  showProducts() {
    console.log("Products in Cart:")
    for (let product of this.products){
      product.describe()
    }
  }

  applyDiscount() {
    for (const product of this.products){
      product.price = discount10(product.price)
    }
    console.log("Discount applied")
  }
}

let cart2 = new Cart();
console.log("Add 1")
cart2.add("rice", 1);

console.log("\nAdd 2")
cart2.add("beans", 2);

console.log("\nShow 1")
cart2.showProducts();

console.log("\nTotal 1")
cart2.total();

console.log("\nApply discount")
cart2.applyDiscount();

console.log("\nShow 2")
cart2.showProducts();

console.log("\nTotal 2")
cart2.total();

// --------------------------
// 4. Mini-Project Integration
// --------------------------
// Open index.html and, using ctrl+shift+P, type "Open with Live Server" to preview your shopping cart.
// You can also change the background color or alter the product list in the HTML file.
// Feel free to experiment with different styles and layouts, and also create new functions, buttons, or features!