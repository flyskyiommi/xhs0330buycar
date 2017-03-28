define(['text!./riben.html','lazyload','css!./riben.css'],function(html,lazyload){
  var riben = {
    // 数据布局到direction页面 以及index页面
      add:function(){
        $(".direction-content").html(html)
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
          
          // 设置导航栏固定
          if(location.hash == '#/direction/riben'){
            var scrollTop = $(window).scrollTop() + $(window).height();
            $last =  $('.waterfall-content-left .box').last();
            var $lastScroll = $last.offset().top;

            if(scrollTop > $lastScroll){
                that.getItems('/gethf2');
            }

            if($(window).scrollTop() >= 51){
              $('#direction-menu').addClass('fixed-menu')
            }else {
              $('#direction-menu').removeClass('fixed-menu')
            }
          }

        })

      }
  }

  function getItem(data){
      var item =
          '<div class="box" data-id="'+data.id+'">\
            <img src="'+data.image+'" />\
            <div class="item-title"><h5>'+data.related_goods_name+'</h5></div>\
            <div class="item-desc">'+data.desc+'</div>\
            <div class="item-auth">\
              <div class="avatar"><img class="lazy" data-original="'+data.user.image+'" /></div><span class="name">'+data.user.nickname+'</span><span class="likes">'+data.likes+'</span>\
            </div>\
          </div>'

      return item;
  }

  return riben;
})
