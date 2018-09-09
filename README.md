# RpaWorkbench

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


1.引入全局样式 比如 iconfont.css
.angular-cli.json
```json
"styles": [
    "styles.css",
    "./assets/font/iconfont.css"
]
```

****

> log 记录

* 2018-08-10 15:53:42 feat:登陆页静态页面完成
* 2018-08-11 17:25:03 feat:登录功能
* 2018-08-11 18:36:35 feat:使用消息提示忘记引入@angular/platform-browser/animations导致报错
* 2018-08-12 00:53:10 feat:js跳转或带参数
* 2018-08-12 01:26:10 feat:登陆页完成
* 2018-08-12 19:54:49 feat:全局服务
* 2018-08-12 23:26:12 feat:URLSearchParams格式化请求参数
* 2018-08-13 13:23:42 feat:封装http
* 2018-08-13 14:57:43 feat:自定义管道符
* 2018-08-13 15:14:57 feat:自定义指令
* 2018-08-13 15:23:44 feat:引入自定义js方法
* 2018-08-13 15:44:52 feat:引入自定义动画
* 2018-08-14 15:46:07 feat:封装http
* 2018-08-15 14:17:10 refactor:关于app相关文件的调整
* 2018-08-15 15:41:13 feat:父子组件传值
* 2018-08-15 19:53:22 feat:0.5px边框
* 2018-09-08 15:10:28 feat:在.angular-cli.json中引入全局样式
* 2018-09-08 20:41:06 feat:处理后台返回的菜单列表数据格式* 2018-09-08 23:53:49 feat:菜单与路由结合* 2018-09-09 17:52:10 fix:解决侧边栏跳转路由刷新侧边栏的问题* 2018-09-09 17:58:14 fix:解决一级页面重定向至默认二级页面的问题* 2018-09-09 21:16:14 feat:tab二级页面切换组件完成* 2018-09-09 22:00:19 feat:client-monitor客户端监控页面* 2018-09-09 22:07:32 feat:taskManager计划任务管理页面* 2018-09-09 22:16:06 feat:assetManager资产管理页面