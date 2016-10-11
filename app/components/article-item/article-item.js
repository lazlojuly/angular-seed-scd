myApp.directive('articleItem', function() {
  return {
    restrict: "E",
    replace: true,
    template: "<div>{{item}}</div>",
    scope: {
      item: '=',
    },
    link: function($scope, $el) {
      // console.log($scope.item)
    }
  }
})
