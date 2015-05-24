angular
  .module('movie')
  .controller('LoginController', function($scope, supersonic) {

	$scope.init = function() {
		$scope.showDim = false;
	};

	$scope.init();

	$scope.submitForm = function(isValid) {
		var parameters = new supersonic.ui.View("movie#movieParameters");
		supersonic.ui.layers.push(parameters);
	};
  });