'use strict';

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'list/list.html',
    controller: 'ListCtrl',
  });
}])

myApp.controller('ListCtrl', ['$scope', 'apiService', function($scope, apiService) {
  $scope.items = []
  apiService.getItems()
}]);

// gitHubClient.controller('MainController',
//   ['$http', '$scope', 'RepoListService', 'RepoStarsService',
//   function ($http, $scope, RepoListService, RepoStarsService){
//
//     // Init defaults
//     $scope.repoList = RepoListService;
//     $scope.repoStars = RepoStarsService;
//
//   }]
// );
//
