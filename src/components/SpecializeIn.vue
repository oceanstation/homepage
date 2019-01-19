<template>
  <div class="specializeIn">
    <div class="center title">Specialize In</div>
    <div class="box">
      <div class="box1 float_left">Data Visualization</div>
      <div class="box3 float_left">Front End Development</div>
      <div class="box2 float_left">Website Development</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecializeIn',
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
.specializeIn {
  width: 100%;
  min-width: 1000px;
  height: 420px;
  padding-top: 20px;
  background-color: #1d4192;
}

.box {
  width: 1000px;
  margin: 0 auto;
}

.box1 {
  background: url("../assets/img/ui.png") no-repeat center top;
}

.box2 {
  background: url("../assets/img/web.png") no-repeat center top;
}

.box3 {
  background: url("../assets/img/fe.png") no-repeat center top;
}

.float_left {
  float: left;
  width: 330px;
  padding-top: 300px;
  text-align: center;
  font-weight: bold;
}
</style>
