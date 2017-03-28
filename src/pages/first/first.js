define(['text!./first.html',
'Swiper',
// 'src/pages/first/firstroute.js',
'css!./css/ss.css',
],function(html,Swiper){

var first = {
      add:function(){
         $("#main").html(html)
      },

      //设置swiper，

// banner
  swiper:function(){
  var swiper = new Swiper('.swiper-container',{

  loop : true,

  });
// 目的地
    var swiper = new Swiper('.swiper-container002', {
        // pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true
    });
  }




}



  return first;
})
