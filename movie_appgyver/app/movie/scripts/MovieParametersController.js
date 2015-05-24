angular
  .module('movie')
  .controller('MovieParametersController', function($scope, supersonic) {

	$scope.init = function() {
		
	};

	$scope.init();

	$scope.profileTapped = function() {
		var profileView = new supersonic.ui.View("movie#profile");
		var customAnimation = supersonic.ui.animate("slideFromLeft");
		supersonic.ui.layers.push(profileView, { animation: customAnimation });
	};

	$scope.addViewersTapped = function() {
		var addViewersView = new supersonic.ui.View("movie#addViewers");
		supersonic.ui.layers.push(addViewersView);
	};
  });