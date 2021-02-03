<template>
  <div>
    <div>预渲染后预渲染页面跟普通动态渲染页面跳转测试</div>
    <div @click="jump2Index">点击跳转</div>
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
    }
  }
}
</script>