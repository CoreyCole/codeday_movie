angular
  .module('movie')
  .controller('AddViewersController', function($scope, supersonic) {

	$scope.init = function() {
		
	};

	$scope.init();

	$scope.settingsTapped = function() {
		var parametersView = new supersonic.ui.View("movie#movieParameters");
		supersonic.ui.layers.push(parametersView);
	};

	$scope.doneTapped = function() {
		var waitingView = new supersonic.ui.View("movie#waitingForViewers1");
		supersonic.ui.layers.push(waitingView);
	};
  });