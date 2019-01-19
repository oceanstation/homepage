<template>
  <div class="banner">
    <div class="center title">{{title}}</div>
    <div class="banner-ul">
      <ul v-for="(item, index) in content" :key="index">
        <li>{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      title: 'Design and Develop Visual Experiences for the Web',
      content: [
        'Data Visualization',
        'Front End Development',
        'Website Development'
      ]
    }
  }
}
</script>

<style scoped>
.banner {
  width: 1000px;
  margin: 0 auto;
  height: 550px;
  padding-top: 90px;
  background: url("../assets/img/bg.jpg") no-repeat center bottom;
  color: #224999;
}

.banner-ul {
  margin: 0 0 0 225px;
}

.banner-ul ul li {
  float: left;
  margin-right: 30px;
}
</style>
