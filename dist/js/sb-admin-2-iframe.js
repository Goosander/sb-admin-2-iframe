$(function () {
    $('#page-wrapper').multitabs({
        selector: '.multitabs',                    //触发multitabs的selector text，注意需要有".","#"等
        iframe: true,                             //iframe模式的总局设置。当值为false的时候，为智能模式，自动判断（内网用ajax，外网用iframe）。缺省为false。
        class: '',                                 //主框架的class
        refresh: false,                             //全局强制更新
        init: [                                    //需要在初始加载的tab
            {
                type: 'main',                           //标签页的类型，有 main | info，缺省为 info
                title: 'Dashboard',                         //标题（可选），没有则显示网址
                content: '',                        //html内容，如果设定此值，下面的URL设定则无效
                url: 'index.html'                            //链接
            },
            {  /** 更多tab。。**/ },                //依次添加需要的页面
            {  /** 更多tab。。**/ },                //依次添加需要的页面
        ],
        nav: {
            backgroundColor: '#f5f5f5',            //默认nav-bar 背景颜色
            class: '',                             //为nav添加class
            draggable: true,                       //nav tab 可拖动选项
            fixed: false,                          //固定标签头列表
            layout: 'default',                     //有两种模式，'default', 'classic'(所有隐藏tab都在下拉菜单里) 和 'simple'
            maxTabs: 15,                           //最多tab数量。（main和editor不计算在内) 当为1时，整个标签栏隐藏。main和editor分别只能有1个标签。
            maxTabTitleLength: 25,                 //tab标题的最大长度
            showCloseOnHover: true,                //当值为true，仅在鼠标悬浮时显示关闭按钮。false时一直显示
            style: 'nav-tabs',                     //可以为nav-tabs 或 nav-pills
        },
        content: {
            ajax: {
                class: '',                         //为ajax tab-pane 添加class
                error: function (htmlCallBack) {
                    //modify html and return
                    return htmlCallBack;
                },
                success: function (htmlCallBack) {
                    //modify html and return
                    return htmlCallBack;
                }
            },
            iframe: {
                class: ''                          //为iframe tab-pane 添加class
            }
        },
        language: {                                //语言配置
            nav: {
                title: 'Tab',                                  //默认的标签页名称
                dropdown: '<i class="fa fa-bars"></i>',        //标签栏的下拉菜单名称
                showActivedTab: 'Show Activated Tab',          //下拉菜单的显示激活页面
                closeAllTabs: 'Close All Tabs',                //下拉菜单的关闭所有页面
                closeOtherTabs: 'Close Other Tabs',            //下拉菜单的关闭其他页面
            }
        }
    });
});