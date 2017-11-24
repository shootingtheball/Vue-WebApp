<template>
   <div class="onelist">
     <div class="vheader">
          <div class="date" v-if="onelist.weather">{{onelist.weather.date}}</div>
          <div class="detial" v-if="onelist.weather">
            <span class="city">{{onelist.weather.city_name}}</span>
            <span class="weather">{{onelist.weather.climate}}</span>
            <span class="temp">{{onelist.weather.wind_direction}}</span>
          </div>
     </div>
     <div class="onelist-wrapper" ref="BS">
      <div class="list-main">
        <div class="list-firse" v-if="onelist.content_list">
          <div class="listfirse-img"><img :src="onelist.content_list[0].img_url" alt=""></div>
          <div class="listfirse-line">{{onelist.content_list[0].title}} | {{onelist.content_list[0].pic_info}}</div>
          <div class="forward">
              <span>{{onelist.content_list[0].forward}}</span>
          </div>
          <div class="icon">
               <div>今天</div>
               <div class="fa fa-heart-o heart" ><span class="like-count">{{onelist.content_list[0].like_count}}</span></div>
               <div class="fa fa-share sha"></div>
          </div>
        </div>
        <div class="img-list">
          <div v-for="listitem in onelist.content_list" class="list-item" @click="showText(listitem)">
              <div class="list-type"  v-if="listitem.tag_list[0]">- {{listitem.tag_list[0].title}} -</div>
              <div class="list-header">{{listitem.title}}</div>
              <div class="list-desc">文/{{listitem.author.user_name}}</div>
              <div class="img-header"><img :src="listitem.img_url" alt=""></div>
              <div class="list-forward">{{listitem.forward}}</div>
              <div class="icon">
                <div>今天</div>
                <div class="fa fa-heart-o heart"><span class="like-count">{{listitem.like_count}}</span></div>
                <div class="fa fa-share sha"></div>
              </div>
          </div>
        </div>
       
       </div>
     </div>
     <detial :content="content" ref="content" :category="category"></detial>
   </div>
</template>

<script>
import detial from "../detial/detial";
import search from "../search/search";
import BScroll from "better-scroll";
export default {
  data() {
      return{
          content:{},
          onelist:{},
          category:"",
          show:false
      }
  },
  components:{
      detial
  },
  created() {
		this.$http.get("http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android").then((response) => {
        let res = response.body.data[0];
        return  res;
			}).then((res) => {
        let url ="http://v3.wufazhuce.com:8000/api/onelist/" +res+ "/0?cchannel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios";
        this.$http.get(url).then((resp) => {
          this.onelist = resp.body.data;    
          console.log(this.onelist);
          this.$nextTick(() => {
             this.initScroll();
          })
        })
      })
  },
  methods:{
      showText(listitem) {
          let item_id =listitem.item_id;
          var url="";
          if(listitem.category==="1"){
          this.category ="1"
          url = "http://v3.wufazhuce.com:8000/api/essay/" + item_id +"?channel=wdj&source=summary&source_id=9261&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios";
          }else if(listitem.category==="2"){
          this.category ="2"
          url = "http://v3.wufazhuce.com:8000/api/essay/" + item_id + "?channel=wdj&source=summary&source_id=9245&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios"    
          }else if(listitem.category==="3"){
          this.category ="3"
          url = "http://v3.wufazhuce.com:8000/api/question/" + item_id + "?channel=wdj&source=channel_reading&source_id=9254&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios"
          }else if(listitem.category==="4"){
          this.category ="4"
          url = "http://v3.wufazhuce.com:8000/api/music/detail/"+ item_id + "?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios"
          }else if(listitem.category==="5"){
          this.category ="5"
          url = "http://v3.wufazhuce.com:8000/api/movie/" + item_id + "/story/1/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios"
          }else{
          this.category ="1"
          url = "http://v3.wufazhuce.com:8000/api/essay/" + item_id +"?channel=wdj&source=summary&source_id=9261&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios";
          }
          this.$http.get(url).then((res) => {
              this.content = res.body.data;
              console.log(this.content);
              this.$refs.content.show();
          })
      },
      initScroll() {
          this.scroll = new BScroll(this.$refs.BS,{click:true})
      }
  }
}
</script>

<style scoped>
.onelist{
    position: relative;
}
.vheader{
    background: #fff;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    position: absolute;
    top: 0;
    width:100%;
    height: 40px;
    padding: 8px 0;
    z-index: 1;
}
.date{
    line-height: 28px;
    font-size: 14px;
    height: 28px;
}
.detial{
    font-size: 10px;
}
.search{
    color: rgba(7, 17, 27, .3);
    font-size: 18px;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translate(0,-50%)
}
.detial span{
    margin-right: 6px
}
.detial span:last-child{
    margin-right: 0
}
.onelist-wrapper{
    top: 57px;
    color:rgba(0, 0, 0, 0.6);
    background: #f6f6f6;
    position: fixed;
    width: 100%;
    bottom: 41px
}
.img-header img,.listfirse-img img{
    width: 100%
}
.listfirse-line{
    color: #808080;
    font-size: 10px
}
.img-list>div:first-child{
    display: none
}
.list-firse{
    position: relative;
    margin-bottom: 8px;
    background: #fff
}
.forward{
    padding: 30px 30px 58px 30px;
    font-size: 12px;
    text-align: left;
    position: relative;
    text-align: justify;
    line-height: 20px
}
.icon{
    position: absolute;
    bottom: 0;
    height: 20px;
    width: 100%;
    margin-bottom: 8px;
    font-size: 12px;
}
.icon div{
    display: inline-block
}
.icon div:first-child{
    position: absolute;
    left: 20px;
    height: 20px;
    line-height: 20px
}
.img-list{
    background: #f6f6f6;
    
}
.heart{
    position: absolute;
    right: 60px;
    height: 20px;
    line-height: 20px
}
.like-count{
    position: absolute;
    font-size: 9px;
    top:-9px
}
.sha{
    position: absolute;
    right: 20px;
    height: 20px;
    line-height: 20px
}
.list-item{
    margin-bottom:8px;
    background: #fff;
    position: relative;
}
.list-item:last-child{
    margin-bottom:0;
    
}
.list-type{
    font-size:12px;
    line-height:28px;
    position: absolute;
    left: 50%;
    transform: translate(-50%)
}
.img-header{
    padding:10px 20px;
}
.list-header{
    font-size:20px;
    color:rgb(0,0,0);
    text-align:left;
    padding: 35px 20px 10px 20px;
}
.list-desc{
    text-align: left;
    padding:0 20px;
    font-size: 14px;
}
.list-forward{
    font-size: 14px;
    padding:0 20px 58px 20px;
    text-align: left;
    text-align: justify;    
}
.detial-wrapper{
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
}
</style>