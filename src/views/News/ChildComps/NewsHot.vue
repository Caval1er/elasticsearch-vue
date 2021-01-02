<template>
  <div class="news-hot-list">
    <template v-if="Show">
      <div class="news-hot-head" >
        <span class="news-hot-text">热搜</span>
        <div>
          <span class="news-hot-check" @click="checkHotList">换一换</span>
        </div>
      </div>
    </template>
    <ul>
      <li v-for="(item,index) in hotList" :key="index" class="hots">
        <div class="hot-main">
        <span class="hot-index">{{index+1+hIndex*10}}</span>
        <a :href="item.url" target="_blank" class="hot-a">{{item.title}}</a>
        </div>
        <span class="hot-number">{{item.number}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
  name: 'NewsHot',
  data () {
    return {
      hIndex:0,
      isShow:false
    }
  },
  computed:{
    hotList(){
      console.log(this.$store.state.newsData.data);
      return (!this.$store.state.newsData.data)? []:this.$store.state.newsData.data[this.$store.state.newsData.data.length-1].hotList.slice(this.hIndex*10,this.hIndex*10+10);
    },
    Show(){
      return this.$store.state.newsData.data
    }
  },
  methods: {
    checkHotList(){
      if(this.hIndex>=2){
        this.hIndex=0;
      }else{
        this.hIndex++;
      }
    }
  },
}
</script>

<style scoped>
.news-hot-head{
  display: flex;
  width: 335px;
  justify-content: space-between;
  margin-bottom: 10px;
}
.news-hot-check{
  cursor: pointer;
  font-size: 16px;
  color: #2440B3;
}
.news-hot-text{
  color: #222;
  font-size: 16px;
}
.hot-index{
  width: 18px;
  font-size: 15px;
  letter-spacing: -1px;
  margin-right: 8px;
}

.hots{
  display: flex;
 padding: 15px 0 15px 0;
}
.hot-main{
  width: 350px;
}
.hot-a{
  display: inline-block;
  font-size: 18px;
  color: #2440B3;
  /* width: 300px; */
}

.hot-a:hover{
  text-decoration: underline;
  color: #315EFB;
}

.hot-number{
  font-size: 18px;
}
</style>
