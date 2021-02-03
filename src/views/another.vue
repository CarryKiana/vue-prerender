<template>
  <div>
    <div>另一个预渲染页面</div>
    <div>测试单页应用多预渲染页面时的表现形式</div>
    <div @click="jump2Test">跳转到普通页面</div>
    <div @click="jump2Index">跳转到预渲染的首页</div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    // 跳转到普通测试页面
    jump2Test() {
      this.$router.push({ path: '/test' })
    },
    // 跳转到预渲染的首页
    jump2Index() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>