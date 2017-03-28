// define(['text!./brand.html','css!./brand.css'],function(html){
//   var direction = {
//     add:function(){
//         $("#main").html(html)
//     }
//   }

//   return direction;
// })


define(['text!./brand.html',
'Swiper',
'src/pages/brand/brandrouter.js',
'css!./brand.css'],function(html,Swiper){

var brand = {
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

  return brand;
})
