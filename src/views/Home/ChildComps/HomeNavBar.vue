<template>
  <div class="home-navbar">
   <ul class="navbar-list">
     <li v-for="(item,index) in navbars" :key=item.name :style="colorStyle" class="navbar-list-item" :class="{'navbar-list-item-active':index==currentIndex}" @click="itemClick(index,item)">{{item.name}}</li>
   </ul>
  </div>
</template>

<script>
  export default {
  name: 'HomeNavBar',
  props:{
    colorStyle:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
      navbars:[{name:'网页',path:'/news'},{name:'图片',path:'/picture'},{name:'新闻',path:'/'},{name:'视频',path:'/'},{name:'地图',path:'/'}],
      currentIndex:0
    }
  },
  created() {
    this.currentIndex=this.$store.state.navStatus;
  },
  methods: {
    itemClick(index,item){
      this.$store.commit('updateNavStatus',index);
      this.currentIndex=this.$store.state.navStatus;
      this.$emit('changerouter',item.path);
    }
  },
}
</script>

<style scoped>
  .home-navbar{
    width: 602px;
  }
  .navbar-list{
    box-sizing: border-box;
    display: flex;
    list-style: none;
    padding-left: 60px;
    cursor: pointer;
  }
  .navbar-list-item{
    position: relative;
    flex:1;
    font-size: 17px;
    font-weight: 300;
    color: rgba(255,255,255,.65);
  }
  .navbar-list-item-active{
    color:rgba(255,255,255,.8);
  }
  .navbar-list-item-active::after{
    content: "";
    display: block;
    position: absolute;
    width: 34px;
    border-bottom: solid 2px rgba(255,77,78,.81);
    margin-top: 7px;
  }
</style>
