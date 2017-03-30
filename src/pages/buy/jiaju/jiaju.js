
define(['text!./jiaju.html','lazyload','css!./jiaju.css'],function(html,lazyload){
 var _Goods = null;
 
  var jiaju = {

// 数据布局到buy,以及index
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
      getItemsjiaju:function(url){

 var that = this;


        $.get(url,function(res){

console.log(res)

            if(res.success == true){
               var notes = res.data.notes;

                that.setGoodsInfo(notes);

               var left = [];
               var right = [];

               for(var i = 0; i< notes.length;i++){
                  if(i %2 == 0){
                    var p = getItem(notes[i]);
                    left.push(p);
                  }else {
                    var p = getItem(notes[i]);
                    right.push(p);
                  }
               }
// 分隔为字符串，布局到页面
               $('.waterfall-content-left').append(left.join(''));
               $('.waterfall-content-right').append(right.join(''));
// 懒加载
                $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});

// 点击商品
               $('.box').on('touchstart',function(e){
                  console.log("点击商品");
 //  获取该商品id
                  var id = $(this).data('id')
                  
                  location.href="#/goods/" + id;

                  console.log('携带ID');  
               })

            }
        })
      },

      initWaterFall:function(l){
// 连接服务器接口，获取数据
          // this.getItemshufu('/gethf2');

             this.getItemsjiaju('http://127.0.0.1:3020/gethf2');
          // this.getItems('/getall');
  // 导航栏固定
          this.scrollAppend();
  // 懒加载
          $("img.lazy").lazyload({
            effect : "fadeIn",failure_limit : 20
          });
      },
 // 设置滚动时的样式，导航栏固定
      scrollAppend:function(){
        var that = this;

        $(window).on('scroll',function(){
           console.log('滚动')
          // console.log(location.hash+"哈希值");
// 设置导航栏固定
          if(location.hash == '#/buy/hf'){

            var scrollTop = $(window).scrollTop() + $(window).height();

            $last =  $('.waterfall-content-left .box').last();

            var $lastScroll = $last.offset().top;

            if(scrollTop > $lastScroll){
                // that.getItems('/gethf2');
                that.getItemsjiaju('/gethf2');
            }

            if($(window).scrollTop() >= 51){
              $('#buy-menu').addClass('fixed-menu')
            } else {
              $('#buy-menu').removeClass('fixed-menu')
            }
          }

        })

      }
  }

// 布局数据，使用变量、参数getItem(data) 传出
  function getItem(data){
      var item =
          '<div class="box" data-id="'+data.id+'">\
            <img class="lazy" data-original="'+data.image+'" />\
            <div class="item-title"><h5>'+data.related_goods_name+'</h5></div>\
            <div class="item-desc">'+data.desc+'</div>\
            <div class="item-auth">\
              <div class="avatar"><img class="lazy" data-original="'+data.user.image+'" /></div><span class="name">'+data.user.nickname+'</span><span class="likes">'+data.likes+'</span>\
            </div>\
          </div>'

      return item;
  }

  return jiaju;
})


// 懒加载，替换
 // <img src="'+data.image+'" />\