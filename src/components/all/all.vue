<template>
 <div class="all">
  <div class="vheader" @click="showText">
    <span>创作你的创作</span>
    <div class="search"  @click="showSearch"><span class="fa fa-search"></span></div>
  </div>
  <transition name="show">
  <div class="blackmap" v-if="situation" ref="bgd" @click="dispear"></div>
  </transition>
  <transition name="showPic">
  <div class="blackmapPic" v-if="situation"><img :src="blackmapSrc"></div>
  </transition>
  <div class="all-main" ref="content">
   <div class="all-content" >
     <div class="swiperWrapper">
      <swiper  @show="blackmap"></swiper>
    </div>
    <navigation @navigationClick="showNavigation" :tail="tail" ref="nav"></navigation>
    <slide></slide>
    <alllist :alllist="alllist"></alllist>
   </div>
  </div>
  <search ref="showSearch2"></search>
  <atlist ref="list" :navigationContent="navigationContent" :id="id" @change="change"></atlist>
</div>

</template>

<script>
  import BScroll from "better-scroll";
  import swiper from "../swiper/swiper";
  import navigation from "../navigation/navigation";
  import alllist from "../alllist/alllist";
  import atlist from "../atlist/atlist";
  import slide from "../slide/slide";
  import search from "../search/search"

  export default {
    data() {
      return {
        alllist:[],
        navigationContent:[],
        id:"",
        tail:11,
        situation:false,
        blackmapSrc:"",
      }
    },
    components:{
      swiper,navigation,alllist,atlist,slide,search
    },
    created() {
      this.$http.get("http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios")
      .then((res) => {
        this.alllist = res.body.data
        console.log(this.alllist);
        this.$nextTick(() => {
          this.initScroll()
        })
      })
    },
    methods:{
      showSearch() {
        this.$refs.showSearch2.showSearch();
      },
      dispear(){
        this.situation =false
      },
      blackmap(src){
        this.situation = true;
        let wid = document.documentElement.clientWidth;
        let hei = document.documentElement.clientHeight;
        this.$nextTick(() => {
        let bgd = this.$refs.bgd;
        let str = "width:" + wid + "px;" + "height:" + hei + "px" ;
        bgd.setAttribute("style",str);
        this.blackmapSrc = src;
        })
      },
      change(month) {
        this.tail= month;
      },
      initScroll() {
        if (!this.scroll) {
         this.scroll = new BScroll(this.$refs.content,{click:true})
       }
     },
     showText() {
      this.$http.get("http://v3.wufazhuce.com:8000/api/hp/bymonth/2017-10").then((res) => {
      })
    },
    showNavigation(data,id) {
      this.navigationContent = data;
      this.id=id;
      this.$refs.list.show();
    }
  }
}
</script>

<style scoped>
  .all-main{
    position: fixed;
    bottom: 41px;
    top: 0;
    width: 100%;
    background: #E5E5E5;
  }
  .all{
    position: relative;
  }
  .show-enter-active,.show-leave-active{
    transition: all 0.4S
  }
  .show-enter,.show-leave-to{
    opacity: 0;
  }
 .showPic-enter-active{
   animation:showPic-in 1s
 }
 .showPic-leave-active{
   animation:showPic-in 1s reverse
 }
 @keyframes showPic-in {
  0% {
    transform: scale(0) translate(-20%);
  }
  50% {
    transform: scale(1.4) translate(-40%);
  }
  100% {
    transform: scale(1) translate(-50%);
  }
 }
  .vheader{
    background: #fff;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    position: fixed;
    top: 0;
    width:100%;
    height: 40px;
    padding: 8px 0;
    line-height: 40px;
    z-index: 5;
  }
  .search{
    color: rgba(7, 17, 27, .3);
    font-size: 18px;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translate(0,-50%)
  }
  .blackmap{
    position: absolute;
    background: rgba(7,17,27,.9);
    z-index: 100;
    top: 0px;
    bottom: 0
  }
  .blackmapPic img{
    width: 100%;
    margin-top: 57px
  }
  .blackmapPic{
    position: absolute;
    z-index: 100;
    width: 90%;
    left: 50%;
    transform: translate(-50%)
  }
  .swiperWrapper{
    margin-bottom: 4px;
    margin-top: 57px;
  }
</style>