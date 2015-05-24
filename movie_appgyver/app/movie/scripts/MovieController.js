angular
    .module('movie')
    .controller('MovieController', function($scope, supersonic) {
	var attributes = {
	    name: 'TMNT',
	    year: '2007',
	    imageLink: 'http://static1.gamespot.com/uploads/original/1179/11799911/2581484-tmnt.jpg',
	    score: '9',
	    description: 'Movie About Turtles',
	    rating: "70%",
	    genres: ["family", "action"],
	    length: "1hr",
	    cast: ["Leo", "Mike", "Raph", "Donnie"]
	};

	$scope.name=attributes["name"];
	$scope.year=attributes["year"];
	$scope.imageLink=attributes["imageLink"];
	$scope.score=attributes["score"];
	$scope.description=attributes["description"];
	$scope.rating=attributes["rating"];
	$scope.genres=attributes["genres"];
	$scope.length=attributes["length"];
	$scope.cast=attributes["cast"];

	
    });
