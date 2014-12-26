define(['angular'],function(){

	'use strict';

	// define a module
	var module = angular.module('ShowDirectiveModule',[]);

	// difine a directive
	module.directive('showImage',function(){
		return function(scope,element,attrs){
			console.log('showImage');

			// $('#container').on('click','.item', function(){
			// 	console.log('showImage11111111');
			// 	console.log(123);
			//   	scope.$parent.showImgPath = 'img/muscle3.jpg';
			//   	console.log(scope.$parent.showImgPath);
			  	
			//   	scope.$parent.$apply();
			//   	$('#showModal').modal();
			// });


		}
	});

	

});