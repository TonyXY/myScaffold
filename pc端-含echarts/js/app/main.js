/**
 * main
 * 程序入口 require, jQBrowser
 * @version  1.0.1
 **/
//配置页面加载模块参数
require.config({
    /*waitSeconds:60,*/
    waitSeconds: 0,
    /*Ignore timeout check for js file loading */
    // urlArgs: "ver"+(new Date()).getTime(), /*v=yyyymmddHHMM*/
    /*urlArgs: "版本号",*/
    //添加加载异步加载CSS的插件
    map: {
        '*': {
            'css': '../lib/css.min'
        }
    },
    //配置Javascript文件映射路径[注意:需要用到相应插件的时候才去引用]
    paths: {
        AS                  :"../ajax/ajaxServer",/* ajax请求封装 */
        bootstrap           :"../lib/bootstrap.min",/* BS主库 */
        datetimepicker      :"../lib/bootstrap-datetimepicker.min",/* BS日历插件 http://www.bootcss.com/p/bootstrap-datetimepicker/*/
        swiper              :"../lib/swiper.min",/* 轮播插件 http://www.swiper.com.cn/ */
        perfectscrollbar    :"../lib/perfect-scrollbar.jquery",/* 滚动条插件 http://noraesae.github.io/perfect-scrollbar/ */
        select2             :"../lib/select2.min",/* 下拉选择插件 http://select2.github.io/ */
        echarts       	  	:"../lib/echarts.min",/* 百度图表插件 只引用了常用的图表：line、bar、pie、map等，若没有需去官网 http://echarts.baidu.com/下载*/
        jquery              :"../lib/jquery.min" /* 库类 */
    },
    //模块依赖关系 demo
    shim: {
        'datetimepicker': {deps: ['bootstrap']},
        'bootstrap': {deps: ['jquery']}
    }
});

if (typeof jQBrowser != 'undefined') {
    if (jQBrowser.name == 'msie' && jQBrowser.versionNumber <= 8) {
        var k = confirm('您的浏览器版本太旧，网页不再支持老版本浏览器，是否跳转到建议页面？')
        if (k) {
            window.location.href = "np.html";
        }
    }
}

require(['AS', 'bootstrap', 'perfectscrollbar', 'swiper', 'select2', 'datetimepicker'], function(AS) {
    webComm.AS = AS;
    /*加载提示 --显示*/
    window.showloading = function() {
        var loadelem = '<div class="cssload-container"><div class="cssload-speeding-wheel"></div></div>';
        if ($(".cssload-container").length == 0) {
            $("body").append(loadelem);
        }
    };
    /*加载提示 --隐藏*/
    window.hideloading = function() {
        $(".cssload-container").remove();
    };
    $.fn.datetimepicker.dates['zh-CN'] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
        months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        today: "今天",
        suffix: [],
        meridiem: ["上午", "下午"]
    };
    $(function() {
        //开始干活
        if($('#pageName').length>0){
            //根据pageName的值，确定页面并引入相关js
            var pageName = $("#pageName").val();
            if(pageName!=''){
                require([pageName],function(page){
                    page.init();
                })
            }
        }
    });
});
