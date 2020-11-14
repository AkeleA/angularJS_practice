(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
      $scope.dishes = "";
      $scope.messages = "";
      


      $scope.click = function () {
        let dishesCount = 0;
        let dishesArray = $scope.dishes.split(',');

        for(let i = 0; i < dishesArray.length; i++){
            if (dishesArray[i] !== ""){
                dishesCount ++;
            }
        }
        if (dishesCount == 0){
            $scope.messages = "Please enter data first";
            
        } else {
            if(dishesCount <= 3){
                $scope.messages = "Enjoy!";
                
            } else{
                $scope.messages = "Too much!";
                
            }
        }
      };
      
  };

  

}
)();