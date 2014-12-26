define(['angular',"route",
	'js/directive/directive',
	'js/home/controller','js/home/directive',
	'js/article/controller',
	'js/timeline/controller',
	'js/show/controller','js/show/directive',
	'js/service/service',
	],function(){

	'use strict';

	// define app module
	var appModule = angular.module('App', ['ngRoute',
		'Timeline','Show','homeDirectiveModule','ShowDirectiveModule',
		'ArticleCtrl','httpService',
		]);

	// app module config
	appModule.config(['$routeProvider','$locationProvider',
		function($routeProvider,$locationProvider) {

			$locationProvider.html5Mode(false).hashPrefix('~');

			$routeProvider
				.when("/home",{
									templateUrl : "./js/home/home.html",
									//controller : 'ChartCtrl',
									reloadOnSearch : false
							  }
				)
				.when("/timeline",{
									templateUrl : "./js/timeline/timeline.html",
									controller : 'timelineCtrl',
									reloadOnSearch : false
								  }
				)
				.when("/article",{
									templateUrl : "./js/article/article.html",
									controller : 'articleCtrl',
									reloadOnSearch : false
								 }
				).when("/articleDetail/:id",{
									templateUrl : "./js/article/articleDetail.html",
									controller : 'articleDetailCtrl',
									reloadOnSearch : false
								 }
				)
				.when("/show",{
									templateUrl : "./js/show/show.html",
									controller : 'showCtrl',
									reloadOnSearch : false
							  }
				)
				.when("/about",{
									templateUrl : "./js/about/about.html",
									//controller : 'HelloCtrl',
									reloadOnSearch : false
								}
				)
				.otherwise({
						redirectTo : "/home"
				});
			}]);

});