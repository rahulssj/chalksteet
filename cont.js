var app=angular.module('myapp',['ngRoute']);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

//$locationProvider.html5Mode(true);//
$routeProvider
.when('/home',{
templateUrl:'home.html'
})
.when('/',{
	templateUrl:'home.html',
	controller:'mctrl'

}).when('/first',{
templateUrl:'first.html',
controller:'mctrl'
}).when('/first-success',{
templateUrl:'first.html',
controller:'Contact'
}).otherwise({
	redirectTo:'/home'
});

}]);

app.controller('Contact',['$scope','$location',function($scope,$location){
$scope.sendmessage=function(){
	console.log("inside butone");
	
}
}]);

app.controller('mctrl',['$scope','$http','$location',function($scope,$http,$location){

		$scope.sendmessage=function(ninja){
			console.log("inside");
			if(ninja.id==1){
			$location.path('first');
		}
		else{
		$location.path('/');	
		}
		}

		$scope.back=function(){
			console.log("home");
			$location.path('/');
		}
$scope.ninjas=[
{
	college:"St.Joseph's college",
	time:"9:00 AM - 10:30 AM",
	batch:"G",
	Attendance:"Pending",
	colorss:"btn-warning",
	Dept:"BE Computer Science",
	verbal:"Sentence Correction",
	Available:true,
	id:1
},
{
college:"St.Joseph's college",
	time:"12:00 PM - 1:30 PM",
	batch:"H",
	Attendance:"Manual",
	colorss:"btn-primary",
	Dept:"BE Computer Science",
	verbal:"Senetence Correction",
Available:true,
id:2
}

];
$http.get('data.json').then(function(data){
$scope.students=data.data;
console.log($scope.students.length);
	$scope.total=$scope.students.length;
	$scope.present="553";
	$scope.absent="2";
});
}]);

