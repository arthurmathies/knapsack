angular.module("landing", [
  "ui.router",
  "ui.bootstrap",
  "landing.auth"
])

.config(["$stateProvider", "$urlRouteProvider", function landingRouting($stateProvider, $urlRouteProvider) {
  $urlRouteProvider.otherwise("/landing");

  $stateProvider
    .state("landing", {
      url: "/landing",
      views: {
        "main": {
          templateUrl: "app/landing/landing.html",
          controller: "authController"
        }
      }
    });
}]);
