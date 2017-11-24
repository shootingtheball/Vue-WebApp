<template>
  <div class="vfooter" @click="choose($event)">
    <router-link to="/onelist" class="one" :class="{add:isoneActive}"><i class="fa fa-circle-o icon"></i></router-link>
    <router-link to="/all" class="all" :class="{add:isallActive}"><i class="fa fa-th-large icon"></i></router-link>
    <router-link to="/login" class="me" :class="{add:ismeActive}"><i class="fa fa-user-o icon"></i></router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isoneActive:false,
      isallActive:false,
      ismeActive:false
    }
  },
  methods:{
    choose(event) { 
      this.isoneActive=false;
      this.isallActive=false;
      this.ismeActive=false;
      var target = event.target;
      if(target.className==="fa fa-circle-o"){
        this.isoneActive=true;
        console.log(this.isoneActive)
      }
    }
  }
}
</script>


<style scoped>
  .vfooter{
    position: fixed;
    z-index: 5;
    bottom: 0;
    height: 40px;
    width: 100%;
    background: #fff;
    border-top: 1px solid rgba(7, 17, 27, .1);
    display: flex;
    justify-content: space-around;
    line-height: 40px;
    font-size: 21px;
    
  }
  .icon{
    color: rgba(7, 17, 27, .6);
  }
  .add{
    color:red;
    font-size: 30px
  }

</style>
