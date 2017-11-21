<template>
<transition name="show-search">
  <div class="search" v-if="show">
      <div class="title">
          <input type="text"><span @click="dismis">取消</span>
      </div>
      <div class="main">
          <ul>
              <li @click="one">图文</li>
              <li>问答</li>
              <li>阅读</li>
              <li>连载</li>
              <li>影视</li>
              <li>音乐</li>
              <li>电台</li>
          </ul>
      </div>
      <navigation v-if="false" ref="nav"></navigation>
  </div>
</transition>
</template>

<script>
import navigation from "../navigation/navigation";
import atlist from "../atlist/atlist";

export default {
  data() {
      return {
          show:false
      }
  },
  components:{
      navigation,atlist
  },
  methods :{
      showSearch() {
        this.show = true
      },
      dismis() {
        this.show = false
      },
      one() {
          this.$refs.nav.showFirstContent()
      }
  }
}
</script>

<style scoped>
.search{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    right: 0;
    background:#fff;
}
input{
    width: 70%;
    border-radius: 5px;
    border: 0;
    background: #E5E5E5;
    height: 27px;
}
.title{
    border-bottom: 1px solid rgba(7, 17, 27, .1) ;
    height: 40px;
    line-height: 40px;
    vertical-align: middle
}
.title span{
    vertical-align: middle;
    font-size: 13px;
    color: black;
    margin-left: 10px
}
.show-search-enter-active,.show-search-leave-active{
    transition: all .5s ease;
}
.show-search-leave-to,.show-search-enter{
    transform: translateY(100%)
}
ul{
    font-size: 14px;
    margin-top: 60px;
    color: rgba(7, 17, 27, .7)
}
li{
    height: 55px;
}
</style>
