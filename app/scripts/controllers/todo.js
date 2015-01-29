'use strict';

/**
 * @ngdoc function
 * @name angularYoemanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularYoemanApp
 */
angular.module('angularYoemanApp')
  .controller('TodoCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function() {
      localStorageService.set('todos', _.uniq($scope.todos))
    }, true);

    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todos = _.uniq($scope.todos)
      $scope.todo = '';
    }

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    }
  });
