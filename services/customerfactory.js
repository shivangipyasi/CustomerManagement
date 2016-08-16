
	app.factory("simpleFactory",function(){
		var factory = {};
		
		var customers = [
			{id: 1, fname: "Ankur", lname: "Pandey", city: "Montreal",
				orders: [
				    { product:"Basket", Price: 5.99, Qty: 1, OrderTotal: 5.99},
				    { product:"Yarn", Price: 10.99, Qty: 1, OrderTotal: 5.99},
			            { product:"Needles", Price: 2.99, Qty: 1, OrderTotal: 5.99}
				]
			},
			{id: 2, fname: "Shiva", lname: "Ram", city: "Montreal",
				orders: [
				    { product:"Shampoo", Price: 12.99, Qty: 1, OrderTotal: 12.99},
				    { product:"Needles", Price: 2.99, Qty: 1, OrderTotal: 5.99},
			            { product:"Detergent", Price: 21.99, Qty: 1, OrderTotal: 21.99}
				]
			},
			{id: 3, fname: "John", lname: "Kallos", city: "Chicago",
   				orders: [
				    { product:"Conditioner", Price: 10, Qty: 3, OrderTotal: 30},
				    { product:"Yarn", Price: 10.99, Qty: 1, OrderTotal: 5.99},
			            { product:"Detergent", Price: 21.99, Qty: 1, OrderTotal: 21.99}
				]
			},
			{id: 4, fname: "Dave", lname: "Dumbledore", city: "Toronto",
				orders: [
				    { product:"Shampoo", Price: 12.99, Qty: 1, OrderTotal: 12.99},
				    { product:"Basket", Price: 5.99, Qty: 1, OrderTotal: 5.99},
			            { product:"Needles", Price: 2.99, Qty: 1, OrderTotal: 5.99}
				]
			}
		];
	
		factory.getCustomers = function(){
			return customers;
		};
		
		factory.insertCustomer = function(fname,lname,city){
			var top_id = customers.length +1;
			customers.push({
				id: top_id,
				fname: fname,
				lname: lname,
				city: city
			});
		};
	
		factory.getCustomerById = function(id){
			for(var i = 0; i<customers.length;i++){
				if(customers[i].id ==id){
					return customers[i];
							
				}
			}
			return null;
		};

		factory.deleteCustomer = function(id){
			for(var i = 0;i<customers.length;i++){
				if(customers[i].id ==id){
					customers.splice(i,1);	
					break;	
				}
			}
		};
				
		return factory;	
	});

