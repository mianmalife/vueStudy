<template>
  <div class="k-dialog__wrapper" v-if="isShow">
    <div class="k-dialog">
      <div class="k-dialog__header">{{title}}</div>
      <div class="k-dialog__content">{{message}}</div>
      <div class="k-dialog__footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      this.isShow = true
      setTimeout(() => this.remove(), this.duration)
    },
    hide() {
      this.isShow = false
      this.remove()
    }
  }
}
</script>

<style lang="less" scoped>
.k-dialog__wrapper {
  position: fixed;
  z-index: 2020;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.5);
  .k-dialog {
    width: 30%;
    background-color: #fff;
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    .k-dialog__header {
      padding: 20px 10px;
    }
    .k-dialog__content {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    .k-dialog__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
    }
  }
}
</style>