angular.module("app")
	.controller("deviceListeCtrl",["$scope","DeviceService", function($scope,DeviceService){
        console.log("controller here ")
	$scope.listeDevices = DeviceService.query();
}]);