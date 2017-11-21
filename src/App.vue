<template>
  <div id="app">
    <router-view/>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vheader from "./components/vheader/vheader";
import vfooter from "./components/vfooter/vfooter";
export default {
  name: 'app',
  data() {
    return{
      onelist:{}
    }
  },
  components:{
    vfooter
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: "PingFangSC-Light",sans-serif;
}
#app {
  text-align: center;
  color: #2c3e50;
}
body{
  position: relative;
}
</style>
