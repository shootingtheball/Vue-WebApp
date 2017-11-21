<template>
  <div class="login">
      <div class="main">
          <div class="icon"><i class="fa fa-sign-in"></i></div>
          <div class="button">点击登录</div>
      </div>
      <div class="cog"><i class="fa fa-cog"></i></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.login{
    background: linear-gradient(#363636,#8B636C,#EED5D2);
    position: fixed;
    top: 0;
    bottom: 41px;
    width: 100%
}
.main{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color:#fff;
}
.icon{
    font-size: 30px
}
.cog{
    color: #fff;
    position: absolute;
    font-size: 18px;
    left: 10px;
    top: 10px
}
</style>
