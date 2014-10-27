angular.module('starter.directives', ['ionic'])

.directive('snapSvg', function() {

  mySnap = null;
  var createSnap = function createSnap() {
  }

  return {
    restrict: 'A',
    scope: true,
    link: function(scope, elem, attrs) {
      console.log('snap svg directive : ', attrs);
      mySnap = Snap(elem[0]);
      snapChild = mySnap.select('g').select('line');
      snapChild.animate({transform: 't0,15'}, 500, mina.elastic);
      snapChild.attr({x1: 2, x2: 21});
      liquid = mySnap.select('#beer-liquid');
      console.log('liquid: ', liquid)
      liquid.attr({points: '4.1,30.8 1.1,6.6 22.1,6.6 19.1,30.8 '});
    }
  };
});
