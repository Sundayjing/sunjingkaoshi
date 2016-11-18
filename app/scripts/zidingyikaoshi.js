angular.module('sj',[]).directive("sj",function(){
	return{
		template:'<div><ul style="float:left;" id=""{{a}}><li ng-repeat="tmy in fdata | filter:{title}">{{tmy.title | limitTo:8 }}</li></ul><div style=""float:left; ng-repeat="tmy in adata"><img ng-src="{{tmy.img}}" /></div></div>',
		restrict:'AEMC',
		scope:{fdata:'=data',adata:'=data1'},
		
	}
}).service('getservice',function($http){
	return{
		ajax:function(url,method,callback){
			$http({
				url:url,
				method:method
			}).success(function(e){
				callback(e)
			})
			
		}
	}
})