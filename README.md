# Nv-engine-v2(经典模块加载)

---
Nv作为二代引擎，是Zr引擎的重构版本。

**你可以把他当做seaJs或者requireJs的替代品，可以单独使用，原因是他很简单不用做过多配置就能实现他们大部分功能。**

> 常见实用场景

 + C端高并发量的首页、频道页、活动页
 + B端所有中台界面
 + 面向对象的经典模块化开发所有应用场景
  

> 优化和修复功能如下：

 + 加载不流畅或者无报错异常 => 完全解决此问题
 + 采用定时器和发布订阅者模式混合状态进行订阅 => 全量发布订阅者模式效率提高30倍+，业务越复杂倍率越高
 + 使用了Es6进行了重构
 + 扩展了诸多方法[详情](docs/API.md)
 
 
 在经历多次筛选后，特别感谢 'bj.zhangtao' 提供的新框架命名：
 
 ```text
全名称：Nirvana

缩写：Nv

诠释意义：

中文意思是“涅槃、天堂”，发音也易接受，英 [nɪə'vɑːnə]   美 [nɪr'vɑnə]；
框架重构升级，推出2.0版本，化繁为简.
```

### 使用技巧

代码clone下来后，通过yarn方式安装，如果没有安装，请按照[官网流程安装](https://www.yarnpkg.com/zh-Hans/)

安装步骤如下：

```node
$ git clone https://github.com/Nv-js/Nv-engine.git

$ yarn install

//启动开发环境并同时启动热加载
$ npm run dev

//生成上线压缩并优化的代码
$ npm run build
```

### 快速导航

+ [官网](http://www.nv-js.com)

+ [引擎常用方法](https://github.com/Nv-js/Nv-engine/blob/master/docs/API.md)

+ [快速导航](https://github.com/Nv-js/Nv-engine/blob/master/docs/quick.md)

+ [多语言支持](https://github.com/Nv-js/Nv-engine/blob/master/docs/language.md)

+ [组件库常用方法](https://github.com/Nv-js/Nv-source)

+ [PRO系统解决方案](https://github.com/Nv-js/Nv-pro)


