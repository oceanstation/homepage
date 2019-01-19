<template>
  <div>
    <head-er></head-er>
    <banner></banner>
    <specialize-in></specialize-in>
    <about-me></about-me>
    <foot-er></foot-er>
  </div>
</template>
<script>
import HeadEr from './Header'
import Banner from './Banner'
import SpecializeIn from './SpecializeIn'
import AboutMe from './AboutMe'
import FootEr from './Footer'

export default {
  name: 'Home',
  components: { HeadEr, Banner, AboutMe, SpecializeIn, FootEr }
}
</script>

<style lang="less">
@import "../assets/less/index.less";
</style>
