angular
    .module('movie')
    .controller('MovieController', function($scope, supersonic) {

	$scope.init = function() {
	    $scope.name = "TMNT";
	};

	$scope.init();
	
    });
