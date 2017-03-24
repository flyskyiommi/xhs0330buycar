define(['text!src/pages/goods/goods.html','css!./goods.css'],function(html){
    var goods = {
        add: function(id){
          console.log(id)
          $("#main").html(html)
          $('#good-content').html(id)
        }
    }

    return goods;
})
