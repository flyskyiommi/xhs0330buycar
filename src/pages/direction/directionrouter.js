define(['src/myroute.js'],function(router){

  router
  //1.日本
  .addRoute('#/direction/riben', function(req,next){
    // $(".direction-content").html("<h1>日本</h1>")

     require(['src/pages/direction/riben/riben.js'],function(riben){
        riben.add();
        riben.initWaterFall();
     })
  })
  // 2.韩国
  .addRoute('#/direction/hanguo', function(req,next){
    // $(".direction-content").html("<h1>韩国</h1>")

     require(['src/pages/direction/hanguo/hanguo.js'],function(hanguo){
        hanguo.add();
        hanguo.initWaterFall();
        
     })
  })

// 香港
  .addRoute('#/direction/xianggang', function(req,next){
    $(".direction-content").html("<h1>香港</h1>")


  })


//美国
    .addRoute('#/direction/meiguo', function(req,next){
    $(".direction-content").html("<h1>美国</h1>")


  })

//法国

    .addRoute('#/direction/faguo', function(req,next){
    $(".direction-content").html("<h1>法国</h1>")


  })


//澳洲
    .addRoute('#/direction/aozhou', function(req,next){
    $(".direction-content").html("<h1>澳洲</h1>")


  })

//英国
    .addRoute('#/direction/yingguo', function(req,next){
    $(".direction-content").html("<h1>英国</h1>")


  })

//泰国
    .addRoute('#/direction/taiguo', function(req,next){
    $(".direction-content").html("<h1>泰国</h1>")


  })
// 台湾
    .addRoute('#/direction/taiwan', function(req,next){
    $(".direction-content").html("<h1>台湾</h1>")


  })

// 意大利
    .addRoute('#/direction/yidali', function(req,next){
    $(".direction-content").html("<h1>意大利</h1>")


  })

//德国
    .addRoute('#/direction/deguo', function(req,next){
    $(".direction-content").html("<h1>德国</h1>")


  })

// 更多
    .addRoute('#/direction/more', function(req,next){
    $(".direction-content").html("<h1>更多</h1>")


  })


})
