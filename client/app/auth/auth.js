angular.module("knapsack.auth", ["ui.router"])

.controller("authController", ["$scope", "$rootScope", "$location", "$uibModal", "$log", "Auth", "AUTH_EVENTS", function($scope, $rootScope, $location, $uibModal, $log, Auth, AUTH_EVENTS) {
  
 

  $scope.signupOpen = function() {
    var modalInstance = $uibModal.open({
      templateUrl: "app/auth/signup-modal.html",
      controller: SignupModalCtrl,
      size: "modal-xs",
      scope: $scope,
      resolve: {
        userForm: function() {
          return $scope.userForm;
        }
      }
    });
  };

  $scope.signinOpen = function() {
    var modalInstance = $uibModal.open({
      templateUrl: "app/auth/signin-modal.html",
      controller: SigninModalCtrl,
      size: "modal-xs",
      scope: $scope,
      resolve: {
        userForm: function() {
          return $scope.userForm;
        }
      }
    });
  };

  $scope.logOut = function () {
    Auth.logOut($scope.currentUser)
    .then(function (resp){
      if (resp.status === 200){
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
        $location.path("/landing")
      }
    })
  };

}]);

var SignupModalCtrl = function($scope, $rootScope, $location, $modalInstance, userForm, AUTH_EVENTS, Auth) {
  $scope.form = {};
  $scope.submitForm = function() {
    if ($scope.form.userForm.$valid) {
      Auth.signUp($scope.user)
      .then(function() {

      });
    } else {
      //show the user somehow that the form is not valid if necessary maybe we check the form even before that happens
      console.log("form not valid");
    }
  };

  $scope.cancel = function() {
    $modalInstance.dismiss("cancel");
  };
};

var SigninModalCtrl = function($scope, $rootScope, $location, $modalInstance, userForm, AUTH_EVENTS, Auth) {
  $scope.form = {};
  $scope.submitForm = function() {
    if ($scope.form.userForm.$valid) {
      Auth.signIn($scope.user)
        .then(function () {

        });
    } else {
      //show the user somehow that the form is not valid
      console.log("form not valid");
    }
  };

  $scope.cancel = function() {
    $modalInstance.dismiss("cancel");
  };
};
