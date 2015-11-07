angular.module("main", [
    "ui.router",
    "ui.bootstrap",
    "smart-table",
    "knapsack.services",
    "knapsack.main",
    "knapsack.sidebar"
  ])
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouteProvider) {
    $urlRouteProvider.otherwise("/");

    $stateProvider
      .state("dashboard", {
        url: "/",
        views: {
          "main": {
            templateUrl: "app/dashboard/dashboard.html"
          },
          "main_lists@dashboard": {
            templateUrl: "app/main_lists/main.html",
            controller: "MainController"
          },
          "sidebar@dashboard": {
            templateUrl: "app/sidebar/sidebar.html",
            controller: "SidebarController",
          },
          "header@dashboard": {
            templateUrl: "app/auth/header.html",
            controller: "authController",
          }
        }
      })
      .state("collection", {
        url: "/collection/:collection",
        views: {
          "main": {
            templateUrl: "app/dashboard/dashboard.html"
          },
          "main_lists@collection": {
            templateUrl: "app/main_lists/main.html",
            controller: "MainController"
          },
          "sidebar@collection": {
            templateUrl: "app/sidebar/sidebar.html",
            controller: "SidebarController",
          },
          "header@collection": {
            templateUrl: "app/auth/header.html",
            controller: "authController",
          }
        }
      });

  }]);