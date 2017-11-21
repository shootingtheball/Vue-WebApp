<template>
 <div class="swiper" @click="show($event)">
    <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item"><img src="//upload.jianshu.io/admin_banners/web_images/3780/45a4ba215a108dade733475225c19ecfb0b2336a.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></swiper-slide>
    <swiper-slide class="swiper-item"><img src="//upload.jianshu.io/admin_banners/web_images/3781/72a1084547a464f3a9f9fe620705179f9007d870.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></swiper-slide>
    <swiper-slide class="swiper-item"><img src="//upload.jianshu.io/admin_banners/web_images/3783/88ed9fc1f2a1b134eabc6c625ce7429139370a06.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></swiper-slide>
    <swiper-slide class="swiper-item"><img src="//upload.jianshu.io/admin_banners/web_images/3679/595da283c527291bf78adae750cb429bf2a1c22d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
 </div>
</template>

<script>

export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          direction: 'horizontal',
          mousewheelControl: true,
          spaceBetween:0,
          autoplay:2000,
          autoplayDisableOnInteraction:false,
          loop : true
        }
      }
    },
    methods:{
      show(e){
        let src = e.target.getAttribute("src")
        this.$emit("show",src)
      }
    }
}
</script>

<style scoped>
  .swiper-item img{
      width: 100%
  }

</style>

