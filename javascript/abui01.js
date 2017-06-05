$('.menu').click(function() {
  $('.menu').removeClass("clicked");
  $(this).addClass("clicked");
})

$('.navi').click(function() {
  $('.menu').removeClass("clicked");
  $('#menu1').addClass("clicked");
})

$('.menu').hover(function() {
  $('.menu-text', this).addClass("hovered");
}, function() {
  $('.menu-text', this).removeClass("hovered");
});

$('#btn1').click(function() {
  TweenLite.from($('#pica01'), 1.25, {left:"-200%", ease: Strong.easeOut, delay: 0.3});
  TweenLite.from($('#pica02'), 1.25, {top:"200%", ease: Strong.easeOut, delay: 0.3});
  TweenLite.from($('#pica03'), 1.25, {top:"-200%", ease: Strong.easeOut, delay: 0.3});
  TweenLite.from($('#pica04'), 1.25, {left:"200%", top:"30%", ease: Strong.easeOut, delay: 0.3});
  TweenLite.fromTo($('#bg'), 1.25, {top:"-100%", ease: Strong.easeOut}, {top:"0%", ease: Strong.easeOut});
});

$('#btn2').click(function() {
  $('#bt-container').css("visibility", "hidden");
  setTimeout(function() {
    $('#bt-container').css("visibility", "visible");
  }, 350);
  TweenLite.from($('#text2'), 1.25, {left:"-200%", ease: Strong.easeOut, delay: 0.3});
  setTimeout(function() {
    TweenLite.fromTo($('#mask'), 1.25, {bottom:"0%", ease: Strong.easeOut}, {bottom:"-100%", ease: Strong.easeOut});
  }, 300);
  TweenLite.fromTo($('#bg'), 1.25, {top:"0%", ease: Strong.easeOut}, {top:"-100%", ease: Strong.easeOut});
  TweenLite.from($('#grayt1'), 1.25, {top:"0%", left:"100%", ease: Strong.easeOut, delay: 0.3});
  TweenLite.from($('#grayt2'), 1.25, {top:"100%", left:"0%", ease: Strong.easeOut, delay: 0.3});
  TweenLite.from($('#blackc1'), 1.25, {left:"100%", marginLeft:"0", ease: Strong.easeOut, delay: 2.0});
  TweenLite.to($('#blackc1'), 1.25, {left:"0%", marginLeft:"-182px", ease: Strong.easeOut, delay: 4.5});
  TweenLite.from($('#blackc2'), 1.25, {left:"100%", ease: Strong.easeOut, delay: 4.5});
  TweenLite.from($('#blackbar1'), 1.25, {bottom:"-34px", ease: Strong.easeOut, delay: 2.0});
  TweenLite.from($('#blackbar2'), 0.75, {bottom:"-155px", ease: Strong.easeOut, delay: 3.0});
  TweenLite.to($('#blackbar1'), 1.25, {bottom:"-34px", ease: Strong.easeOut, delay: 4.5});
  TweenLite.to($('#blackbar2'), 0.75, {bottom:"-155px", ease: Strong.easeOut, delay: 4.5});
});

$('#btn3').click(function() {
  TweenLite.fromTo($('#bg'), 1.25, {top:"100%", ease: Strong.easeOut}, {top:"0%", ease: Strong.easeOut});
  TweenLite.from($('#container3'), 1.25, {top:"150%", ease: Strong.easeOut});
  TweenLite.to($('#mask'), 1.5, {width:"286px", ease: Strong.easeOut});
  TweenLite.from($('#blackbar'), 1.5, {width:"845px", backgroundSize:"845px 41px", ease: Strong.easeOut});
  TweenLite.from($('#blackc'), 1.5, {left:"-181px", marginLeft:"0", ease: Strong.easeOut, delay: 1.8});
});

var IEIntro = angular.module('route', ['ngRoute', 'acontrollers']);

IEIntro.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/1',{
      templateUrl: '/abui/01.html',
      controller: 'a01'
    }).
    when('/2',{
      templateUrl: '/abui/02.html',
      controller: 'a02'
    }).
    when('/3',{
      templateUrl: '/abui/03.html',
      controller: 'a03'
    }).
    otherwise({
      redirectTo: '/1'
    });
}]);

var acontrollers = angular.module('acontrollers', []);

