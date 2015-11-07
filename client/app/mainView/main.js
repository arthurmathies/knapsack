angular.module("main", [
    "ui.router",
    "ui.bootstrap",
    "smart-table",
    "main.services",
    "main.main_lists",
    "main.sidebar",
    "main.header"
  ])
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouteProvider) {
    $urlRouteProvider.otherwise("/");

    $stateProvider
      .state("dashboard", {
        url: "/",
        views: {
          "main": {
            templateUrl: "main.html"
          },
          "main_lists@dashboard": {
            templateUrl: "main_lists/main_lists.html",
            controller: "MainController"
          },
          "sidebar@dashboard": {
            templateUrl: "sidebar/sidebar.html",
            controller: "SidebarController",
          },
          "header@dashboard": {
            templateUrl: "header/header.html",
            controller: "HeaderController",
          }
        }
      })
      .state("collection", {
        url: "/collection/:collection",
        views: {
          "main": {
            templateUrl: "main.html"
          },
          "main_lists@dashboard": {
            templateUrl: "main_lists/main_lists.html",
            controller: "MainController"
          },
          "sidebar@dashboard": {
            templateUrl: "sidebar/sidebar.html",
            controller: "SidebarController",
          },
          "header@dashboard": {
            templateUrl: "header/header.html",
            controller: "HeaderController",
          }
        }
      });

  }]);
