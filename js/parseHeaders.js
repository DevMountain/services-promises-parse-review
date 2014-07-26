var app = angular.module('todo');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'uWN0ohE04gtStGoMFgBhLTl6b1N3sY82Tw1dSM39', 'X-Parse-REST-API-Key': 'Kamgi0bukkp0VZ4teW7tJdq7fyeMGFeIThcHHdz2'}
      return config;
    }
  };
});