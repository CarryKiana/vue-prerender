const wx = window.wx
let flag = false
export default {
  created() {
    
    if (!flag) {
      this.getWXJsConfig()
    } else {
      this.setConfig()
    }
  },
  methods: {
    // 获取微信配置
    getWXJsConfig() {
      this.$api.getWXJsConfig({
        url: location.href.split('#')[0]
      }).then(res => {
        console.log(res)
        if (res.code === 0) {
          flag = true
          const data = res.data
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名
            jsApiList: ['updateAppMessageShareData', //新接口
              'updateTimelineShareData', //新接口
              'onMenuShareAppMessage', //旧接口，即将废弃
              'onMenuShareTimeline', //旧接口，即将废弃
              'hideMenuItems'
            ] // 必填，需要使用的JS接口列表
          })
          wx.error(function(res){
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            console.log(res)
          });
          this.setConfig()
        }
      })
    },
    // 配置分享
    setConfig() {
      const link = process.env.VUE_APP_URL
      wx.ready(() => {
        wx.updateAppMessageShareData({ 
          title: '没想到，原来你是这种“酒”型人格！', // 分享标题
          desc: '酒品见人品，欢迎来细品。来测一下你的“醉”美瞬间吧~', // 分享描述
          link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: process.env.VUE_APP_URL + '/imgurl.png', // 分享图标
          success: res => {
            // 设置成功
            console.log('分享给朋友')
            console.log(res)
          }
        })
        wx.updateTimelineShareData({ 
          title: '没想到，原来你是这种“酒”型人格！', // 分享标题
          link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: process.env.VUE_APP_URL + '/imgurl.png', // 分享图标
          success: res => {
            // 设置成功
            console.log('分享盆友圈')
            console.log(res)
          }
        })
        // 获取“分享给朋友”按钮点击状态及自定义分享内容接口（即将废弃）
        wx.onMenuShareAppMessage({
          title: '没想到，原来你是这种“酒”型人格！', // 分享标题
          desc: '酒品见人品，欢迎来细品。来测一下你的“醉”美瞬间吧~', // 分享描述
          link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: process.env.VUE_APP_URL + '/imgurl.png', // 分享图标
          success: res => {
            console.log('分享给朋友')
            console.log(res)
          }
        });
        // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口（即将废弃）
        wx.onMenuShareTimeline({
          title: '没想到，原来你是这种“酒”型人格！', // 分享标题
          link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: process.env.VUE_APP_URL + '/imgurl.png', // 分享图标
          success: res => {
            console.log('分享盆友圈')
            console.log(res)
          }
        })
      })
    }
  }
}