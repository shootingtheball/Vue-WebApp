<template>
  <div class="slide">
      <div class="title">所有人问所有人</div>
      <div class="content" ref="BS">
      <div class="items">
          <div class="item1"><span class="image"><img src="./1.jpg" alt=""></span><span class="desc">梦想也会长大，不过是朝着童年的方向</span></div>
          <div class="item2"><span class="image"><img src="./2.jpg" alt=""></span><span class="desc">男女搭配，真的很累</span></div>
          <div class="item3"><span class="image"><img src="./3.jpg" alt=""></span><span class="desc">孤独万岁，失恋无罪</span></div>
      </div>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  created(){
      this.$nextTick(() => {
          this.initScroll()
      })
  },
  methods:{
      initScroll() {
          this.scroll = new BScroll(this.$refs.BS,{click:true,scrollX: true,scrollY:false})
      }
  }
}
</script>

<style scoped>
  .slide{
      margin-top: 8px;
      background: #fff;
      height: 150px;
      padding: 10px 18px 20px 18px;
      position: relative;
  }
  .title{
      text-align: left;
      font-size: 13px
  }
  .content {
      position: absolute;
      left: 18px;
      top: 40px;
      bottom: 35px;
      right: 15px;
  }
  .image{
      position: absolute;
      width: 100%;
      height: 119px;
      z-index: -1;
      left: 0;
  }
  .image img{
      width: 100%;
  }
  .items{
      font-size: 0;
      height: 119px;
      width: 620px
  }
  .item1,.item2{
      margin-right: 10px
  }
  .items>div{
      display: inline-block;
      width: 200px;
      height: 119px;
      position: relative;
      background: rgba(7,17,27,.5)
  }
  .desc{
      position: absolute;
      width: 80%;
      font-size: 14px;
      left: 50%;
      color: #fff;
      top: 50%;
      transform: translate(-50%,-50%);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
  }
</style>
