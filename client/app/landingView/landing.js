angular.module("landing", [
  "ui.router",
  "ui.bootstrap",
  "landing.auth",
  "landing.services"
])

.config(["$stateProvider", "$urlRouterProvider", function landingRouting($stateProvider, $urlRouteProvider) {
  $urlRouteProvider.otherwise("/landing");

  $stateProvider
    .state("landing", {
      url: "/landing",
      views: {
        "main": {
          templateUrl: "landing.html",
          controller: "authController"
        }
      }
    });
}]);
