
define(['text!./baobao.html','lazyload','css!./baobao.css'],function(html,lazyload){
  var baobao = {
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

               $('.box').on('touchstart',function(e){
                  var id = $(this).data('id')
                  location.href="#/detail/" + id
               })

            }
        })
      },

      initWaterFall:function(l){

          this.getItems('/gethf');
          // this.getItems('/getall');

          this.scrollAppend();
          $("img.lazy").lazyload({
            effect : "fadeIn"
          });
      },

      scrollAppend:function(){
        var that = this;

        $(window).on('scroll',function(){
          console.log(location.hash);

          if(location.hash == '#/life/baobao'){
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
            <img src="'+data.image+'" />\
            <div class="item-title"><h5>'+data.related_goods_name+'</h5></div>\
            <div class="item-desc">'+data.desc+'</div>\
            <div class="item-auth">\
              <div class="avatar"><img class="lazy" data-original="'+data.user.image+'" /></div><span class="name">'+data.user.nickname+'</span><span class="likes">'+data.likes+'</span>\
            </div>\
          </div>'

      return item;
  }

  return baobao;
})
