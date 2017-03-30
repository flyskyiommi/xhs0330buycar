define(['text!./muying.html','lazyload','css!./muying.css'],function(html,lazyload){

 var _Goods = null;

  var muying = {
    // 数据布局到购买页面，以及index页面
      add:function(){
        $(".buy-content").html(html);
        this.initWaterFall();
      },
      



// localStorage,本地存储
           setGoodsInfo: function(datas){
          _Goods = datas;
          localStorage.goods = JSON.stringify(_Goods);
      },
      getGoodsInfo: function(){
          return _Goods;
      },


      // 左右布局数据
      getItemsmuying:function(url){


         var that = this;



        $.get(url,function(res){
          console.log(res)

            if(res.success == true){
               var datas = res.nanren;

that.setGoodsInfo(datas);

               var left = [];
               var right = [];


               for(var i = 0; i< datas.length;i++){
                  if(i %2 == 0){
                    var p = getItem(datas[i]);
                    left.push(p);
                  }else {
                    var p = getItem(datas[i]);
                    right.push(p);
                  }
               }


// 分隔为字符串，布局到页面
               $('.waterfall-content-left').append(left.join(''));
               $('.waterfall-content-right').append(right.join(''));

// 点击商品
               $('.box').on('touchstart',function(e){
                 console.log("点击商品");

                  var id = $(this).data('id');
                  // console.log(id);

                  location.href="#/goods/" + id;
                    console.log('携带ID');  
            // console.log( location.href="#/goods/" + id);  
             })

            }
        })
      },


      initWaterFall:function(l){
          // 连接服务器接口，获取数据
          this.getItemsmuying('/nanren');
          // 注意这个；无法固定的效果一直出不来是因为没加这个
          this.scrollAppend();
          $("img.lazy").lazyload({
            effect : "fadeIn"
          });
      },
      // 设置滚动时的样式，导航栏固定
      scrollAppend:function(){
        var that = this;
        $(window).on('scroll',function(){
          console.log('滚动')

// 设置导航栏固定
   if(location.hash == '#/buy/caizhuang'){

     var scrollTop = $(window).scrollTop() + $(window).height();

          $last =  $('.waterfall-content-left .box').last();

          var $lastScroll = $last.offset().top;

          if(scrollTop > $lastScroll){

              that.getItemsmuying('/caizhuang');

          }

          if($(window).scrollTop() >= 51){
            
            $('#buy-menu').addClass('fixed-menu')
          }else {
            $('#buy-menu').removeClass('fixed-menu')
          }
   }
        })
      }
  }






  function getItem(data){
      var item =
          '<div class="box" data-id="'+data.id+'">\
            <img src="'+data.image+'" />\
            <div class="item-title"><h5>'+data.title+'</h5></div>\
            <div class="item-desc">'+data.desc+'</div>\
            <div class="item-price">\
            </div>\
          </div>'

      return item;
  }

  return muying;
})
