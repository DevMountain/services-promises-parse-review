var app = angular.module('todo');

app.controller('mainCtrl', function($scope, parseService){
  var getData = function(){
    parseService.getTodos()
      .then(function(todos){
        debugger;
        $scope.todos = todos.data.results;
      });
  }

  $scope.addItem = function(){
    if($scope.newItem){
      var obj = {};
      obj.item = $scope.newItem;
      obj.date = new Date();
      parseService.addTodo(obj)
        .then(function(status){
          $scope.newItem = '';
          getData();
        });
    }
  };

  $scope.removeTask = function(index){
    var id = $scope.todos[index].objectId;
    parseService.removeItem(id)
      .then(function(){
        getData();
      });
  };

  getData();
});