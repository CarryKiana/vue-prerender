const path = require('path')
// https://github.com/chrisvfritz/prerender-spa-plugin
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  publicPath: './',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins:[
          // 预渲染配置
          new PrerenderSPAPlugin({
            // 设置为程序的静态输出目录
            staticDir: path.join(__dirname, 'dist'),
            // 设置要渲染的路由
            routes: ['/'],
            // 注入到window对象上的属性
            injectProperty: '__PRERENDER_INJECTED',
            // 自定义注入属性的内容
            inject: {
              foo: 'bar'
            },
            // //可选-默认为0，无限制。
            // //路由是异步呈现的。
            // //使用它来限制并行渲染的路由数量。
            // maxConcurrentRoutes: 4,
            // //可选-等待渲染，直到在文档上调度了指定事件。
            // //例如，带有`document.dispatchEvent（new Event（'custom-render-trigger'））` 
            // renderAfterDocumentEvent: 'custom-render-trigger',
            // //可选-等待渲染，直到经过了一定的时间。
            // //不推荐
            // renderAfterTime: 5000, // 等待5秒
            headless: false // Display the browser window when rendering. Useful for debugging.
          })
        ]
      }
    }
  }
}