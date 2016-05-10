// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova','starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();

    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {


    $ionicConfigProvider.platform.android.tabs.position('bottom');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

    .state('tab.zy',{
      url:'/zy',
      views: {
        'tab-zy': {
          templateUrl: 'templates/tab-zy.html'
        }
      }
    })


    .state('tab.zy.news',{
      url:'/news',
      cache:false,
      views:{
        'ly-zy':{
          templateUrl: 'templates/tab-zy-news.html',
          controller: 'NewsListCtrl'
        }

      }

    })

   .state('news-detail',{
      url:'/news-detail',
          templateUrl: 'templates/tab-zy-news-detail.html',
          controller: 'NewsDetailCtrl'

    })


    .state('test',{
      url:'/test',
      templateUrl: 'templates/test.html'
    })

    .state('tab.zy.read',{
      url:'/read',
      views:{
        'ly-zy':{
          templateUrl: 'templates/tab-zy-read.html'
        }
      }

    })


    .state('tab.zygl',{
      url:'/zygl',
      views: {
        'tab-zygl': {
          templateUrl: 'templates/tab-zygl.html'

        }
      }
    })

    .state('tab.whcy',{
      url:'/whcy',
      views: {
        'tab-whcy': {
          templateUrl: 'templates/tab-whcy.html'

        }
      }
    });



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/zy/news');

  });


