<template>
  <div class="home-icon">
    <div v-for="item in iconList" :key="item.title" class="home-icon-item">
      <home-icon-item :data="item"></home-icon-item>
    </div>
  </div>
</template>

<script>
    import HomeIconItem from './HomeIconItem'
    import  {getIconList} from 'network/home'
    // import axios from 'axios'
  export default {
  name: 'HomeIcon',
  created() {
    getIconList().then(res=>{
      this.iconList=res.data.data;
    })
  },
  data () {
    return {
      iconList:[]
    }
  },
  components:{
    HomeIconItem
  }
}
</script>

<style scoped>
.home-icon{
  display: flex;
  width: 60%;
}
.home-icon-item{
  flex:1;
}
</style>
