<template>
  <div class="header" v-if="onelist">
      <div class="date" v-if="onelist.weather">{{onelist.weather.date}}</div>
      <div class="detial" v-if="onelist.weather">
          <span class="city">{{onelist.weather.city_name}}</span>
          <span class="weather">{{onelist.weather.climate}}</span>
          <span class="temp">{{onelist.weather.wind_direction}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return{
          onelist:{
       }
      }
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
        })
      })
  },
}
</script>

<style scoped>
.header{
    background: #fff;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    position: absolute;
    top: 0;
    width:100%;
    height: 40px;
    padding: 8px 0;
}
.date{
    line-height: 28px;
    font-size: 14px;
    height: 28px;
}
.detial{
    font-size: 6px;
}
.detial span{
    margin-right: 6px
}
.detial span:last-child{
    margin-right: 0
}
</style>
