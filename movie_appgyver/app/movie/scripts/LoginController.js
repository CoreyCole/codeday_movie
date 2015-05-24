angular
  .module('movie')
  .controller('LoginController', ['$scope', '$http', 'supersonic', function($scope, $http, supersonic) {

	$scope.init = function() {
		$scope.showDim = false;
	};

	$scope.init();

	$scope.submitForm = function(isValid) {
		$scope.showDim = true;
		var email = "";
		if ($scope.rememberMe) {
			email = window.localStore.setItem('email', email);
		} else {
			email = "";
		}
		if(!isValid) {
			supersonic.ui.dialog.alert('Error on form');
		} else {
			$scope.postToServer();
		}

		// var parameters = new supersonic.ui.View("movie#movieParameters");
		// supersonic.ui.layers.push(parameters);
	};

	$scope.postToServer = function() {
		$scope.message = null;

		// $http.get('https://media-tor.herokuapp.com/').
		//   success(function(data, status, headers, config) {
		//     // this callback will be called asynchronously
		//     // when the response is available
		//   }).
		//   error(function(data, status, headers, config) {
		//     // called asynchronously if an error occurs
		//     // or server returns response with an error status.
		//   });

		$http({
		  method: 'POST',
		  url: 'https://media-tor.herokuapp.com/token',
		  data: {
		    user: {
		      email: $scope.user.email,
		      password: $scope.user.password
		    }
		  }
		}).
		success(function(data) {
		  $scope.showDim = false;
		  if (data.errors) {
		    $scope.messages = data.errors._full_messages;
		    supersonic.logger.log(data.errors._full_messages);
		  } else {
		    $scope.user.password = '';
		    window.localStorage.setItem("token", data.authentication_token);
			window.localStorage.setItem("currentUser", data.user);
			var parameters = new supersonic.ui.View("movie#movieParameters");
			supersonic.ui.layers.push(parameters);
		  }
		}).
		error(function(error) {
		  $scope.showDim = false;
		  if (error && error.errors && error.errors._full_message) {
		    $scope.message = error.errors._full_message;
		  } else {
		    $scope.message = 'Error connecting to server. Check settings and try again.';
		  }
		});

		// $http.post('https://media-tor.herokuapp.com/token',
		// 	{
		// 		email: $scope.user.email,
		// 		password: $scope.user.password
		// 	}
		// ).success(function() {
		// 	$scope.message = "hey";
		// });
		// $scope.message = "hey2";
		// success(function(data) {
		// 	$scope.showDim = false;
		// 	return
		// }).
		// error(function(error) {
		// 	$scope.message = 'Error connecting to server. Check settings and try again.';
		// });
	};
  }]);
