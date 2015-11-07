angular.module("landing.auth", [])

.controller("authController", ["$scope", "$location", "$uibModal", "Auth", function($scope, $location, $uibModal, Auth) {

  $scope.signupOpen = function() {
    var modalInstance = $uibModal.open({
      templateUrl: "authentication/signup-modal.html",
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
      templateUrl: "authentication/signin-modal.html",
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

  $scope.logOut = function() {
    Auth.logOut($scope.currentUser)
      .then(function(resp) {
        if (resp.status === 200) {
          $location.path("/landing")
        }
      })
  };

}]);

var SignupModalCtrl = function($scope, $location, $modalInstance, userForm, Auth) {
  $scope.form = {};
  $scope.submitForm = function() {
    Auth.signUp($scope.user)
      .then(function() {

      });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss("cancel");
  };
};

var SigninModalCtrl = function($scope, $location, $modalInstance, userForm) {
  $scope.form = {};
  $scope.submitForm = function() {
    Auth.signIn($scope.user)
      .then(function() {

      });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss("cancel");
  };
};
