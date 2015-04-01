// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $stateProvider
  
		.state('signin', {
			cache: false,
          url: "/signin",
          templateUrl: "signin.html",
          controller: 'SignInCtrl'
        })
		// $urlRouterProvider.otherwise("/signin");
		 
		 
		
		 $urlRouterProvider.otherwise("/signin");
  
  })
  
    .controller('SignInCtrl', function($scope, $ionicScrollDelegate,$state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter) {
			  		$scope.rows = [ {
	id:1,					
	branch: '.Principal Office Branch',
	address: '111-113, Motijheel C/A. Dhaka - 1000.',
	fax:'880-2-9566223',ph:'Ph: 880-2-9571450, 9571451',
	naration:'We are ready to help you .For any query contact us directly'},   
	{
	id:2,
	branch: '2.Palton Branch ',
	address: 'Bay s Gallaria 57, Gulshan Avenue (Ground Floor)',
	fax:'880-2-9566223',
	ph:'Ph:880-2-8828103' ,
	naration:'We are ready to help you .For any query contact us directly'	},
	{
	id:3,
	branch: '3.Gulshan Branch ',
	address: 'Rangs Tower 68 Purana Paltan (1st Floor) Dhaka-1000',
	fax:'880-2-8816739',
	ph:'880-2-9571450, 9571451'  ,
	naration:'We are ready to help you .For any query contact us directly'},
	{
	id:45,
	branch: '4.Mitford Branch ',
	address:  'Bismillah Tower 147/148, Mitford Road',
	fax:'880-2-7314999',
	ph:'880-2-7320620 - 1' ,
	naration:'We are ready to help you '	},
	{
	id:422,
	branch: '4.Mitford Branch ',
	address:  'Aslam Tower 147/148, Mitf',
	fax:'880-2-7314999',
	ph:'880-2-7320620 - 1' ,
	naration:'We are ready to help you .For any query contact us directly and come dirrectly'	}
	
	];
	
	
	  var adjusting = false;
    $scope.scrollMirror = function(from, to) {
    if (adjusting) {
      adjusting = false;
    } else {
      // Mirroring zoom level
      var zoomFrom = $ionicScrollDelegate.$getByHandle(from).getScrollView().getValues().zoom;
      var zoomTo = $ionicScrollDelegate.$getByHandle(to).getScrollView().getValues().zoom;

      if (zoomFrom != zoomTo) {
        $ionicScrollDelegate.$getByHandle(to).getScrollView().zoomTo(zoomFrom);
      }

      // Mirroring left position
      $ionicScrollDelegate.$getByHandle(to).scrollTo($ionicScrollDelegate.$getByHandle(from).getScrollPosition().left,
      $ionicScrollDelegate.$getByHandle(to).getScrollPosition().top);

      adjusting = true;
    }
  }
	
	
	})

	
	

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
