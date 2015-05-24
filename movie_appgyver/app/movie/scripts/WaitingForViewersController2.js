angular
  .module('movie')
  .controller('WaitingForViewersController2', function($scope, supersonic) {

	$scope.init = function() {
		$scope.showDim = true;
	};

	$scope.init();

	$scope.doneTapped = function() {
		$scope.test = "test";
		var suggestions = new supersonic.ui.View("movie#finalSuggestion");
		supersonic.ui.layers.push(suggestions);
	};
  });