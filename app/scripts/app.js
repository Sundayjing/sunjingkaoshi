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
  .module('yoApp', ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider.state('one',{
  		url:'/one',
  		templateUrl: 'views/one.html',
  		controller:"one"
  	}).state('two',{
  		url:'/two',
  		templateUrl: 'views/two.html',
  		controller:"two"
  	})
  });
