define(['Router'],function(Router){

    var router = new Router()



// 首页first
    .route('#/first', function(req, next){
        //  $("#main").html('<h1>生活</h1>')
        require(['src/pages/first/first.js'],function(first){
            first.add();
            first.swiper();

            location.href = '#/first'
        })
    })

    // 生活
    .route('#/life', function(req, next){
        //  $("#main").html('<h1>生活</h1>')
        require(['src/pages/life/life.js'],function(life){
            life.add();
            life.initMenu();
            location.href = '#/life/chuanda'
        })
    })
    // 目的地
    .route('#/direction', function(req, next){
        require(['src/pages/direction/direction.js'],function(direction){
            // 布局到index
            direction.add();
            // 导航栏布局
            direction.initMenu();
        })
    })
    // 品牌
    .route('#/brand', function(req, next){
        require(['src/pages/brand/brand.js'],function(brand){
            brand.add();
            brand.initMenu();
        })
    })
    // 购买
    .route('#/buy', function(req, next){
        require(['src/pages/buy/buy.js'],function(buy){
            buy.add();
            buy.initMenu();
            location.href = '#/buy/all'
        })
    })
    .route('#/detail/:id', function(req, next){
        var id = req.params.id;
        console.log('id>>' + id)
        require(['src/pages/detail/detail.js'],function(detail){
            detail.add(id);
        })
    })
    .route('#/goods/:id', function(req, next){
        var id = req.params.id;
        require(['src/pages/goods/goods.js'],function(goods){
            goods.add(id);
        })
    })

    return router;
})
