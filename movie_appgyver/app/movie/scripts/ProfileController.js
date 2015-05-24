angular
  .module('movie')
  .controller('ProfileController', function($scope, supersonic) {

	$scope.init = function() {
		
	};

	$scope.init();

	$scope.viewersTapped = function() {
		var viewersView = new supersonic.ui.View("movie#addViewers");
		supersonic.ui.layers.push(viewersView);
	};
  });