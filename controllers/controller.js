	app.controller("customerController",function($scope, simpleFactory){
		
		init();

		$scope.addCustomer = function(){
			var fname = $scope.newCustomer.fname;
			var lname = $scope.newCustomer.lname;
			var city = $scope.newCustomer.city;
			simpleFactory.insertCustomer(fname,lname,city);
			name = ""; city = "";
		};

		
		$scope.deleteCustomer=function(id){
 			var cust_id = id;
			simpleFactory.deleteCustomer(id);
			cust_id = 0;
		};	

		function init(){
			$scope.customers = simpleFactory.getCustomers();
		};
	});
	
	app.controller("orderController",function($scope, simpleFactory){
		init();
		function init(){
			$scope.customers = simpleFactory.getCustomers();
		};
		
	});
	
	app.controller("customerOrderController",function($scope,$location,simpleFactory){
		var url = $location.url();
		var str = url.split("?");
		
		init();
		function init(){
			var customer = simpleFactory.getCustomerById(str[1]);
			$scope.cust_order =customer.orders;
		};
		
	});


	app.filter("sumOfValue",function(){
		return function(input,key){
			if (angular.isUndefined(input) && angular.isUndefined(key))
           		{ 
				return 0;
			}   
     		
			var sum = 0.0;
			angular.forEach(input,function(value,k){
				sum = sum + parseFloat(value[key]);			
			});
			return sum;
		}
	});

	app.filter("OrderTotal", function(){
		return function(input,key1,key2){
			if (angular.isUndefined(input) && angular.isUndefined(key))
           		{ 
				return 0;
			}   
			
			var sum =0.0; 
			angular.forEach(input,function(value,k){
				sum = sum + (parseFloat(value[key1]) * parseFloat(value[key2]));	
			});
			return  sum;
     		}
	});
	
