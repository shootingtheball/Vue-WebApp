<template>
  <div class="alllist">
      <div class="content-list" >
          <div v-for="listitem in alllist" class="list-item">
              <div class="list-header">{{listitem.title}}</div>
              <div class="img-header"><img :src="listitem.img_url" alt=""></div>
              <div class="list-forward">{{listitem.forward}}</div>        
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        alllist:{
            type:Array
        }
    }
}
</script>

<style scoped>
.alllist{
    margin-top: 8px;
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
.img-header img{
    width: 100%
}
.list-item{
    margin-bottom:8px;
    background: #fff;
    position: relative;
}
.list-item:last-child{
    margin-bottom:0;
    
}
.list-header{
    font-size:20px;
    color:rgb(0,0,0);
    text-align:left;
    padding: 10px 20px 10px 20px;
}
.list-desc{
    text-align: left;
    padding:0 20px;
    font-size: 14px;
}
.list-forward{
    font-size: 14px;
    padding:0 20px 28px 20px;
    text-align: left;
    text-align: justify;    
}
</style>
