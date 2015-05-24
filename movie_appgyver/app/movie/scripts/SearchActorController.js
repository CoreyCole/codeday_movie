angular
    .module('movie')
    .controller('SearchActorController.js', function($scope, supersonic) {
	$scope.displayActors = function(actor) {
	    $scope.actors.push(actor);
	}

	$scope.closeModal = function() {
	    supersonic.ui.modal.hide();
	};

    });
