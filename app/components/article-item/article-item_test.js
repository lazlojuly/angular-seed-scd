'use strict'

describe('articleItem directive', function() {
  var scope, $compile

  beforeEach(module('myApp'))
  beforeEach(inject(function($rootScope, _$compile_) {
    scope = $rootScope.$new()
    $compile = _$compile_
  }))

  it('should render item name in a div', function() {
    var element = '<article-item item="item"></article-item>'
    scope.item = 'testName'
    element = $compile(element)(scope)
    scope.$digest()

    expect(element.html()).toBe('testName')
  })


})
