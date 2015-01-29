'use strict';

/**
 * @ngdoc function
 * @name angularYoemanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularYoemanApp
 */
angular.module('angularYoemanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
