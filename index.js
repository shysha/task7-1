// 右侧下拉菜单效果
$(".gengduo").bind("mouseover", function() { $("#more").show(); });
$(".gengduo").bind("mouseout", function() { $("#more").hide(); });
// 点击换肤，切换换肤页面
$('.change').click('.change', function() {
    $('.t-change').animate({
        top: '0'
    });
});
$('.slideup').click('.slideup', function() {
    $('.t-change').animate({
        top: '-500'
    });
});


//帮助函数
var getDom = function(selector) {
    //根据传入参数的特征返回对应的dom对象
    if (selector.indexOf('.') == 0) {
        selector = selector.replace('.', '');
        return document.getElementsByClassName(selector);
    } else if (selector.indexOf('#') == 0) {
        selector = selector.replace('#', '');
        return document.getElementById(selector);
    } else {
        return document.getElementsByTagName(selector);
    }
};


//themeStorageHelper函数接收参数为get时返回当前主题颜色
//否则设置当前主题
var themeStorageHelper = function(option) {
    var theme;
    //如果浏览器不支持localStorage则使用cookie
    if (window.localStorage) {
        theme = localStorage;
    } else {
        theme = documentCookie;
    }

    if (option == 'get') {
        return theme.getItem('theme');
    }
    theme.setItem('theme', option);
    //检查偏好主题写入是否成功
    if (!themeStorageHelper('get') == option) {
        console.log('Write Prefer Theme Storage Failed!');
        return false;
    }
    return true;
};
//更换主题颜色
var changeTheme = function(preColor, color) {
    var css = getDom('#color');
    var currentStyle = css.getAttribute('href');
    currentStyle = currentStyle.replace(preColor, color);
    css.setAttribute('href', currentStyle);
};

window.onload = function() {
    var con = getDom('.contents');
    //绑定click事件
    for (var i = 0; i < con.length; i++) {
        con[i].onclick = function() {
            var toTheme = this.getAttribute('id');
            changeTheme(themeStorageHelper('get'), toTheme);
            themeStorageHelper(toTheme);
        }
    }
    if (!themeStorageHelper('get')) {
        //如果偏好设置不存在则默认为default
        themeStorageHelper('t1');
    } else {
        //如果存在偏好设置，则应用偏好设置
        changeTheme('t1', themeStorageHelper('get'));
    }
};










// 点击切换标签页
$(document).ready(function() {
    $(".news-n").each(function(index) {
        $(this).click(function() {
            // 移除样式
            $(" .xianshi").removeClass("xianshi");
            $(".xianshi2").removeClass("xianshi2")
                // 添加样式
            $(" .biaoqian").eq(index).addClass("xianshi");
            $(".news-n").eq(index).addClass("xianshi2");
        })
    });

})
