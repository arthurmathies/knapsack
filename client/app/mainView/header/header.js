angular.module("main.header", [])

.controller("HeaderController", ["$scope", "Auth", function($scope, Auth) {

  $scope.logOut = function() {
    Auth.logOut($scope.currentUser);
  };

}]);
