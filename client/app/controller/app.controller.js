
angular.module('app').controller('ledCtrl', ['$scope', '$http',
    function($scope, $http) {

      
        
        $scope.myLed = function() {
            
            console.log($scope.ordre.valeur);

            $http({
                method: 'POST',
                url: 'https://api.particle.io/v1/devices/3c003c000f47363333343437/\n' +
                    'led?access_token=d1803f3cbfe1d1f45efddcafdbe02ac89b8f3fb7',
                data: {"arg" : $scope.ordre.valeur}             
            }).then(function successCallback(response) {
                console.log(response);
                if(response.data.return_value==1){
                	console.log("lumière allumée");
                	
                }
                else if(response.data.return_value==0){
                	console.log("lumière éteinte");
                	
                }
                else if(response.data.return_value==-1){
                	console.log("Un problème a été rencontré");
                	
                }
                
            }, function errorCallback(response) {
                console.log(response);
                
              
            });
        };

    }
]);