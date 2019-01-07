angular.module("app")
    .controller("deviceDetailCtrl", ["$scope", "$routeParams", "DeviceService", "SensorService",
    function($scope, $routeParams, DeviceService, SensorService) {
        $scope.monDevice = DeviceService.get({
            "devicesId": $routeParams.deviceId
        });
        $scope.mesSensors = SensorService.query();
        $scope.labels = [];
        $scope.series = [];
        $scope.data = [];

        socket.on("newSensor", function(socket) {
            console.log(socket);
            $scope.mesSensors.unshift(socket);
            console.log($scope.mesSensors);

            if(socket.name === "analogValue"){
                $scope.labels.push(socket.published_at);
                $scope.data.push(socket.data);
            }

            $scope.$apply();
            $scope.onClick = function(points, evt) {
                console.log(points, evt);
            };

          });

        var mainMarker = {
            lat: 49.114904,
            lng: 6.181401,
            message: "Centre de formation IFA",
            focus: true,
            draggable: false
        }
        angular.extend($scope, {
            defaults: {
                scrollWheelZoom: true
            },
            metz: {
                lat: 49.114904,
                lng: 6.181401,
                zoom: 18
            },
            markers:{
                mainMarker: angular.copy(mainMarker)
            }
        });
    }]);