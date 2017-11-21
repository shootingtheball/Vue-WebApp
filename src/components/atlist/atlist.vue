<template>
  <transition name="move">
    <div class="atlist" v-show="showContent" ref="wrapper">
    <div class="atlistContent">
       <div class="content-list">
        <div class="content-item" v-for="item in navigationContent">
          <div class="pic"><img :src="whitchPic(item)" alt=""></div>
          <div class="words">
            <div class="title">{{whitchTitle(item)}}</div>
            <div class="desc">{{whitchDesc(item)}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="vheader"></div>
    <month @change="change"></month>
    <div class="back" @click="hide"><i class="fa fa-angle-left"></i></div>
  </div>
</transition>
</template>

<script>
  import BScroll from "better-scroll";
  import month from "../month/month";

  export default {
    data() {
      return{
        showContent:false,
        whitchMounth:0,
        newData:[]
      }
    },
    components:{
      month
    },
    props:{
      navigationContent:{
        type:Array
      },
      id:{
        type:String
      }
    },
    methods:{
      change(month){
        if(month){
        switch(this.id)
        {
          case "one":
          var url = "http://v3.wufazhuce.com:8000/api/hp/bymonth/2017-";
          url += month;
          break;
          case "two" :
          var url = "http://v3.wufazhuce.com:8000/api/question/bymonth/2017-";
          url += month;
          break;
          case "three" :
          var url = "http://v3.wufazhuce.com:8000/api/music/bymonth/2017-";
          url += month;
          break;
          case "four" :
          var url = "http://v3.wufazhuce.com:8000/api/hp/bymonth/2017-";
          url += month;
          break;
          case "five" :
          var url = "http://v3.wufazhuce.com:8000/api/essay/bymonth/2017-";
          url += month;
          break;
          case "six" :
          var url = "http://v3.wufazhuce.com:8000/api/music/bymonth/2017-";
          url += month;
          break;
          case "seven" :
          var url = "http://v3.wufazhuce.com:8000/api/essay/bymonth/2017-";
          url += month;
          break;
        }
          this.$http.get(url).then((res) => {
            this.navigationContent=res.body.data
          })
        }
      },
      whitchPic(item) {
        if(this.id==="one"){
          return item.hp_img_original_url
        }else if(this.id==="two"){
          return item.author_list[0].web_url
        }else if(this.id==="three"){
          return item.cover
        }else if(this.id==="four"){
          return item.hp_img_original_url
        }else if(this.id==="five"){
          return item.author[0].web_url
        }else if(this.id==="six"){
          return item.cover
        }else if(this.id==="seven"){
          return item.author[0].web_url
        }
      },
      whitchTitle(item) {
        if(this.id==="one"){
          return item.hp_content
        }else if(this.id==="two"){
          return item.question_title
        }else if(this.id==="three"){
          return item.story_title
        }else if(this.id==="four"){
          return item.hp_content
        }else if(this.id==="five"){
          return item.hp_title
        }else if(this.id==="six"){
          return item.story_title
        }else if(this.id==="seven"){
          return item.hp_title
        }
      },
      whitchDesc(item) {
        if(this.id==="one"){
          return item.hp_title
        }else if(this.id==="two"){
          return item.answer_content
        }else if(this.id==="three"){
          return item.author.user_name
        }else if(this.id==="four"){
          return item.hp_title
        }else if(this.id==="five"){
          return "文 / "+item.author_list[0].user_name
        }else if(this.id==="six"){
          return item.title
        }else if(this.id==="seven"){
          return "文 / "+item.author_list[0].user_name
        }
      },
      initScroll() {
        if (!this.scroll) {
         this.scroll = new BScroll(this.$refs.wrapper,{click:true})
       }
     },
      show() {
      this.showContent = true;
      this.$nextTick(() => {
      this.initScroll();
     })
    },
    hide() {
      this.showContent = false;
    }
  }
}
</script>

<style scoped>
  .move-enter-active,.move-leave-active{
    transition: all 0.1s;
  }
  .move-leave-to,.move-enter{
    transform: translate(100%)
  }
  .atlist{
    background: #fff;
    transition: all 1s;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 10
  }
  .atlistContent{
    margin-top: 82px;
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
  .back{
    position: fixed;
    z-index: 50;
    color: rgba(7, 17, 27, 0.6);
    font-size: 25px;
    padding: 8px;
    top: 4px;
    left: 5px
  }
  .content-item{
    height: 40px;
    border-bottom: 1px solid rgba(7,17,27,.1);
    text-align: left;
    padding: 10px 8px
  }
  .pic{
    width: 40px;
    height: 40px;
    float: left;
    margin-right: 10px;
    display: inline-block
  }
  .pic img{
    width: 100%;
    height: 100%;
  }
  .words{
    display: inline-block;
    width: 84%;
  }
  .desc{
    color: rgba(7,17,27,.6);
    font-size: 12px
  }
  .title,.desc{
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
</style>
