define(['src/myroute.js'],function(router){

  router
  .addRoute('#/buy/all', function(req,next){
// 全部
     require(['src/pages/buy/all/all.js'],function(all){
        all.add();
        all.initWaterFall();
          all. getItems();
     })
  })


  
  .addRoute('#/buy/hf', function(req,next){
    // $(".buy-content").html("<h1>护肤</h1>")
// 护肤
     require(['src/pages/buy/hf/hf.js'],function(hf){
      //  护肤页面布局到购买
        hf.add();
        hf.initWaterFall();
      
     })
  })




  
// 彩妆
   .addRoute('#/buy/caizhuang', function(req,next){
$(".buy-content").html("<h1>彩妆</h1>")
     require(['src/pages/buy/caizhuang/caizhuang.js'],function(caizhuang){
      //  彩妆页面布局到购买
        caizhuang.add();
        caizhuang.initWaterFall();
     })
  })

   .addRoute('#/buy/shishang', function(req,next){
$(".buy-content").html("<h1>时尚</h1>")
    //  require(['src/pages/buy/shishang/shishang.js'],function(shishang){
    //   //  护肤页面布局到购买
    //     shishang.add();
    //     shishang.initWaterFall();
    //  })
  })

   .addRoute('#/buy/jiaju', function(req,next){
$(".buy-content").html("<h1>家居</h1>")
    //  require(['src/pages/buy/jiaju/jiaju.js'],function(jiaju){
    //   //  护肤页面布局到购买
    //     jiaju.add();
    //     jiaju.initWaterFall();
    //  })
  })

   .addRoute('#/buy/muying', function(req,next){
$(".buy-content").html("<h1>母婴</h1>")
    //  require(['src/pages/buy/muying/muying.js'],function(muying){
    //   //  护肤页面布局到购买
    //     muying.add();
    //     muying.initWaterFall();
    //  })
  })

  
   .addRoute('#/buy/gerenhuli', function(req,next){
     $(".buy-content").html("个人护理")
  })

     .addRoute('#/buy/jiatingqingjie', function(req,next){
     $(".buy-content").html("家庭清洁")
  })

     .addRoute('#/buy/meishi', function(req,next){
     $(".buy-content").html("美食")
  })


   .addRoute('#/buy/baojianpin', function(req,next){
     $(".buy-content").html("保健品")
  })

     .addRoute('#/buy/jiadianshuma', function(req,next){
     $(".buy-content").html("家电数码")
  })

})
