define(['angular'],function(){

	'use strict';

	// timeline controller module
	var timelineController = angular.module('Timeline', []);

	// timeline controller
	timelineController.controller('timelineCtrl',['$scope','httpService','$http',function($scope,httpService,$http){

		//$scope.getTimelineData = getTimelineData();
		httpService.querywithParams('data/timeline.json',null).then(function(data){
		 	console.log(data);
		 	$scope.timelineData = data;
		});
		
		// scroll event
		window.onscroll = function() { 
		   if($(document).height() == $(window).scrollTop()+ $(window).height()){
		        httpService.querywithParams('data/timeline.json',null,true).then(function(data){
			 		$scope.timelineData = $scope.timelineData.concat(data);
				});
		    }
		}

	}]);


});// end for define
