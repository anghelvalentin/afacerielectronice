'use strict';

angular.module("adminCatalog")
        .controller("CategoriesCtrl", ["$scope", "$http", "$state", "SERVER", function($scope, $http, $state, SERVER) {
                let $constructor = () => {
                        $scope.readRecords();
                };

                $scope.readRecords = function() {
                        $.get("/categories/", {}, function(data, status) {
                                data.forEach(function(value) {
                                        var row = '<tr id="row_id_' + value.id + '">' +
                                                displayColumns(value) +
                                                '</tr>';
                                        $('#articles').append(row);
                                });
                        });
                }

                function displayColumns (value) {
                        return '<td>' + value.id + '</td>' +
                                '<td class="name">' + value.name + '</td>' +
                                '<td class="description">' + value.description + '</td>' +
                                '<td align="center">' +
                                '<button ng-click="viewRecord(' + value.id + ')" class="btn btn-edit">Update</button>' +
                                '</td>' +
                                '<td align="center">' +
                                '<button ng-click="deleteRecord(' + value.id + ')" class="btn btn-danger">Delete</button>' +
                                '</td>';
                }

                $scope.addRecord = function() {
                        alert("sal");
                        $('#id').val('');
                        $('#name').val('');
                        $('#description').val('');

                        $('#myModalLabel').html('Add New Category');
                        //  $('#add_new_record_modal').modal('show');
                }

                $scope.viewRecord = function(id) {
                        var url = "/categories/" + id;

                        $.get(url, {}, function(data, status) {
                                //bind the values to the form fields
                                $('#name').val(data.name);
                                $('#description').val(data.description);

                                $('#id').val(id);
                                $('#myModalLabel').html('Edit Category');

                                $('#add_new_record_modal').modal('show');
                        });
                }

                function saveRecord() {
                        var formData = $('#record_form').serializeObject();
                        console.log(formData);
                        if (formData.id) {
                                $scope.updateRecord(formData);
                        }
                        else {
                                $scope.createRecord(formData);
                        }
                }

                function createRecord(formData) {
                        $.ajax({
                                url: '/categories/',
                                type: 'POST',
                                accepts: {
                                        json: 'application/json'
                                },
                                data: formData,
                                success: function(data) {
                                        $('#add_new_record_modal').modal('hide');

                                        var row = '<tr id="row_id_' + data.id + '">' +
                                                displayColumns(data) +
                                                '</tr>';
                                        $('#articles').append(row);
                                }
                        });
                }

                $scope.updateRecord = function(formData) {
                        $.ajax({
                                url: '/categories/' + formData.id,
                                type: 'PUT',
                                accepts: {
                                        json: 'application/json'
                                },
                                data: formData,
                                success: function(data) {
                                        $('#row_id_' + formData.id + '>td.name').html(formData.name);
                                        $('#row_id_' + formData.id + '>td.description').html(formData.description);
                                        $('#add_new_record_modal').modal('hide');
                                }
                        });
                }

                $scope.deleteRecord = function(id) {
                        $.ajax({
                                url: '/categories/' + id,
                                type: 'DELETE',
                                success: function(data) {
                                        $('#row_id_' + id).remove();
                                        alert("S-a sters");
                                }
                        });

                };

                $constructor();

        }]);
