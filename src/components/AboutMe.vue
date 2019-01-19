<template>
  <div class="aboutme">
    <div class="center title">About Me</div>
    <div class="left">
      I'm a graduate student of Beihang University. I love developing for the web and have been doing so
      since 2014. I specialize in front end development, as well as data visualization.
      <br>
      <br>And I believe in creating goal oriented website that not only look great but feel and react great as well.
    </div>
    <br>
    <div class="left cn">
      Email：oceanstation
      <img :src="cn" alt="email">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      cn: require('@/assets/img/cn.png')
    }
  }
}
</script>

<style scoped>
.aboutme {
  width: 100%;
  min-width: 1000px;
  height: 230px;
  padding: 10px 0 20px 0;
  background-color: #2e74c7;
}

.cn {
  height: 20px;
  line-height: 20px;
}

.cn img {
  margin: 0px 0px -1px -3px;
  width: 55px;
  height: 15px;
}
</style>