acontrollers.controller('a01', ['$scope',
  function ($scope) {
    TweenLite.from($('#pica01'), 1.25, {left:"-200%", ease: Strong.easeOut, delay: 0.3});
    TweenLite.from($('#pica02'), 1.25, {top:"200%", ease: Strong.easeOut, delay: 0.3});
    TweenLite.from($('#pica03'), 1.25, {top:"-200%", ease: Strong.easeOut, delay: 0.3});
    TweenLite.from($('#pica04'), 1.25, {left:"200%", top:"30%", ease: Strong.easeOut, delay: 0.3});
    TweenLite.fromTo($('#bg'), 1.25, {top:"-100%", ease: Strong.easeOut}, {top:"0%", ease: Strong.easeOut});
    TweenLite.from($('#scroll1'), 0.5, {bottom:"5%", opacity:"0", ease: Strong.easeOut, delay: 2});
    $('.menu').removeClass("clicked");
    $('#menu1').addClass("clicked");
    $(window).off("scroll");
    $(window).scrollTop(1);
    $(document).ready(function() {
          $(window).scroll(function() {
            if ($(this).scrollTop() > 1){
                window.location.assign("#/2");
                console.log('1 down');
            } else {
                //console.log('1 up');
            }
          });
    });
}]);

acontrollers.controller('a02', ['$scope',
  function ($scope) {
    TweenLite.from($('#text2'), 1.25, {left:"0%", marginLeft:"-350px", ease: Strong.easeOut, delay: 0.3});
    TweenLite.from($('#bt-container'), 1.25, {height:"0", bottom:"280px", ease: Strong.easeOut, delay: 0.3});
    TweenLite.fromTo($('#bg'), 1.25, {top:"0%", ease: Strong.easeOut}, {top:"-100%", ease: Strong.easeOut});
    TweenLite.from($('#grayt1'), 1.25, {top:"0%", left:"100%", ease: Strong.easeOut, delay: 0.3});
    TweenLite.from($('#grayt2'), 1.25, {top:"100%", left:"0%", ease: Strong.easeOut, delay: 0.3});
    TweenLite.from($('#blackc1'), 1.25, {left:"100%", marginLeft:"0", ease: Strong.easeOut, delay: 2.0});
    TweenLite.to($('#blackc1'), 1.25, {left:"-30%", marginLeft:"-182px", ease: Strong.easeOut, delay: 4.5});
    TweenLite.from($('#blackc2'), 1.25, {left:"100%", ease: Strong.easeOut, delay: 4.5});
    TweenLite.from($('#blackbar1'), 1.25, {bottom:"-34px", ease: Strong.easeOut, delay: 2.0});
    TweenLite.from($('#blackbar2'), 0.75, {bottom:"-155px", ease: Strong.easeOut, delay: 3.0});
    TweenLite.to($('#blackbar1'), 1.25, {bottom:"-34px", ease: Strong.easeOut, delay: 4.5});
    TweenLite.to($('#blackbar2'), 0.75, {bottom:"-155px", ease: Strong.easeOut, delay: 4.5});
    TweenLite.from($('#scroll1'), 0.5, {bottom:"5%", opacity:"0", ease: Strong.easeOut, delay: 5.5});
    $('.menu').removeClass("clicked");
    $('#menu2').addClass("clicked");
    $(window).off("scroll");
    $(window).scrollTop(1);
    $(document).ready(function() {
          $(window).scroll(function() {
            var st = $(this).scrollTop();
            if ($(this).scrollTop() > 1){
                console.log('2 down');
                window.location.assign("#/3");
            } else if($(this).scrollTop() < 1) {
                console.log('2 up');
                window.location.assign("#/1");
            }
            else {
              //
            }
          });
    });
  }]);

acontrollers.controller('a03', ['$scope',
  function ($scope) {
    TweenLite.fromTo($('#bg'), 1.25, {top:"100%", ease: Strong.easeOut}, {top:"0%", ease: Strong.easeOut});
    TweenLite.from($('#container3'), 1.25, {top:"150%", ease: Strong.easeOut});
    TweenLite.to($('#mask'), 1.5, {width:"286px", ease: Strong.easeOut});
    TweenLite.from($('#blackbar'), 1.5, {width:"845px", backgroundSize:"845px 41px", ease: Strong.easeOut});
    TweenLite.from($('#blackc'), 1.5, {left:"0%", marginLeft:"-181px", ease: Strong.easeOut, delay: 1.8});
    $('.menu').removeClass("clicked");
    $('#menu3').addClass("clicked");
    $(window).off("scroll");
    $(window).scrollTop(1);
    $(document).ready(function() {
      $(window).scroll(function() {
        var st = $(this).scrollTop();
        if ($(this).scrollTop() < 1){
            console.log('3 up');
            window.location.assign("#/2");
        } else {
            //console.log('3 down');
        }
      });
    });
}]);