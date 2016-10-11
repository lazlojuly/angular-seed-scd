'use strict'

describe('myApp.services module', function() {

  var services
  var $httpBackend
  var authRequestHandler
  jasmine.getJSONFixtures().fixturesPath = 'base/fixtures'
  var responseFixture = loadJSONFixtures('api-service.json')


  beforeEach(module('myApp.services'))
  beforeEach(inject(function($injector) {
    apiService = $injector.get('apiService')
    $httpBackend = $injector.get('$httpBackend')
    authRequestHandler = $httpBackend.when('GET', '/data.json')
      .respond(responseFixture)
  }))
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation()
    $httpBackend.verifyNoOutstandingRequest()
  })

  it('should be defined', function() {
    expect(apiService).toBeDefined()
  })

  describe('getItems', function() {

    it('should be defined', function () {
      expect(apiService.getItems).toBeDefined()
    })

    it('should fetch all items from service', function () {
      var items
      apiService.getItems().then(function(response) {
        items = response.data
      })
      $httpBackend.flush()
      expect(items).toEqual(responseFixture)
    })

  })

})
