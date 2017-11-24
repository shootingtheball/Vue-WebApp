<template>
<transition name="move">
<div class="detial" v-show="showContent">
  <div class="back" @click="hide"><i class="fa fa-angle-left"></i></div>
  <div class="head">ONE STORY</div>
  <div class="detial-wrapper" ref="pro" >
      <div class="detial-content">
          <div class="content">
              <p class="title"  v-if="content">{{whitchTitle}}</p>
              <p class="desc">文 / <span v-if="content.author||content.asker||content.story_author||content.count">{{whitchDesc}}</span></p>
              <div id="text" v-html="whitchText" ref="text"></div>
          </div>
      </div>
  </div>
  <div class="footer">
      <input type="text" placeholder="写一个评论..">
      <div class="fa fa-comment-o comment"><span>{{content.commentnum}}</span></div>
      <div class="fa fa-share sha"></div>
  </div>
</div>
</transition>
</template>


<script>
import BScroll from "better-scroll";
export default {
  data() {
      return{
          showContent:false,
          category1:""
      }
  },
  props:{
      content:{
          type:Object
      },
      category:{
          type:String
      }
  },
  computed:{
      whitchTitle() {
          if(this.category==="1"||this.category==="2"){
              return this.content.hp_title;
          }else if(this.category==="3"){
              return this.content.question_content
          }else if(this.category==="4"){
              return this.content.story_title
          }else if(this.category==="5"){
             return this.content.data[0].title
              return this.content.data[0].charge_edt
          }
      },
      whitchDesc() {
          if(this.category==="1"||this.category==="2"){
              return this.content.author[0].user_name
       }else if(this.category==="3"){
              return this.content.asker.user_name
       }else if(this.category==="4"){
             return this.content.story_author.user_name
       }else if(this.category==="5"){
             return this.content.data[0].user.user_name
       }
      },
      whitchText() {
          if(this.category==="1"||this.category==="2"){
              return this.content.hp_content
          }else if(this.category==="3"){
              return this.content.answer_content
          }else if(this.category==="4"){
              return this.content.story
          }else if(this.category==="5"){
              return this.content.data[0].content
          }
      }
  },
  methods:{
      show() {
          this.showContent = true;
          this.$nextTick(() => {
              this.scroll= new BScroll(this.$refs.pro,{click:true})
      })
      },
      hide() {
          this.showContent = false
      }
  }
}
</script>

<style scoped>
.move-enter-active,.move-leave-active{
    transition: all .3s ;
}
.move-leave-to,.move-enter{
    transform: translate(100%)
}
.detial{
    background: #fff;
    transition: all 1s;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10
}
.head{
    width: 100%;
    position: absolute;
    top: 0;
    height: 40px;
    padding: 8px 0;
    background: #fff;
    z-index: 6;
    font-weight: bold;
    line-height: 40px;
    font-size: 12px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
}
.detial-wrapper{
    left: 0;
    top: 57px;
    width: 100%;
    bottom: 40px;
    width: 100%;
    z-index: 4;
    position: absolute;
    background: #fff;
}
.detial-content{
    padding: 0 15px 0px 15px;
}
#text{
    text-align: justify;
    letter-spacing: 1px;
    line-height: 26px;
    font-size: 15px;
    margin: 33px 0;
}
.back{
    position: absolute;
    z-index: 50;
    color: rgba(7, 17, 27, 0.6);
    font-size: 25px;
    padding: 8px;
    top: 4px;
    left: 5px
}
.title{
    text-align: left;
    font-weight: 800;
    font-size: 23px;
    margin-top: 30px;
}
.desc{
    text-align: left;
    margin-top: 33px;
    font-size: 13px;
}
.footer{
    position: absolute;
    z-index: 7;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, .9);
    border-top: 1px solid rgba(7, 17, 27, .1);
    color: rgba(7, 17, 27, .7);
    display: flex;
    justify-content: space-around;
    line-height: 40px;
    font-size: 19px;
    align-items: center
}
.comment{
    position: relative;
}
.comment span{
    position: absolute;
    top:-10px;
    font-size: 10px;
}
.footer input{
    border-radius: 4px;
    border: 1px solid rgba(7, 17, 27, .3);
    width: 120px;
    height: 26px;
    margin-right: 40px
}
</style>