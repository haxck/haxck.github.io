---
title: 跨域请求
date: 2018-05-20 16:00:53
tags: JavaScript
---

## 前言
最近遇到了跨域问题，来来回回折腾了两三个小时，总算理出点头绪。

### 什么是跨域？

跨域指一个域名的网页去请求另一个域名的资源。但由于浏览器的同源策略，不能够直接去请求，只有在相同的域名下才可以。

要解决跨域请求，就得避免触发浏览器的同源策略。如果是API提供者，可以通过在服务器端设置header来允许非同一域下的请求。


## 2种解决方式

在多数情况下，我们一般是在调用第三方API，并不能直接去改动服务器，那该怎么解决？

### 代理
代理是先在自己的服务端去请求API，再通过请求自己的服务器来获得数据，这样就避开了同源策略。

![proxy](http://oerfykrpf.bkt.clouddn.com/cors.PNG)

```javascript

var express = require('express');
var proxy = require('http-proxy-middleware');


app.use("/api", proxy({
  target: "http://api.org",
  changeOrigin: true
}))


```

### JSONP
JSONP 利用 `script` 标签的 `src` 进行跨域。什么意思？大家有没有发现，在HTML中，引用 CDN 的时候，不会有任何问题。jsonp就是利用这种方式。

构建一个 `script` 标签，把 `json` 的 `URL` 赋给 `script` 的 `scr` 属性。

在jQuery中，只需要在原有的ajax中指定 `dataType:"jsonp"` 即可。

```javascript
$.ajax({
  url: url,
  dataType: "jsonp",
  jsonp:"callback",
  success:function(data){
    console.log(data);
  }
})
```

## 参考资料
- [HTTP访问控制（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

- [jsonp详解](https://www.cnblogs.com/JinQuanLi/p/6551415.html)