// define(['text!./direction.html','css!./direction.css'],function(html){
//   var direction = {
//     add:function(){
//         $("#main").html(html)
//     }
//   }

//   return direction;
// })

define(['text!./direction.html',
'Swiper',
'src/pages/direction/directionrouter.js',
'css!./direction.css'],function(html,Swiper){

var direction = {
  // 布局到index <div id="main"></div>
      add:function(){
        $("#main").html(html)
      },
      // 导航栏布局
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

  return direction;
})
