define(['src/myroute.js'],function(router){

  router

//  1. 护肤
  .addRoute('#/life/hf', function(req,next){

     require(['src/pages/life/hf/hf.js'],function(hf){
        hf.add();
        hf.initWaterFall();
     })
  })

//   2.彩妆
  .addRoute('#/life/cz', function(req,next){

     require(['src/pages/life/cz/cz.js'],function(cz){
        cz.add();
        cz.initWaterFall();

     })
  })


//   3.男人

    .addRoute('#/life/nanren', function(req,next){

     require(['src/pages/life/nanren/nanren.js'],function(nanren){
        nanren.add();
        nanren.initWaterFall();

     })
  })


// 4.穿搭
    .addRoute('#/life/chuanda', function(req,next){
        //   $(".life-content").html("<h1>穿搭</h1> <h1>测试测试</h1><h1>实验试验</h1><h1>测试测试</h1><h1>实验试验</h1><h1>测试测试</h1><h1>实验试验</h1><h1>测试测试</h1><h1>实验试验</h1><h1>测试测试</h1><h1>实验试验</h1><h1>测试测试</h1><h1>实验试验</h1><h1>测试测试</h1><h1>实验试验</h1><h1>测试测试</h1><h1>实验试验</h1><h1>测试测试</h1><h1>实验试验</h1><h1>测试测试</h1><h1>实验试验</h1><h1>测试测试</h1>")

     require(['src/pages/life/chuanda/chuanda.js'],function(chuanda){
        chuanda.add();
        chuanda.initWaterFall();

     })
  })

//5. 包包
      .addRoute('#/life/baobao', function(req,next){
        //   $(".life-content").html("<h1>包包</h1>")
               require(['src/pages/life/baobao/baobao.js'],function(baobao){
        baobao.add();
        baobao.initWaterFall();

     })

  })


// 6.鞋子
      .addRoute('#/life/xiezi', function(req,next){
          // $(".life-content").html("<h1>鞋子</h1>")

      require(['src/pages/life/xiezi/xiezi.js'],function(xiezi){
        xiezi.add();
        xiezi.initWaterFall();

     })

  })

// 7.家具
      .addRoute('#/life/jiaju', function(req,next){
          // $(".life-content").html("<h1>家居</h1>")

      require(['src/pages/life/jiaju/jiaju.js'],function(jiaju){
        jiaju.add();
        jiaju.initWaterFall();

     })

  })


      .addRoute('#/life/gerenhuli', function(req,next){
          $(".life-content").html("<h1>个人护理</h1>")

  })


      .addRoute('#/life/lingshi', function(req,next){
          $(".life-content").html("<h1>零食</h1>")

  })
        .addRoute('#/life/baojianpin', function(req,next){
          $(".life-content").html("<h1>保健品</h1>")

  })
        .addRoute('#/life/muying', function(req,next){
          $(".life-content").html("<h1>母婴</h1>")

  })

          .addRoute('#/life/more', function(req,next){
          $(".life-content").html("<h1>更多</h1>")

  })

})
