# my-vue

> 基于 Vue 的 Nodejs 社区——CNode


## [demo](https://www.ldsun.com/vue-cnode)

### 技术栈：vue2+vuex+vue-router

### 脚手架：vue-cli

## Build Setup

``` bash
# clone
git clone git@github.com:flute/vue-cnode.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## 项目目录

```bash
.
├── README.md
├── build                           // 项目构建(webpack)相关代码
│   ├── build.js                        // 生产环境构建代码
│   ├── check-versions.js               // 检查node、npm等版本
│   ├── dev-client.js                   // 热重载相关
│   ├── dev-server.js                   // 构建本地服务器
│   ├── utils.js                        // 构建工具相关
│   ├── vue-loader.conf.js              // webpack基础配置
│   ├── webpack.base.conf.js            // webpack基础配置
│   ├── webpack.dev.conf.js             // webpack开发环境配置
│   └── webpack.prod.conf.js            // webpack生产环境配置
├── config                          // 项目开发环境配置
│   ├── dev.env.js                      // 开发环境变量
│   ├── index.js                        // 项目一些配置变量
│   └── prod.env.js                     // 生产环境变量
├── index.html                      // 入口页面
├── package.json                    // 项目依赖描述
├── src                             // 源码目录
│   ├── App.vue                         // 入口文件
│   ├── assets                          // 静态资源：css/img...
│   ├── components                      // 组件
│   ├── main.js                         // 程序入口文件，加载各种公共组件，配置vuex
│   └── router                          // 路由
└── static                          // 公共的资源
```
