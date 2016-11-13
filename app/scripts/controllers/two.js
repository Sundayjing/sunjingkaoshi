angular.module('yoApp').controller('two',function($scope,$http){
	$http({
		url:'http://www.somenote.cn:1602/list2',
		method: 'get'

	}).success(function(e) {
		$scope.data = e;
	})
})
