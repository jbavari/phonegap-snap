// var svgIconConfig = {
//   clock : {
//     url : 'svg/clock.svg',
//     animation : [
//       {
//         el : 'path:nth-child(2)',
//         animProperties : {
//           from : { val : '{"transform" : "r0 32 32"}' },
//           to : { val : '{"transform" : "r630 32 32"}' }
//         }
//       },
//       {
//         el : 'path:nth-child(3)',
//         animProperties : {
//           from : { val :'{"transform" : "r0 32 32"}' },
//           to : { val : '{"transform" : "r80 32 32"}' }
//         }
//       },
//     ]
//   }
// }

// var clockIcon = new svgIcon( document.querySelector( '.si-icons-easing .si-icon-clock' ), svgIconConfig, { easing : mina.elastic, speed: 600 } );
        // new

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  window.snap = Snap.select('#svg');
  window.clock = snap.select('#clock')
  window.clockHand = clock.select('path:nth-child(2)'),
  window.clockPart = clock.select('path:nth-child(3)');
  var clicked = false;
  $scope.click = function click() {
    if(clicked) {
      clockHand.animate({"transform" : "r0 32 32"}, 500, mina.linear);
      clockPart.animate({"transform" : "r0 32 32"}, 500, mina.linear);
    } else {
      clockHand.animate({"transform" : "r630 32 32"}, 500, mina.linear);
      clockPart.animate({"transform" : "r80 32 32"}, 500, mina.linear);
    }
    clicked = !clicked;
  }

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
