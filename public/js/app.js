"use strict";

/*global angular*/
let app = angular.module("catalogApp", ["ui.router", "ngMessages"]);

app.constant("SERVER", "https://afacerielectronice-anghelvalentin14.c9users.io");

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/categories");

    $stateProvider.state("categories", {
        url: "/categories",
        templateUrl: "views/categories.html",
        controller: "CategoriesCtrl"
    });

    $stateProvider.state("contact", {
        url: "/contact",
        templateUrl: "views/contact.html",
        controller: "ContactCtrl"
    });
}]);
