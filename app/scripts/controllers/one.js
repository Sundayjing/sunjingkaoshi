angular.module('yoApp').controller('one',function($scope,$http){
	$http({
		url:'http://www.somenote.cn:1602/list1',
		method: 'get'

	}).success(function(e) {
		$scope.data = e;
	})
})
