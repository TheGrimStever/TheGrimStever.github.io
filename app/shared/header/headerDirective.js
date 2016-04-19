angular.module('chefDezApp')
  .directive('header', function () {
    return {
      restrict: 'EA',
      templateUrl: 'app/shared/header/header.html'
    }
  })
