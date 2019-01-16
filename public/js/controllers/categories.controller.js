'use strict';

angular.module("catalogApp")
        .controller("CategoriesCtrl", ["$scope", "$http", "$state", "SERVER", function($scope, $http, $state, SERVER) {
                let $constructor = () => {
                        $http.get(SERVER + "/categories")
                                .then((res) => {
                                        console.log(res.data);
                                        $scope.categories = res.data;
                                })
                                .catch((error) => {
                                        console.warn("I can't get the categories: " + " " + error);
                                });
                        $scope.showProducts();
                };

                $scope.showProducts = function(category) {
                        var url;
                        if (category) {
                                url = '/categories/' + category.id + '/products';
                        }
                        else {
                                url = '/products';
                        }
                        $http.get(SERVER + url).then((res) => {
                                        $scope.products = res.data;
                                })
                                .catch((error) => {
                                        console.warn("I can't get the products: " + " " + error);
                                });
                };
                $constructor();

        }]);
