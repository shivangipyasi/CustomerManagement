

	var app = angular.module("myApp",["ngRoute"]);
	
	app.config(function($routeProvider){
		$routeProvider
			.when("/customersList",{
				templateUrl : "views/viewCustomerList.html",
				controller: "customerController"			
			})
			.when("/orders",{
				templateUrl : "views/viewAllOrder.html",
				controller: "orderController"			
			})
			.when("/orders/:CustomerID",{
				templateUrl : "views/viewCustomerOrder.html",
				controller: "customerOrderController"			
			})
			.when("/aboutUs",{
				templateUrl : "index.html",
				controller: "aboutUsController"			
			})
			.otherwise({redirectTo : "index.html"});
	});

