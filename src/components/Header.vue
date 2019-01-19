<template>
  <div class="header">
    <div class="logo">{{title}}</div>
    <div class="left">{{subTitle}}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'OCEAN Station',
      subTitle:
        '脚步到达不了的地方，眼睛可以到达；眼睛到达不了的地方，梦想可以到达。'
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  background-color: rgba(34, 73, 153, 0.8);
  text-align: left;
}

.logo {
  width: 1000px;
  margin: 0 auto;
  text-align: left;
  padding-top: 20px;
  font-size: 36px;
  font-weight: bold;
}
</style>
