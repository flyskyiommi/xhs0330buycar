

define(['text!./xiezi.html','lazyload','css!./xiezi.css'],function(html,lazyload){
  var xiezi= {
    // 数据布局到生活页面 以及index
      add:function(){
        $(".life-content").html(html)
      },


      getItems:function(url){
        $.get(url,function(res){

          console.log(res)

            if(res.success == true){
               var datas = res.data;
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

               $('.waterfall-content-left').append(left.join(''));
               $('.waterfall-content-right').append(right.join(''));

               $('.box').on('touchstart',function(e){
                  var id = $(this).data('id')
                  location.href="#/goods/" + id
               })

            }
        })
      },


      initWaterFall:function(l){
          // 连接服务器接口，获取数据
          this.getItems('/getall');

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
          console.log('sss')

// 设置导航栏固定
   if(location.hash == '#/life/xiezi'){


     var scrollTop = $(window).scrollTop() + $(window).height();
          $last =  $('.waterfall-content-left .box').last();
          var $lastScroll = $last.offset().top;

          if(scrollTop > $lastScroll){
              that.getItems('/getall');
          }

          if($(window).scrollTop() >= 51){
            $('#life-menu').addClass('fixed-menu')
          }else {
            $('#life-menu').removeClass('fixed-menu')
          }

   }

     
        })

      }
  }

  function getItem(data){
      var item =
          '<div class="box" data-id="'+data.seller_id+'">\
            <img src="'+data.image+'" />\
            <div class="item-title"><h5>'+data.title+'</h5></div>\
            <div class="item-desc">'+data.desc+'</div>\
            <div class="item-price">\
              <span>'+data.discount_price+'￥</span>\
            </div>\
          </div>'

      return item;
  }

  return xiezi;
})
