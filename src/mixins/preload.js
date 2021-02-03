import createjs from 'preload-js'
const queue = new createjs.LoadQueue(false)
const modules = require.context('@/assets/', true, /\.(png|jpg)$/)
const assets = modules.keys().map(key => {
  return modules(key)
})

export default {
  created() {
    queue.loadManifest(assets)
    queue.on('progress',this.fileProgressHandle)
    queue.on('error', this.errorHandle)
    queue.on('complete', this.completeHandle)
  },
  methods: {
    // 资源加载过程监听
    fileProgressHandle(e) {
      this.$emit('progress', e)
    },
    // 加载出错处理
    errorHandle(e) {
      this.$emit('error', e)
    },
    // 加载完成处理
    completeHandle(e) {
      this.$emit('complete', e)
    }
  }
}