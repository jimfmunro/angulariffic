'use strict';

app.controller('TodoCtrl', function ($scope) {
  $scope.todos = [
    {id: 1, name: 'get milk', completed: false},
    {id: 2, name: 'wash car', completed: false},
    {id: 3, name: 'feed baby', completed: false},
    {id: 4, name: 'go to sleep', completed: false}
  ];

  $scope.completed = {};

  $scope.addItem = function (newItemName) {
    $scope.todos.push({
      id: $scope.todos.length,
      name: newItemName,
      completed: false
    });
    $scope.item = '';
  };
  $scope.markComplete = function (item) {
    $scope.completed.push({
      id: item.id,
      name: item.name,
      completed: true
    });
    $scope.todos.splice(item, 1);
  };
  $scope.removeItem = function (removeItem) {
    $scope.todos.splice(removeItem, 1);
  };
});
