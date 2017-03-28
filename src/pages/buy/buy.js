define(['text!./buy.html',
'Swiper',
'src/pages/buy/buyroute.js',
'css!./buy.css'],function(html,Swiper){

var buy = {
// 排列到index
      add:function(){
        $("#main").html(html)
      },
      // 导航栏排列
      initMenu:function(){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 0,
            freeMode: true,
            onTouchStart:function(swiper,event){
                var active = event.target;
                $(active).siblings('a').removeClass('selected')
                $(active).addClass('selected')
            }
        });


      }
  }

  return buy;
})
