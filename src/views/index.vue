<template>
  <div class="wrap">
    <div class="top">
      <!-- <img class="img" src="@/assets/images/top.png" alt=""> -->
    </div>
    
    <div style="width:1537px;margin:0 auto;">
      <div class="content1">
        <div class="item item1">
          <div class="mask">
            <div class="title title1"></div>
          </div>
        </div>
        <div class="item item2">
          <div class="mask">
            <div class="title title2"></div>
          </div>
        </div>
        <div class="item item3">
          <div class="mask">
            <div class="title title3"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="" style="background-color:#b12a31;">
      <div class="box" style="width:1537px;margin:0 auto;">
        <div class="content2">
          <div class="left">
            <div class="msg msg1" :class="active==1 ? 'active' : ''"  @mouseenter="changeActive(1)"></div>
            <div class="msg msg2" :class="active==2 ? 'active' : ''"  @mouseenter="changeActive(2)"></div>
            <div class="msg msg3"></div>
          </div>
          <div class="right right1" :class="active==1 ? 'right1' : 'right2'"></div>
        </div>
      </div>
    </div>
    <div class="content3"></div>
    <div class="" style="background-color:#b12a31;">
      <div class="box" style="width:1537px;margin:0 auto;">
         <div class="content5"></div>
      </div>
    </div>
   
    <div class="content4" @click="jump2Test"></div>
    <!-- <div class="bottom">
      <img class="img" src="@/assets/images/bottom.png" alt="">
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1
    }
  },
  created() {
},
  methods: {
    changeActive(num) {
      console.log(num)
      this.active = num
    },
    // 跳转到没有启用预渲染的测试页面
    jump2Test() {
      this.$router.push({ path: '/test' })
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap {
  min-width: 1537px;
  font-size: 0;
  .top {
    // .img { width: 100%; }
    background:url(~@/assets/images/top.png) no-repeat center;
    height: 912px;
  }
  .content1 {
    // padding: (106/1920*100%) (231/1920*100%);
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    .item {
      // width: 100%;
      // padding-top: 334/476/3*100%;
      width: 475px;
      height: 334px;
      background-color: #000;
      position: relative;
      font-size: 42px;
      & + .item {
        margin-left: 20/1920*100%;
      }
      &.item1 {
        background:url(~@/assets/images/item1.png) no-repeat;
        background-size: cover;
        &::after {
          content: '品牌简介';
          font-size: 20px;
          color:#919191;
          position: absolute;
          bottom: -44px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &.item2 {
        background:url(~@/assets/images/item2.png) no-repeat;
        background-size: cover;
        &::after {
          content: '服务能力';
          font-size: 20px;
          color:#919191;
          position: absolute;
          bottom: -44px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &.item3 {
        background:url(~@/assets/images/item3.png) no-repeat;
        background-size: cover;
        &::after {
          content: '服务客户';
          font-size: 20px;
          color:#919191;
          position: absolute;
          bottom: -44px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover {
          background-color: rgba(#d10010, 0.7);
          // .title {
          //   &:after {
          //     content: '';
          //     position: absolute;
          //     bottom: -30%;
          //     left: -2%;
          //     right: -2%;
          //     height: 10%;
          //     background-color:#fff;
          //   }
          // }
        }
        .title {
          // width: 168/476*100%;
          // flex: 0 0 168/476*100%;
          // padding-top: 38/168/3*100%;
          height:0;
          position: relative;
          &.title1 {
            background:url(~@/assets/images/title1.png) no-repeat;
            background-size: cover;
            width: 302px;
            flex: 0 0 302px;
            padding-top: 199px;
          }
          &.title2 {
            background:url(~@/assets/images/title2.png) no-repeat;
            background-size: cover;
            width: 268px;
            flex: 0 0 268px;
            padding-top: 174px;
          }
          &.title3 {
            background:url(~@/assets/images/title3.png) no-repeat;
            background-size: cover;
            width: 399px;
            flex: 0 0 399px;
            padding-top: 199px;
          }
        }
      }
    }
  }
  .content2 {
    // padding: 0 (231/1920*100%);
    background-color:#b12a31;
    display: flex;
    .left {
      flex: 1 1 28%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: left;
      padding-left: 6%;
      padding-bottom: 3%;
      padding-top: 2%;
      .msg {
        position: relative;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      .msg1 { 
        background:url(~@/assets/images/msg1.png) no-repeat;
        // background-size: cover;
        // width: 55%;
        // padding-top: 86/207*55%;
        // height:0;
        width: 162px;
        height: 86px;
        filter: brightness(0.5);
        &.active {
          filter: brightness(1);
          &::before {
            content: "";
            position: absolute;
            left: -10%;
            width: 2%;
            top: 5%;
            bottom: 2%;
            background-color: #fff;
          }
          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -30px;
            background:url(~@/assets/images/arrow.png) no-repeat;
            background-size: cover;
            // width: 51/207*100%;
            // padding-top: 12/207*100%;
            width: 51px;
            padding-top: 12px;
          }
        }
      }
      .msg2 {
        background:url(~@/assets/images/msg2.png) no-repeat;
        // background-size: cover;
        // width: 310/207 * 55%;
        // padding-top: 89/305* 305/207 *55%;
        // height:0;
        width: 305px;
        height: 89px;
        filter: brightness(0.5);
        &.active {
          filter: brightness(1);
          &::before {
            content: "";
            position: absolute;
            left: 207/305* -10%;
            width:207/305* 2%;
            top: 207/305* 5%;
            bottom: 207/305* 2%;
            background-color: #fff;
          }
          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -30px;
            background:url(~@/assets/images/arrow.png) no-repeat;
            background-size: cover;
            // width: 51/305*100%;
            // padding-top: 12/305*100%;
            width: 51px;
            padding-top: 12px;
          }
        }
      }
      .msg3 {
        background:url(~@/assets/images/msg3.png) no-repeat;
        // background-size: cover;
        // width: 55%;
        // padding-top: 64/207*55%;
        // height:0;
        width: 198px;
        height: 63px;
        &.active {
          &::before {
            content: "";
            position: absolute;
            left: -10%;
            width: 2%;
            top: 5%;
            bottom: 2%;
            background-color: #fff;
          }
          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -30px;
            background:url(~@/assets/images/arrow.png) no-repeat;
            background-size: cover;
            width: 51/207*100%;
            padding-top: 12/207*100%;
          }
        }
      }
    }
    .right {
      flex: 1 1  72%;
      // width: 73%;
      // padding-top: 725/1040*72%;
      transition: all .5s;
      width: 1040px;
      height: 725px;
      &.right1 {
        background:url(~@/assets/images/detail1.png) no-repeat;
        background-size: cover;
      }
      &.right2 {
        background:url(~@/assets/images/detail2.png) no-repeat;
        background-size: cover;
      }
    }
  }
  .content3 {
    width: 1537px;
    margin: 20px auto;
    height: 761px;
    background: url(~@/assets/images/content3.png) no-repeat;
  }
  .content5 {
    width: 1537px;
    margin: 20px auto;
    height: 723px;
    background: url(~@/assets/images/content5.png) no-repeat;
  }
  .content4 {
    height: 1205px;
    margin: 0 auto;
    background: url(~@/assets/images/content4.png) no-repeat center;
  }
  .bottom {
    .img { width: 100%; }
  }
}
</style>
