var journalistAppModule = angular.module("journalistApp", []);

journalistAppModule.controller("journalistCtrl", function ($scope, $http) {
    $http.get('database.json')
        .success(function (data) {
            $scope.journalists = data;
            $scope.propertyName = 'Name';
            $scope.reverse = false;

            $scope.sortBy = function (propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            };

            $scope.sorts = ['unsort', 'name', 'type', 'organization', 'reliability'];
            $scope.sort = $scope.sorts[0];
        })
        .error(function (data, status) {
            console.error('Fail to load data', status, data);
            $scope.journalists = {};
        });
});
