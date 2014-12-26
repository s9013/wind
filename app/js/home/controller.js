


define(['angular'],function(){

	'use strict';
	
	console.log('home');

	// home controller module
	var homeController = angular.module('iWay.controllers.home', []);

	// home controller
	homeController.controller('homeCtrl',['$scope',function($scope){
			$scope.user = {
			    name: 'Home',
			    age: 22, 
			};

			console.log($scope.user);
	}]);

});// end for define