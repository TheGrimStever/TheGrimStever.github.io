angular.module('chefDezApp')
  .directive('navbar', function () {
    scope: {
      //perhapse this:  title: '='
    }
    return {
      restrict: 'AE',
      templateUrl: 'app/shared/navbar/navbar.html'
    }


  })
