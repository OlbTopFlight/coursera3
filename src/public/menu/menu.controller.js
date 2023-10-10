(function () {
"use strict";
console.log("wait what");
angular.module('public')
.controller('MenuController', MenuController);

MenuController.$inject = ['menuCategories'];
function MenuController(menuCategories) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;
}


})();
