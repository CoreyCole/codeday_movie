angular
    .module('movie')
    .controller('SearchMovieController.js', function($scope, supersonic) {
	$scope.displayMovies = function(movie) {
	    $scope.movies.push(movie);
	};

	$scope.closeModal = function() {
	    supersonic.ui.modal.hide();
	};

    });
