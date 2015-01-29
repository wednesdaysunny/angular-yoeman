'use strict';

/**
 * @ngdoc function
 * @name angularYoemanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularYoemanApp
 */
angular.module('angularYoemanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('aaa');
  });
