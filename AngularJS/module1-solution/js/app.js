(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunch_menu="";
        $scope.count=function(){
            var words=$scope.lunch_menu.split(",");
            var cleanWords=[];
            for(var i=0;i<words.length;i++){
                var word=words[i].trim();
                if(word.length==0){
                    continue;
                }
                cleanWords.push(word);
            }
            console.log(cleanWords);
            if(cleanWords.length>3){
                $scope.message="Too much!";
                $scope.message_box_style="color:green;border:1px solid green;";
            }else if(cleanWords.length==0){
                $scope.message="Please enter data first";
                $scope.message_box_style="color:red;border:1px solid red;";
            }else{
                $scope.message="Enjoy!";
                $scope.message_box_style="color:green;border:1px solid green;";
            }
        }
    }

})();