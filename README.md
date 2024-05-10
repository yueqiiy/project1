## 由于跨域限制，需要安装whitsle代理工具处理

### 安装：
这一部分搬运自一篇博客：https://blog.csdn.net/llllllkkkkkooooo/article/details/121803062。

### 代理跨域资源共享（CORS）规则配置
```
api.juejin.cn reqCors://https://e.juejin.cn
api.juejin.cn resCors://*
*.byteimg.com referer://https://juejin.cn/course
```