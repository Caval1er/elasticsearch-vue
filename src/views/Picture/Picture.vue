<template>
  <div class="picture">
    <img class="logo" src="~assets/img/logo.png" alt="">
    <search :path="routerStatus" class="search" :searchStyle="{width:'900px'}"></search>
    <home-nav-bar :colorStyle="{color:'black'}" @changerouter="changeRouter" class="home-nav"></home-nav-bar>
    <picture-content></picture-content>
  </div>
</template>

<script>
  import PictureContent from './ChildComps/PictureContent'
  import Search from 'components/common/Search'
  import HomeNavBar from 'views/Home/ChildComps/HomeNavBar'
  export default {
  name: 'Picture',
  data () {
    return {
      routerStatus:"/picture"
    }
  },
  components:{
    PictureContent,
    Search,
    HomeNavBar
  },
  methods: {
    changeRouter(path){
      console.log(path);
      this.routerStatus=path;
    }
  },
  destroyed() {
    this.$store.state.pictureData=[];
  },
}
</script>

<style scoped>
  .logo{
    position: absolute;
    left: 150px;
    top:20px;
  }
.picture{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search{
  margin: 40px 0 40px 0;
}

.home-nav{
  margin-bottom: 30px;
}
</style>
