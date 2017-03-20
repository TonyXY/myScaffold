/**
 * common
 * 全局变量/方法定义
 **/
if (typeof webComm == 'undefined') {
    var webComm = {};
    webComm = {
        /**
         * @function cookie
         * @returns cookie function obj
         */
        cookie: {
            set: function(cname, cvalue, exdays) { //设置cookie
                alert(cname);
                this.clear(cname);
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/; domain=" + document.domain;
            },
            get: function(cname) { //获取cookie
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) != -1) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            },
            clear: function(cname) { //清除cookie
                var exp = new Date();
                exp.setTime(exp.getTime() - 1);
                var cval = this.get(cname);
                if (cval !== null) {
                    document.cookie = cname + "=" + cval + ";expires=" + exp.toGMTString();
                }
            }
        },
        /**
         * @function trim
         * @returns trim the string blank
         */
        trim: function(str) {
            var _this = this;
            if (_this.isUndefinedOrNull(str)) {
                return str;
            } else {
                return str.replace(/^\s+|\s+$/g, '');
            }
        },
        /**
         * @function parseURL
         * @param url,the window.location or a url string,use current domain url if don't pass the url;
         * @returns a object with source,protocol,port, query,params,hash;
         */
        parseURL: function(url) {
            var a = document.createElement('a');
            a.href = url;
            return {
                source: url,
                protocol: a.protocol.replace(':', ''),
                host: a.hostname,
                port: a.port,
                query: a.search,
                params: (function() {
                    var ret = {},
                        seg = a.search.replace(/^\?/, '').split('&'),
                        len = seg.length,
                        i = 0,
                        s;
                    for (; i < len; i++) {
                        if (!seg[i]) {
                            continue;
                        }
                        s = seg[i].split('=');
                        ret[s[0]] = s[1];
                    }
                    return ret;
                })(),
                hash: a.hash.replace('#', '')
            };
        },
        /**
         * @function checkHash
         * @returns the hash string in the url
         */
        checkHash: function() {
            try {
                //var r = window.location.href;
                //var i = r.indexOf("#");
                //return (i >= 0? r.substr(i+1): "");
                var data = location.hash ? location.hash.substring(1) : '';
                return data;
            } catch (e) {
                return null;
            };
        }
    };
}
