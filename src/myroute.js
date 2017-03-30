define(['Router'],function(Router){

    var router = new Router()



// 首页first
    .route('#/first', function(req, next){
        //  $("#main").html('<h1>首页</h1>')
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
            location.href = '#/life/hf'
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

    // 跳转到商品详情页
    .route('#/goods/:id', function(req, next){
        console.log('商品详情页路由，由ID判断跳转到指定商品详情页');
        var id = req.params.id;
        require(['src/pages/goods/goods.js'],function(goods){
            goods.add(id);
        })
    })
    
// 跳转到购物车
    .route('#/cart',function(req,next){
    //   console.log('cart....')
        require(['src/pages/cart/cart.js'],function(cart){
            // console.log('------')
            cart.init();
        });
    })

    .route('#/order',function(req,next){
        require(['src/pages/order/order.js'],function(om){
            om.init();
        });
    })


    return router;
})
