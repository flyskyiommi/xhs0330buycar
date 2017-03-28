define(['src/myroute.js'],function(router){

  router
  // 香奈儿
  .addRoute('#/brand/xiangnaier', function(req,next){

    $(".brand-content").html("<h1>香奈儿</h1>")


  })
  // 资生堂
  .addRoute('#/brand/zishengtang', function(req,next){
              $(".brand-content").html("<h1>资生堂</h1>")
  })


// 帝美尼
  .addRoute('#/brand/dimeini', function(req,next){
              $(".brand-content").html("<h1>帝美尼</h1>")

  })
//悦诗风吟
  .addRoute('#/brand/yueshifengyin', function(req,next){
                $(".brand-content").html("<h1>悦诗风吟</h1>")
  })

//路易威登
  .addRoute('#/brand/luyiweideng', function(req,next){
 $(".brand-content").html("<h1>路易威登</h1>")
  })
//无印良品
    .addRoute('#/brand/wuyinliangpin', function(req,next){
 $(".brand-content").html("<h1>无印良品</h1>")
  })

//圣罗兰
  .addRoute('#/brand/shengluolan', function(req,next){
 $(".brand-content").html("<h1>圣罗兰</h1>")
  })

//肌肤之钥
    .addRoute('#/brand/jifuzhiyao', function(req,next){
 $(".brand-content").html("<h1>肌肤之钥</h1>")
  })


  //迪奥
    .addRoute('#/brand/diao', function(req,next){
 $(".brand-content").html("<h1>迪奥</h1>")
  })

// 雪花秀
    .addRoute('#/brand/xuehuaxiu', function(req,next){
 $(".brand-content").html("<h1>雪花秀</h1>")
  })


//爱丽小屋
      .addRoute('#/brand/ailixiaowu', function(req,next){
 $(".brand-content").html("<h1>爱丽小屋</h1>")
  })

//更多
      .addRoute('#/brand/more', function(req,next){
 $(".brand-content").html("<h1>更多</h1>")
  })




})
