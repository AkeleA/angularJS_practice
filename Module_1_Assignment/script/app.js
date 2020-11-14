(function() {
  'use strict';

  angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope) {
      $scope.dishes = "";
      $scope.messages = "";
      $scope.color1 = 'gray';

      $scope.check = function() {
          if ($scope.dishes.length === 0) {
              $scope.messages = "Please enter data first!";
              $scope.color1 = 'red';

          } else {
              $scope.color1 = 'green';
              var i = 0;
              var nani = 0;
              var nuDishes = $scope.dishes.split(',');
              nuDishes.forEach((function(value) {
                  if (value.trim().length > 0) {
                      i++;
                  } else {
                      nani++;
                  }
              }
              ));
              if (i < 4) {
                  $scope.messages = "Enjoy!";
              } else {
                  $scope.messages = "Too much!";
              }
          }

          if (nani) {
              $scope.message += ' (' + n + ' empty dishe(s`) name(s) entered!)';
          }

      }
      ;

  }

}
)();