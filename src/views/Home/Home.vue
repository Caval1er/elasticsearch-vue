<template>
  <div class="home">
    <home-nav-bar @changerouter="changeRouter" class="home-navbar"></home-nav-bar>
    <search :path="routerStatus" class="search" :searchStyle="{width:'800px'}"/>
    <HomeIcon class="home-icon"/>
    <home-back :backgrounds="backGroundList" class="back"></home-back>
  </div>
</template>

<script>
  import Search from 'components/common/Search'
  import HomeIcon from 'views/Home/ChildComps/HomeIcon'
  import HomeNavBar from 'views/Home/ChildComps/HomeNavBar'
  import HomeBack from 'views/Home/ChildComps/HomeBack'
  import {getBackList} from 'network/home'
  export default {
  name: 'Home',
  data () {
    return {
      backGroundList:[],
      routerStatus:"/news"
    }
  },
  created() {
    getBackList().then(res=>{
      this.backGroundList=res.data.backgroundList;
      console.log(res);
    })
  },
  methods: {
    changeRouter(path){
      console.log(path);
      this.routerStatus=path;
    }
  },
  components:{
    Search,
    HomeIcon,
    HomeNavBar,
    HomeBack
  }
}
</script>

<style scoped>
  .home{
    position: relative;
    max-width: 1620px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .home-icon{
    margin-top: 100px;
  }

  .back{
    position: absolute;
    bottom: 50px;
    right: 100px;
  }

  .home-navbar{
    margin-bottom: 30px;
  }
</style>
