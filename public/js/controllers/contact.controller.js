'use strict';

angular.module("catalogApp")
        .controller("ContactCtrl", ["$scope", "$http", "$state","SERVER", function($scope, $http, $state,SERVER) {
                $scope.sendMessage = (contact) => {
                        console.log(contact);
                        $http.post(SERVER + "/contact", contact)
                                .then(() => {
                                        $state.go($state.current, {}, {
                                                reload: true
                                        });
                                })
                                .catch((error) => {
                                        console.warn(error);
                                });
                };
        }]);
