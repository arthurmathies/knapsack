angular.module("landing.services", [])
  .factory("Auth", ["$http", function($http) {
    var signUp = function(user) {
      return $http({
        method: "POST",
        url: "api/signup",
        data: user
      }).then(function succesCallback(resp) {
        if (resp.data.constructor === String && resp.data.search("already taken") > 0) {
          return "already exists";
        } else {
          return resp.data.user;
        }
      }, function errorCallback(resp) {
        console.log(resp.status + ": failed to signup user");
        return resp;
      });
    };

    var signIn = function(user) {
      return $http({
        method: "POST",
        url: "api/signin",
        data: user
      }).then(function succesCallback(resp) {
        if (resp.data === "Wrong password" || resp.data.constructor === String) {
          return resp.data;
        }
        return resp.data.user;
      }, function errorCallback(resp) {
        console.log(resp.status + ": incorrect username or password");
        return resp;
      });
    };

    return {
      signIn: signIn,
      signUp: signUpw
    };

  }]);
