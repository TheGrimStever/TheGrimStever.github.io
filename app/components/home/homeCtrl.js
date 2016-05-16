angular.module('partySupply')
  .controller('homeCtrl', function ($scope, productService) {

    $scope.getProduct = function () {
      $scope.products = productService.getProduct();
    }

    $scope.getProduct();

  });
