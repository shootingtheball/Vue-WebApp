<template>
  <div class="navigation">
    <div class="title">分类导航</div>
    <div class="content">
      <ul class="entry_list">
        <li class="entry_item" @click="showFirstContent($event)" ><img id="one" src="./1.jpg" alt=""><span>图文</span></li>
        <li class="entry_item" @click="showSecondContent($event)"><img id="two" src="./2.jpg" alt=""><span>问答</span></li>
        <li class="entry_item_3 entry_item" @click="showThirdContent($event)"><img id="three" src="./3.jpg" alt=""><span>电台</span></li>
      </ul>
      <ul class="entry_list">
        <li class="entry_item" @click="showFourthContent($event)"><img id="four" src="./4.jpg" alt=""><span>连载</span></li>
        <li class="entry_item" @click="showFifthContent($event)"><img id="five" src="./5.jpg" alt=""><span>影视</span></li>
        <li class="entry_item" @click="showThirdContent($event)"><img id="six" src="./6.jpg" alt=""><span>音乐</span></li>
        <li class="entry_item" @click="showSevenContent($event)"><img id="seven" src="./7.jpg" alt=""><span>阅读</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        whitchMounth:0
      }
    },
    methods:{
      choose(id){
        console.log(id)
        this.whitchMounth=id
      },
      showFirstContent(event) {
        let url = "http://v3.wufazhuce.com:8000/api/hp/bymonth/2017-11";
        this.$http.get(url).then((res) => {
          let data = res.body.data;
            var id = event.target.id;
            this.$emit("navigationClick",data,id)
        })  
      },
      showSecondContent(event) {
        let url = "http://v3.wufazhuce.com:8000/api/question/bymonth/2017-11";
        this.$http.get(url).then((res) => {
          let data = res.body.data;
          let id = event.target.id;
          this.$emit("navigationClick",data,id)
        })
      },
      showThirdContent(event) {
        let url = "http://v3.wufazhuce.com:8000/api/music/bymonth/2017-11";
        this.$http.get(url).then((res) => {
          let data = res.body.data;
          let id = event.target.id;
          this.$emit("navigationClick",data,id)
        })
      },
      showFourthContent(event) {
        let url = "http://v3.wufazhuce.com:8000/api/hp/bymonth/2017-11";
        this.$http.get(url).then((res) => {
          let data = res.body.data;
          let id = event.target.id;
          this.$emit("navigationClick",data,id)
        })
      },
      showFifthContent(event) {
        this.$http.get("http://v3.wufazhuce.com:8000/api/essay/bymonth/2017-11").then((res) => {
          let data = res.body.data;
          let id = event.target.id;
          this.$emit("navigationClick",data,id)
        })
      },
      showSevenContent(event) {
        this.$http.get("http://v3.wufazhuce.com:8000/api/essay/bymonth/2017-11").then((res) => {
         let data = res.body.data;
         let id = event.target.id;
         this.$emit("navigationClick",data,id)
       })
      }
    }
  }
</script>

<style scoped>
  
  .navigation{
    background: #fff;
    padding: 5px 15px 15px 15px;
  }
  .title{
    text-align: left;
    font-size: 13px;
    margin-bottom: 10px;
  }
  .entry_list{
    display: flex;
    font-size: 0;
  }
  .entry_list :last-child{
    margin-right: 0
  }
  .entry_item{
    position: relative;
    flex: 1 1 25%;
    list-style: none;
    margin:0 5px 5px 0
  }
  .entry_item span{
    position: absolute;
    width: 100%;
    bottom:6px;
    left: 0;
    color: #fff;
    font-size: 12px
  }
  .entry_item img{
    width: 100%;
    height: 100%;
  }
  .entry_item_3{
    flex:  1 1 51%;
  }
  .navigation::after{
    content: ".";
    clear: both;
    visibility: hidden;
    display: block;
    height: 0;
  }
</style>
