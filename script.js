(function(){
	var app = angular.module('budget', []);//module
	
	app.directive('expenseList', function(){
		return{
			restrict: 'E',
			templateUrl: 'expense-list.html'
		};
	});
	
	app.controller('BudgetController', function(){
		this.expenses = expenses;
	});
	
	app.controller('ExpenseController', function(){
		this.expense = {};
		
		this.addExpense = function(expense){
			expenses.push(this.expense);
			console.log(this.expense.cost);
			this.expense = {};
		};
	});
	
	app.directive('budgetTooltip', function(){
		return {
			restrict: 'A',
			templateUrl: 'budget-info.html'
		}
	});
	
	var expenses = [
	{
		cost: 100,
		name: 'Fred Meyer',
		category: 'groceries'
	},
	{
		cost: 200,
		name: 'Winco',
		category: 'groceries'
	}
	];
	/*app.directive('productTitle', function(){
		return{
			restrict: 'E',//element .. for attribute use restrict: 'A'
			templateUrl: 'product-title.html',
		};
	});
			this.addExpense = function(){
			expenses.push(this.expense);
		};
	app.controller('StoreController', function(){//controller
		this.products = gems;
	});
	
	app.controller("ReviewController", function(){
		this.review = {};
		
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.revew = {};
		};
	});
	
	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'this thing is frigging awesome',
		canPurchase: true,
		soldOut: false,
		reviews: [
		{
			stars: 1,
			body: "This thing sucks",
			author: "jim@jimbo.com"
		},
		{
			stars: 1,
			body: "This thing sucks",
			author: "jim@jimbo.com"
		}
		]
	},
	{
		name: 'other gem',
		price: 5.00,
		description: 'this is another frigging gem',
		canPurcase: true,
		soldOut: false
	}];*/
})();