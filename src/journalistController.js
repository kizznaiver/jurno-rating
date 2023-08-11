var journalistAppModule = angular.module("journalistApp", []);

journalistAppModule.controller("journalistCtrl", function ($scope, $http) {
    $http.get('database.json')
        .then(function (data) {
            // console.log(data.data);

            $scope.journalists = data.data;
            $scope.propertyName = 'Twitter';
            $scope.reverse = false;

            $scope.sortBy = function (propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            };

            $scope.sorts = ['unsort', 'name', 'type', 'organization', 'reliability'];
            $scope.sort = $scope.sorts[0];
        });
});
