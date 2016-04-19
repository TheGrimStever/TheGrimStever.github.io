angular.module('chefDezApp')
  .directive('footer', function () {
    return {
      restrict: 'EA',
      templateUrl: 'app/shared/footer/footer.html'
    }
  })
