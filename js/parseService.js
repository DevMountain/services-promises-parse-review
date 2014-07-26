var app = angular.module('todo');

app.service('parseService', function($http, $q){
  this.getTodos = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'https://api.parse.com/1/classes/todoItems'
    }).then(function(data){
      data.data.results[0].timeCommitment = '4 hours';
      deferred.resolve(data);
    });
    return deferred.promise;
  };

  this.addTodo = function(obj){
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/todoItems',
      data: obj
    })
  };

  this.removeItem = function(id){
    return $http({
      method: 'DELETE',
      url: 'https://api.parse.com/1/classes/todoItems/' + id
    })
  };
});