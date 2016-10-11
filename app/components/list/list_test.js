'use strict'

describe('ListCtrl', function() {

  var scope
  var createController
  var $q, defer
  var apiServiceMock
  jasmine.getJSONFixtures().fixturesPath = 'base/fixtures'
  var responseFixture = loadJSONFixtures('api-service.json')

  beforeEach(module('myApp'))
  beforeEach(inject(function($rootScope, $controller, _$q_) {
    $q = _$q_
    defer = $q.defer()
    scope = $rootScope.$new()
    apiServiceMock = { getItems: function() { } }
    spyOn(apiServiceMock, 'getItems').and.returnValue(defer.promise)
    createController = function() {
      $controller('ListCtrl', {
        $scope: scope,
        apiService: apiServiceMock,
      })
    }
    var controller = createController()
    defer.resolve(responseFixture)
  }))

  it('should have private variable "items" initialized', function() {
    expect(scope.items).toBeDefined()
  })

  it('"items" should be empty', function() {
    expect(scope.items.length).toBe(0)
  })

  it('shoud call apiServiceMock.getItems', function() {
    expect(apiServiceMock.getItems).toHaveBeenCalled()
  })

})
