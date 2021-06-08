$(function() {


    // 关闭头部广告栏
    $('.close').click(function() {
        $('.ggtl').hide();

    })

    // 购物车菜单下拉
    $(".cart").mouseover(function() {
        $(".cart-bt").stop().slideDown().addClass(".cart a:hover");

    })
    $(".cart").mouseout(function() {
        $(".cart-bt").stop().slideUp();
    })


    //小米 菜单下拉
    $(".menu-t li:first").mouseover(function() {

        // 下拉菜单
        $(".menu-li-xm").stop().slideDown();
    });
    // 上拉菜单
    $(".menu-t li:first").mouseout(function() {

        $(".menu-li-xm").stop().slideUp();
    });

    // 红米下拉菜单
    $("#hm").mouseover(function() {
        // 下拉菜单
        $(".menu-li-hm").stop().slideDown();
    });

    // 上拉菜单
    $("#hm").mouseout(function() {

        $(".menu-li-hm").stop().slideUp();
    });



    //轮播图区域 开始
    var i = 0,
        timer;
    var sum = $(".image li").length;
    $(function() {
        //获取元素 注册事件 
        $(".image li").eq(0).show();

        $(".box").hover(function() {
            $(".arrow").show();
            clearInterval(timer);
        }, function() {
            $(".arrow").hide();
            iLunbo();
        })
        iLunbo();

        $(".arrow").hover(function() {
            clearInterval(timer);
        });

        // 左箭头控制轮播
        $(".left").click(function() {
            clearInterval(timer);
            if (i == 0) {
                i = sum;
            }
            i--;
            startLunbo();
            iLunbo();
        });

        // 右箭头控制轮播
        $(".right").click(function() {
            clearInterval(timer);
            if (i == sum - 1) {
                i = -1;
            }
            i++;
            startLunbo();
            iLunbo();
        });

        // 鼠标移入小li清除定时器
        $(".num>li").hover(function() {
            clearInterval(timer);
            i = $(this).index();
            console.log(i);
            startLunbo();
        });
    });

    // 自动轮播
    function iLunbo() {
        timer = setInterval(function() {
            i++;
            if (i == sum - 1) {
                i = -1;
            }
            startLunbo();
        }, 2500)
    }

    //图片轮播和提示信息
    function startLunbo() {
        if (i == 4) {
            i = 0;
        }
        $(".image>li").eq(i).fadeIn().siblings().fadeOut();
        $(".num>li").eq(i).addClass("current").siblings().removeClass("current");
    }
    //轮播图区域 结束



    // 详情页js

    //  手机二次 页面 浏览区域 鼠标换图
    $(function() {
        // 鼠标点击小li 
        $(".list_item li").click(function() {
            // 当前变换颜色
            $(this).addClass('current').siblings().removeClass('current');
            // 获取索引号
            var index = $(this).index();
            // 链式编程 大图片显示
            $(".preview_img img").eq(index).show().siblings().hide();

        })
    })

    // 详情页Tab栏切换
    $(".detail_tab_list>ul li").click(function() {
        // 获取当前小li 改变当前小li颜色
        $(this).addClass('current').siblings().removeClass('current');
        // 获取索引号
        var index = $(this).index();
        // 链式编程 显示
        $(".tab-1 ul").eq(index).show().siblings().hide();
    })
})