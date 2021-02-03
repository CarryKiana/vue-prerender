<template>
  <div>
    <div>预渲染后预渲染页面跟普通动态渲染页面跳转测试</div>
    <div @click="jump2Index">点击跳转预渲染的首页</div>
    <div @click="jump2Another">点击跳转预渲染的另一个页面</div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    // 跳转到预渲染的首页
    jump2Index() {
      this.$router.push({ path: '/' })
    },
    jump2Another() {
      this.$router.push({ path: '/another' })
    }
  }
}
</script>