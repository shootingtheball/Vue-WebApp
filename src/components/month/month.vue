<template>
  <div class="month" @click="change($event)">
      <transition name="move">
      <div v-if="opposite">2017年{{text}}月</div>  
      <ul v-if="current">
          <li id="1">1月</li>
          <li id="2">2月</li>
          <li id="3">3月</li>
          <li id="4">4月</li>
          <li id="5">5月</li>
          <li id="6">6月</li>
          <li id="7">7月</li>
          <li id="8">8月</li>
          <li id="9">9月</li>
          <li id="10">10月</li>
          <li id="11">11月</li>
      </ul>
      </transition>
  </div>
</template>

<script>
  export default {
    data(){
      return {
          current:false,
          text:"11",
          opposite: true
      }
    },
    methods:{
      change(r) {
        this.current = !this.current;
        this.opposite= !this.opposite;
        this.$emit("change",r.target.id);
        this.text=r.target.id
      }
    }
  }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0
  }
  .move-enter-active,.leave-enter-active{
      transition:  all  2s
  }
  .move-enter,.move-leave{
      opacity: 0;
  }
  .month{
      background:#F2F2F2;
      height: 25px;
      line-height: 25px;
      position: absolute;
      z-index: 100;
      width: 100%;
      top: 57px
  }
  ul{
      font-size: 0;
      height: 25px;
      display: flex;
      justify-content: space-between;
      padding: 0 10px
  }
  li{
      list-style: none;
      height: 25px;
      font-size: 12px;
  }
  
</style>
