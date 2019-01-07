angular.
module('app').
factory('DeviceService', ['$resource',
    function($resource) {
        return $resource('api/devices/:devicesId', {
            devicesId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);