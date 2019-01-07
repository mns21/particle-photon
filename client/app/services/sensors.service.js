angular.
module('app').
factory('SensorService', ['$resource',
    function($resource) {
        return $resource('api/sensors/:sensorId', {
            sensorId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);