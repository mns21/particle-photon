angular.module('app').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          templateUrl: 'app/views/home.html',
          controller: 'ledCtrl'
        }).
        when('/devices', {
          templateUrl: 'app/views/deviceListe.html',
          controller: 'deviceListeCtrl'
        }).
         when('/devices/:deviceId', {
          templateUrl: 'app/views/deviceDetail.html',
          controller: 'deviceDetailCtrl'
        }).
        
        otherwise('/');
    }
  ]).config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
      showLines: false
    });
  }]);