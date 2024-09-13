// Task 1: Create an Inventory Array of Product Objects

let inventory = [
    { name: "Basketball", price: 60.00, quantity: 30, lowStockLevel: 5 },
    { name: "Jersey", price: 40.00, quantity: 20, lowStockLevel: 3 },
    { name: "Shoes", price: 120.00, quantity: 10, lowStockLevel: 2 },
    { name: "Hoop", price: 300.00, quantity: 8, lowStockLevel: 2 },
    { name: "Headband", price: 10.00, quantity: 50, lowStockLevel: 10 }
];
// This is my inventory array


// Task 2: Create a Function to Display Product Details

inventory.forEach (item => 
    { item.stockStatus = (item.quantity <= item.lowStockLevel) ? "Low Stock" : "In Stock"
}); // adds stockStatus to each item in the array

console.log(inventory[0]) // shows the 1st list in the array with the addition of stockStatus

function displayProductDetails(name) {
    return inventory.find( item => item.name === name )
} 
// this function will display all of the items in the list when the user types the item name

console.log(displayProductDetails("Shoes")) // tests data, outputs correct list items associated with Shoes


// Task 3: Create a Function to Update Product Stock After Sales

function updateStock (item, unitsSold) {
    item.quantity -= unitsSold;

    if (item.quantity <= 0) {
    return `${item.name} is out of stock.`} // shows the item is out of stock when 0

    else if (item.quantity <= item.lowStockLevel) {
    return `${item.name} is low on stock and has ${item.quantity} left.`} //shows item is low on stock when lower than lowstocklevel

    else { return `${item.name} now has ${item.quantity} remaining.`}; //shows items quantity left when there it is not low on stock

}

console.log (updateStock(inventory[0], 23))
console.log (displayProductDetails("Basketball"))