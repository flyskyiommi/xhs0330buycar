define(['text!./hf.html','lazyload','css!./hf.css'],function(html,lazyload){
  var hf = {
    // 数据布局到life页面 以及index页面
      add:function(){
        $(".life-content").html(html)
      },
      getItems:function(url){
        $.get(url,function(res){
            if(res.success == true){
               var notes = res.data.notes;
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

               $('.waterfall-content-left').append(left.join(''));
               $('.waterfall-content-right').append(right.join(''));
 $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});



               $('.box').on('touchstart',function(e){
                  var id = $(this).data('id')
                  location.href="#/detail/" + id
               })

            }
        })
      },



      
      initWaterFall:function(l){
// 连接服务器接口，获取数据
          this.getItems('/gethf');
          // this.getItems('/getall');



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
          console.log(location.hash);
          //进行判断
          // 设置导航栏固定
          if(location.hash == '#/life/hf'){
            var scrollTop = $(window).scrollTop() + $(window).height();
            $last =  $('.waterfall-content-left .box').last();
            var $lastScroll = $last.offset().top;

            if(scrollTop > $lastScroll){
                that.getItems('/gethf2');
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

  return hf;
})
