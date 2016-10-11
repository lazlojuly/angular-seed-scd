'use strict'

describe('ListCtrl', function() {

  var scope
  var createController
  var $q, deferred
  var apiServiceMock
  jasmine.getJSONFixtures().fixturesPath = 'base/fixtures'
  var responseFixture = loadJSONFixtures('api-service.json')

  beforeEach(module('myApp'))
  beforeEach(inject(function($rootScope, $controller, _$q_) {
    $q = _$q_
    scope = $rootScope.$new()
    apiServiceMock = {
      getItems: function() {
        deferred = $q.defer()
        return deferred.resolve(responseFixture)
      }
    }
    createController = function() {
      $controller('ListCtrl', {
        $scope: scope,
        apiService: apiServiceMock,
      })
    }
    spyOn(apiServiceMock, 'getItems')
    var controller = createController()
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
