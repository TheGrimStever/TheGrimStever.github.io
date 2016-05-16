angular.module('partySupply')
  .service('cartService', function ($http) {

    this.addToCart = function (id) {
      return console.log('added to cart');
    }

  });
