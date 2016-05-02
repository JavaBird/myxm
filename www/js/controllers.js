angular.module('starter.controllers', [])

  .controller('NewsDetailCtrl', function($scope) {

    $scope.nav="阅读";
    $scope.title = "话剧《生命如歌》上海站演出越演越热,男一号“陈旭刚”的董怀玉走进学生剧社.";
    $scope.content = "话剧《生命如歌》上海站演出越演越热,男一号“陈旭刚”的董怀玉走进学生剧社." +
    "话剧《生命如歌》上海站演出越演越热,男一号“陈旭刚”的董怀玉走进学生剧社." +
    "话剧《生命如歌》上海站演出越演越热,男一号“陈旭刚”的董怀玉走进学生剧社." +
    "话剧《生命如歌》上海站演出越演越热,男一号“陈旭刚”的董怀玉走进学生剧社.";



  })

  .controller('NewsListCtrl', function($scope) {

    $scope.news=[{"face":"img/main/w1.jpg","title":"话剧《生命如歌》上海站演出越演","date":"2016年5月2日"},

      {"face":"img/main/w2.png","title":"老文化艺术家赴代县神池扶贫采风精神传递给了乡村","date":"2016年5月2日"},
      {"face":"img/main/w1.jpg","title":"话剧《生命如歌》上海站演出越演","date":"2016年5月2日"},

      {"face":"img/main/w2.png","title":"老文化艺术家赴代县神池扶贫采风精神传递给了乡村","date":"2016年5月2日"},
      {"face":"img/main/w1.jpg","title":"话剧《生命如歌》上海站演出越演","date":"2016年5月2日"},

      {"face":"img/main/w2.png","title":"老文化艺术家赴代县神池扶贫采风精神传递给了乡村","date":"2016年5月2日"},
      {"face":"img/main/w1.jpg","title":"话剧《生命如歌》上海站演出越演","date":"2016年5月2日"},

      {"face":"img/main/w2.png","title":"老文化艺术家赴代县神池扶贫采风精神传递给了乡村","date":"2016年5月2日"},
      {"face":"img/main/w1.jpg","title":"话剧《生命如歌》上海站演出越演","date":"2016年5月2日"},

      {"face":"img/main/w2.png","title":"老文化艺术家赴代县神池扶贫采风精神传递给了乡村","date":"2016年5月2日"}

    ]



  })

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

  .controller('Myindex', function($scope, $stateParams) {

  })

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
