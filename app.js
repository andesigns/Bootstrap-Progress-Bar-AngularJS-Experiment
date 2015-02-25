var app = angular.module('plunker', []);

app.controller('MainCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.name = 'World';

    $http.get('api/stats.json').success(function(data) {
      $scope.indicators = data;
    });
    
    
    $scope.hello = function(current,target) {
      var percentage = Math.floor((current*100)/target);
      var percent = 'width:'+percentage+'%';
      return percent;
    };
  }
]);
