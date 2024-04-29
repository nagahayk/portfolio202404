gsap.to('.box', { x: 400, scrollTrigger: { trigger: '.contentsImg', start: 'top center-=50%', end: 'bottom center-=100px', markers: true, scrub: true, pin: true, } });
$('.slider').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 4,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1.5,//スライドを画面に1.5枚見せる
    }
  }
]
});

gsap.to('.conImg01', {
  y: 0,
  opacity: 1,
  duration: 1,
  delay: .3,
  scrollTrigger: {
    toggleActions: "play none none reverse", // 上スクロールで戻る
    trigger: '.t1',
    start: 'top center',
    markers: true,
  }
});
gsap.to('.conImg02', {
  y: 0,
  opacity: 1,
  duration: 1,
  delay: .5,
  scrollTrigger: {
    toggleActions: "play none none reverse", // 上スクロールで戻る
    trigger: '.t2',
    start: 'top center',
    markers: true,
  }
});
gsap.to('.conImg03', {
  y: 0,
  opacity: 1,
  duration: 1,
  delay: .5,
  scrollTrigger: {
    toggleActions: "play none none reverse", // 上スクロールで戻る
    trigger: '.t3',
    start: 'top center',
    markers: true,
  }
});

/*
$(window).on('scroll', function(){
    let $target = $('.slider');
    let scroll = $(window).scrollTop(); //画面 トップからの距離
    let pos_top = $target.offset().top; //ターゲットの上部 トップからの距離
    if(scroll > pos_top){
      $target.addClass('header-up')
    }else{
      $target.removeClass('header-up')
    }


  });
$(function () {
  $(window).scroll(function () {
    let $target = $('.slider');
    let pos_top = $target.offset().top;
    if ($(this).scrollTop() > pos_top) { //100px以上スクロールした固定
      $('.slider').addClass('fixed');
    } else {
     
    }
  });
});
*/




