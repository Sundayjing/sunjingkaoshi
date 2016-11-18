'use strict';

/**
 * @ngdoc overview
 * @name yoApp
 * @description
 * # yoApp
 *
 * Main module of the application.
 */
angular
  .module('yoApp', ["ui.router","sj"]).config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider.state('one',{
  		url:'/one',
  		templateUrl: 'views/one.html',
  		controller:"one"
  	}).state('two',{
  		url:'/two',
  		templateUrl: 'views/two.html',
  		controller:"two"
  	})
  }).controller('login',function($scope,$http){
  	$http({
  		url:'http://www.somenote.cn:1510/test',
  		method:'get'
  	}).success(function(e){
  		$scope.mdata=e;
  		console.log(e)
  	});
  	$http({
  		url:'http://www.somenote.cn:1510/aut',
  		method:'get'
  	}).success(function(e){
  		$scope.adata=e;
  	})
  }).filter('guolv',function(){
	return function(e){	
		var arr=[]
		for(var i=0;i<arr.length;i++)
			if(arr.length>6){
				return '...'
				}else{
					return e
				}				
	}
})

