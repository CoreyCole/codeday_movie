angular
  .module('movie')
  .controller('WaitingForViewersController1', function($scope, supersonic) {

	$scope.init = function() {
		$scope.showDim = true;
	};

	$scope.init();

	$scope.doneTapped = function() {
		var suggestions = new supersonic.ui.View("movie#voteSuggestions");
		supersonic.ui.layers.push(suggestions);
	};
  });