
angular.module('ShoppingListCheckOff', [])

// Define the ShoppingListController
.controller('ShoppingListController', function () {
  var shoppingList = this;

  // Initial "To Buy" items
  shoppingList.toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "apples", quantity: 5 },
    { name: "bananas", quantity: 8 },
    { name: "milk", quantity: 2 },
    { name: "eggs", quantity: 12 }
  ];

  // Initialize the "Bought" items as an empty array
  shoppingList.boughtItems = [];

  // Function to move an item from "To Buy" to "Bought" list
  shoppingList.buyItem = function (item) {
    var index = shoppingList.toBuyItems.indexOf(item);
    if (index !== -1) {
      shoppingList.toBuyItems.splice(index, 1); // Remove from "To Buy" list
      shoppingList.boughtItems.push(item); // Add to "Bought" list
    }
  };
});
