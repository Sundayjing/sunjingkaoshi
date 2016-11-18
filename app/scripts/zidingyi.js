angular.module('sj',[]).directive("sj",function(){
		return{					
			template:'<div><div id="carousel-example-generic{{a}}" class="carousel slide" data-ride="carousel"><!-- Indicators --><ol class="carousel-indicators"><li data-target="#carousel-example-generic{{a}}" data-slide-to="0" class="active" ng-repeat="x in fdata" ng-class={active:$index==0}></li></ol><!-- Wrapper for slides --><div class="carousel-inner" role="listbox"><div class="item" ng-repeat="x in fdata" ng-class={active:$index==0}><img ng-src="{{x.img}}" ><div class="carousel-caption">...</div></div>...</div><!-- Controls --><a class="left carousel-control" href="#carousel-example-generic{{a}}" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#carousel-example-generic{{a}}" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a></div></div>',
			scope:{fdata:'=data'},
			link:function(scope,element,attrs){        
				scope.a=attrs['b']		
			}					
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
		},
		log:function(e){
			alert(e)
		},
		getodd:function(){
			var arr=[]
			for(var i=0;i<arr.length;i=i+2){
				arr.push(e[i])
			}
			return arr
	},
	geteven:function(){
			var arr=[]
			for(var i=1;i<arr.length;i=i+2){
				arr.push(e[i])
			}
			return arr
	}
}
}).filter('substr',function(){
	return function(e){
		if(e==1){
			return '***'
		}else{
			return e
		}
	}
})
