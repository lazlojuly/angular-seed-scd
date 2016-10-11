'use strict'

function apiService($http) {
  return { getItems: function getItems() { return $http.get('/data.json') } }
}

angular.module('myApp.services', [])
  .factory('apiService', apiService)
