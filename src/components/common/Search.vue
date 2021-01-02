<template>
  <div class="search">
    <div class="se-icon">
     <img src="~assets/img/圣诞老人.svg" alt="santa" class="se-icon-img">
    </div>
    <input type="text" :value="$store.state.keyword" :style="searchStyle" class="se-input" placeholder="输入并搜索..." @input="updateKey">
    <div class="se-button">
      <button class="se-button-item" @click.prevent="changeView">搜索一下</button>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'Search',
  props:{
    path:{
      type:String,
      default:'/home'
    },
    searchStyle:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
      message:"",
      data:[]
    }
  },
  methods: {
    changeView(){
      if(this.$route.path!=this.path)
      {
      this.$router.push(this.path);
      }
      if(this.path.indexOf('/news')!==-1){
        this.$store.dispatch('agetNewsData',{key:this.$store.state.keyword,page:1});
        console.log(this.$store.state.keyword);
      }
      else if(this.path.indexOf('/picture')!==-1){
        this.$store.dispatch('agetPicturesData',{key:this.$store.state.keyword,page:1});
      }
    },
    updateKey($event){
      this.message=$event.target.value;
      this.$store.commit('updateKeyword',$event.target.value);
    }
  },
}
</script>

<style scoped>
  /* 整体布局 */
  .search{
    display: flex;
    position: relative;
    width:602px;
  }
  /* icon布局 */
  .se-icon{
    position: absolute;
    width: 60px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .se-icon:hover{
    background-color: rgba(0,0,0,.05);
    cursor: pointer;
  }
  .se-icon-img{
    height: 36px;
  }
  /* 输入框样式 */
  .se-input{
    box-sizing: border-box;
    height: 50px;
    border: none;
    box-shadow: 5px 5px 20px rgba(0,0,0,.06);
    padding: 10px 100px 10px 60px;
    background-color: #fff;
    outline:0;
    border-radius: 40px 40px 40px 40px;
  }
  .se-input:hover{
    box-shadow: 0 4px 5px rgba(32,33,36,.28);
    /* border-color: rgba(223,225,229,0); */
  }
  /* 搜索按钮样式 */
  .se-button{
    position: absolute;
    right: 0;
    height: 50px;
    /* box-sizing: border-box; */
  }
  .se-button-item{
    box-sizing: border-box;
    width:100px;
    height: 50px;
    border-radius:0 25px 25px 0;
    border: 0;
    padding: 0;
    background-color: #4e6ef2;
    color:#fff;
    outline: none;
  }
  .se-button-item:hover{
    background: #4662D9;
    cursor: pointer;
  }
</style>
