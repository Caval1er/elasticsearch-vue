<template>
  <div class="picture-content">
  <el-image v-for="url in pictureList"  :key="url.img" :src="url.img"  lazy></el-image>
</div>
</template>

<script>
  // import PictureItem from './PictureItem'
  export default {
  name: 'PictureContent',
  data () {
    return {
    
    }
  },
  computed:{
    pictureList(){
      return this.$store.state.pictureData.data||[]
    }
  },
  components:{
    // PictureItem
  }
}
</script>

<style scoped>
  .picture-content{
    overflow: auto;
    /* display: flex; */
  }
 /deep/ .el-image>img{
    height: 200px;
    width: auto;
  }

  .el-image{
    display: block;
    min-width: 100px;;
    min-height: 200px;
    margin-bottom: 10px;
    float: left;
  }
</style>
