define(['text!./shiahng.html','lazyload','css!./shishang.css'],function(html,lazyload){
 var _Goods = null;
  var shishang = {
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
      getItemsshishang:function(url){

         var that = this;

        $.get(url,function(res){
          console.log(res)
            if(res.success == true){
               var datas = res.data;

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
// 确定商品ID
                  var id = $(this).data('id');
                  // console.log(id);
// 进入goods指定商品的详情页
                  location.href="#/goods/" + id;
            console.log('携带ID');  
             })

            }
        })
      },


      initWaterFall:function(l){
          // 连接服务器接口，获取数据
          // this.getItems('/getall');
           this.getItemsshishang('http://127.0.0.1:3020/getall');
          // 固定导航栏
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
   if(location.hash == '#/buy/all'){
     var scrollTop = $(window).scrollTop() + $(window).height();
          $last =  $('.waterfall-content-left .box').last();
          var $lastScroll = $last.offset().top;
          if(scrollTop > $lastScroll){
                          that.getItemsshishang('http://127.0.0.1:3020/getall');
              // that.getItems('/getall');
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
      // all.html布局数据
      //data-id ,由此将相应商品信息布局到商品详情页面
          '<div class="box" data-id="'+data.id+'">\
            <img src="'+data.image+'" />\
            <div class="item-title"><h5>'+data.title+'</h5></div>\
            <div class="item-desc">'+data.desc+'</div>\
            <div class="item-price">\
              <span>'+data.discount_price+'￥</span>\
            </div>\
          </div>'

      return item;
  }

  return shishang;
})
