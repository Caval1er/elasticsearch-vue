<template>
  <div class="news">
    <div>
      <img class="logo" src="~assets/img/logo.png" alt="">
    <search :path="routerStatus" class="search" :searchStyle="{width:'900px'}"/>
    <home-nav-bar @changerouter="changeRouter" class="home-navbar" :colorStyle="{color:'black'}"></home-nav-bar>
    <new-content class="news-content"></new-content>
    <news-page class="news-pagina"></news-page>
  </div>
    <news-hot class="news-hot-list"></news-hot>
  </div>
</template>

<script>
  import NewContent from './ChildComps/NewContent'
  import Search from 'components/common/Search'
  import HomeNavBar from 'views/Home/ChildComps/HomeNavBar'
  import NewsHot from 'views/News/ChildComps/NewsHot'
  import NewsPage from './ChildComps/NewsPage'
  export default {
  name: 'News',
  data () {
    return {
      routerStatus:"/news",
      isShow:false
    }
  },
  components:{
    NewContent,
    Search,
    HomeNavBar,
    NewsHot,
    NewsPage
  },
  methods: {
    changeRouter(path){
      console.log(path);
      this.routerStatus=path;
    },
  },
  destroyed() {
    this.$store.state.newsData=[];
  },
}
</script>

<style scoped>
  .logo{
    margin: 50px 0 0 300px;
  }
.search{
  margin-left: 150px;
  margin-top: 50px;
  width: 900px;
}
.news-content{
  margin-left: 150px;
  padding-bottom: 10px;
}

.news{
  display: flex;
  position: relative;
}
.news-hot-list{
  margin-left: 200px;
  margin-top: 300px;
  /* align-items: center; */
}

.news-pagina{
  width: 600px;
  margin-top: 30px;
  margin-left: 100px;
}
.home-navbar{
  margin-left: 120px;
  margin-top: 30px;
  margin-bottom: 50px;
  width: 900px;
}
</style>
