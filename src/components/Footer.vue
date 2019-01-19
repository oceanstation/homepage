<template>
  <div class="footer">
    <p class="left">{{rights}}</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      rights: '©2019 OCEAN Station. All Rights Reserved'
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 30px;
  padding-top: 20px;
  background-color: #040c3c;
  font-size: 14px;
}
</style>
