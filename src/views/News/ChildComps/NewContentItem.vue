<template>
  <div class="new-content">
    <div class="new-title">
      <a :href="newsData.url" target="_blank"><h2 v-html="newsData.title" class="new-h2"></h2></a>
    </div>
    <div class="new-main-content"><p v-html="newsData.summary" class="new-p"></p></div>
    <div class="foot-url">
      <a :href="newsData.url" target="_blank" class="news-a">{{newsData.url}}</a>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'NewContent',
  props:{
    newsData:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
      data:{}
    }
  }
}
</script>

<style scoped>
.a:hover{
  color: #315efb;
}
.new-title{
  margin-bottom: 10px;
}
.new-h2{
  font-size: 23px;
  line-height: 22px;
  color:#2440b3;
  /* margin: 0; */
}
.new-h2:hover{
  color: #315efb;
}
.new-p{
  font-size:16px;
  width: 600px;
  color: #333;
  margin-bottom: 2px;
  line-height: 18px;
  letter-spacing: 1px;
}
.news-a{
  font-size: 19px;
  color: #626675;
  font-family: Arial,sans-serif;
}
</style>
