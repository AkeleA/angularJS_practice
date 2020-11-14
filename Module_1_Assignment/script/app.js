(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope) {
      $scope.dishes = "";
      $scope.messages = "";
      $scope.color = "gray";
      


      $scope.click = function () {
        let dishesCount = 0;
        let dishesArray = $scope.dishes.split(',');

        for(let i = 0; i < dishesArray.length; i++){
            if (dishesArray[i].trim() !== ""){
                dishesCount ++;
            }
        }
        if (dishesCount == 0){
            $scope.messages = "Please enter data first";
            $scope.color = 'red';
            
        } else {
            if(dishesCount <= 3){
                $scope.messages = "Enjoy!";
                $scope.color = 'green';
                
            } else{
                $scope.messages = "Too much!";
                $scope.color = 'green';
                
            }
        }
      };
      
  };

  

}
)();