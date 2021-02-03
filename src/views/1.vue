<template>
  <div class="wrap">
    <div class="top">
      <img class="img" src="@/assets/images/top.png" alt="">
    </div>
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
    <div class="bottom">
      <img class="img" src="@/assets/images/bottom.png" alt="">
    </div>
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
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap {
  min-width: 1280px;
  font-size: 0;
  .top {
    .img { width: 100%; }
  }
  .content1 {
    padding: (106/1920*100%) (231/1920*100%);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    .item {
      width: 100%;
      padding-top: 334/476/3*100%;
      background-color: #000;
      position: relative;
      font-size: 42px;
      & + .item {
        margin-left: 20/1920*100%;
      }
      &.item1 {
        background:url(~@/assets/images/item1.png) no-repeat;
        background-size: cover;
      }
      &.item2 {
        background:url(~@/assets/images/item2.png) no-repeat;
        background-size: cover;
      }
      &.item3 {
        background:url(~@/assets/images/item3.png) no-repeat;
        background-size: cover;
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
          .title {
            &:after {
              content: '';
              position: absolute;
              bottom: -30%;
              left: -2%;
              right: -2%;
              height: 10%;
              background-color:#fff;
            }
          }
        }
        .title {
          width: 168/476*100%;
          flex: 0 0 168/476*100%;
          padding-top: 38/168/3*100%;
          height:0;
          position: relative;
          &.title1 {
            background:url(~@/assets/images/title1.png) no-repeat;
            background-size: cover;
          }
          &.title2 {
            background:url(~@/assets/images/title2.png) no-repeat;
            background-size: cover;
          }
          &.title3 {
            background:url(~@/assets/images/title3.png) no-repeat;
            background-size: cover;
          }
        }
      }
    }
  }
  .content2 {
    padding: 0 (231/1920*100%);
    background-color:#383f43;
    display: flex;
    .left {
      flex: 1 1 28%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: left;
      padding-left: 6%;
      padding-bottom: 3%;
      .msg {
        position: relative;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      .msg1 { 
        background:url(~@/assets/images/msg1.png) no-repeat;
        background-size: cover;
        width: 55%;
        padding-top: 86/207*55%;
        height:0;
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
            width: 51/207*100%;
            padding-top: 12/207*100%;
          }
        }
      }
      .msg2 {
        background:url(~@/assets/images/msg2.png) no-repeat;
        background-size: cover;
        width: 310/207 * 55%;
        padding-top: 89/305* 305/207 *55%;
        height:0;
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
            width: 51/305*100%;
            padding-top: 12/305*100%;
          }
        }
      }
      .msg3 {
        background:url(~@/assets/images/msg3.png) no-repeat;
        background-size: cover;
        width: 55%;
        padding-top: 64/207*55%;
        height:0;
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
      width: 73%;
      padding-top: 725/1040*72%;
      transition: all .5s;
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
  .bottom {
    .img { width: 100%; }
  }
}
</style>
