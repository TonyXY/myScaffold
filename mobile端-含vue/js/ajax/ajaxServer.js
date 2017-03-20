/*ajax请求封装
 **请求基础类(包含请求)
 */
define([], function() {
    var extend = function(o, n) {
        for (var p in n) {
            if (n.hasOwnProperty(p)){
                o[p] = n[p];
            }
        }
    };
    // ajax示例
    // webComm.AS.baseRequestDemo('home.json',{
    //     data:{
    //         year:11
    //     },
    //     callback:function(res){
    //         console.log(res);
    //     }
    // });
    var request = {
        baseRequest: function(interfaceName, options) { //请求基础方法(接口名称，请求参数)
            var baseParams = {}; //定义基础参数
            var res_url = 'http://10.40.200.56:8081/api/'; //接口 URL
            options = options || {};
            var callback = options.callback || {}; //请求返回
            var errorback = options.errback || {}; //错误返回
            extend(baseParams, options.data);
            $$.ajax({
                url: res_url + interfaceName,
                method: "POST",
                data: baseParams,
                // dataType: "jsonp",
                // jsonp:'jsonp_caller',
                cache: false,
                //jsonpCallback: "showResultInfo",
                timeout: 30000,
                success: function(data) {
                    if (typeof(options.callback) == "function") { //正确返回
                        options.callback(data);
                    } else {
                        //app.showAlert(data.Message);
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    if (typeof(options.errorback) == "function") {
                        options.errorback(err);
                    } else {
                        // alert(XMLHttpRequest.status);
                        // alert(XMLHttpRequest.readyState);
                        // alert(textStatus);
                    }
                },
                complete: function(XMLHttpRequest, textStatus) {
                    // console.log(textStatus);
                    //this; // 调用本次AJAX请求时传递的options参数
                }
            });
        },
        baseRequestDemo: function(interfaceName, options) { //前端测试数据样例调用
            var baseParams = {}; //定义基础参数
            var res_url = ''; //接口 URL
            options = options || {};
            var callback = options.callback || {}; //请求返回
            var errorback = options.errback || {}; //错误返回
            extend(baseParams, options.data);
            $$.ajax({
                url: interfaceName,
                method: "GET",
                data: baseParams,
                dataType: "json",
                cache: false,
                timeout: 30000,
                success: function(data) {
                    if (typeof(options.callback) == "function") { //正确返回
                        options.callback(data);
                    } else {
                        //app.showAlert(data.Message);
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    if (typeof(options.errorback) == "function") {
                        options.errorback(err);
                    } else {
                        // alert(XMLHttpRequest.status);
                        // alert(XMLHttpRequest.readyState);
                        // alert(textStatus);
                    }
                },
                complete: function(XMLHttpRequest, textStatus) {
                    // console.log(textStatus);
                    //this; // 调用本次AJAX请求时传递的options参数
                }
            });
        }
    };
    return request;
});
