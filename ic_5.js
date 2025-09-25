const products = [
    { id: 201, name: "Pro Mouse (wired)", category: "gear", price:39.99},
    { id: 202, name: "Team jersey", category: "apparel", price:49.95},
   { id: 203, name: "Energy Drink 6-pack", category: "snacks",  price: 12.0  },
  { id: 204, name: "Arena Day Pass",      category: "access",  price: 15.0  },
  { id: 205, name: "Switchable Keycaps",  category: "gear",    price: 19.0  }
];

// Example cart (product & quantity)
const cart = [
  { productId: 202, qty: 1 },
  { productId: 203, qty: 2 },
  { productId: 204, qty: 1 },
  { productId: 205, qty: 1 }
];

const customerType = "member";

function getCategoryDiscount(category) {
switch (category) {
case "gear": 
    return .1 
    break
case "apparel": 
    return .15
    break 
case "access":
    return .05
    break
default:
    return 0
    break
}

}
function getcategoryDiscount(category) {
    default: return 0;
    break;
}


function priceaftercategoryDiscount(price, category) {
    let rate = getcategoryDiscount(category);
    return price - (price * rate);
}

console.log(priceaftercategoryDiscount(39.99, "gear"));


function findProductByID (id) {
    for (let p of products ) {
    if ( p.id  === id) 
        return p;
 }
    return null;
};

console.log(