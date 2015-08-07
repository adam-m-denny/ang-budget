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
})();