//配置页面加载模块参数
require.config({
    waitSeconds: 0,
    /*加载等待时间*/
    //添加加载异步加载CSS的插件
    map: {
        '*': {
            'css': '../lib/css.min'
        }
    },
    //配置Javascript文件映射路径
    paths: {
        AS                  :"../ajax/ajaxServer"/* ajax请求封装 */
    },
    shim: {
        /*模块依赖关系 demo*/
    }
});
// DOM操作库，为了防止和其他库冲突，推荐使用 $$ 来代替 $
//具体使用请移步http://docs.framework7.cn/Index/dom.html
var $$ = Dom7;
require(['AS'], function(AS) {
    webComm.AS = AS;
    var myApp = new Framework7({
        //statusbarOverlay:true,
        fastClicks: true,//
        swipeoutNoFollow: true,
    });
    var mainView = myApp.addView('.view-main', {
        dynamicNavbar: true
    });
    // 监听页面初始化事件 pageInit
    $$(document).on('pageInit', function(e) {
        // 获取页面参数
        var page = e.detail.page;
        if (page.name === 'about') {//如果当前页面的名字等于about
            myApp.alert('Here comes About page');
        }
    });
});
