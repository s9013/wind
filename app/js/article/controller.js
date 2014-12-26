define(['angular'],function(){

	'use strict';

	// article controller module
	var articleController = angular.module('ArticleCtrl', []);

	// article controller
	articleController.controller('articleCtrl',['$scope','$http','$sce',function($scope,$http,$sce){

			// or use $http to call ajax
			$http.get('data/articles.json')
        	//$http.get('ajax/articles.php')
				.success(function(data){
					console.log('success');
					console.log(data);
					$scope.articles= data;
					
				}).error(function(data,status,headers,config){
					console.log('error');
				});

			$scope.trust = function(html){
				return $sce.trustAsHtml(html);
			}

			console.log($scope.user);
	}]);


	// article detail controller
	articleController.controller('articleDetailCtrl',['$scope','httpService','$sce','$routeParams',function($scope,httpService,$sce,$routeParams){
			console.log($routeParams.id);
			httpService.querywithParams('data/articles.json',$routeParams.id).then(function(data){
			 	console.log(data);
			 	$scope.articles = data;
			 	for(var i=0; i<data.length; i++){
						if(data[i].id == $routeParams.id){
							$scope.article = data[i];
							break;
						}
				}
				console.log($scope.article);
			});

			$scope.trust = function(html){
				return $sce.trustAsHtml(html);
			}
	}]);


});// end for define