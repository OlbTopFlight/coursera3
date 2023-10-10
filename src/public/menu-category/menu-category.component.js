(function () {
"use strict";
console.log("hello");
angular.module('public')
.component('menuCategory', {
  templateUrl: 'src/public/menu-category/menu-category.html',
  bindings: {
    category: '<'
  }
});



})();
