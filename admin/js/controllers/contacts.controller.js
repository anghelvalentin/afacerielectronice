'use strict';

angular.module("adminCatalog")
    .controller("ContactsCtrl", ["$scope", "$http", "$state", "SERVER", function($scope, $http, $state, SERVER) {
        let $constructor = () => {

            readRecords();
        };

        function readRecords() {
            $http.get(SERVER+"/contacts").then(function(res){
                    $scope.contacts =res.data;
            });
        }
        
        $constructor();
    }]);
