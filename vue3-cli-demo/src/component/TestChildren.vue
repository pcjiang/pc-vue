<template>
  <div class="test">这是测试组件</div>
  <div class="test">{{userName}}</div>
</template>

<script>
export default {
  name: 'TestChildren',
  props: ['userName'],
  mounted() {
    // console.log(this.uesrName)
  },
}
</script>

<style>
  .test {
    color: red;
    font-size: 18px;
    margin-top: 50px;
    margin-left: 50px;

  }
</style>