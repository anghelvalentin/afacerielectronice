"use strict";

/*global angular*/
let app = angular.module("adminCatalog", ["ui.router"]);

app.constant("SERVER", "https://afacerielectronice-anghelvalentin14.c9users.io");

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/categories");

    $stateProvider.state("categories", {
        url: "/categories",
        templateUrl: "views/categories.html",
        // controller: "CategoriesCtrl"
    });

     $stateProvider.state("products", {
        url: "/products",
        templateUrl: "views/products.html",
        // controller: "ProductsCtrl"
    });
    
    $stateProvider.state("contacts",{
        url:"/contacts",
        templateUrl:"views/contacts.html",
        controller:"ContactsCtrl"
    });
}]);
