<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="less">
  *{
    color: #333;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  em{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-right: 4px;
  }
  .clearfix{
    &:before{
      content: " ";
      display: table;
      clear: both;
      float:none;
    }
    &:after{
      content: " ";
      display: table;
      clear: both;
      float:none;
    }
  }
</style>
