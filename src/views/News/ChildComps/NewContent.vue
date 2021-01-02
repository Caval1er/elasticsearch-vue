<template>
  <div>
  <div v-for="(item,index) in newList" :key="index">
    <new-content-item :newsData="item" class="new-content"></new-content-item>
  </div>
</div>
</template>

<script>
  import NewContentItem from './NewContentItem'
  export default {
  name: 'NewContent',
  data () {
    return {
    }
  },
  components:{
    NewContentItem
  },
  computed:{
    newList(){
      return this.$store.state.newsData.data||[];
    }
  }
}
</script>

<style scoped>
.new-content{
  margin: 20px 0 0 20px;
}
</style>
