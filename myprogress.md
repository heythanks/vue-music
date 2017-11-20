## better-scroll滚动条的问题
 #### 在scroll组件的父元素上设置静止定位position:fixed; top为上边固定高度
 #### 需等所有dom元素加载完后计算容器高度，所以在图片加载时用了@load,等第一张图片加载后确定盒子高度后就渲染
 #### fastclick有默认行为   会阻止点击事件 图片上点击图片跳转上绑定class="needsclick"


 ## 关于跨域
 #### jsonp不是发送的ajax请求，而是动态创建的script标签，script标签没有同源策略限制，可以跨域，没有同源策略限制
 #### 该项目中运用jsonp插件进行跨域请求